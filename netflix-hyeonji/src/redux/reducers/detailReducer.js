import { createSlice } from '@reduxjs/toolkit';

let initialState={
    detailMovies:{},
    detailReviews:{},
    detailLoading: true,
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
            state.detailLoading = false;
        },
        getDetailFailure(state,action){
            state.detailLoading = false;
        },
    },
});

export const detailActions = detailSlice.actions;
export default detailSlice.reducer;