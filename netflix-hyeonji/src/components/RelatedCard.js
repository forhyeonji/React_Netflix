import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Badge } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faFilm } from "@fortawesome/free-solid-svg-icons";


import React from 'react'

const RelatedCard = ({item}) => {
    const navigate = useNavigate();

    const goMovieDetail = () => { 
        navigate(
          `/movies/${item.id}`,
          {state:{item}}
          )
       }

    const { genreList } = useSelector(state=>state.movie)

  return (
    
    <Card
    style={{
        backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.backdrop_path}` +
            ")",
        // width:'26rem'
        }} className="relatedCard" onClick={goMovieDetail}>
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
  
  </Card>
  )
}

export default RelatedCard