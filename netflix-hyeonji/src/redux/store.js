import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";

let store = configureStore({
        reducer:{
            move : movieReducer,
        }
    });

export default store;