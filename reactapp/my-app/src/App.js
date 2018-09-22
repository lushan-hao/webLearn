import React, { Component } from 'react';
import './App.css';
import	{
  BrowserRouter as	Router,	
  Route,	
  Link	
}	from	"react-router-dom";
import Test from './Test';
import Body from './Body';
import Like from './Like';
import Header from './Header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started
        </p>
          
          
<Test/>
      </div>
    );
  }
}

export default App;
