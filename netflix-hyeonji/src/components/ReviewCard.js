import React from 'react'

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