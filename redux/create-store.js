import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

var store = createStore(reducers);

export default store;

