import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const MovieCard = ({ item }) => {

    const { genreList } = useSelector(state=>state.movie)
    
  
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="overlay">
            <h2>{item.title}</h2>
            <div>
                {item.genre_ids.map((id) => (
                    <Badge bg="danger">
                      {genreList.find(item=>item.id==id).name}
                    </Badge>
                ))}
            </div>
            <div>
                <span>{item.vote_average}</span>
                <span>{item.adult?"청불":"Under 18"}</span>
            </div>

      </div>
    </div> /* 백그라운드 */
  );
};

export default MovieCard;