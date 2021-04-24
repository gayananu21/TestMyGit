import React, {useState} from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Avengers from "./components/avengers";
import NavBar from "./components/navbar"
import Register from "./components/register";
import AvengerDetail from "./components/avengerDetail";
import AvengerEdit from "./components/avengerEdit";
import Login from "./components/login";
import {ProtectRoute} from "./components/protectRoutes"
import Carts from "./components/carts"
import {decode as base64_decode, encode as base64_encode} from 'base-64'
import UserNavBar from "./components/userNavBar"





let token =localStorage.getItem('login')

let userRole =localStorage.getItem('userRole')
let decodeduserRole = base64_decode(userRole);


function App(){
    
  if(decodeduserRole=="Admin"){

    return (
<BrowserRouter>
<NavBar/>
<Switch>
    
       <ProtectRoute   exact path="/edit/:id" component={AvengerEdit}></ProtectRoute>
       <ProtectRoute   exact path="/Register" component={Register}></ProtectRoute>
       
  

   

       
        < Route exact path="/login" component={Login}/>

        < Route exact path="/Cart" component={Carts}/>

        
        
        <Route exact path="/detail/:id" component={AvengerDetail}/>
       
        <Route exact path="/Avengers" component={Avengers}/>

      
        <Route path= "" component={() => "404 NOT FOUND"}/>
       
        </Switch>
</BrowserRouter>
      
    )
  }


  if(!token) {
    return <Login   token={token}  />
  
  }


  return(
    <BrowserRouter>
    
   <UserNavBar/>
  
    <Switch>
    
       <ProtectRoute   exact path="/edit/:id" component={AvengerEdit}></ProtectRoute>
       <ProtectRoute   exact path="/Register" component={Register}></ProtectRoute>
       
  

   

       
        < Route exact path="/login" component={Login}/>

        < Route exact path="/Cart" component={Carts}/>

        
        
        <Route exact path="/detail/:id" component={AvengerDetail}/>
       
        <Route exact path="/Avengers" component={Avengers}/>

      
        <Route path= "" component={() => "404 NOT FOUND"}/>
       
        </Switch>
        
        </BrowserRouter>);
    
    }ReactDom.render(
      <App />,
      document.getElementById('root')
    ); export default  App