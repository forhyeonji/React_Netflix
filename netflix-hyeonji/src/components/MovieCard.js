import React from "react";
import { Badge } from "react-bootstrap";

const MovieCard = ({ item }) => {
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
                    <Badge bg="danger">{id}</Badge>
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
