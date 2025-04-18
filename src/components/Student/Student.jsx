import "./student.css";


/*
Conditional rendering = Allows to control what gets rendered in the app based on certain conditions

*/


const Student = (props) => {

    return (
    
    <div className="student">
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
    
    )
}

export default Student