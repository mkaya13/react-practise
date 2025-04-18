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
import Fruits from './components/Fruits/Fruits.jsx'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Navbar />
      <CounterOperations />
      <Food />
      <Fruits />
      <Card name="ReactCard"/>
      <Student name="Spongebob" age={30} isStudent = {false}/>
      <Student name="George" age={20} isStudent = {true}/>
      <UserGreeting isLoggedIn={true} username="Memocan"/>
      <UserGreeting isLoggedIn={false} username="Mehmet"/>
      <Footer />
    </>
  )
}

export default App
