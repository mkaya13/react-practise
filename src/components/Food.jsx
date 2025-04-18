function Food() {
    const food1 = "Orange";
    const food2 = "Banana"

    const foodArray = [food1, food2]

    return (
        <>
            <ul>
                {foodArray.map((food,index) => (
                    <li key={index}>{food}</li>
                ))}
            </ul>
        </>
    )
}

export default Food;