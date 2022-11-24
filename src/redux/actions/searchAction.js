import api from "../api";
import { searchActions } from "../reducers/searchReducer";


const API_KEY=process.env.REACT_APP_API_KEY

function getSearches({keyword, currentpage}){
    
    return async(dispatch)=>{
        try{
            const searchMovieApi = api.get(
            `search/movie?api_key=${API_KEY}&language=en-US&page=${currentpage}&include_adult=false&query=${keyword}`
            );

            let [searchMovies] = await Promise.all([
                searchMovieApi,
            ]);

            dispatch(searchActions.getMovieSearch({searchMovies}))

        } catch(error) {

        dispatch(searchActions.getSearchFailure());

        }
    }
}



export const searchAction = {
    getSearches,
}