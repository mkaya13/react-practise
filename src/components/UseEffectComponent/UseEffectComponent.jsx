import { useState, useEffect } from "react";

/* 

useEffect() = React hook that tells REACT to do some code when (pick one):
                This component re-renders
                This component mounts
                The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})               // Runs after every re-render
// 2. useEffect(() => {}, [])           // Runs only on mount
// 3. useEffect(() => {}, [value])      // Runs on mount + when value changes

🌀 When Does a Component Render?
A component renders:
#1 When it first loads (mounts)
#2 When its state or props change

USES

#1 Event Listeners 
#2 DOM manipulation
#3 Subscriptions (real-time updates)
#4 Fetching Data from an API
#5 Clean up when a component unmounts

*/

export default function UseEffectComponent () {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [runCount, setRunCount] = useState(0);

    /* This updates the title of the page each time count is changed
    useEffect(() => {
        document.title = `Count: ${count}`
    })
    */ 

    /*
    useEffect(() => {
        document.title = "Counter Program"
    }, [])
    */

    useEffect(() => {
        document.title = `Counter Program is Run ${runCount}`
    }, [count, count2])  // Update the document.title when count or count2 state changes

    const addCount = () => {
        setCount(count + 1)
        setRunCount(runCount + 1)
    }

    const addCount2 = () => {
        setCount2(count2 + 1)
        setRunCount(runCount + 1)
    }

    return (
        <>
            <h1>UseEffect Component Usage</h1>
            <p>Count: {count}</p>
            <p>Count2 : {count2}</p>
            <button onClick={addCount}>Count Increase</button>
            <button onClick={addCount2}>Count2 Increase</button>
        </>
    )
}