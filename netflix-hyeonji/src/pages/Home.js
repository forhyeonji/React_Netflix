import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { movieState } from '../redux/reducers/movieReducer'
import movieReducer from '../redux/reducers/movieReducer'
import Banner from '../components/Banner'
import MovieSlide from '../components/MovieSlide'
import { ClipLoader } from 'react-spinners'


const Home = () => {
    const dispatch = useDispatch();

    const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(
        (state) => (state.movie)
      );

      console.log("데이터 제발제발",popularMovies)
    

  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])


  //loading이 true면 loading 스피너를 보여주고
  //loading이 false면 데이터를 보여주고
  
  //true: 데이터 도착 전
  //false: 데이터 도착 후, 에러났을 때

  if (loading){
    return(
    <div className='spinner_box'>
       <ClipLoader color="#ffff" loading={loading} size={150} />
    </div>
    )
  }

  
  return (
    <div>
       
      <Banner movie={popularMovies.results[15]} />

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies}/>

    
    </div>
  )
}

export default Home