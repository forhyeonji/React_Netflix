import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducer/index"
// rootReducer는 여기서 임시로 지정한 이름
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducer/productReducer"
import authenticateReducer from "./reducer/authenticateReducer"

// let store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
//     );

// 새로운 configureStore이 나오기 전에는 이 4가지를 다 셋팅해야 했다.
// combineReducer
// thunk
// applyMiddleware
// composeWithDevTools

const store = configureStore({
    reducer:{
        auth : authenticateReducer,
        product : productReducer,
    }
});

export default store;