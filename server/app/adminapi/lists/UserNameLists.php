<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\adminapi\lists;


use app\adminapi\lists\BaseAdminDataLists;
use app\common\model\AgentSetUserLog;
use app\common\model\UserName;
use app\common\lists\ListsSearchInterface;


/**
 * UserName列表
 * Class UserNameLists
 * @package app\adminapi\lists
 */
class UserNameLists extends BaseAdminDataLists implements ListsSearchInterface
{


    /**
     * @notes 设置搜索条件
     * @return \string[][]
     * @author likeadmin
     * @date 2024/08/27 00:31
     */
    public function setSearch(): array
    {
        return [
            '=' => ['nickname', 'account'],
        ];
    }


    /**
     * @notes 获取列表
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author likeadmin
     * @date 2024/08/27 00:31
     */
    public function lists(): array
    {
        $data =  UserName::where($this->searchWhere)
            ->where('agent_id',$this->adminUserId)
            ->limit($this->limitOffset, $this->limitLength)
            ->order(['id' => 'desc'])
            ->select()
            ->toArray();
        foreach ($data as &$v){
            $v['all_yh'] = AgentSetUserLog::getLog($v['id'],1)??0;
            $v['all_fs'] = AgentSetUserLog::getLog($v['id'],2)??0;
        }
        return $data;
    }


    /**
     * @notes 获取数量
     * @return int
     * @author likeadmin
     * @date 2024/08/27 00:31
     */
    public function count(): int
    {
        return UserName::where($this->searchWhere)->where('agent_id',$this->adminUserId)->count();
    }

}