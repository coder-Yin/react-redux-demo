// import {combineReducers} from 'redux-immutablejs';
import {combineReducers} from 'redux';
import * as reducerCenter from './reducer/reducer';

const rootReducer = combineReducers({
    ...reducerCenter
})

export default rootReducer;
