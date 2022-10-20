import { createSlice } from '@reduxjs/toolkit';


let initialState={
    popularMovies :{},
    topRatedMovies : {},
    upcomingMovies : {},
    loading : true,
};


const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers:{
        getMoviesRequest(state, action){
            state.loading = true;
        },
        getPopularMovies(state, action){
            state.popularMovies = action.payload.popularMovies;
            state.loading = false;
        },
        getTopRatedMovies(state, action){
            state.topRatedMovies = action.payload.topRatedMovies;
            state.loading = false;
        },
        getUpcomingMovies(state, action){
            state.upcomingMovies = action.payload.upcomingMovies;
            state.loading = false;
        },
        getMoviesFailure(state, action){
            state.loading = false;
        },

    },
});


console.log("pppp", movieSlice);

export const movieActions = movieSlice.actions;
export const movieState = movieSlice.state;
export default movieSlice.reducer;