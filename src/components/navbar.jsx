import React, { Component } from "react";
import {Link} from "react-router-dom"
import Login from "./login";
import {decode as base64_decode, encode as base64_encode} from 'base-64'



class NavBar extends Component {


  

    render() {

        return(
        <div>

<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">

  <Link to="Avengers" className="navbar-brand">Avengers</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        
   
      
        <Link to="try" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      
      <li className="nav-item">
        
        <Link to="Register" className="nav-link">Register</Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="s" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="s">Action</a>
          <a className="dropdown-item" href="s">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="s">Something else here</a>
        </div>
      </li>
      <Link to="Cart" className="nav-link">Cart</Link>
      <li className="nav-item">
        <a className="nav-link disabled" href="s">About us</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
     
     <Link  to="login" > <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log out</button></Link>
    </form>
  </div>
</nav>
        </div>
        );
    }
}


export default NavBar;