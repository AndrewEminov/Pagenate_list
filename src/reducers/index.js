import { combineReducers } from 'redux'
import { ListReducer } from './ListReducer'


export const rootReducer = combineReducers({
    list: ListReducer,

});
