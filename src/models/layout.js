export default {
  namespace: 'layout',
  state: {
    menuMode: 'inline',
    pathname: '/main/example',
    loading: true
  },
  reducers: {
    setState(state, { payload }) {
      // alert('我是layout中的setState');
      return Object.assign({}, state, { ...payload })
    }
  },
  effects: {},
  subscriptions: {
    set({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // alert('我是layout监听路由变化的组件 我要通知layout的setState')
        dispatch({ type: 'setState', payload: { pathname } })
      })
    }
  }
}
