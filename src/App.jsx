import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Food from "./components/Food.jsx";
import Card from './cards/Card.jsx'
import Student from './components/Student/Student.jsx'
import CounterOperations from './components/CounterOperations.jsx'
import UserGreeting from './components/UserGreeting/UserGreeting.jsx'
import List from './components/List/List.jsx'
import Button from './components/Button/Button.jsx'
import UseStatePractise from './components/UseStatePractise/UseStatePractise.jsx'
import OnChangeEventHandler from './components/OnchangeEventHandler/OnchangeEventHandler.jsx'
import ColorPicker from './components/ColorPicker/ColorPicker.jsx'
import UpdateObjectsInState from "./components/UpdateObjectsInState/UpdateObjectsInState.jsx";

function App() {
  const [counter, setCounter] = useState(0);

  const fruits = [{ id: 1, name: "banana", calories: 157},
                 { id: 2, name: "apple", calories: 95},
                 { id: 3, name: "orange", calories: 63}]

  const vegetables = [{ id: 4, name: "potato", calories: 110},
                      { id: 5, name: "celery", calories: 15},
                      { id: 6, name: "carrot", calories: 25}]

                      

  return (
    <>
      <Navbar />
      <UpdateObjectsInState />
      <ColorPicker />
      <OnChangeEventHandler />
      <UseStatePractise />
      <CounterOperations />
      <Food/>
      <List items={fruits} category="Fruits"/>
      <List items={vegetables} category="Vegetables"/>
      <Card name="ReactCard"/>
      <Student name="Spongebob" age={30} isStudent = {false}/>
      <Student name="George" age={20} isStudent = {true}/>
      <UserGreeting isLoggedIn={true} username="Memocan"/>
      <UserGreeting isLoggedIn={false} username="Mehmet"/>
      <Button />
      <Footer />
    </>
  )
}

export default App
