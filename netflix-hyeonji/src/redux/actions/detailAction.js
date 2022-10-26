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
            
            const relatedApi = api.get(
                `https://api.themoviedb.org/3/movie/${params}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
            );

            const videoApi = api.get(
                `https://api.themoviedb.org/3/movie/${params}/videos?api_key=${API_KEY}&language=en-US`
            );
            
            let [detailMovies, detailReviews, relatedMovies, movieVideos] = await Promise.all([
                detailApi,
                reviewApi,
                relatedApi,
                videoApi,
            ]);

            dispatch(detailActions.getDetailSuccess({detailMovies, detailReviews, movieVideos}));
            dispatch(detailActions.getRelatedMovies({relatedMovies}))

        }catch(error){

            dispatch(detailActions.getDetailFailure());
    
            }
        }
    }
    

export const detailAction = {
    getDetails,
}