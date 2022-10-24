import api from "../api";
import { detailActions } from "../reducers/detailReducer";



const API_KEY=process.env.REACT_APP_API_KEY


function getDetails({params}){
    
    return async(dispatch)=>{
        try{

            dispatch(detailActions.getDetailRequest());

            const detailApi = api.get(
                `https://api.themoviedb.org/3/movie/${params}?api_key=${API_KEY}&language=en-US`
                );

            const reviewApi = api.get(
                `https://api.themoviedb.org/3/movie/${params}/reviews?api_key=${API_KEY}&language=en-US&page=1`
            );
    
            
            let [detailMovies, detailReviews] = await Promise.all([
                detailApi,
                reviewApi,
            ]);

            dispatch(detailActions.getDetailSuccess({detailMovies, detailReviews}));


        }catch(error){

            dispatch(detailActions.getDetailFailure());
    
            }
        }
    }
    

export const detailAction = {
    getDetails,
}