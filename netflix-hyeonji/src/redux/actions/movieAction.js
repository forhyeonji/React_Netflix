import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY=process.env.REACT_APP_API_KEY
function getMovies(){
    return async(dispatch)=>{
        const popularMovieApi = api.get(
            `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            );
        
        const topRatedApi = api.get(
            `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            );

        const upComingApi = api.get(
            `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            );

        let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
            popularMovieApi,
            topRatedApi,
            upComingApi
        ]);
        
        dispatch(movieActions.getPopularMovies(popularMovies.data));
        dispatch(movieActions.getTopRatedMovies(topRatedMovies.data));
        dispatch(movieActions.getUpcomingMovies(upcomingMovies.data));


        
    }
}

export const movieAction = {
    getMovies,
}