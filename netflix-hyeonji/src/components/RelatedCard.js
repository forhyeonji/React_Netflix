import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

import React from 'react'

const RelatedCard = ({item}) => {
    const navigate = useNavigate();

    const goMovieDetail = () => { 
        navigate(
          `/movies/${item.id}`,
          {state:{item}}
          )
       }

  return (
    
    <Card
    style={{
        backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.backdrop_path}` +
            ")",
        width:
            '26rem' }} className="relatedCard" onClick={goMovieDetail}>
  </Card>
  )
}

export default RelatedCard