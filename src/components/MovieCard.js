import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faFilm } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ item }) => {
    const navigate = useNavigate();


    const { genreList } = useSelector(state=>state.movie)

    const goMovieDetail = () => { 
      console.log("무비카드에서 아이템", item)
      navigate(
        `/movies/${item.id}`,
        {state:{item}}
        )
     }
  
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.backdrop_path}` +
          ")",
      }}
      onClick={goMovieDetail}
     >
      <div className="overlay">
      <div className="card-mini-info">
            <h2>{item.title}</h2>
            <div>
                {item.genre_ids.map((id) => (
                    <Badge bg="danger">
                      {genreList.find(item=>item.id==id).name}
                    </Badge>
                ))}
            </div>
            <div>
              
                  <h6 className="card-mini-score">
                    <FontAwesomeIcon icon={faUsers} className="people_icon" />
                    {item.vote_average}
                  </h6>
                  <div className="adult">
                {item.adult?"청불":"Under 18"}
                  </div>
              </div>
            </div>

      </div>
    </div> /* 백그라운드 */
  );
};

export default MovieCard;