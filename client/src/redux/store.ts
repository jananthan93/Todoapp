import { createStore, applyMiddleware, Store, combineReducers } from "redux"
import thunkMiddleware from 'redux-thunk';

import reducer from "./reducer"
const rootReducer = combineReducers({
    taskReducer: reducer,
});
const initialState = {}
const middleware:any = []

export const store: Store = createStore(
    rootReducer, initialState,
    applyMiddleware(...middleware,thunkMiddleware)
);


export type RootState = ReturnType<typeof store.getState>;