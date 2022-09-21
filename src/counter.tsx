import React, {useState} from "react";

export const Counter = () => {
    let [counter, setCounter] = useState(1)

    const onClickHandler = () => {
        setCounter(counter++)
        console.log(counter)
    }

    const onClickHandlerZero = () => {
        setCounter(0)
        console.log(counter)
    }

    return <div>
        <h1>{counter}</h1>
        <button onClick={onClickHandler}>+</button>
        <button onClick={onClickHandlerZero}>0</button>
    </div>
}
