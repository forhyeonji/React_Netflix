import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticationAction } from '../redux/actions/authenticationAction';

const Login = () => {
const [id, setId] = useState('');
const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("메롱메롱메롱")
    dispatch(authenticationAction.login(id, password));
    navigate('/');

  }

  return (
    <Container className="login-area">
    <Form className='login-form' onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        placeholder="Enter email"
        onChange={(event)=>setId(event.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
        type="password"
        placeholder="Password"
        onChange={(event)=>setPassword(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="danger" type="submit">
        Login
      </Button>
    
    </Form>
    </Container>
  )
}

export default Login