import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import leiabear from '/public/leiabear-removebg.png';
import Item from '/src/myitem';
import React from 'react';

class StarWars extends React.Component{
  render(){
    return (
      <h1> May the Force Be With You </h1>
    )
  }
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={leiabear} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={leiabear} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <Item name="Leia Bear" /><code>src/App.jsx</code> and save to test HMR
          <Item name="Lisa Bear" />
          <Item name="Ella Bear" />
        </p>
        <StarWars />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
