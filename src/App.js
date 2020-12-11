import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar"
import CreateSpend from "./components/createSpend"
import CreateUser from "./components/createUser"
import EditSpend from "./components/editSpend"
import SpendList from "./components/spendList"

function App() {
  return (
   <Router>
     <Navbar />
     <br/>
     <Route path="/" exact component={SpendList}/>
     <Route path="/edit/:id" component={EditSpend}/>
     <Route path="create" component={CreateSpend}/>
     <Route path="/user" component={CreateUser}/>
   </Router>
  );
}

export default App;
