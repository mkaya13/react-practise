import { useState } from "react"

const Button = () => {

    const [counter, setCounter] = useState(0)

    const handleIncrease = () => {
        setCounter(counter+1)
        console.log("OUCH")
    }

    const handleDecrease = () => {
        setCounter(counter-1)
        console.log("OUCH")
    }

    const handleClick2 = (e) => { e.target.textContent = "OUCH!"}

    return (
        <div>
            <button onClick={handleIncrease}>Click to increase {counter}</button>
            <button onClick={handleDecrease}>Click to decrease {counter}</button>
            <button onClick={(e) => handleClick2(e)}>Click me!</button>
        </div>
    
    )
}

export default Button;