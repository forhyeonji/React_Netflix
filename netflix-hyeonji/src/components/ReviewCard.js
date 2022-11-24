import React from 'react'

const ReviewCard = ({item}) => {


 
  return (
    <div>
        <div className='commentBox'>
            <p>{item.author}</p>
            <p className='comment'>{item.content}</p>

            
        </div>
    </div>
  )
}

export default ReviewCard