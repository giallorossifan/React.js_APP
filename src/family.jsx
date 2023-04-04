 import React from 'react';

import Item from '/src/myitem';
import leia_bear from '/public/leia_bear.png';

class Family extends React.Component {

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


  <div className='familyButton'>
    <button onClick={this.toggleShowText} type='button'>
      {this.state.showText ? 'Family' : <h3>My Family</h3>}
    </button>

     {this.state.showText &&
      <div>
        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Lisa</p>
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Ella</p>
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Cali</p>
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Luke</p>
        </div>

        <div>
        <a href=" " target="_blank" className="familyNames">
          <img src={leia_bear} className="familyImages" alt="Lisa" />
        </a>
        <p style={{ textAlign: 'center' }}>Mommy & Daddy </p>
        </div>

      </div>
      }





  </div>



      );


  }

}


export default Family;
