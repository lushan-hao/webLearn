import React, { Component } from 'react'
import { Carousel, Flex, WhiteSpace} from 'antd-mobile';

export default class Test extends Component {
    state = {
      data: [
        {
          val:"1",
          items:[
            {
              img:'meishi',
              title:"美食"
            },
            {
              img:'dianying',
              title:"电影"
            },
            {
              img:'jiudian',
              title:"酒店"
            },
            {
              img:'yule',
              title:"娱乐"
            },
            {
              img:'waimai',
              title:"外卖"
            },
            {
              img:'ktv',
              title:"ktv"
            },
            {
              img:'zhoubianyou',
              title:"周边游"
            },
            {
              img:'liren',
              title:"丽人"
            },
            {
              img:'xiaochi',
              title:"小吃"
            },
            {
              img:'jipiao',
              title:"机票"
            }
          ]
        },{
          val:"2",
          items:[
            {
              img:'meishi',
              title:"美食"
            },
            {
              img:'dianying',
              title:"电影"
            },
            {
              img:'jiudian',
              title:"酒店"
            },
            {
              img:'yule',
              title:"娱乐"
            },
            {
              img:'waimai',
              title:"外卖"
            },
            {
              img:'ktv',
              title:"ktv"
            },
            {
              img:'zhoubianyou',
              title:"周边游"
            },
            {
              img:'liren',
              title:"丽人"
            }
          ]
        }
      ],
      imgHeight: 210,
    }
      componentDidMount() {
        
      }
      render() {
        return (
            <Carousel className='nav-test'
              autoplay={false}
              infinite
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}
            >
            {/* <div style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
              <WhiteSpace size="lg" />
              <Flex wrap="wrap">
                <div className='test-i'>
                  <img src={require(`./../../assets/img/img/dianying.png`)}/>
                  <p>电影</p>
                </div>
                <div className='test-i'>
                  <img src={require(`./../../assets/img/img/dianying.png`)}/>
                  <p>电影</p>
                </div>
                <div className='test-i'>
                  <img src={require(`./../../assets/img/img/dianying.png`)}/>
                  <p>电影</p>
                </div>
                <div className='test-i'>
                  <img src={require(`./../../assets/img/img/dianying.png`)}/>
                  <p>电影</p>
                </div>
                <div className='test-i'>
                  <img src={require(`./../../assets/img/img/dianying.png`)}/>
                  <p>电影</p>
                </div>
                <div className='test-i'>
                  <img src={require(`./../../assets/img/img/dianying.png`)}/>
                  <p>电影</p>
                </div>
              </Flex>
              <WhiteSpace size="lg" />
              </div>

          <div style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
            2
          </div> */}
          {this.state.data.map(val=>(
            <div key={val.val} style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
           <WhiteSpace size="lg" />
              <Flex wrap="wrap">
                {val.items.map((item,index) =>(
                  <div key={index} className='test-i'>
                  <img src={require(`./../../assets/img/${item.img}.png`)}/>
                  <p>{item.title}</p>
                </div>
                ))}
              </Flex>
            </div>
          ))}
          </Carousel>
        );
      }
    }




