function Fruits () {
    
    const fruits = [{ id: 1, name: "banana", calories: 157},
                    { id: 2, name: "apple", calories: 95},
                    { id: 3, name: "orange", calories: 63}]

    // const sortedFruits = fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // const sortedFruits = fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // const sortedFruits = fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
    const sortedFruits = fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC


    const listFruits = sortedFruits.map(fruit => <li key={fruit.id}>{fruit.name} 
                        &nbsp; <b>{fruit.calories}
                        </b></li>)

    return (
        <ul>
            {listFruits}
        </ul>
    )
                    

}

export default Fruits;