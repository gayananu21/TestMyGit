import React, {useState} from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Avengers from "./components/products";
import NavBar from "./components/navbar"
import AddAvenger from "./components/register";
import ProductDetail from "./components/productDetail"
import AvengerEdit from "./components/productEdit"
import Login from "./components/login"
import App from "./App"





ReactDom.render(
    <App />,
    document.getElementById('root')
  );

  