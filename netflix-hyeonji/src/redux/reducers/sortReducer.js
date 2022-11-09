import { createSlice } from "@reduxjs/toolkit";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

let initialState={
    sortMovies : {},
    sortLoading : true,
};


const sortSlice = createSlice({
    name : "sort",
    initialState,
    reducers:{
        getSortRequest(state, action){
            state.sortLoading = true;
        },

        getMovieSort(state, action){
            state.sortMovies = action.payload.sortMovies.data;
        },

        getSortFailure(state, action){
            state.sortLoading = false;
        },
    },
});

console.log("@@@@sort리듀서@@@@", sortSlice)

export const sortActions = sortSlice.actions;
export default sortSlice.reducer;