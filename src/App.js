
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// npm install react-router-dom@5.2.0
export default class App extends Component {
  render() {
    return (
      <div>
        
      
        <Router>
        <Navbar/>
      
        
        
        {/* <News/> */}
        <Switch>
        <Route exact path="/"><News key="general" category="general"/></Route>
        <Route exact path="/business"><News key="business" category="business"/></Route> 
        <Route exact path="/entertainment"><News key="entertainment" category="entertainment"/></Route> 
        <Route exact path="/science"><News key="science" category="science"/></Route> 
        <Route exact path="/sports"><News key="sports" category="sports"/></Route> 
        <Route exact path="/technology"><News key="technology" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}

