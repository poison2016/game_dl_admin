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
		            <el-form-item label="账户余额"  prop="user_money">
						<el-input v-model="formData.user_money" disabled clearable placeholder="0" />
		</el-form-item>
                <el-form-item label="金额" prop="money">
    <el-input v-model="formData.money" clearable placeholder="请输入金额" />
</el-form-item>
                <el-form-item label="类型" prop="type">
					<el-select
					      v-model="formData.type"
					      placeholder="请选择提现类型"
					      size="large"
					      style="width: 240px"
						  @change="getStoreListData()"
					    >
					      <el-option
					        v-for="item in options"
					        :key="item.value"
					        :label="item.label"
					        :value="item.value"
					      />
					    </el-select>
</el-form-item>
                <el-form-item label="取款密码" prop="password">
                    <el-input v-model="formData.password" clearable placeholder="请输入取款密码" />
                </el-form-item>
          
                <el-form-item label="取款账号" prop="address">
					<el-select
					  v-model="formData.address"
					  placeholder="请选择取款账号"
					  style="width: 240px"
					>
					  <el-option
					    v-for="item in storeLIsts"
					    :key="item.id"
					    :label="item.card"
					    :value="item.card"
					  />
					</el-select>
</el-form-item>
            </el-form>
        </popup>
    </div>
</template>

<script lang="ts" setup name="dlTxEdit">
import type { FormInstance } from 'element-plus'
import Popup from '@/components/popup/index.vue'
import { apiDlTxAdd, apiDlTxEdit, apiDlTxDetail } from '@/api/dl_tx'
import { timeFormat } from '@/utils/util'
import { apiDlCardConfigLists,apiDlCardConfigDetailUserMoeney } from '@/api/dl_card_config'
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
    return mode.value == 'edit' ? '编辑代理商提现表' : '新增代理商提现表'
})
const storeLIsts = ref([] as any[])
// 表单数据
const formData = reactive({
    id: '',
    money: '',
    type: '',
    status: '',
    message: '',
    address: '',
	user_money:0,
	password:'',
})

const options = [
  {
    value: 1,
    label: '银行卡',
  },
  {
    value: 10,
    label: '信用卡',
  },
  {
    value: 8,
    label: 'TRC20',
  },
  {
    value: 9,
    label: 'ERC20',
  },
  {
    value: 3,
    label: 'EBpay提币',
  },
  {
    value: 4,
    label: 'KOIpay提币',
  },
  {
    value: 5,
    label: '支付宝',
  },
  {
    value: 6,
    label: '微信',
  },
  {
    value: 7,
    label: '其他',
  },
  
  
]

async function getStoreListData() {
	let type = formData.type
	if(type){
		const res = await apiDlCardConfigLists({page_no: 1, page_size: 50, type: [type]})
		  storeLIsts.value = res.lists
	} }

async function getStoreListDatas() {
		const res = await apiDlCardConfigDetailUserMoeney({})
		  formData.user_money = res.money
}
getStoreListDatas()


// 表单验证
const formRules = reactive<any>({
    money: [{
        required: true,
        message: '请输入金额',
        trigger: ['blur']
    }],
    type: [{
        required: true,
        message: '请输入类型',
        trigger: ['blur']
    }],

    address: [{
        required: true,
        message: '请输入地址',
        trigger: ['blur']
    }],
	password: [{
	    required: true,
	    message: '请输入取款密码',
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
    
    //@ts-ignore
    formData.update_time = timeFormat(formData.update_time,'yyyy-mm-dd hh:MM:ss') 
}

const getDetail = async (row: Record<string, any>) => {
    const data = await apiDlTxDetail({
        id: row.id
    })
    setFormData(data)
}


// 提交按钮
const handleSubmit = async () => {
    await formRef.value?.validate()
    const data = { ...formData,  }
    mode.value == 'edit' 
        ? await apiDlTxEdit(data) 
        : await apiDlTxAdd(data)
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
