import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { movieState } from '../redux/reducers/movieReducer'
import movieReducer from '../redux/reducers/movieReducer'
import Banner from '../components/Banner'

const Home = () => {
    const dispatch = useDispatch();
  

    const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
        (state) => (state.movie)
      );

      console.log("데이터 제발제발",popularMovies)
    

  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])
  
  return (
    <div>
        {popularMovies.data && <Banner movie={popularMovies.data.results[0]} />}
    </div>
  )
}

export default Home