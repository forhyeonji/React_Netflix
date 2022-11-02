import api from "../api";
import { searchActions } from "../reducers/searchReducer";


const API_KEY=process.env.REACT_APP_API_KEY

function getSearches({keyword, currentpage}){
    
    return async(dispatch)=>{
        try{
            console.log("여기는 왔어1??")
            
          
            const searchMovieApi = api.get(
            `search/movie?api_key=${API_KEY}&language=en-US&page=${currentpage}&include_adult=false&query=${keyword}`
            );
            console.log("여기는 왔어2??", searchMovieApi)

            let [searchMovies] = await Promise.all([
                searchMovieApi,
            ]);

            console.log("❤❤searchMovieApi❤❤",searchMovies)

            dispatch(searchActions.getMovieSearch({searchMovies}))

        } catch(error) {

        dispatch(searchActions.getSearchFailure());

        }
    }
}



export const searchAction = {
    getSearches,
}