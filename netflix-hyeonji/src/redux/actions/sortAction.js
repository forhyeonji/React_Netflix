import api from "../api";
import { sortActions } from "../reducers/sortReducer";

const API_KEY=process.env.REACT_APP_API_KEY

function getSort({selected, currentpage}){

    return async(dispatch)=>{
        try{

            dispatch(sortActions.getSortRequest());


            const sortMovieApi = api.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${selected}&include_adult=false&include_video=false&page=${currentpage}`
            );

            let [sortMovies] = await Promise.all([
                sortMovieApi,
            ]);

            dispatch(sortActions.getMovieSort({sortMovies}))
            
        } catch(error) {
            
            dispatch(sortActions.getSortFailure());

        }


    }
}


export const sortAction = {
    getSort,
}