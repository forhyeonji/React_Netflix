import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const ContactForm = () => {

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch()

  const createContact = (event)=>{
      event.preventDefault(); // 새로고침 안되게 하려고
      dispatch({type : "ADD-CONTACT", payload : {name, phoneNumber}})
  };

  return (
    <div>

            <Form onSubmit={createContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(event)=>setName(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event)=>setPhoneNumber(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                추가
            </Button>
            </Form>

            <button onClick={createContact}>TEST</button>

    </div>
  )
}

export default ContactForm