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


namespace app\adminapi\controller;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\DlCardConfigLists;
use app\adminapi\logic\DlCardConfigLogic;
use app\adminapi\validate\DlCardConfigValidate;
use app\common\model\UserName;


/**
 * DlCardConfig控制器
 * Class DlCardConfigController
 * @package app\adminapi\controller
 */
class DlCardConfigController extends BaseAdminController
{


    /**
     * @notes 获取列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 02:09
     */
    public function lists()
    {
        return $this->dataLists(new DlCardConfigLists());
    }


    /**
     * @notes 添加
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 02:09
     */
    public function add()
    {
        $params = (new DlCardConfigValidate())->post()->goCheck('add');
        $params['create_id'] = $this->adminUserId;
        $result = DlCardConfigLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(DlCardConfigLogic::getError());
    }

    public function userMoney(): \think\response\Json
    {
        $money = UserName::getUserMoney($this->adminUserId);
        return $this->success('获取成功',['money'=>$money]);
    }


    /**
     * @notes 编辑
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 02:09
     */
    public function edit()
    {
        $params = (new DlCardConfigValidate())->post()->goCheck('edit');
        $params['create_id'] = $this->adminUserId;
        $result = DlCardConfigLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(DlCardConfigLogic::getError());
    }


    /**
     * @notes 删除
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 02:09
     */
    public function delete()
    {
        $params = (new DlCardConfigValidate())->post()->goCheck('delete');
        DlCardConfigLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 02:09
     */
    public function detail()
    {
        $params = (new DlCardConfigValidate())->goCheck('detail');
        $result = DlCardConfigLogic::detail($params);
        return $this->data($result);
    }


}