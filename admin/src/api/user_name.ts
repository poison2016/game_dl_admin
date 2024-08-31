import request from '@/utils/request'

// 用户表列表
export function apiUserNameLists(params: any) {
    return request.get({ url: '/user_name/lists', params })
}

// 添加用户表
export function apiUserNameAdd(params: any) {
    return request.post({ url: '/user_name/add', params })
}

// 编辑用户表
export function apiUserNameEdit(params: any) {
    return request.post({ url: '/user_name/edit', params })
}

// 删除用户表
export function apiUserNameDelete(params: any) {
    return request.post({ url: '/user_name/delete', params })
}

// 用户表详情
export function apiUserNameDetail(params: any) {
    return request.get({ url: '/user_name/detail', params })
}