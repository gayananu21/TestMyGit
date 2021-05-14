import React, {useState} from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import ProductsUser from "./components/userProducts";
import HomeProducts from "./components/homeProducts";
import NavBar from "./components/navbar"
import Register from "./components/register";
import ProductDetail from "./components/productDetail";
import ProductEdit from "./components/productEdit";
import ProfileEdit from "./components/editProfile";
import Login from "./components/login";
import {ProtectRoute} from "./components/protectRoutes"
import Carts from "./components/carts"
import About from "./components/about"
import UserOrderDetail from "./components/userOrderDetails"
import UserOrders from "./components/userOrders"
import OrderDetail from "./components/orderDetails"
import Orders from "./components/orders"
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
    
       <ProtectRoute   exact path="/edit/:id" component={ProductEdit}></ProtectRoute>
       <ProtectRoute   exact path="/Register" component={Register}></ProtectRoute>
       
  

   

       
        < Route exact path="/login" component={Login}/>


       
        < Route exact path="/Orders" component={Orders}/>

        < Route exact path="/Orders/details/:id" component={OrderDetail}/>

        
        
        <Route exact path="/detail/:id" component={ProductDetail}/>
       
        <Route exact path="/Products" component={Products}/>

      
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
    
      
    < Route exact path="/about" component={About}/>

       
       < Route exact path="/orders" component={UserOrders}/>

       < Route exact path="/home" component={HomeProducts}/>

       < Route exact path="/details/user/:id" component={UserOrderDetail}/>

       
        < Route exact path="/login" component={Login}/>

        < Route exact path="/editProfile" component={ProfileEdit}/>

        < Route exact path="/Cart" component={Carts}/>

        
        
        <Route exact path="/products/:id" component={ProductDetail}/>
       
        <Route exact path="/products" component={ProductsUser}/>

      
        <Route path= "" component={() => "404 NOT FOUND"}/>
       
        </Switch>
        
        </BrowserRouter>);
    
    }ReactDom.render(
      <App />,
      document.getElementById('root')
    ); export default  App