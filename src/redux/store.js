import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { componentReducer } from "./reducer";

const rootReducer = combineReducers({ components: componentReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
