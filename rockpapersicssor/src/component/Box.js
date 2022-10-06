import React from 'react'

const Box = (props) => {

  let result;

  if (
      props.title === "Computer" &&
      props.result !== "tie" &&
      props.result !== "" ) {
        // 카드가 computer 카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
      result = props.result === "win" ? "lose" : "win";
    } else {
      result = props.result;
    }

    if (props.title==="Computer"){
      console.log("Computer", result);
    }

    return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img src={props.item && props.item.img}  className='item-img'/>
        <h2>{result}</h2>
    </div>
  );
};

export default Box;