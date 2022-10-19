import { createSlice } from '@reduxjs/toolkit';


let initialState={
    popularMovies :{},
    topRatedMovies : {},
    upcomingMovies : {},
};


const movieSlice = createSlice({
    name : "movies",
    initialState,
    reducers:{
        getPopularMovies(state, action){
            state.popularMovies = action.payload.popularMovies
        },
        getTopRatedMovies(state, action){
            state.topRatedMovies = action.payload.topRatedMovies
        },
        getUpcomingMovies(state, action){
            state.upcomingMovies = action.payload.upcomingMovies
        },

    },
});


// function movieReducer(state=initialState, action){
//     let {type, payload} = action;
//     switch(type){
//         case "GET_MOVIES_SUCCESS":
//             return {
//                 ...state,
//                 popularMovies : payload.popularMovies,
//                 topRatedMovies : payload.topRatedMovies,
//                 upcomingMovies : payload.upcomingMovies,
//             };
//         default :
//             return {...state};

//     }

// }

console.log("pppp", movieSlice);

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;