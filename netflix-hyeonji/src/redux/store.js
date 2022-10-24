import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import detailReducer from "./reducers/detailReducer";
import movieReducer from "./reducers/movieReducer";

let store = configureStore({
        reducer:{
            movie : movieReducer,
            detail : detailReducer,
        },
        middleware: [thunk],
       
        
    });


export default store;