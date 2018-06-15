import request from '../utils/request'

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params
  })
}
export async function fakeUser() {
  return request('/api/user')
}

export async function getTableData() {
  return request('/api/getTableData')
}

export async function addTableData(params) {
  return request('/api/addTableData', {
    method: 'POST',
    body: params
  })
}

export async function deleteTableData(params) {
  return request('/api/deleteTableData', {
    method: 'POST',
    body: params
  })
}
export async function fixTableData(params) {
  return request('/api/fixTableData', {
    method: 'POST',
    body: params
  })
}
