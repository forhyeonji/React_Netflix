import React from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import FirstAccodian from "../components/FirstAccodian";
import { SecondAccodian } from "../components/SecondAccodian";
import BigMovieCard from "../components/BigMovieCard";


const Movies = () => {
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  console.log("aaa인기영화", popularMovies);

  if (loading) {
    return (
      <div className="spinner_box">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div className="movie-sidebar-wrapper">
      <Container>
        <Row>
          <Col lg={4}>
            <FirstAccodian />
            <SecondAccodian />
          </Col>
          <Col lg={8}>
 
            <Row>
            {popularMovies.results.map((item)=>
                 <BigMovieCard item={item}/>
            )}
            </Row>
         
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
