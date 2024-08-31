<template>
    <div class="edit-popup">
        <popup
            ref="popupRef"
            :title="popupTitle"
            :async="true"
            width="550px"
            @confirm="handleSubmit"
            @close="handleClose"
        >
            <el-form ref="formRef" :model="formData" label-width="90px" :rules="formRules">
                <el-form-item label="编号" prop="sn">
    <el-input v-model="formData.sn" clearable placeholder="请输入编号" />
</el-form-item>
                <el-form-item label="头像" prop="avatar">
    <el-input v-model="formData.avatar" clearable placeholder="请输入头像" />
</el-form-item>
                <el-form-item label="真实姓名" prop="real_name">
    <el-input v-model="formData.real_name" clearable placeholder="请输入真实姓名" />
</el-form-item>
                <el-form-item label="用户昵称" prop="nickname">
    <el-input v-model="formData.nickname" clearable placeholder="请输入用户昵称" />
</el-form-item>
                <el-form-item label="用户账号" prop="account">
    <el-input v-model="formData.account" clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item label="用户密码" prop="password">
    <el-input v-model="formData.password" clearable placeholder="请输入用户密码" />
</el-form-item>
                <el-form-item label="用户电话" prop="mobile">
    <el-input v-model="formData.mobile" clearable placeholder="请输入用户电话" />
</el-form-item>
                <el-form-item label="注册渠道: [1-微信小程序 2-微信公众号 3-手机H5 4-电脑PC 5-苹果APP 6-安卓APP]" prop="channel">
    <el-input v-model="formData.channel" clearable placeholder="请输入注册渠道: [1-微信小程序 2-微信公众号 3-手机H5 4-电脑PC 5-苹果APP 6-安卓APP]" />
</el-form-item>
                <el-form-item label="是否禁用: [0=否, 1=是]" prop="is_disable">
    <el-input v-model="formData.is_disable" clearable placeholder="请输入是否禁用: [0=否, 1=是]" />
</el-form-item>
                <el-form-item label="最后登录IP" prop="login_ip">
    <el-input v-model="formData.login_ip" clearable placeholder="请输入最后登录IP" />
</el-form-item>
                <el-form-item label="最后登录时间" prop="login_time">
    <el-input v-model="formData.login_time" clearable placeholder="请输入最后登录时间" />
</el-form-item>
                <el-form-item label="是否是新注册用户: [1-是, 0-否]" prop="is_new_user">
    <el-input v-model="formData.is_new_user" clearable placeholder="请输入是否是新注册用户: [1-是, 0-否]" />
</el-form-item>
                <el-form-item label="用户余额" prop="user_money">
    <el-input v-model="formData.user_money" clearable placeholder="请输入用户余额" />
</el-form-item>
                <el-form-item label="累计充值" prop="total_recharge_amount">
    <el-input v-model="formData.total_recharge_amount" clearable placeholder="请输入累计充值" />
</el-form-item>
                <el-form-item label="锁定余额" prop="frozen_balance">
    <el-input v-model="formData.frozen_balance" clearable placeholder="请输入锁定余额" />
</el-form-item>
                <el-form-item label="登录状态 0-未在线 1-在线" prop="login_status">
    <el-input v-model="formData.login_status" clearable placeholder="请输入登录状态 0-未在线 1-在线" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="userEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiUserAdd, apiUserEdit, apiUserDetail } from '@/api/users'
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
    return mode.value == 'edit' ? '编辑用户表' : '新增用户表'
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
    channel: '',
    is_disable: '',
    login_ip: '',
    login_time: '',
    is_new_user: '',
    user_money: '',
    total_recharge_amount: '',
    frozen_balance: '',
    login_status: '',
})


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
    login_status: [{
        required: true,
        message: '请输入登录状态 0-未在线 1-在线',
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
    const data = await apiUserDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiUserEdit(data) 
        : await apiUserAdd(data)
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
