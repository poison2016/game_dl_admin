import request from '@/utils/request'

// 用户表列表
export function apiUserLists(params: any) {
    return request.get({ url: '/duser.user/lists', params })
}

// 添加用户表
export function apiUserAdd(params: any) {
    return request.post({ url: '/duser.user/add', params })
}

// 编辑用户表
export function apiUserEdit(params: any) {
    return request.post({ url: '/duser.user/edit', params })
}

// 删除用户表
export function apiUserDelete(params: any) {
    return request.post({ url: '/duser.user/delete', params })
}

// 用户表详情
export function apiUserDetail(params: any) {
    return request.get({ url: '/duser.user/detail', params })
}