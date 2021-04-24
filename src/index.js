import React, {useState} from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Avengers from "./components/avengers";
import NavBar from "./components/navbar"
import AddAvenger from "./components/register";
import AvengerDetail from "./components/avengerDetail"
import AvengerEdit from "./components/avengerEdit"
import Login from "./components/login"
import App from "./App"





ReactDom.render(
    <App />,
    document.getElementById('root')
  );

  