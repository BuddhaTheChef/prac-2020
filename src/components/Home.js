import React, { Component } from 'react';
import Parallax from 'parallax-js';
import layer1 from '../assets/gPic.png';
import layer2 from '../assets/rPic.svg';
import layer3 from '../assets/OPic.png';
import layer4 from '../assets/wPic.png';

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
                <p class="typing-div">We got you.<span className="line">|</span></p> 
            </div>
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden', height: '500px'}}>
             <ul ref={el => this.scene = el}>
             <li className="layer" data-depth="-11">
             <img src={layer4} height="350" alt="cool"/>
        </li>
        <li className="layer" data-depth="-3">
        <img src={layer3} height="350" alt="cool"/>
        </li>
        <li className="layer" data-depth="13">
        <img src={layer1} height="350" alt="cool"/>
        </li>
        <li className="layer" data-depth="5">
        <img src={layer2} height="350" alt="cool"/>
        </li>
      </ul>
      </div>
          </div>
        )
    }
}
