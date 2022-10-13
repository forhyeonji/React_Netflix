import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  let count = useSelector(state=>state.count)
  let id = useSelector(state=>state.id)
  let password = useSelector(state=>state.password)
  
  
  let dispatch = useDispatch();


const increase = () => {
  dispatch({ type:"INCREMENT", payload:{num:5} });
}

const login = () => {
  dispatch ({ type:"LOGIN", payload:{id:"hyeonji", password:"1234"} });
}

  return (
    <div>
      <h1>{id}, {password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>로그인하기</button>
    </div>
  );
}

export default App;
