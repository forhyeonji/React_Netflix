import YouTube from 'react-youtube';

import React from 'react'

const Youtube = ({movieVideos}) => {

const opts = {
      height: '650',
      width: '1100',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

  return (
    <div>
        <YouTube videoId={movieVideos.results[0].key} opts={opts} onEnd={(e)=>{e.target.stopVideo(0);}}   />;
    </div>
  )
}

export default Youtube