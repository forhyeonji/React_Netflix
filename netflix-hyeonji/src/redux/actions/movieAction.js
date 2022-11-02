import api from "../api";
import { movieActions } from "../reducers/movieReducer";


// 검색기능 따로 api 받아와야함
// search로 하는 &query=black
// 이런식으로 url 맨 마지막에 붙는다

const API_KEY=process.env.REACT_APP_API_KEY


function getMovies({ currentpage }){
    
    return async(dispatch)=>{
        try{

        dispatch(movieActions.getMoviesRequest());


        const popularMovieApi = api.get(
            `/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentpage}`
            );
        
        const topRatedApi = api.get(
            `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            );

        const upComingApi = api.get(
            `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            );

        const genreApi = api.get(
            `/genre/movie/list?api_key=${API_KEY}&language=en-US`
            );


    


        let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
            popularMovieApi,
            topRatedApi,
            upComingApi,
            genreApi,
        ]);

        console.log("오리지널 데이터",popularMovies);
        console.log("장르",genreList.data);
      
        

        dispatch(movieActions.getMovieSuccess({popularMovies, topRatedMovies, upcomingMovies}));
        dispatch(movieActions.getGenreList({genreList}));

            
        } catch(error){

        dispatch(movieActions.getMoviesFailure());

        }

    }
}

export const movieAction = {
    getMovies,
}