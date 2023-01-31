import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import leiabear from '/public/leiabear-removebg.png';
import Item from '/src/myitem';
import React from 'react';

class StarWars extends React.Component{
  constructor() {
    super ()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      gender: null,
      image: null,
    }
  }
  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88)
    // below is a template literal

    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    //const url = `https://swapi.dev/api/people/${randomNumber}/`
    fetch(url)
      .then(response => response.json())
      .then(data => {
      this.setState({
      name: data.name,
      height: data.height,
      gender: data.gender,
      image: data.image,
      loadedCharacter: true,
     })
    })

  }

  render(){
    return (
      <div>
        {
          this.state.loadedCharacter &&
          <div>
            <h3> May the Force Be With You </h3>
            <h3> {this.state.name} </h3>
            <h3> {this.state.height} cm </h3>
            <h3> {this.state.gender} </h3>
            {/* <h3> {this.state.image} </h3> */}
          <img src={this.state.image} className="" alt="characterImage" />


          </div>

        }

        <button type="button"
          onClick={() => this.getNewCharacter()}
          className="btn">
            Random StarWars Character
        </button>

      </div>

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
          {/* <Item name="Lisa Bear" /> */}
          {/* <Item name="Ella Bear" /> */}
        </p>


        <div>
          <StarWars />
        </div>


      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
