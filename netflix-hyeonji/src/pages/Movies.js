import React from "react";
import { movieAction } from "../redux/actions/movieAction";
import { searchAction } from "../redux/actions/searchAction";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { ClipLoader } from "react-spinners";
import FirstAccodian from "../components/FirstAccodian";
import { SecondAccodian } from "../components/SecondAccodian";
import BigMovieCard from "../components/BigMovieCard";
import { Paging } from "../components/Paging";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';





const Movies = () => {
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [items, setItems] = React.useState([]) //리스트에 나타낼 아이템
    const [count, setCount] = React.useState(0); //아이템 총 개수
    const [currentpage, setCurrentpage] = React.useState(1); //현재페이지
    const [postPerPage] = React.useState(7); //페이지당 아이템 개수
    
    const [indexOfLastPost, setIndexOfLastPost] = React.useState(0);
    const [indexOfFirstPost, setIndexOfFirstPost] = React.useState(0);
    const [currentPosts, setCurrentPosts] = React.useState(0);
    const [query,setQuery] = useSearchParams();
    //items호출
   
    React.useEffect(() => {
      setCount(items.length);
      setIndexOfLastPost(currentpage * postPerPage);
      setIndexOfFirstPost(indexOfLastPost - postPerPage);
      setCurrentPosts(items.slice(indexOfFirstPost, indexOfLastPost));
      
      if(query!=''){
        console.log("키워드 있음")
        let keyword=query.get("query")
        console.log("쿼리 뭔데?", keyword)
        
        console.log("패치했어??")
        navigate(`/movies`)
      }else{
        console.log("키워드 없음")
      dispatch(movieAction.getMovies({ currentpage }));
      }

    }, [currentpage, indexOfFirstPost, indexOfLastPost, items, postPerPage, query]);


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
            <FirstAccodian />
            <SecondAccodian />
          </Col>
          <Col lg={8}>
 
            <Row>
            {popularMovies.results.map((item)=>
                 <BigMovieCard item={item}/>
            )}
            </Row>
         
          </Col>
          
        </Row>
        <Row>
          <Col>
          <div className="pagination">
          <Paging page={currentpage} count={2000} setPage={setPage}/>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
