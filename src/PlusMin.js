import './App.css';
import React,{useState} from 'react';


function Button(props){
    const numberClick=()=>{
        props.onClickNum(props.numprop);
    };

    return(
        <button onClick={numberClick}>{props.numprop}</button>
    )
}


function Operation(props) {
    return(
        <div>{props.numprop}</div>
    )
}

function PlusMin() {
const [num, SetNumoOperation]=useState(0);  

const btnClick=newNum=>{
    SetNumoOperation(newNum+num);
};
return(
    < div className="PlusMin">
    <Button numprop={+10} onClickNum={btnClick}/> 
    <Button numprop={-10} onClickNum={btnClick}/> 
    <Button numprop={-150} onClickNum={btnClick}/> 
    <Operation numprop={num}/>
    </div>
)
}

export default PlusMin;

