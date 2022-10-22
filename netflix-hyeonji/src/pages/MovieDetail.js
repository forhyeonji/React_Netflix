import React, { useEffect } from 'react';
import BlankBanner from '../components/BlankBanner';
import {Container, Row, Col} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { Badge } from "react-bootstrap";

const MovieDetail = () => {

  const location=useLocation();
  console.log("로케이션션션", location.state);
  const { item } = location.state;
  console.log("전달된STATE제목?", item.title)

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
              `https://image.tmdb.org/t/p/original//${item.poster_path}`+")"}}
              >
              </div>
          </Col>
          <Col>
                {item.genre_ids.map((id)=>(<Badge bg="danger">{id}</Badge>))}
                <h1>{item.title}</h1>
                

                <p>{item.overview}</p>
                <Badge bg="danger">Budge</Badge>
                <Badge bg="danger">Revenue</Badge>
                <Badge bg="danger">Release Day</Badge>{item.release_date}
                <Badge bg="danger">Time</Badge>

          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail