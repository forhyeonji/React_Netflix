import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import detailReducer from "./reducers/detailReducer";
import movieReducer from "./reducers/movieReducer";
import searchReducer from "./reducers/searchReducer";
import sortReducer from "./reducers/sortReducer";

let store = configureStore({
        reducer:{
            movie : movieReducer,
            detail : detailReducer,
            search : searchReducer,
            sort : sortReducer,
        },
        middleware: [thunk],
       
        
    });


export default store;