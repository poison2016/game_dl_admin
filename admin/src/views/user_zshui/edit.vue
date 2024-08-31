<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="70%"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
           
                <el-form-item label="会员账号" prop="account">
    <el-input v-model="formData.account" disabled clearable placeholder="请输入会员账号" />
</el-form-item>
             
                <el-form-item label="会员余额" prop="user_money">
    <el-input v-model="formData.user_money" disabled clearable placeholder="请输入会员余额" />
</el-form-item>
			<el-form-item label="加/扣款" prop="is_jk">
				<el-select
				      v-model="formData.is_jk"
				      placeholder="请选择加/扣款"
				      size="large"
				      style="width: 240px"
				    >
				      <el-option
				        v-for="item in options"
				        :key="item.value"
				        :label="item.label"
				        :value="item.value"
				      />
				    </el-select>
			</el-form-item>
			<el-form-item label="操作金额" prop="moneys">
			    <el-input v-model="formData.moneys"  clearable placeholder="请输入操作金额" />
			</el-form-item>
			
			<el-form-item label="类型" prop="jk_type">
				<el-select
				      v-model="formData.jk_type"
				      placeholder="请选择加/扣款类型"
				      size="large"
				      style="width: 240px"
				    >
				      <el-option
				        v-for="item in optionss"
				        :key="item.value"
				        :label="item.label"
				        :value="item.value"
				      />
				    </el-select>
			</el-form-item>
               <el-form-item label="原因" prop="message">
                   <el-input v-model="formData.message"  clearable placeholder="请输入原因" />
               </el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userNameEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserNameAdd, apiUserNameEdit, apiUserNameDetail } from '@/api/user_name'
import { timeFormat } from '@/utils/util'
import type { PropType } from 'vue'
defineProps({
    dictData: {
        type: Object as PropType<Record<string, any[]>>,
        default: () => ({})
    }
})
const emit = defineEmits(['success', 'close'])
const formRef = shallowRef<FormInstance>()
const popupRef = shallowRef<InstanceType<typeof Popup>>()
const mode = ref('add')


// 弹窗标题
const popupTitle = computed(() => {
    return mode.value == 'edit' ? '会员加款/扣款' : '新增用户表'
})

// 表单数据
const formData = reactive({
    id: '',
    sn: '',
    avatar: '',
    real_name: '',
    nickname: '',
    account: '',
    password: '',
    mobile: '',
    sex: '',
    channel: '',
    is_disable: '',
    login_ip: '',
    login_time: '',
    is_new_user: '',
    user_money: 0,
    total_recharge_amount: '',
    frozen_balance: '',
    level_id: '',
    login_status: '',
    agent_id: '',
    email: '',
    is_agent: '',
	is_jk:1,
	moneys:'',
	jk_type:'',
	message:'',
})

const options = [
  {
    value: 1,
    label: '加款',
  },
  {
    value: 2,
    label: '扣款',
  },
 
]

const optionss = [
  {
    value: 1,
    label: '优惠活动',
  },
  {
    value: 2,
    label: '游戏返水',
  },
  {
    value: 3,
    label: '活动相关',
  },
  {
    value: 4,
    label: '补贴活动',
  },
  {
    value: 5,
    label: '其他情况',
  },
 
]


// 表单验证
const formRules = reactive<any>({
    sn: [{
        required: true,
        message: '请输入编号',
        trigger: ['blur']
    }],
    nickname: [{
        required: true,
        message: '请输入用户昵称',
        trigger: ['blur']
    }],
    account: [{
        required: true,
        message: '请输入用户账号',
        trigger: ['blur']
    }],
    password: [{
        required: true,
        message: '请输入用户密码',
        trigger: ['blur']
    }],
    channel: [{
        required: true,
        message: '请输入注册渠道: [1-微信小程序 2-微信公众号 3-手机H5 4-电脑PC 5-苹果APP 6-安卓APP]',
        trigger: ['blur']
    }],
    is_disable: [{
        required: true,
        message: '请输入是否禁用: [0=否, 1=是]',
        trigger: ['blur']
    }],
    is_new_user: [{
        required: true,
        message: '请输入是否是新注册用户: [1-是, 0-否]',
        trigger: ['blur']
    }],
    frozen_balance: [{
        required: true,
        message: '请输入锁定余额',
        trigger: ['blur']
    }],
    level_id: [{
        required: true,
        message: '请输入VIP等级',
        trigger: ['blur']
    }],
    login_status: [{
        required: true,
        message: '请输入登录状态 0-未在线 1-在线',
        trigger: ['blur']
    }],
    agent_id: [{
        required: true,
        message: '请输入代理id',
        trigger: ['blur']
    }],
    is_agent: [{
        required: true,
        message: '请输入是否为代理',
        trigger: ['blur']
    }],
})


// 获取详情
const setFormData = async (data: Record<any, any>) => {
    for (const key in formData) {
        if (data[key] != null && data[key] != undefined) {
            //@ts-ignore
            formData[key] = data[key]
        }
    }
    
    
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiUserNameDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserNameEdit(data) 
        : await apiUserNameAdd(data)
    popupRef.value?.close()
    emit('success')
}

//打开弹窗
const open = (type = 'add') => {
    mode.value = type
    popupRef.value?.open()
}

// 关闭回调
const handleClose = () => {
    emit('close')
}



defineExpose({
    open,
    setFormData,
    getDetail
})
</script>
