import './App.css';
import React,{useState} from 'react';

function Plus(){
    const[plus, setPlus]=useState("+1");
    const[count, setNum]=useState(0);

    const btnClick=()=>{
        setPlus('+1');
        setNum(count+1)
      };

    return(
        <>
        <h1>{count}</h1>
        <button onClick={btnClick}>{plus}</button>
        </>
    )
}

function Plus1(){
    return(
<div className="Plus1">
    <Plus/>
</div>
    )
}

export default Plus1;