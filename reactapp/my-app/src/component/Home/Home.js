import React, { Component } from 'react'
import Header from './../global/Header';
import Test from './Test';
import  './../../assets/Home.css';
import Like from './Like';
import Body from './Body';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Test/>
        <Like/>
        <Body/>
      </div>
    )
  }
}
