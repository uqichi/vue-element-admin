import request from '@/utils/request'

export function listOrders(query) {
  return request({
    url: '/orders',
    method: 'get',
    params: query
  })
}
