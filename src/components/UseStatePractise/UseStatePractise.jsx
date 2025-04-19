import { useState } from "react";

function UseStatePractise () {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(10);
    const [employed, setEmployed] = useState(true);

    const updateName = () => {
        setName("SpongeBob")
    }

    const increaseAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setEmployed(!employed)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Click to Update the Name</button>
            <p>Age: {age}</p>
            <button onClick={increaseAge}>Click to Increase Age</button>
            <p>Is Employeed: {employed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Change Employment Status</button>

        </div>

    )
}

export default UseStatePractise