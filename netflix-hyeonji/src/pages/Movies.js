import React, { useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { searchAction } from "../redux/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import FirstAccodian from "../components/FirstAccodian";
import { SecondAccodian } from "../components/SecondAccodian";
import BigMovieCard from "../components/BigMovieCard";
import { Paging } from "../components/Paging";
import { useParams, useSearchParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useState } from "react";



const Movies = () => {

  
  const dispatch = useDispatch();
  const [items, setItems] = React.useState([]); //리스트에 나타낼 아이템
  const [count, setCount] = React.useState(0); //아이템 총 개수
  const [currentpage, setCurrentpage] = React.useState(1); //현재페이지
  const [postPerPage] = React.useState(7); //페이지당 아이템 개수
  
  const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
  const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
  const [currentPosts, setCurrentPosts] = React.useState(0);
  


  // 검색 쿼리
  const [query, setQuery] = useSearchParams();
  // 인기영화(기본 화면)
  const {popularMovies,loading} = useSelector((state) => state.movie);
  // 검색된 영화
  const { searchMovies } = useSelector((state) => state.search); //검색기능
  // 분류된 영화
  const { sortMovies } = useSelector((state) => state.sort); //sort 기능
  // 조건부 렌더링을 위한 배열
  let [filteredList, setFilteredList] = React.useState([]);

  React.useEffect(() => {
    //페이징 관련
    setCount(items.length);
    setIndexOfLastPost(currentpage * postPerPage);
    setIndexOfFirstPost(indexOfLastPost - postPerPage);
    setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
    setFilteredList(sortMovies);

    //검색기능과 맨 첫 화면 기본페이지 관련 dispatch
    if (query != "") {
      let keyword = query.get("query") || "";
      dispatch(searchAction.getSearches({ keyword, currentpage }));
    }else {
      dispatch(movieAction.getMovies({ currentpage }));
    }

  }, [
    currentpage,
    indexOfFirstPost,
    indexOfLastPost,
    items,
    postPerPage,
    query,
    sortMovies,
    
    
  ]);
  

  React.useEffect(() => {
   
    setFilteredList(searchMovies);

  }, [searchMovies]);









  const setPage = (e) => {
    setCurrentpage(e);
  };

  if (loading) {
    return (
      <div className="spinner_box">
        <ClipLoader color="#ffff" loading={loading} size={150} />
      </div>
    );
  }

  return (
    <div className="movie-sidebar-wrapper">
      <Container>
        <Row>
          <Col lg={4}>
            <FirstAccodian currentpage={currentpage} setFilteredList={setFilteredList} />
            <SecondAccodian />
          </Col>
          <Col lg={8}>

            <Row>

            {
            filteredList.results?
            filteredList.results &&
            filteredList.results.map((item)=>
                 <BigMovieCard item={item}/>)
                 
            :
            popularMovies.results &&
            popularMovies.results.map((item)=>
                 <BigMovieCard item={item}/>)
            }
            </Row>

          </Col>

        </Row>
        <Row>
          <Col>
          <div className="pagination">
          <Paging page={currentpage} count={filteredList.results?filteredList.total_results:popularMovies.total_results} setPage={setPage}/>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
