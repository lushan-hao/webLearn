import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Class1 from './First/Class1.js';
import Class2 from './First/Class2.js';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch
} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Link to="/">Class1</Link>
          <Link to="/class2">Class2</Link>
          {/* { Switch} */}
          <Route exact path="/" component={Class1}/>
          <Route path="/class2" component={Class2}/>
          {/* { Switch } */}
        </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
