/*
updater function = A function passed as an argument to setState() usually
ex. setYear(arrow function)
Allow for safe updates based on the previous state
Used with multiple state updates and asynchronous functions
Good practise to use updater functions
*/

import React, {useState} from "react";

const UpdaterFunction = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(previousState => previousState + 1);
        setCount(previousState => previousState + 1);
        setCount(previousState => previousState + 1);

        /*
        Uses the CURRENT state to calculate NEXT state.
        Set functions do not trigger an update.
        React batches together state updates for performance reasons.
        NEXT state becomes the CURRENT state for an update
        This will not update, because the way react works. It does not update the state 3 times
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
        */
    }

    return (
    
    <div>
        <p>Current value: {count}</p>
        <button onClick={increment}>Increase</button>

    </div>)

}

export default UpdaterFunction;