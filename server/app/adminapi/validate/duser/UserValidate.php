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

namespace app\adminapi\validate\duser;


use app\common\validate\BaseValidate;


/**
 * users验证器
 * Class UserValidate
 * @package app\adminapi\validate\duser
 */
class UserValidate extends BaseValidate
{

     /**
      * 设置校验规则
      * @var string[]
      */
    protected $rule = [
        'id' => 'require',
        'sn' => 'require',
        'nickname' => 'require',
        'account' => 'require',
        'password' => 'require',
        'channel' => 'require',
        'is_disable' => 'require',
        'is_new_user' => 'require',
        'frozen_balance' => 'require',
        'login_status' => 'require',
    ];


    /**
     * 参数描述
     * @var string[]
     */
    protected $field = [
        'id' => 'id',
        'sn' => '编号',
        'nickname' => '用户昵称',
        'account' => '用户账号',
        'password' => '用户密码',
        'channel' => '注册渠道: [1-微信小程序 2-微信公众号 3-手机H5 4-电脑PC 5-苹果APP 6-安卓APP]',
        'is_disable' => '是否禁用: [0=否, 1=是]',
        'is_new_user' => '是否是新注册用户: [1-是, 0-否]',
        'frozen_balance' => '锁定余额',
        'login_status' => '登录状态 0-未在线 1-在线',
    ];


    /**
     * @notes 添加场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function sceneAdd()
    {
        return $this->only(['sn','nickname','account','password','channel','is_disable','is_new_user','frozen_balance','login_status']);
    }


    /**
     * @notes 编辑场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function sceneEdit()
    {
        return $this->only(['id','sn','nickname','account','password','channel','is_disable','is_new_user','frozen_balance','login_status']);
    }


    /**
     * @notes 删除场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function sceneDelete()
    {
        return $this->only(['id']);
    }


    /**
     * @notes 详情场景
     * @return UserValidate
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public function sceneDetail()
    {
        return $this->only(['id']);
    }

}