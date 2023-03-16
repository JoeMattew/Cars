import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Card from './Card'
import carImage1 from './assets/car-1.jpg';
import carImage2 from './assets/car-2.jpg';
import carImage3 from './assets/car-3.jpg';
import carImage4 from './assets/car-4.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My dream cars</h1>
    <div className="box--avatar">

      <Card 
      img={carImage1}
      nameTag="Kopeyka"
      year="2009"
      />
       <Card 
      img={carImage2}
      nameTag="Semerka"
      year="2002"
      />
       <Card 
      img={carImage3}
      nameTag="Nissan"
      year="2012"
      />
       <Card 
      img={carImage4}
      nameTag="Moskvic"
      year="2044"
      />
      
      </div>
      </div>
  )
}

export default App


/* <div className="App">
<div>
  <a href="https://vitejs.dev" target="_blank">
    <img src="/vite.svg" className="logo" alt="Vite logo" />
  </a>
  <a href="https://reactjs.org" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</div> */
