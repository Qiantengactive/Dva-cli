import dva from 'dva';
require('es6-promise').polyfill();
import 'intl';
import { addLocaleData } from 'react-intl';
import './index.less';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import * as I18n from '../i18n/index';
import {CHINESE, ENGLISH} from '../utils/constant';

addLocaleData(I18n[CHINESE]);
addLocaleData(I18n[ENGLISH]);

// 1. Initialize
/* 
  配置 history 为 browserHistory
*/
const app = dva({
  history: createHistory()
});

// 2. Plugins  
/* 
  app.use加载插件 
  注册 dva-loading例子
*/
app.use(createLoading());

// 3. Model
/* 
  用来接收发送的action

*/
app.model(require('../models/i18n').default);

// 4. Router
app.router(require('./routers/appRouter').default);
console.log('app')
// 5. Start 启动应用
app.start('#root');
