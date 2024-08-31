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

namespace app\adminapi\logic;


use app\common\model\UserAccountLogModel;
use app\common\model\UserName;
use app\common\model\AgentSetUserLog;
use app\common\logic\BaseLogic;
use think\facade\Db;


/**
 * UserName逻辑
 * Class UserNameLogic
 * @package app\adminapi\logic
 */
class UserNameLogic extends BaseLogic
{


    /**
     * @notes 添加
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/27 00:31
     */
    public static function add(array $params): bool
    {
        Db::startTrans();
        try {
            UserName::create([
                'sn' => $params['sn'],
                'avatar' => $params['avatar'],
                'real_name' => $params['real_name'],
                'nickname' => $params['nickname'],
                'account' => $params['account'],
                'password' => $params['password'],
                'mobile' => $params['mobile'],
                'sex' => $params['sex'],
                'channel' => $params['channel'],
                'is_disable' => $params['is_disable'],
                'login_ip' => $params['login_ip'],
                'login_time' => $params['login_time'],
                'is_new_user' => $params['is_new_user'],
                'user_money' => $params['user_money'],
                'total_recharge_amount' => $params['total_recharge_amount'],
                'frozen_balance' => $params['frozen_balance'],
                'level_id' => $params['level_id'],
                'login_status' => $params['login_status'],
                'agent_id' => $params['agent_id'],
                'email' => $params['email'],
                'is_agent' => $params['is_agent'],
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
     * @notes 编辑
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/27 00:31
     */
    public static function edit(array $params): bool
    {
        Db::startTrans();
        //判断类型
        $payMoney = $userMoney = UserName::getUserMoney($params['id']);

        if($params['is_jk'] == 1){//增加
            //判断管理员的余额是否足够
            $payMoney = UserName::getUserMoney($params['admin_user_id']);
        }
        if($payMoney < $params['moneys']){
            Db::rollback();
             self::setError('余额不足');
             return false;
        }
        try {
            $res1 = AgentSetUserLog::create([
                'user_id'=>$params['id'],
                'agent_id'=>$params['admin_user_id'],
                'is_jk'=>$params['is_jk'],
                'moneys'=>$params['moneys'],
                'jk_type'=>$params['jk_type'],
                'message'=>$params['message'],
                'create_time'=>time(),
            ]);
            if(!$res1){
                Db::rollback();
                self::setError('写入日志失败');
                return false;
            }
            if($params['is_jk'] == 1){//增加用户余额 降低管理员余额
                $res2 = UserName::setDecMoney($params['admin_user_id'],$params['moneys']);
                $res3 = UserName::setIncMoney($params['id'],$params['moneys']);
                if(!$res2 || !$res3){
                    Db::rollback();
                    self::setError('操作失败 编号：10023');
                    return false;
                }
                //写入用户记录表
                UserAccountLogModel::insetLog([
                    'sn'=>date('YmdHis',time()).rand(1000,9999),
                    'user_id'=>$params['id'],
                    'action'=>1,
                    'change_amount'=>$params['moneys'],
                    'left_amount'=>$params['moneys'] + $userMoney,
                    'source_sn'=>'',
                    'change_object'=>1,
                    'change_type'=>1,
                    'remark'=>$params['message'],
                    'create_time'=>time(),
                    'update_time'=>time()
                ]);
            }else{
                $res2 = UserName::setDecMoney($params['id'],$params['moneys']);
                $res3 = UserName::setIncMoney($params['admin_user_id'],$params['moneys']);
                if(!$res2 || !$res3){
                    Db::rollback();
                    self::setError('操作失败 编号：10023');
                    return false;
                }
                //写入用户记录表
                UserAccountLogModel::insetLog([
                    'sn'=>date('YmdHis',time()).rand(1000,9999),
                    'user_id'=>$params['id'],
                    'action'=>2,
                    'change_amount'=>$params['moneys'],
                    'left_amount'=>$userMoney - $params['moneys'],
                    'change_object'=>2,
                    'change_type'=>2,
                    'source_sn'=>'',
                    'remark'=>$params['message'],
                    'create_time'=>time(),
                    'update_time'=>time()
                ]);
            }

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            self::setError($e->getMessage());
            return false;
        }
    }


    /**
     * @notes 删除
     * @param array $params
     * @return bool
     * @author likeadmin
     * @date 2024/08/27 00:31
     */
    public static function delete(array $params): bool
    {
        return UserName::destroy($params['id']);
    }


    /**
     * @notes 获取详情
     * @param $params
     * @return array
     * @author likeadmin
     * @date 2024/08/27 00:31
     */
    public static function detail($params): array
    {
        return UserName::findOrEmpty($params['id'])->toArray();
    }
}