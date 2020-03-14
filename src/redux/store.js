import {createStore, applyMiddleware} from 'redux';
import finalReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(finalReducer,applyMiddleware(thunk));//内部会第一次调用reducer函数，得到初始state 

export default store;