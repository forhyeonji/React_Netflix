import React from 'react';
import { Navbar, Container, Form, Button, Nav, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchAction } from '../redux/actions/searchAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// useState로 키워드해서 보내주기 ㅎ

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();



  const search=(event)=>{
    if (event.key == "Enter"){
      // 새로고침 금지
      event.preventDefault();
      // 입력한 검색어를 읽어와서
      let keyword=event.target.value;
      // event.target.value = null;
      navigate(`/movies?query=${keyword}`)
  }
  }

  
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src='https://noona-netflix.netlify.app/logo.png' width={140} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/movies' className='nav-item'>Movies</Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onKeyDown={(event)=>search(event)}
            />
            <Button variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default Navigation