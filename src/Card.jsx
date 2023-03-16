import { useState } from 'react'
// import carImage1 from './assets/car-1.jpg';

// import './App.css'



function Card(props) {
//   const [count, setCount] = useState(0)

  return (
    <div>
    <div className='avatar--pictureBox'>
    <img src={props.img} className='avatar--picture'/>
    <h3>{props.nameTag}</h3>
    <p>{props.year}</p>
    </div>
    
      </div>
  )
}

export default Card


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
