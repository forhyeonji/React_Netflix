import React from 'react'
import { Row, Col } from 'react-bootstrap'

const PhoneItem = ({contactItem}) => {


  return (
    <div className="contact-item">
    <Row>
        <Col lg={1}>
            <img width={50} src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'></img>
        </Col>
        <Col lg={11}>
            <div> {contactItem.name} </div>
            <div> {contactItem.phoneNumber} </div>
        </Col>
    </Row>
    </div>
  )
}

export default PhoneItem