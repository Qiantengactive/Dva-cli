import {fakeAccountLogin, fakeUser} from "../services/api";
import {PATH_MAIN} from "../utils/constant";
import {routerRedux} from 'dva/router';
/* 
  namespace：
  model 的命名空间，同时也是他在全局 state 上的属性，只能用字符串，不支持通过 . 的方式创建多层命名空间。
  state
  初始值，优先级低于传给 dva() 的 opts.initialState。
  reducers  处理数据 同步
    以 key/value 格式定义 reducer。用于处理同步操作，唯一可以修改 state 的地方。由 action 触发。
    格式为 (state, action) => newState 或 [(state, action) => newState, enhancer]。
  effects    接收数据 异步
    以 key/value 格式定义 effect。用于处理异步操作和业务逻辑，不直接修改 state。由 action 触发，
    可以触发 action，可以和服务器交互，可以获取全局 state 的数据等等。
  subscriptions 监听数据
    以 key/value 格式定义 subscription。subscription 是订阅，用于订阅一个数据源，然后根据需要 dispatch 
    相应的 action。在 app.start() 时被执行，数据源可以是当前的时间、服务器的 websocket 连接、keyboard 输入、geolocation 变
    化、history 路由变化等等。

    yield
    put  用来发起一条action
          put是saga对Redux中dispatch方法的一个封装，调用put方法后，saga内部会分发action通知Store更新state。
    call 以异步的方式调用函数

    select 从state中获取相关的数据

    take 获取发送的数据
      只是在执行顺序执行到take语句时才会相应action。
    eg:
    // example 1
      import { take, fork, call, put } from 'redux-saga/effects';

    // The worker: perform the requested task
    function* fetchUrl(url) {
      const data = yield call(fetch, url);  // 指示中间件调用 fetch 异步任务
      yield put({ type: 'FETCH_SUCCESS', data });  // 指示中间件发起一个 action 到 Store
    }

    // The watcher: watch actions and coordinate worker tasks
    function* watchFetchRequests() {
      while(true) {
        const action = yield take('FETCH_REQUEST');  // 指示中间件等待 Store 上指定的 action，即监听 action
        yield fork(fetchUrl, action.url);  // 指示中间件以无阻塞调用方式执行 fetchUrl
      }
    }
    connect()(IndexPage)
    // =>
    const bindToComponent = connect()
    export default bindToComponent(IndexPage)
    export default connect(从 model 的 state 中获取数据)(要将数据绑定到哪个组件)

*/
export default {
  namespace: 'login',
  state: {
    changeLoginStatus: {},
    user: []
  },
  reducers: {
    setState(state, {payload}) {
      // alert('点击登录按钮后触发了操作 将登录信息储存于state中');
      return {...state, ...payload};
    }
  },
  effects: {
    *accountSubmit({ payload, from = {pathname: ''} }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);
      if(response.status === 'ok') {
        const user = yield call(fakeUser);
        yield put({
          type: 'setState',
          payload: {changeLoginStatus: response, user},
        });
        sessionStorage.setItem('hasLogin', 'true');
        if(from.pathname) {
          yield put(routerRedux.push(from.pathname));
        } else {
          yield put(routerRedux.push(PATH_MAIN));
        }
      } else {
        sessionStorage.setItem('hasLogin', 'false');
        throw new Error('用户名密码错误！')
      }
    }
  },
  subscriptions: {

  }
};
