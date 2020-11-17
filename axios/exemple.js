import { get, post, deleted, put } from '@/plugins/http'

// 获取服务地区列表
export const getServiceArea = data => get('/api/admin/zbarea/arealist', data)
// 上门取件开启关闭
export const switchPickUp = data => deleted('/api/admin/zbarea/ispickup', data)
// 新增编辑服务地区
export const createEditServiceArea = data => post('/api/admin/zbarea/edietarea', data)
// 获取服务地区详情
export const getServiceAreaDetail = data => get('/api/admin/zbarea/areadetail', data)
// 获取城市负责人列表
export const getAreaPrincipal = data => get('/api/admin/zb/cityadminlist', data)
// 开启关闭城市负责人
export const switchionAreaPrincipal = data => post('/api/admin/zb/iscloseadmin', data)
// 新增城市负责人
export const createAreaPrincipal = data => post('/api/admin/zb/addcityadmin', data)
// 获取城市负责人详情
export const getAreaPrincipalDetail = data => get('/api/admin/zb/cityadmindetail', data)
// 编辑城市负责人
export const editAreaPrincipal = data => post('/api/admin/zb/editcityadmin', data)
// 获取服务人员列表
export const getAreaPerson = data => get('/api/admin/zbuser/list', data)
// 服务人员结单开启关闭
export const switchAreaPersonStatus = data => post('/api/admin/zbuser/editstatus', data)
// 服务人员开单开启关闭
export const switchAreaPersonOpenbill = data => post('/api/admin/zbuser/editopenbill', data)
// 新增编辑服务人员
export const createEditAreaPerson = data => put('/api/admin/zbuser/edit', data)
// 获取服务人员详情
export const getAreaPersonDetail = data => get('/api/admin/zbuser/detail', data)
// 服务人员更多信息
export const getAreaPersonDetailMore = data => get('/api/admin/zbuser/moreinfo', data)
// 获取城市店铺
export const getAreaStore = data => get('/api/admin/zbuser/shoplist', data)