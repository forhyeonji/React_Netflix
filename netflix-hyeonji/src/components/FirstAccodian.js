import React from 'react'
import Accordion from "react-bootstrap/Accordion";

const FirstAccodian = () => {
  return (
    <div>
        <div id="accodian_box">
            <Accordion defaultActiveKey="1" className="first_accodian">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <h5>Sort</h5>
                  </Accordion.Header>
                  <Accordion.Body className="accordian">
                    <h6>Sort Results By</h6>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
        </div>
    </div>
  )
}

export default FirstAccodian