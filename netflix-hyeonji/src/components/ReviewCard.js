import React from 'react'
import { Container } from 'react-bootstrap'

const ReviewCard = ({item}) => {
  return (
    <div>
        <div>
            <h4>{item.author}</h4>
            <p className='comment'>{item.content}</p>
        </div>
    </div>
  )
}

export default ReviewCard