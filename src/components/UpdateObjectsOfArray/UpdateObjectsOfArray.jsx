import React, {useState} from "react";

export default function UpdateObjectsOfArray () {

    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState();
    const [carModel, setCarModel] = useState();

    function handleAddCar () {

        const newCar = {year: carYear, make: carMake, model: carModel}
        
        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar (index) {
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange (event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);

    }

    function handleModelChange (event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index) => 
                <li key={index} onClick = {() => handleRemoveCar(index)}>
                    {car.year} {car.make} {car.model}
                </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} required={true} /> <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car Make" required={true} /> <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter Car Model" required={true} /> <br />
            <button onClick={handleAddCar}>Add Car</button>


        </div>
    )
}