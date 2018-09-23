import React, { Component } from 'react'
import {NavBar, Icon } from 'antd-mobile';

export default class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
         <NavBar
      mode="dark"
      leftContent="哈尔滨"
      rightContent={[
        <Icon key="1" type="ellipsis" />,
      ]}
    >
    NavBar
    </NavBar>
    </div>
    )
  }
}
