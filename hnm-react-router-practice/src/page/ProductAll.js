import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';



const ProductAll = () => {

  const productList = useSelector(state => state.product.productList);
                                          // combineReducers로 합쳤으면 key 값을 중간에 적어줘야함
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리무슨쿼리?", searchQuery);
    dispatch(productAction.getProducts(searchQuery))
  }
  
  useEffect(()=>{
      getProducts()
    }, [query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu)=>(
            <Col lg={3}>
              <ProductCard item={menu}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll