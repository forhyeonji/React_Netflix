import React, { useEffect, useState } from "react";
import BlankBanner from "../components/BlankBanner";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Badge, Modal, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faStar, faFilm } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import ReviewBox from "../components/ReviewBox";
import RelatedBox from "../components/RelatedBox";
import { detailAction } from "../redux/actions/detailAction";
import { ClipLoader } from "react-spinners";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { detailMovies, detailReviews, detailLoading, relatedMovies } =
    useSelector((state) => state.detail);

  const { genreList } = useSelector((state) => state.movie);
  const location = useLocation();
  const { item } = location.state;

  const paramsId = useParams();
  const params = paramsId.id;
  const API_KEY = process.env.REACT_APP_API_KEY;


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

  console.log("aaa디테일", detailMovies);
  console.log("bbb리뷰", detailReviews);
  console.log("ccc관련", relatedMovies);

  return (
    <div>
      <BlankBanner />
      <Container>
        <Row>
          <Col>
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
          <Col>
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
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span className="score">{item.vote_average}</span>

              <FontAwesomeIcon icon={faUsers} className="icon" />
              <span className="score">{item.popularity}</span>

              <span className="adult">{item.adult ? "청불" : "Under 18"}</span>
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

            <div className="budget_box" onClick={() => setShow(true)}>
              <FontAwesomeIcon icon={faFilm} />
              <span> Watch Trailer</span>
            </div>

            <Modal
              show={show}
              onHide={() => setShow(false)}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Custom Modal Styling
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                  commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                  ipsam atque a dolores quisquam quisquam adipisci possimus
                  laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                  accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                  reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                  deleniti rem!
                </p>
              </Modal.Body>
            </Modal>



          </Col>
        </Row>

        <Row>
          <Col>
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="profile" title="Reviews">
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
