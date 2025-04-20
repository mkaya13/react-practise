// onChange = event handler used primarily with form elements
// ex. <input>, <textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes


import React, {useState} from "react";

function OnChangeEventHandler () {

    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Pick Up");

    const handleChangeName = (event) => {
        setName(event.target.value);   // Access the event object, access it's target, then get the value property
    }

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) => {
        setPayment(event.target.value);
    }

    const handleShippingChange = (event) => {
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChangeName} />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quatity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment Type: {payment}</p>
            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
            <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>

    )
}

export default OnChangeEventHandler;