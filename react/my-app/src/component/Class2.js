import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const Home = ()=><h1>Home</h1>
const About = ()=><h1>about</h1>
const Topics = ()=>{
return(
  <div>
    <Link to="/topics/text1">text1</Link>
    <Link to="/topics/text2">text2</Link>
    <Link to="/topics/text3">text3</Link>
    <Route path="/topics/:id"/>
  </div>
)
}

class Class2 extends Component {
  render() {
    return (
      <Router>
      <div>
        <Link to="/class2/about">About</Link>
        <Link to="/class2/home">Home</Link>
        <Link to="/class2/topics">Topics</Link>
        <Route exact path="/class2/home" component={Home}/>
        <Route path="/class2/about" component={About}/>
        <Route path="/class2/topics" component={Topics}/>
      </div>
      </Router>
    );
  }
}

export default Class2;