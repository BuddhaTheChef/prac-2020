import React, { Component } from 'react';
import logo from '../logo.svg';
import Parallax from 'parallax-js';
import layer1 from '../assets/layer1.png';
import layer2 from '../assets/layer2.png';
import layer3 from '../assets/layer3.png';
import layer4 from '../assets/layer4.png';

export default class Home extends Component {
    componentDidMount() {
        this.parallax = new Parallax(this.scene)
      }
      componentWillUnmount() {
        this.parallax.disable()
      }
    render() {
        return (
            <div>
                <div style={{padding: '70px'}}>
                <p class="typing-div">Intrested in becoming an engineer?</p>
                <p class="typing-div">Well look no further.</p> 
                <p class="typing-div">We got you.<span>|</span></p> 
            </div>
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', height: '500px'}}>
             <ul ref={el => this.scene = el}>
        <li className="layer" data-depth="-17">
          <img src={layer1} height="350" alt="cool"/>
        </li>
        <li className="layer" data-depth="-11">
          <img src={layer2} height="350" alt="cool"/>
        </li>
        <li className="layer" data-depth="17">
          <img src={layer3} height="350" alt="cool"/>
        </li>
        <li className="layer" data-depth="7">
          <img src={layer4} height="350" alt="cool"/>
        </li>
        <li className="App-logo" data-depth="0">
          <img src={logo} height="350" alt="cool"/>
        </li>
      </ul>
      </div>
          </div>
        )
    }
}
