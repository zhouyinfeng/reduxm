'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionInjection = exports.actionProps = exports.action = exports.connectStore = exports.storeDestroy = exports.storeActionType = exports.store = exports.Store = undefined;

var _store = require('./store/store');

var _store2 = _interopRequireDefault(_store);

var _connectstore = require('./connect/connectstore');

var _connectstore2 = _interopRequireDefault(_connectstore);

var _action = require('./action/action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * store修饰器,处理整个store层存入数据工厂
 * @params storeName(数据层名称), allActionType(改变整个数据层的actionType), allStoreLogs(改变整个数据层的打印日志级别)
 * @return true
 */
var store = _store2.default.store;
/**
 * storeActionType修饰器,按名称录入actionType
 * @params actionType(数据改变响应type), level(日志级别)
 * @return target
 */
/**
 * 数据注入层
 * 提供createStore、getDevTools、getActionType、getAllInitData四个方法
 *
 * createStore方法,绑定数据到整个react路由层
 * @params router(react路由), debug(是否开启调试工具)
 * @return reactRouter
 *
 * getDevTools方法,获取调试工具视图
 * @return DevTools(调试工具视图)
 *
 * getActionType方法,获取storeName下所有actionType
 * @param storeName(数据层名称)
 * @return {}(storeName下所有actionType)
 *
 * getAllInitData方法,获取storeName下所有初始数据
 * @param storeName(数据层名称)
 * @return {}(storeName下所有初始数据)
 */
var storeActionType = _store2.default.storeActionType;
/**
 * storeDestroy修饰器,按名称录入是否需要销毁
 * @return target
 */
var storeDestroy = _store2.default.storeDestroy;

/**
 * connectStore修饰器,连接数据,事件和reactDom
 * @params storeList[](页面所需数据层名称), destroyStoreList[](离开页面销毁数据层名称)
 * @return reactDom
 * 由于我会继承你的ReactDom并重写componentWillUnmount生命周期
 * 所以
 * 在你的ReactDom想实现componentWillUnmount生命周期必须加上静态属性
 * 并且上下文还是ReactDom
 * 如下
 * 	static componentWillUnmount (){
     	this._cons();
   	}

 _cons(){
        console.log("生命周期销毁");
    }
 */


/**
 * 事件注入层
 */

/**
 * action修饰器,处理整个action层存入事件工厂
 * @param actionName(事件层名称)
 * @return target
 */
var action = _action2.default.action;
/**
 * actionProps修饰器,按名称录入action
 * @params actionFunName(事件名称), level(日志级别)
 * @return target
 */
var actionProps = _action2.default.actionProps;
/**
 * actionInjection修饰器,按名称反向注入事件到reactDom
 * @param actionName(事件名称)
 * @return target
 */
var actionInjection = _action2.default.actionInjection;

exports.Store = _store2.default;
exports.store = store;
exports.storeActionType = storeActionType;
exports.storeDestroy = storeDestroy;
exports.connectStore = _connectstore2.default;
exports.action = action;
exports.actionProps = actionProps;
exports.actionInjection = actionInjection;