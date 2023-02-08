import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import leia_bear from '/public/leia_bear.png';
import Item from '/src/myitem';
// import Starwars from '/src/starwars';
import About from '/src/about';
import Family from '/src/family';
import AskMe from '/src/askMe';



import React from 'react';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">


        <div className="aboutleiaContainer">
          <About />
          <Family />
        </div>

      <div className="mainImage">
        <a href=" " target="_blank">
          <img src={leia_bear} className="logo" alt="Vite logo" />
        </a>
      </div>

      <div class="leiaIntro">
      <h1> Hi I'm Leia Bear </h1>
      </div>

      {/* <div className="card"> */}

        <div className="aboutleiaContainer">
        <AskMe />
        <Family />
        </div>





      {/* </div> */}
    </div>
  )
}

export default App
