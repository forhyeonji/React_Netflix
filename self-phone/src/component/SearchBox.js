import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Form className="search-form">    
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 검색해 주세요" />
            </Col>
            <Col lg={2}>
                <Button>찾기</Button>
            </Col>
            
        </Row>
    </Form>
  )
}

export default SearchBox