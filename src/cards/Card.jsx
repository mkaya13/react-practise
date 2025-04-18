import reactPicture from "../assets/react.svg"; 

function Card (props) {
    return (
        <div className ="reactCard">
            <img className="reactCardImage" src={reactPicture} alt="reactPicture"></img>
            <h2>{props.name}</h2>
            <p>We build Decentralized Applications</p>
        </div>
        
    )
}

export default Card;