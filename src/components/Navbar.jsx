function Navbar () {

    const elementsArray = [
        {
            id: 1,
            path: "/",
            text: "Home"
        },
        {
            id: 2,
            path: "/",
            text: "About"
        },
        {
            id: 3,
            path: "/",
            text: "Services"
        },
        {
            id: 4,
            path: "/",
            text: "Contact"
        }
    ]


    return (
        <>
            <nav>
                <ul>
                    {elementsArray.map((element) => (
                        <li key={element.id}><a href="/">{element.text}</a></li>
                    ))}
                </ul>
            </nav>
        </>
    )
} 

export default Navbar