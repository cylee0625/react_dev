import React, { useState} from "react";

/*useState활용*/
function Counter(){
    const [number, setNumber] = useState(0); //배열 비구조할당
    const onIncrease = () => {
        //console.log('+1');
        //setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1); //상태를 가져와서 참조하겠다(업데이트함수_함수형업데이트 최적화관련)
    };
    const onDecrease = () => {
       // console.log('-1');
       //setNumber(number - 1);
       setNumber(prevNumber => prevNumber - 1); //상태를 가져와서 참조하겠다(업데이트함수_함수형업데이트 최적화관련)
    };
    {/* 리액트는 html 태그에서 함수를 호출하는 것이 아니라 넣으주는 개념이다.*/}
    return (

        
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;