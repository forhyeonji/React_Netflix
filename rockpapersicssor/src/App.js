import { useState } from 'react';
import './App.css';
import Box from './component/Box';


// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 보임
// 4. 컴퓨터는 랜덤한 그림을 가진다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (승 - 초록, 패 - 빨강, 비김 - 검은색)

const choice = {
  rock : {
    name : "Rock",
    img : "http://mobileimages.lowes.com/productimages/d2404c8d-fa0b-45f0-b303-0f32594782ca/49467397.jpg"
  },
  scissors : {
    name : "Scissors",
    img : "https://www.ikea.com/us/en/images/products/sy-scissors__0112301_pe263788_s5.jpg"
  },
  paper : {
    name : "Paper",
    img : "https://m.media-amazon.com/images/I/61OorFhm6SL.jpg"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  // const [comresult, setComresult] = useState("");


  const play=(userChoice)=>{

    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  //  setComresult(comjudgement(choice[userChoice], computerChoice));
    
  };


  const randomChoice = ()=>{
    let itemArray = Object.keys(choice);  // 객체에 key값만 뽑아서 배열로 만들어주는 함수
    // console.log("itemArray는 ", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    // console.log("랜덤벨류는 ", randomItem);
    let final = itemArray[randomItem];
    // console.log("최종", final);
    return choice[final];
  }


  const judgement = (user, computer) => {
   
    if (user.name==computer.name){
      return "tie";
    } else if (user.name=="Rock") return computer.name == "Scissors"?"win":"lose";
      else if (user.name=="Scissors") return computer.name =="Paper"?"win":"lose";
      else if (user.name=="Paper") return computer.name == "Rock"?"win":"lose";
  
  };



  return (
  <div>
    <div className='main'>
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={result}/>
    </div>
    <div className='main'>
      <button onClick={() => play("scissors")}>가위</button>
      <button onClick={() => play("rock")}>바위</button>
      <button onClick={() => play("paper")}>보</button>

    </div>
    </div>
  );
}

export default App;
