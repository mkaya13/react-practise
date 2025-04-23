import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB";
import "./component.css";

export const UserContext = createContext();

export default function ComponentA() {
    const [user, setUser] = useState("BroCode");     // Final value (shown & shared)
    const [inputUser, setInputUser] = useState(""); // Input field value

    const handleInputChange = (event) => {
        setInputUser(event.target.value);
    };

    const handleSubmit = () => {
        setUser(inputUser);
        setInputUser("");
    };

    return (
        <div className="box">
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <input 
                type="text" 
                placeholder="Enter a User Name" 
                value={inputUser} 
                onChange={handleInputChange} 
                required 
            />
            <br />
            <button onClick={handleSubmit}>Update the User</button>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    );
}
