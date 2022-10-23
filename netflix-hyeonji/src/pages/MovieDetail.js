import React, { useEffect, useState } from 'react';
import BlankBanner from '../components/BlankBanner';
import {Container, Row, Col} from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import { Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import { useSelector  } from 'react-redux';
import ReviewBox from '../components/ReviewBox';

const MovieDetail = () => {

  const { genreList } = useSelector(state=>state.movie)
  const location=useLocation();
  const { item } = location.state;
  const paramsId = useParams();
  const params=paramsId.id;


  console.log("파라미터=", params);
  const API_KEY=process.env.REACT_APP_API_KEY;

  const [detail, setDetail] = useState([]);
  const getDetailMovies = async()=>{
    let url = `https://api.themoviedb.org/3/movie/${params}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    setDetail(data);
  }
  
  const [review, setReview] = useState([]);
  const getReviews = async()=>{
    let url = `https://api.themoviedb.org/3/movie/${params}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("리뷰를 보여줘!",data);
    setReview(data);
  }

  useEffect(()=>{
    getDetailMovies();
    getReviews();
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
            <div className='title_box'>
                {item.genre_ids.map((id) => (
                 
                    <Badge pill bg="danger" className='genre_btn'>
                      {genreList.find(item=>item.id===id).name}
                    </Badge>
            
                ))}
                <p className='big_title'>{item.title}</p>
                <h3>{detail.tagline}</h3>
            </div>
           
            <div>
                <FontAwesomeIcon icon={faStar} className='icon'/>
                <span className='score'>{item.vote_average}</span>

                <FontAwesomeIcon icon={faUsers} className='icon'/>
                <span className='score'>{item.popularity}</span>

                <span className='adult'>{item.adult?"청불":"Under 18"}</span>
            </div>


            <div className='overview_box'>
                <p>{item.overview}</p>
            </div>


            <div className='budget_box'>
                <div><Badge pill bg="danger" className='detail_btn'>Budge</Badge>${detail.budget}</div>
                <div><Badge pill bg="danger" className='detail_btn'>Revenue</Badge>${detail.revenue}</div>
                <div><Badge pill bg="danger" className='detail_btn'>Release Day</Badge>{item.release_date}</div>
                <div><Badge pill bg="danger" className='detail_btn'>Time</Badge>{detail.runtime}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
              <ReviewBox review={review} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetail