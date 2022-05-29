import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import todos from './todos/reducer';
import filter from './filters/reducer'


const rootReducer = combineReducers({
    todos,
    filter
});

export default configureStore({
    reducer: rootReducer
})

