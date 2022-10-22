import React, { useEffect } from 'react';
import BlankBanner from '../components/BlankBanner';
import {Container, Row, Col} from "react-bootstrap";
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {

  const location=useLocation();
  console.log("로케이션션션", location.state);
  const { posterUrl } = location.state;


  return (
    <div>
      <BlankBanner />
      <Container>
        <Row>
          <Col>
            <div 
            className='detail_poster_box' 
            style={{
            backgroundImage:
            "url("+
            `https://image.tmdb.org/t/p/original//${posterUrl}`+")"}}
            >

            </div>
          </Col>
          <Col>
          
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail