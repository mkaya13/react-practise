import { useState, useEffect } from "react"

export default function UseEffectWidthComponent () {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    /* This one works however, we are adding event listener constantly, and this is not good! 
    window.addEventListener("resize", handleReSize)
    console.log("Event Listener is Added")
    */

    function handleReSize() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    // Now are only adding event listener once!
    useEffect(() => {

        window.addEventListener("resize", handleReSize)
        console.log("Event Listener is Added")

        // If you ever need to unmount the component, meaning removing from the DOM, free up any resources, before the next render as well
        // so it does not lead to unexpected behavior

        return () => {
            window.removeEventListener("resize", handleReSize);
            console.log("EVENT LISTENER REMOVED");
        }

    }, [])

    // Within a component, you can add more than 1 useEffect hook.

    useEffect(() => {
        document.title = `Width: ${width} x Height: ${height}`
    }, [width, height])


    return (
        <div>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </div>
    )
}