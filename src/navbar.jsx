import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class Navbar extends React.Component {

constructor(props){
  super(props)

}

  render(){
    return (

  <div class="navbar-container">
    <ul class= "nav nav-fill">
      < li class= "nav-item">
       <NavLink to="/">
          < a class="nav-text nav-link active" aria-current="page"> Home </a>
        </NavLink>
      </li>
      < li class= "nav-item">
        < a class="nav-text nav-link active" aria-current="page" href="#"> How it works </a>
      </li>
      < li class= "nav-item">
        < a class="nav-text nav-link active" aria-current="page" href="#"> button1 </a>
      </li>
    </ul>




  </div>

      )
  }
}


export default Navbar;
