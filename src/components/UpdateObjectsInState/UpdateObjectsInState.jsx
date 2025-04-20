import React, {useState} from "react";

const UpdaterFunction = () => {

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model:"Mustang"});

    const handleYearChange = (event) => {
        setCar(car => ({...car, year: event.target.value}))  // Use spread operator.
                                                    // We do not want to modify the current state of car
    }                                               // Rather make a reference to the previous state

    const handleMakeChange = (event) => {
        setCar(car => ({...car, make: event.target.value}))  // Use spread operator.
    }

    const handleModelChange = (event) => {
        setCar(car => ({...car, model: event.target.value}))  // Use spread operator.
    }

    return (
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} />  <br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>  <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/>  <br/>
        </div>
    )
}

export default UpdaterFunction;