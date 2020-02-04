import {applyMiddleware, combineReducers, createStore} from "redux";
import appReducer from "./app-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    app: appReducer,
    usersPage: usersReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;