import React from 'react';

class AskMe extends React.Component {


  state ={
    showText: false
  };

  toggleShowText = () => {
    this.setState(prevState => ({
      showText: !prevState.showText
    }));
  };







    render(){
    return (


    <div className='aboutButton'>
      <button onClick={this.toggleShowText} type='button'>
        {this.state.showText ? 'Im Cute !!' : <h3>Ask Me</h3> }
      </button>
      {this.state.showText && <p> Leia Bear Bio Lorem ips </p>}
    </div>





        );


    }

  }


export default AskMe;
