import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Card from './Card'
import carsData from './carsData'



function App() {
  // const [count, setCount] = useState(0)

const cardElements = carsData.map(car => {
  return <Card 
  car={car}
 
  />
})
  return (
    <div>
      <h1>My dream cars</h1>
    <div className="box--avatar">
     
      {cardElements}
      
      
      </div>
      </div>
  )
}

export default App


