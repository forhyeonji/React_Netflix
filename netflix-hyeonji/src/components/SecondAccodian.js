import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const SecondAccodian = () => {
  return (
    <div>
      <div id="accodian_box">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5>Filter</h5>
            </Accordion.Header>
            <Accordion.Body className="accordian">안녕</Accordion.Body>
            <Accordion.Body className="accordian">메롱</Accordion.Body>
            <Accordion.Body className="accordian">하이</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
