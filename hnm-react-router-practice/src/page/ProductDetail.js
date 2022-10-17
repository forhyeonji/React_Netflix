import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";


const ProductDetail = () => {

  let { id } = useParams();
  const detailList = useSelector(state => state.product.detailList);
  const dispatch = useDispatch();
 
  
  const getProductDetail = () => {
    dispatch(productAction.getProductDetail({id}));
  };


  useEffect(() => {
    getProductDetail();
  }, []);


  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={detailList?.img} />
        </Col>
        <Col>
          <div>{detailList?.title}</div>
          <div>{detailList?.price}</div>
          <div>{detailList?.choice ? "Conscious Choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
