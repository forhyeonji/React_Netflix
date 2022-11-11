import React from "react";
import Accordion from "react-bootstrap/Accordion";
import InputRange from 'react-input-range';

export const SecondAccodian = () => {
  return (
    <div>
      <div id="accodian_box">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5>Filter</h5>
            </Accordion.Header>
            <Accordion.Body className="accordian">
                {/* <InputRange
                    maxValue={20}
                    minValue={0}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
                /> */}
        
        
            </Accordion.Body>
            <Accordion.Body className="accordian">메롱</Accordion.Body>
            <Accordion.Body className="accordian">하이</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
