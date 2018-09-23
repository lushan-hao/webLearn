import React, { Component } from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import './../../assets/App.css';
import	{
  BrowserRouter as	Router,	
  Route,	
  Link	
}	from	"react-router-dom";
import Home from './../Home/Home';
import Detail from './../detail/Detail';



class App extends Component {
  render() {
    return (
      <div className="App">
          
      <Home/>
      </div>
    );
  }
}

export default App;
