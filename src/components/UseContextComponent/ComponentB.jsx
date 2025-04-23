import { useState, useContext } from "react"
import { UserContext } from "./ComponentA";
import ComponentC from "./ComponentC"
import "./component.css";


export default function ComponentB () {

    const user = useContext(UserContext)

    return (
        <div className="box">
            <h1>Component B</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentC />
        </div>
    )
}