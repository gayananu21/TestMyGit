import React, {useState, useEffect, Component} from "react";
import {Redirect, Route} from "react-router-dom"
import {decode as base64_decode, encode as base64_encode} from 'base-64'
import axios from 'axios';
import { getRoles } from "@testing-library/react";





export default class Check extends Component {

      

    async componentDidMount() {

        let userRole =localStorage.getItem('userRole')
let decodeduserRole = base64_decode(userRole);



let token =localStorage.getItem('login')
       axios.post('http://localhost:5000/api/auth/check',token,{
       
        headers:{
          'token':token
        }
      })
      
    .then((res) => {
     if(res.data=="Admin"){

      let userRole = base64_encode(res.data);

      localStorage.setItem(`userRole`, userRole)
       console.log("User login successfully")
       console.log("Login role: ADMIN")
      
    
      
     }
    else if(res.data=="User"){
      let userRole = base64_encode(res.data);
      localStorage.setItem(`userRole`, userRole)
      console.log("User login successfully")
      console.log("Login role: USER")

     
     
    
    }

    else{
      console.log("Error while authorization")
    }
    
          
          
    }).catch((error) => {
      console.log('Authorization failed!')
      console.log('No token failed!')
      console.log('Please log in again!')
      console.log(error)
    })
}}