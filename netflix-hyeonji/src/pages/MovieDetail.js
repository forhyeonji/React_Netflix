import React, { useEffect } from 'react';
import BlankBanner from '../components/BlankBanner';
import {Container, Row, Col} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";


const MovieDetail = () => {

  const location=useLocation();
  const { item } = location.state;
  const paramsId = useParams();
  const params=paramsId.id;


  console.log("파라미터=", params);
  const API_KEY=process.env.REACT_APP_API_KEY;
  console.log("api키!!", API_KEY)


  const getDetailMovies = async()=>{
    let url = `https://api.themoviedb.org/3/movie/${params}?api_key=${API_KEY}&language=en-US`;
    console.log("머머머",url)
    let response = await fetch(url);
    let data = await response.json();
    console.log("왔니???",data);
  }

  useEffect(()=>{
    getDetailMovies();
  },[params])



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