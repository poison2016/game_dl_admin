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
                <el-form-item label="类型" prop="type">
					<el-select
						  v-model="formData.type"
						  placeholder="请选择类型"
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
                <el-form-item label="真实姓名" prop="username">
    <el-input v-model="formData.username" clearable placeholder="请输入真实姓名" />
</el-form-item>
                <el-form-item label="开户银行" prop="ju_card">
    <el-input v-model="formData.ju_card" clearable placeholder="请输入开户银行" />
</el-form-item>
                <el-form-item label="卡号" prop="card">
    <el-input v-model="formData.card" clearable placeholder="请输入卡号" />
</el-form-item>
 <el-form-item label="开户地址" prop="address">
    <el-input v-model="formData.address" clearable placeholder="请输入开户地址" />
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="dlCardConfigEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiDlCardConfigAdd, apiDlCardConfigEdit, apiDlCardConfigDetail } from '@/api/dl_card_config'
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
    return mode.value == 'edit' ? '编辑代理提现配置' : '新增代理提现配置'
})

// 表单数据
const formData = reactive({
    id: '',
    type: '',
    username: '',
    ju_card: '',
    card: '',
	address:'',
})


// 表单验证
const formRules = reactive<any>({
    type: [{
        required: true,
        message: '请输入类型',
        trigger: ['blur']
    }],
	address: [{
	    required: true,
	    message: '请输入开户地址',
	    trigger: ['blur']
	}],
	username: [{
	    required: true,
	    message: '请输入真实姓名',
	    trigger: ['blur']
	}],
	ju_card: [{
	    required: true,
	    message: '请输入开户银行',
	    trigger: ['blur']
	}],
	card: [{
	    required: true,
	    message: '请输入卡号',
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
    const data = await apiDlCardConfigDetail({
        id: row.id
    })
    setFormData(data)
}

const options = [
  {
    value: 1,
    label: '银行卡',
  },
  {
    value: 10,
    label: '信用卡',
  },
]


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiDlCardConfigEdit(data) 
        : await apiDlCardConfigAdd(data)
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
