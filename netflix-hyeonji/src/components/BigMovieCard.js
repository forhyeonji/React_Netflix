import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

const BigMovieCard = ({item}) => {
    const navigate = useNavigate();


    const goMovieDetail = () => { 
        navigate(
          `/movies/${item.id}`,
          {state:{item}}
          )
       }
    console.log("인기인기",item)
  return (
    <Col lg={6} >
    <div style={{
            backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.backdrop_path}` +
            ")",
        }}
        onClick={goMovieDetail}
        className="big_movie_card"
        >
    </div>
    </Col>

  )
}

export default BigMovieCard