import "../index.css";
import { useState } from "react";

function CounterOperations () {

    const [counter, setCounter] = useState(0);

    return (
    <>
        <h1>Practise Application</h1>
        <div className="counterHolder">
            <span className="counterOperations">
                <button onClick={() => {setCounter(counter+1)}}>Increase</button>
                <button onClick={() => {setCounter(counter-1)}}>Decrease</button>
            </span>
        <span>Current Amount of Counter: {counter}</span>
        </div>
    </>
    )
}

export default CounterOperations;