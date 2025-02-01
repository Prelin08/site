import { useState } from "react";

const numberCounter = () => {
    const [counter, setCounter] = useState(0);

    const Click1 = () => {
        setCounter(counter + 1);
    };

    const Click2 = () => {
        setCounter(counter - 1);
    };


return (
        <div>
            <p>Current amount:</p>
            <button className = {"button"} onClick = {Click2}>-</button>
            {counter}
            <button className = {"button"} onClick = {Click1}>+</button>
        </div>
       )
    };

export default numberCounter;
