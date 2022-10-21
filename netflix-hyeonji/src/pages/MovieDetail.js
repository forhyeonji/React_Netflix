import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction'
import BlankBanner from '../components/BlankBanner';
import {Container, Row, Col} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import DetailPoster from '../components/DetailPoster'


const MovieDetail = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(
    (state) => (state.movie)
  );
  
  console.log("디테일 데이터",popularMovies)

  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])

  return (
    <div>
      <BlankBanner />
      <Container>
        <Row>
          <Col>
           {popularMovies && <DetailPoster movies={popularMovies}/>}
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail