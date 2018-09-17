import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link ,
 } from "react-router-dom";

// class Class2 extends Component {
//   render() {
//     return (
//       <div>
//         <h1>class2</h1>
//       </div>
//     );
//   }
// }
const Class2 = () =>{
    return(
    <Router>
        <div>
            <Link to="/class2/">home</Link>
            <Link to="/class2/about">about</Link>
            <Link to="/class2/topics">topics</Link>
            <Route exact path="/class2/" component={Home}/>
            <Route path="/class2/about" component={About}/>
            <Route path="/class2/topics" component={Topics}/>
        </div>
    </Router>
    )
}
const Topics =({match}) =>{
    return(
        <Router>
            <div>
                <Link  to="/class2/topics/">text1</Link>
                <Link to="/class2/topics/text2">text2</Link>
                <Link to="/class2/topics/text3">text3</Link>
                <Route exact path="/class2/topics/" component={Text1}/>
                <Route path="/class2/topics/text2" component={Text2}/>
                <Route path="/class2/topics/text3" component={Text3}/>
            </div>  
        </Router>
       
    )
}
const About =() =><h1>About</h1>
const Home =() =><h1>Home</h1>
const Text1 =() =><h1>Text1</h1>
const Text2 =() =><h1>Text2</h1>
const Text3 =() =><h1>Text3</h1>
export default Class2;