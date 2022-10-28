import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const BigMovieCard = ({ item }) => {
  const navigate = useNavigate();

  const goMovieDetail = () => {
    navigate(`/movies/${item.id}`, { state: { item } });
  };
  const { genreList } = useSelector((state) => state.movie);
  console.log("인기인기", item);
  return (
 
        <Col lg={6}>
          <div className="bright">
          <div
            style={{
              backgroundImage:
                "url(" +
                `https://image.tmdb.org/t/p/original//${item.backdrop_path}` +
                ")",
            }}
            onClick={goMovieDetail}
            className="big_movie_card"
          >
          

            {/* 미니포스터 */}
              <div
              style={{
                backgroundImage:
                  "url(" +
                  `https://image.tmdb.org/t/p/original//${item.poster_path}` +
                  ")",
              }}
              className="mini_poster">
              </div>

              {/* 제목 */}
              <div className="main_info">
              <h1>{item.title}</h1>
              </div>


              {/* 장르뱃지 */}
              <div className="genre_btn_box">
              {item.genre_ids.map((id) => (
                <Badge pill bg="danger" className="genre_btn">
                  {genreList.find((item) => item.id === id).name}
                </Badge>
              ))}

                    <p>{item.overview}</p>
              </div>
              
              

          </div>
          </div>
    
        </Col>

  );
};

export default BigMovieCard;
