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


namespace app\adminapi\controller\duser;


use app\adminapi\controller\BaseAdminController;
use app\adminapi\lists\duser\UserLists;
use app\adminapi\logic\duser\UserLogic;
use app\adminapi\validate\duser\UserValidate;


/**
 * users控制器
 * Class UserController
 * @package app\adminapi\controller\duser
 */
class UserController extends BaseAdminController
{


    /**
     * @notes 获取users列表
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function lists()
    {
        return $this->dataLists(new UserLists());
    }


    /**
     * @notes 添加users
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function add()
    {
        $params = (new UserValidate())->post()->goCheck('add');
        $result = UserLogic::add($params);
        if (true === $result) {
            return $this->success('添加成功', [], 1, 1);
        }
        return $this->fail(UserLogic::getError());
    }


    /**
     * @notes 编辑users
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function edit()
    {
        $params = (new UserValidate())->post()->goCheck('edit');
        $result = UserLogic::edit($params);
        if (true === $result) {
            return $this->success('编辑成功', [], 1, 1);
        }
        return $this->fail(UserLogic::getError());
    }


    /**
     * @notes 删除users
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function delete()
    {
        $params = (new UserValidate())->post()->goCheck('delete');
        UserLogic::delete($params);
        return $this->success('删除成功', [], 1, 1);
    }


    /**
     * @notes 获取users详情
     * @return \think\response\Json
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function detail()
    {
        $params = (new UserValidate())->goCheck('detail');
        $result = UserLogic::detail($params);
        return $this->data($result);
    }


}