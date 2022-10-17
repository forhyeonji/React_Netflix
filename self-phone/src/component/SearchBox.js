import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchBox = () => {

  let dispatch = useDispatch();
  const [keyword, setKeyword] = useState();
  const findContact = (event)=>{
    event.preventDefault();
    dispatch({type:"SEARCH-CONTACT", payload:{keyword}})

  }

  return (
    <Form className="search-form" onSubmit={(event)=>findContact(event)}>    
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 검색해 주세요" onChange={event => setKeyword(event.target.value)} />
            </Col>
            <Col lg={2}>
                <Button variant="primary" type="submit">
                  찾기
                </Button>
            </Col>
            
        </Row>
    </Form>
  )
}

export default SearchBox