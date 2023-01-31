import React from 'react';


class Askme extends React.Component{
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
    fetch(url)
      .then(response => response.json())
      .then(data => {
      this.setState({

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
            <h3> My Siblings </h3>
            <h3> Lisa </h3>
            <h3> Ella </h3>
            <h3> Luke </h3>
            <h3> Cali </h3>
          {/* <img src={this.state.image} className="characterImage" alt="characterImage" /> */}


          </div>

        }

        <button type="button"
          onClick={() => this.getNewCharacter()}
          className="btn">
            Ask Me
        </button>

      </div>

    )
  }
}



export default Askme;
