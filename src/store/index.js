import {combineReducers, createStore} from 'redux'
import { filterReducer } from './filterReducer'
import {todoReducer} from './todoReducer'


export default createStore(
    combineReducers({
        todos: todoReducer,
        filter: filterReducer
    })
)
