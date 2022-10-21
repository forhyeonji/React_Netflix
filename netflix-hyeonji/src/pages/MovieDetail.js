import React, { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction'
import BlankBanner from '../components/BlankBanner';
import {Container, Row, Col} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import DetailPoster from '../components/DetailPoster'


const MovieDetail = ({item}) => {
  const dispatch = useDispatch();
  // const { popularMovies, topRatedMovies, upcomingMovies, loading } = useSelector(
  //   (state) => (state.movie)
  // );
  
  // 프롭스로 이어지는거 잘 보기
  


  useEffect(()=>{
    dispatch(movieAction.getMovies());
  },[])
  console.log("!!진짜 희망 이어진희망!!",item);
  return (
    <div>
      <BlankBanner />
      <Container>
        <Row>
          <Col>
           {item && <DetailPoster item={item}/>}
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail