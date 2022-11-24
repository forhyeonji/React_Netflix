import { createSlice } from '@reduxjs/toolkit';

let initialState={
    detailMovies:{},
    detailReviews:{},
    detailLoading: true,
    relatedMovies:{},
};


const detailSlice = createSlice({
    name : "detail",
    initialState,
    reducers:{
        getDetailRequest(state, action){
            state.detailLoading = true;
        },
        getDetailSuccess(state, action){
            state.detailMovies = action.payload.detailMovies.data;
            state.detailReviews = action.payload.detailReviews.data;
            state.movieVideos = action.payload.movieVideos.data;
            state.detailLoading = false;
        },
        getDetailFailure(state,action){
            state.detailLoading = false;
        },

        getRelatedMovies(state,action){
            state.relatedMovies = action.payload.relatedMovies.data;
            state.detailLoading = false;
        },
    },
});


console.log("ㅎㅎㅎㅎ", detailSlice);

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;