import React from 'react'
import { useParams } from 'react-router-dom';
import { movieState } from '../redux/reducers/movieReducer';
import { useState } from 'react';

//1. 디테일 페이지에서 정보를 받아온다
//2. 디테일포스터 - 디테일페이지 순으로 작업해보자

//클릭 시 주소에 id를 보내는 것까지 성공..!!
//searchParams를 통해서 id값을 매치하자!!!
//일단 동노가서 스트레스 좀 풀고..!!

//마치기 전에 혹시나 해봤는데 된다..ㅠ1!!!성공!!!!


const DetailPoster = (item) => {

    console.log("포스터!!!",item);
    const params = useParams();
    
    // const imgUrl = (params.id===movies.popularMovies.results.id?movies.popularMovies.results.poster_path:
    //                 params.id===movies.topRatedMovies.results.id?movies.topRatedMovies.results.poster_path:
    //                 params.id===movies.upcomingMovies.results.id?movies.upcomingMovies.results.poster_path:'실패?')
    
    
    // const imgUrl = movies.popularMovies.results.find(item=>item.id==params.id)?.poster_path:(movies.topRatedMovies.results.find(item=>item.id==params.id)?.poster_path:'')
    
    
    const id= params.id;
        console.log(id);


    return (
    <div>
        <div
            className='detail_poster_box' 
            style={{
            backgroundImage:
            "url("+
            `https://image.tmdb.org/t/p/original//${item.results.poster_path}`+")"}}
            >
          
            <p>{params.id}</p>
        </div>
    </div>
  )
}

export default DetailPoster