import React, { Component } from "react";
import { List } from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

export default class Body extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataList:[]
    }
  }
  componentDidMount(){
    con
  }
  render() {
    return (
      <div>
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={() => {}}
        >
          Title <Brief>subtitle</Brief>
        </Item>
      </div>
    );
  }
}
