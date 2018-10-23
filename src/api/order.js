import request from '@/utils/request'

export function listOrders(status) {
  return request({
    url: '/orders/' + status,
    method: 'get'
  })
}
