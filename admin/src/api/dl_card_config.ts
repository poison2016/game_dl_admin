import request from '@/utils/request'

// 代理提现配置列表
export function apiDlCardConfigLists(params: any) {
    return request.get({ url: '/dl_card_config/lists', params })
}

// 添加代理提现配置
export function apiDlCardConfigAdd(params: any) {
    return request.post({ url: '/dl_card_config/add', params })
}

// 编辑代理提现配置
export function apiDlCardConfigEdit(params: any) {
    return request.post({ url: '/dl_card_config/edit', params })
}

// 删除代理提现配置
export function apiDlCardConfigDelete(params: any) {
    return request.post({ url: '/dl_card_config/delete', params })
}

// 代理提现配置详情
export function apiDlCardConfigDetail(params: any) {
    return request.get({ url: '/dl_card_config/detail', params })
}

// 代理提现配置详情
export function apiDlCardConfigDetailUserMoeney(params: any) {
    return request.get({ url: '/dl_card_config/userMoney', params })
}