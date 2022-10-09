import './App.css';
import { useState, useEffect } from 'react';
// import Box from "./Box"

function App() {
  let counter = 0;
  let [counter2, setCounter2] = useState(0);
  let [value, setValue] = useState(0);

  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    setValue(value+2);
    console.log("counter는", counter, "counter2 state는", counter2);
  };
  
  useEffect(()=>{ // (=componentDidMount) api 콜 (render 끝나고 나면 호출됨)
    console.log("useEffect1 Firee")
  }, []);

  useEffect(()=>{ // (=componentDidMount) api 콜 (render 끝나고 나면 호출됨)
    console.log("useEffect2 Firee", counter2, "Value", value);
  }, [counter2, value]); // 배열 (=componentDidUpdate) 에 State를 넣으면 리액트가 주시함. 업데이트되면 알려줌.
    // 두개 따로도 가능함 useEffect이름 겹쳐도 상관 x

  return (
    <div>
      {console.log("render")}
      <div>{counter}</div>
      <div>state:{counter2}</div>
      <div>value:{value}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;