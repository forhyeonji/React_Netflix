import React from "react";
import Accordion from "react-bootstrap/Accordion";


const OPTIONS = [
  { value: "None", name: "None" },
  { value: "Popularity(Desc)", name: "Popularity(Desc)" },
  { value: "Popularity(Asc)", name: "Popularity(Asc)" },

  { value: "Release Day(Desc)", name: "Release Day(Desc)" },
  { value: "Release Day(Asc)", name: "Release Day(Asc)" },

  { value: "Vote(Desc)", name: "Vote(Desc)" },
  { value: "Vote(Asc)", name: "Vote(Asc)" },

  { value: "Revenue(Desc)", name: "Revenue(Desc)" },
  { value: "Revenue(Asc)", name: "Revenue(Asc)" },
];

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
              <div className="sort_box">
                <h6>Sort Results By</h6>

                <select className="select_list">
                  {OPTIONS.map((option) => (
                    <option key={option.value} value={option.value} className="select_option">
                      {option.name}
                    </option>
                  ))}
                </select>

              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FirstAccodian;
