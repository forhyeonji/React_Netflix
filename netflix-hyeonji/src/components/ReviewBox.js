import React from 'react'
import { Container } from 'react-bootstrap'
import ReviewCard from './ReviewCard'

const ReviewBox = ({review}) => {
  
    console.log("리뷰박스의 리뷰??", review)

  return (
    <div>
    <h6 align="center">{review.results.length} COMMENTS</h6>
    <Container className='review_container'>
        <div  className='review_content'>
        {review.results.map((item)=>(
          <ReviewCard item={item} className="review_card"/>
        ))}
        </div>
    </Container>
    </div>

  )
}

export default ReviewBox