import './App.css';
import React,{useState} from 'react';

function Counter(){
const [count, setNum]=useState(0);

const btnClick=()=>{
  setNum(count+1);
};
return(
  <button onClick={btnClick}>{count}</button>
)
}

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
