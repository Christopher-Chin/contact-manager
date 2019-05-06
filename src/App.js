import React, { Component } from 'react';
import Contact from './components/Contact'; 
import Header from './components/Header'; 

import "./App.css";

class App extends Component {
  render(){

    return(
    <div className="App">
      <Header branding="Contact Manager"/>
      <Contact 
        name="Chris Chin" 
        email="chris@email.com" 
        phone="555-555-5555"
      />

      <Contact 
        name="Andrew Chin" 
        email="andrew@email.com" 
        phone="555-555-5555"
      />
    </div>
    );
  }
}

export default App;
