import React, { Component } from "react";
import {Link} from "react-router-dom"
import Login from "./login";
import {decode as base64_decode, encode as base64_encode} from 'base-64'



class UserNavBar extends Component {


  

    render() {

        return(
        <div>

<nav className="navbar navbar-expand-lg  navbar-dark bg-dark">

  <Link to="Avengers" className="navbar-brand">ECARE</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
        
   
      
        <Link to="try" className="nav-link">Home <span className="sr-only">(current)</span></Link>
      
      
      
      <Link to="Cart" className="nav-link">Cart</Link>
      <Link to="Cart" className="nav-link">Orders</Link>
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


export default UserNavBar;