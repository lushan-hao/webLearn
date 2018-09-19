import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter,
  Prompt,
  NavLink
} from "react-router-dom";
const Home = () => <h3>home</h3>;
const About = ({ match }) => {
  return (
    <h1>
      about
      {match.params.id}
    </h1>
  );
};
const MenuLink = ({to,label}) =>{
    return(
      <Route
      exact 
      path={to}
      children={({match})=>
        <Link to={to}>{label}{match?"1":"0"}</Link>
      }
      />
    )
}
const RouterChange = withRouter(({history})=>(
  <div>
    <button onClick={()=>{history.push("/class1/protected")}}>跳转</button>
  </div>
))
export default class Class1 extends Component {
  constructor(props){
    super(props);
    this.state={
      isPrompt:false
    }
  }
  render() {
    return (
      <Router>
        <div>
          <RouterChange />
          <NavLink exact to="/class1/">首页</NavLink>|
          <NavLink to="/class1/about/abc">关于</NavLink>|
          <NavLink to="/class1/redirect">重定向</NavLink>|
          <MenuLink to="/class1/" label="自定义链接"/>|
          <Prompt
          when={this.state.isPrompt}
          message="确认跳转"
          />
          <Route exact path="/class1/" render={() => <h3>你好啊</h3>} />
          <Route path="/class1/about/:id" component={About} />
          <Route path="/class1/redirect" render={()=><Redirect to="/class1/"></Redirect>}/>
        </div>
      </Router>
    );
  }
}
