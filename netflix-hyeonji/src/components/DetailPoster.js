import React from 'react'

//1. 디테일 페이지에서 정보를 받아온다
//2. 디테일포스터 - 디테일페이지 순으로 작업해보자

//클릭 시 주소에 id를 보내는 것까지 성공..!!
//searchParams를 통해서 id값을 매치하자!!!
//일단 동노가서 스트레스 좀 풀고..!!


const DetailPoster = ({movies}) => {
    console.log("포스터!!!",movies);


    return (
    <div>
        <div
            className='detail_poster_box' 
            style={{
            backgroundImage:
            "url("+
            `https://www.themoviedb.org/t/p/w710_and_h400_multi_faces${movies.data.results[0].backdrop_path}`+")"}}
            >
            
            
            <p>{movies.data.results[0].id}</p>
        </div>
    </div>
  )
}

export default DetailPoster