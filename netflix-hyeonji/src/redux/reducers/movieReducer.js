import { createSlice } from '@reduxjs/toolkit';


let initialState={
    popularMovies :{},
    topRatedMovies : {},
    upcomingMovies : {},
    loading : true,
    genreList : [],
};


const movieSlice = createSlice({
    name : "movie",
    initialState,
    reducers:{
        getMoviesRequest(state, action){
            state.loading = true;
        },
        getMovieSuccess(state, action){
            state.popularMovies = action.payload.popularMovies.data;
            state.topRatedMovies = action.payload.topRatedMovies.data;
            state.upcomingMovies = action.payload.upcomingMovies.data;
            state.loading = false;
        },
        // getTopRatedMovies(state, action){
        //     state.topRatedMovies = action.payload.topRatedMovies.data;
        //     state.loading = false;
        // },
        // getUpcomingMovies(state, action){
        //     state.upcomingMovies = action.payload.upcomingMovies.data;
        //     state.loading = false;
        // },
        getMoviesFailure(state, action){
            state.loading = false;
        },
        getGenreList(state, action){
            state.genreList = action.payload.genreList.data.genres;
        },

    },
});


console.log("pppp", movieSlice);

export const movieActions = movieSlice.actions;
export const movieState = movieSlice.state;
export default movieSlice.reducer;