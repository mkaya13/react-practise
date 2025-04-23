import React, { useContext } from "react"
import "./component.css";
import { UserContext } from "./ComponentA.jsx";

export default function ComponentD () {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>Component D</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    )
}