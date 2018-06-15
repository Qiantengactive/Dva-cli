import { delay } from 'roadhog-api-doc'
import { user } from './mock/user'
import { table } from './mock/tableData'

const noProxy = process.env.NO_PROXY === 'true'
const proxy = {
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body
    const isOk = password === '888888' && username === 'admin'
    res.send({ status: isOk ? 'ok' : 'error', type: 'account' })
  },
  'POST /api/addTableData': (req, res) => {
    const obj = req.body
    table.dataSource.push(obj)
    res.send({ status: 'ok' })
  },
  'GET /api/user': user,
  'GEt /api/getTableData': table,
  'POST /api/deleteTableData': (req, res) => {
    const { key: key } = req.body
    /* 操作table 中dataSource数据 */
    table.dataSource.forEach((ele, index) => {
      if (Object.is(ele.key, key)) {
        table.dataSource.splice(index, 1)
      }
    })
    res.send({ status: 'ok', body: table })
  },
  'POST /api/fixTableData': (req, res) => {
    const { key, businessType, businessID, cost,description,detail } = req.body
    /* 操作table 中dataSource数据 */
    table.dataSource.forEach((ele, index) => {
      if (Object.is(ele.key, key)) {
        table.dataSource[index].businessType = businessType
        table.dataSource[index].businessID = businessID
        table.dataSource[index].cost = cost
        table.dataSource[index].description = description
        table.dataSource[index].detail = detail
      }
    }) 
    res.send({ status: 'ok', body: table })
  }
}
export default (noProxy ? {} : delay(proxy, 1000))
