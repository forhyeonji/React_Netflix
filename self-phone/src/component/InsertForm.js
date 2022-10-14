import React from 'react'
import { Button, Form } from "react-bootstrap";

const InsertForm = () => {
  return (
    <div>

            <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>성명</Form.Label>
                  <Form.Control type="text" placeholder="이름을 입력해주세요" />
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label>전화번호</Form.Label>
                  <Form.Control type="number" placeholder="전화번호를 입력해주세요" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>

    </div>
  )
}

export default InsertForm