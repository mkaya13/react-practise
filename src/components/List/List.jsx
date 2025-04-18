import "./list.css";

function List (props) {

    const lists = props.items;
    const categories = props.category;

    const capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

    
    // const lists = [{ id: 1, name: "banana", calories: 157},
    //                 { id: 2, name: "apple", calories: 95},
    //                 { id: 3, name: "orange", calories: 63}]

    // const sortedlists = lists.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    // const sortedlists = lists.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
    // const sortedlists = lists.sort((a,b) => a.calories - b.calories); // NUMERIC
    const sortedlists = lists.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC


    const listlists = sortedlists.map(fruit => <li key={fruit.id}>{capitalize(fruit.name)} 
                        &nbsp; <b>{fruit.calories}
                        </b></li>)

    return (
        <div className="item-lists">
            <h1>{categories}</h1>
            <ul>
                {listlists}
            </ul>
        </div>
    )
                    

}

export default List;