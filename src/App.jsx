import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import leia_bear from '/src/leia_bear.png';
import Item from '/src/myitem';
// import Starwars from '/src/starwars';
import About from '/src/about';
import Family from '/src/family';
import AskMe from '/src/askMe';
import Navbar from '/src/navbar';

import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';


import React from 'react';



function App() {
  // const [count, setCount] = useState(0)

  return (

    <Router>

          <Navbar />


    <Route path="/" exact>
        <div className="aboutleiaContainer">
          <About />
          <Family />
        </div>

      <div className="mainImage">
        <a href="" target="">
          <img src={leia_bear} className="logo" alt="Vite logo" />
        </a>
      </div>

      <div class="leiaIntro">
      <h1> Hi I'm Leia Bear </h1>
      </div>


        <div className="aboutleiaContainer">
        <AskMe />

        <Link to="/myitem">
        <button>
          <h1> Pictures </h1>
        </button>
        </Link>

        </div>
    </Route>



        <Route path= "/myitem">
          <Item />
        </Route>




    </Router>
  )
}

export default App
