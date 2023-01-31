import React from 'react';


class Starwars extends React.Component{
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
          <img src={this.state.image} className="characterImage" alt="characterImage" />


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



export default Starwars;
