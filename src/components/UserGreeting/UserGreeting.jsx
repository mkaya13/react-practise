import "./usergreetings.css";

const UserGreeting = (props) => {

    const welcomeMessage = <h2 className="welcomeMessage">Welcome {props.username}</h2>;

    const loginMessage = <h2 className="loginMessage">Please log in to continue {props.username}</h2>;

    return (
        <div>
            {/*
            <span>
                {
                    props.isLoggedIn ? 
                        <h2 className="welcomeMessage">Welcome {props.username}</h2> 
                        : 
                        <h2 className="loginMessage">Please log in to continue {props.username}</h2>
                }
            </span>
            */}
        
            <span>
                {props.isLoggedIn ? welcomeMessage : loginMessage}
            </span>
        </div>
    )
}

export default UserGreeting;