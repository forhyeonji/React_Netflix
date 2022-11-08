import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch } from "react-redux";
import { sortAction } from "../redux/actions/sortAction";
import { useState } from "react";
import { useSelector } from "react-redux";


const FirstAccodian = ({currentpage}) => {
  // const [selected, setSelected] = useState("");


  const dispatch = useDispatch();
  const OPTIONS = [
    { value: "None", name: "None" },
    { value: "popularity.desc", name: "Popularity(Desc)" },
    { value: "popularity.asc", name: "Popularity(Asc)" },
  
    { value: "release_date.desc", name: "Release Day(Desc)" },
    { value: "release_date.asc", name: "Release Day(Asc)" },
  
    { value: "vote_average.desc", name: "Vote(Desc)" },
    { value: "vote_average.asc", name: "Vote(Asc)" },
  
    { value: "revenue.desc", name: "Revenue(Desc)" },
    { value: "revenue.asc", name: "Revenue(Asc)" },
  ];


  const handleSelect = (e) => {
    console.log("11111내가선택한거", e.target.value);
    const selected = e.target.value;
    console.log("22222선택후", selected);
    dispatch(sortAction.getSort({selected, currentpage}))
  
    console.log("33333dispatch후후후", selected);
  }


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

                <select className="select_list" onChange={handleSelect}>
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
