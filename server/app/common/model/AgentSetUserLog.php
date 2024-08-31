<?php

namespace app\common\model;

use think\Model;

class AgentSetUserLog extends BaseModel
{
    protected $table = 'la_agent_set_user_log';


    /**获取类型中金额
     * @param $userId
     * @param $type
     * @return float
     */
    public static function getLog($userId,$type,$jk = 1){
        return self::where(['user_id'=>$userId,'is_jk'=>$jk,'jk_type'=>$type])->sum('moneys')??0;
    }
}