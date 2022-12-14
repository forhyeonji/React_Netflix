import React from 'react'

const Banner = ({movie}) => {

  console.log("movie?", movie)

  return (
    <div 
    className='banner'
    style={{
      backgroundImage:
      "url(" + 
      `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}` +
      ")"
      }}
    >

      <div className='banner-info'>
        <p className='main_title'>{movie.title}</p>
        <p>{movie.overview}</p>
      </div>
    
    </div>
  )
}

export default Banner