import React from "react";
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const MovieCard = ({ item }) => {
    const navigate = useNavigate();


    const { genreList } = useSelector(state=>state.movie)
    console.log("222과연 아이템은?", item)
    console.log("아이템 안에", item.poster_path);
    const posterUrl = item.poster_path;
    console.log("posterUrl",posterUrl);


    const goMovieDetail = () => { 
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
      onClick={(item)=>goMovieDetail(item.poster_path)}
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