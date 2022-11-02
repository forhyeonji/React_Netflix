import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import detailReducer from "./reducers/detailReducer";
import movieReducer from "./reducers/movieReducer";
import searchReducer from "./reducers/searchReducer";

let store = configureStore({
        reducer:{
            movie : movieReducer,
            detail : detailReducer,
            search : searchReducer,
        },
        middleware: [thunk],
       
        
    });


export default store;