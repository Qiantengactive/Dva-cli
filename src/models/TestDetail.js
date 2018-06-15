import {
  getTableData,
  addTableData,
  deleteTableData,
  fixTableData
} from '../services/api'

// import {getTableData} from "../services/api";
export default {
  namespace: 'testDetailModel',
  state: {
    dataSource: [],
    columns: [],
    visible: false,
    fixVisible: false,
    businessType: '',
    businessID: '',
    cost: '',
    description: '元/分钟',
    detail: '',
    key: ''
  },
  reducers: {
    setState(state, { payload }) {
      // alert('点击登录按钮后触发了操作 将登录信息储存于state中');
      return { ...state, ...payload }
    }
  },
  effects: {
    *getTableInfo({ payload }, { call, put }) {
      const response = yield call(getTableData, payload)
      yield put({
        type: 'setState',
        payload: response
      })
    },
/*     businessType: '',
    businessID: '',
    cost: '',
    description: '元/分钟',
    detail: '',
    key: ' */
    *addTableInfo({ payload }, { call, put, select }) {
      let businessType = yield select(state => state.testDetailModel.businessType)
      let businessID = yield select(state => state.testDetailModel.businessID)
      let cost = yield select(state => state.testDetailModel.cost)
      let description = yield select(state => state.testDetailModel.description)
      let detail = yield select(state => state.testDetailModel.detail)
      let key = yield select(state => state.testDetailModel.dataSource.length)
      console.log(key)
        key += 1
        key = key + ''
      const obj = {
        businessType,
        businessID,
        cost,
        description,
        detail,
        key
      }
      const response = yield call(addTableData, obj)
      const { status } = response
      if (Object.is(status, 'ok')) {
        const response = yield call(getTableData)
        if (response.dataSource) {
          response.visible = false
          // response.businessType = ''
          // response.businessID = ''
          // response.cost = ''
          // response.description = ''
          // response.detail = ''
          yield put({
            type: 'setState',
            payload: response
          })
        }
      }
      // 添加方法
      //查询方法
    },
    *delete({ payload }, { call, put }) {
      const response = yield call(deleteTableData, payload)
      const { status, body } = response
      if (Object.is(status, 'ok')) {
        yield put({
          type: 'setState',
          payload: body
        })
      }
    },
    *fixTableInfo({ payload }, { call, put, select }) {
      let businessType = yield select(state => state.testDetailModel.businessType)
      let businessID = yield select(state => state.testDetailModel.businessID)
      let cost = yield select(state => state.testDetailModel.cost)
      let description = yield select(state => state.testDetailModel.description)
      let detail = yield select(state => state.testDetailModel.detail)
      let key = yield select(state => state.testDetailModel.key)
      const obj = {
        businessType,
        businessID,
        cost,
        description,
        detail,
        key
      }
      const response = yield call(fixTableData, obj)
      const { status, body } = response
      body.fixVisible = false
      if (Object.is(status, 'ok')) {
        yield put({
          type: 'setState',
          payload: body
        })
      }
    }
  },
  subscriptions: {
    set({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (Object.is(pathname, '/main/detail')) {
          dispatch({ type: 'getTableInfo' })
        }
      })
    }
  }
}
