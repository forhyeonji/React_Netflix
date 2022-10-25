import Card from 'react-bootstrap/Card';

import React from 'react'

const RelatedCard = ({item}) => {
  return (
    
    <Card
    style={{
        backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.backdrop_path}` +
            ")",
        width:
            '26rem' }} className="relatedCard">
    <Card.Body>
      {/* <Card.Title><h3>{item.title}</h3></Card.Title> */}
    </Card.Body>
  </Card>
  )
}

export default RelatedCard