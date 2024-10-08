<template>
    <div>
        <el-card class="!border-none mb-4" shadow="never">
            <el-form
                class="mb-[-16px]"
                :model="queryParams"
                inline
            >
                <el-form-item label="用户昵称" prop="nickname">
    <el-input class="w-[280px]" v-model="queryParams.nickname" clearable placeholder="请输入用户昵称" />
</el-form-item>
                <el-form-item label="用户账号" prop="account">
    <el-input class="w-[280px]" v-model="queryParams.account" clearable placeholder="请输入用户账号" />
</el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetPage">查询</el-button>
                    <el-button @click="resetParams">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <el-card class="!border-none" v-loading="pager.loading" shadow="never">
            <el-button v-perms="['duser.user/add']" type="primary" @click="handleAdd">
                <template #icon>
                    <icon name="el-icon-Plus" />
                </template>
                新增
            </el-button>
            <el-button
                v-perms="['duser.user/delete']"
                :disabled="!selectData.length"
                @click="handleDelete(selectData)"
            >
                删除
            </el-button>
            <div class="mt-4">
                <el-table :data="pager.lists" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    <el-table-column label="主键" prop="id" show-overflow-tooltip />
                    <el-table-column label="编号" prop="sn" show-overflow-tooltip />
                    <el-table-column label="头像" prop="avatar" show-overflow-tooltip />
                    <el-table-column label="用户昵称" prop="nickname" show-overflow-tooltip />
                    <el-table-column label="用户账号" prop="account" show-overflow-tooltip />
                    <el-table-column label="用户电话" prop="mobile" show-overflow-tooltip />
                    <el-table-column label="是否禁用: [0=否, 1=是]" prop="is_disable" show-overflow-tooltip />
                    <el-table-column label="最后登录IP" prop="login_ip" show-overflow-tooltip />
                    <el-table-column label="最后登录时间" prop="login_time" show-overflow-tooltip />
                    <el-table-column label="是否是新注册用户: [1-是, 0-否]" prop="is_new_user" show-overflow-tooltip />
                    <el-table-column label="用户余额" prop="user_money" show-overflow-tooltip />
                    <el-table-column label="累计充值" prop="total_recharge_amount" show-overflow-tooltip />
                    <el-table-column label="锁定余额" prop="frozen_balance" show-overflow-tooltip />
                    <el-table-column label="登录状态 0-未在线 1-在线" prop="login_status" show-overflow-tooltip />
                    <el-table-column label="操作" width="120" fixed="right">
                        <template #default="{ row }">
                             <el-button
                                v-perms="['duser.user/edit']"
                                type="primary"
                                link
                                @click="handleEdit(row)"
                            >
                                编辑
                            </el-button>
                            <el-button
                                v-perms="['duser.user/delete']"
                                type="danger"
                                link
                                @click="handleDelete(row.id)"
                            >
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="flex mt-4 justify-end">
                <pagination v-model="pager" @change="getLists" />
            </div>
        </el-card>
        <edit-popup v-if="showEdit" ref="editRef" :dict-data="dictData" @success="getLists" @close="showEdit = false" />
    </div>
</template>

<script lang="ts" setup name="userLists">
import { usePaging } from '@/hooks/usePaging'
import { useDictData } from '@/hooks/useDictOptions'
import { apiUserLists, apiUserDelete } from '@/api/users'
import { timeFormat } from '@/utils/util'
import feedback from '@/utils/feedback'
import EditPopup from './edit.vue'

const editRef = shallowRef<InstanceType<typeof EditPopup>>()
// 是否显示编辑框
const showEdit = ref(false)


// 查询条件
const queryParams = reactive({
    nickname: '',
    account: '',
})

// 选中数据
const selectData = ref<any[]>([])

// 表格选择后回调事件
const handleSelectionChange = (val: any[]) => {
    selectData.value = val.map(({ id }) => id)
}

// 获取字典数据
const { dictData } = useDictData('')

// 分页相关
const { pager, getLists, resetParams, resetPage } = usePaging({
    fetchFun: apiUserLists,
    params: queryParams
})

// 添加
const handleAdd = async () => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('add')
}

// 编辑
const handleEdit = async (data: any) => {
    showEdit.value = true
    await nextTick()
    editRef.value?.open('edit')
    editRef.value?.setFormData(data)
}

// 删除
const handleDelete = async (id: number | any[]) => {
    await feedback.confirm('确定要删除？')
    await apiUserDelete({ id })
    getLists()
}

getLists()
</script>

