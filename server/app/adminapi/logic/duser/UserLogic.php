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

namespace app\adminapi\logic\duser;


use app\common\model\duser\User;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * users逻辑
 * Class UserLogic
 * @package app\adminapi\logic\duser
 */
class UserLogic extends BaseLogic
{


    /**
     * @notes 添加users
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            User::create([
                'sn' => $params['sn'],
                'avatar' => $params['avatar'],
                'real_name' => $params['real_name'],
                'nickname' => $params['nickname'],
                'account' => $params['account'],
                'password' => $params['password'],
                'mobile' => $params['mobile'],
                'channel' => $params['channel'],
                'is_disable' => $params['is_disable'],
                'login_ip' => $params['login_ip'],
                'login_time' => $params['login_time'],
                'is_new_user' => $params['is_new_user'],
                'user_money' => $params['user_money'],
                'total_recharge_amount' => $params['total_recharge_amount'],
                'frozen_balance' => $params['frozen_balance'],
                'login_status' => $params['login_status'],
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 编辑users
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        try {
            User::where('id', $params['id'])->update([
                'sn' => $params['sn'],
                'avatar' => $params['avatar'],
                'real_name' => $params['real_name'],
                'nickname' => $params['nickname'],
                'account' => $params['account'],
                'password' => $params['password'],
                'mobile' => $params['mobile'],
                'channel' => $params['channel'],
                'is_disable' => $params['is_disable'],
                'login_ip' => $params['login_ip'],
                'login_time' => $params['login_time'],
                'is_new_user' => $params['is_new_user'],
                'user_money' => $params['user_money'],
                'total_recharge_amount' => $params['total_recharge_amount'],
                'frozen_balance' => $params['frozen_balance'],
                'login_status' => $params['login_status'],
            ]);

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除users
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public static function delete(array $params): bool
    {
        return User::destroy($params['id']);
    }


    /**
     * @notes 获取users详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/27 00:24
     */
    public static function detail($params): array
    {
        return User::findOrEmpty($params['id'])->toArray();
    }
}