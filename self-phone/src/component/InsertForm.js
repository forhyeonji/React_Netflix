import React from 'react'
import { Button, Form } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const InsertForm = () => {

  let [name, setName] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');

  let dispatch = useDispatch();
  const createContact = (event) => {
        event.preventDefault();
        dispatch({ type: "ADD-CONTACT", payload:{ name, phoneNumber } });

    }

  return (
    <div>

            <Form onSubmit={(event) => createContact(event)}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>성명</Form.Label>
                  <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event)=>setName(event.target.value)} />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label>전화번호</Form.Label>
                  <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event)=>setPhoneNumber(event.target.value)} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  등록
                </Button>
            </Form>

    </div>
  )
}

export default InsertForm