import React from 'react';

class About extends React.Component {


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
        {this.state.showText ? 'Im Cute !!' : <h3>About Me</h3> }
      </button>
      {this.state.showText && <p> Bio Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste nemo dolore? In repudiandae aliquam consectetur nemo praesentium tempore ea non quae accusantium facere nulla amet, esse exercitationem. Sit, similique. </p>}
    </div>



        );


    }

  }


export default About;
