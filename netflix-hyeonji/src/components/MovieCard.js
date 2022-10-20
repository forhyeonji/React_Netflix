import React from 'react'

const MovieCard = ({item}) => {
  return (
    <div
        className='card'
        style={{
            backgroundImage:
            "url(" + `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${item.backdrop_path}` + ")",
        }}
        >
    </div>
  )
}

export default MovieCard