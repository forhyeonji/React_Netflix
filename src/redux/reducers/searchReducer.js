import { createSlice } from "@reduxjs/toolkit";

let initialState={
    searchMovies : {},
    searchLoading : true,
};

const searchSlice = createSlice({
    name : "search",
    initialState,
    reducers:{
        getMovieSearch(state, action){
            state.searchMovies = action.payload.searchMovies.data;

        },

        getSearchFailure(state, action){
            state.searchLoading = false;
        },
    },
});

console.log("iiii", searchSlice);

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;