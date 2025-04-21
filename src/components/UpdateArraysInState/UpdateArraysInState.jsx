import React, {useState} from "react"

export default function UpdateArraysInState ()  {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    const handleAddFood = () => {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "" //To empty the field after we sent.

        setFoods(f => ([...f, newFood]));   // We would like to add the newFood to previous foods state

    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }


    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter the food name" />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}