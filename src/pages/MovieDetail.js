import React, { useEffect, useState } from "react";
import BlankBanner from "../components/BlankBanner";
import {
  Container,
  Row,
  Col,
  Badge,
  Modal,
  Button,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faFilm } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ReviewBox from "../components/ReviewBox";
import RelatedBox from "../components/RelatedBox";
import { detailAction } from "../redux/actions/detailAction";
import { ClipLoader } from "react-spinners";
import Youtube from "../components/Youtube";


const MovieDetail = () => {
  const dispatch = useDispatch();
  const {
    detailMovies,
    detailReviews,
    detailLoading,
    relatedMovies,
    movieVideos,
  } = useSelector((state) => state.detail);

  const { genreList } = useSelector((state) => state.movie);
  const location = useLocation();
  const { item } = location.state;

  console.log("디테일에서 로케이션", item)

  const paramsId = useParams();
  const params = paramsId.id;
  const API_KEY = process.env.REACT_APP_API_KEY;

  //모달
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(detailAction.getDetails({ params }));
  }, [params]);

  if (detailLoading) {
    return (
      <div className="spinner_box">
        <ClipLoader color="#ffff" detailLoading={detailLoading} size={150} />
      </div>
    );
  }


  return (
    <div>
      <BlankBanner />
        <div>
            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
              size="xl"
              centered="true"
            >
              <Modal.Header closeButton> 
              </Modal.Header>
              <Modal.Body className="modalBox">
               <Youtube movieVideos={movieVideos}/>
              </Modal.Body>
            </Modal>
        </div>


      <Container>
        <Row>
          <Col lg={6}>
            <div
              className="detail_poster_box"
              style={{
                backgroundImage:
                  "url(" +
                  `https://image.tmdb.org/t/p/original//${item.poster_path}` +
                  ")",
              }}
            ></div>
          </Col>


          <Col lg={6}>
            <div className="title_box">
              {item.genre_ids.map((id) => (
                <Badge pill bg="danger" className="genre_btn">
                  {genreList.find((item) => item.id === id).name}
                </Badge>
              ))}
              <p className="big_title">{item.title}</p>
              <h3>{detailMovies.tagline}</h3>
            </div>

            <div>
              <div className="score">
                <FontAwesomeIcon icon={faStar} className="icon" />
                {item.vote_average}
              </div>
              
              
              <div className="score">
                <FontAwesomeIcon icon={faUsers} className="people_icon" />
                {item.popularity}
              </div>

              <div className="adult">
                {item.adult ? "청불" : "Under 18"}
              </div>
            </div>

            <div className="overview_box">
              <p>{item.overview}</p>
            </div>

            <div className="budget_box">
              <div>
                <Badge pill bg="danger" className="detail_btn">
                  Budge
                </Badge>
                ${detailMovies.budget}
              </div>
              <div>
                <Badge pill bg="danger" className="detail_btn">
                  Revenue
                </Badge>
                ${detailMovies.revenue}
              </div>
              <div>
                <Badge pill bg="danger" className="detail_btn">
                  Release Day
                </Badge>
                {item.release_date}
              </div>
              <div>
                <Badge pill bg="danger" className="detail_btn">
                  Time
                </Badge>
                {detailMovies.runtime}
              </div>
            </div>

            <div className="trailer_box" onClick={() => setShow(true)}>
              
              <span className="over"> 
              <FontAwesomeIcon icon={faFilm} />
                <span>  Watch Trailer</span>
              </span>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
              variant="pills"
            >
              <Tab eventKey="profile" title="Reviews" className="review-tab">
                <ReviewBox review={detailReviews} />
              </Tab>
              <Tab eventKey="home" title="Related Movies">
                <RelatedBox related={relatedMovies} />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default MovieDetail;
