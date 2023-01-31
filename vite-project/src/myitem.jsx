import React from 'react';

class Item extends React.Component {

constructor(props){
  super(props)

  this.state = {
      clicks: 0
  }
}



clickMe(){
  this.setState({
    clicks: this.state.clicks + 1
  })
}

  render(){
    return (

  <div>
      <h1> Ciao, My Name is </h1>
  </div>

      )
  }
}


export default Item;
