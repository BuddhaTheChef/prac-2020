import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import $ from 'jquery';
import techLogo from '../assets/techLogo.png'

class NavBar extends Component {

  render() {
    $('.dropdown').click(function(e){
      e.stopPropagation();
      $('.nav-dropdown').toggle();
    });
    
    $('html').click(function(){
      $('.nav-dropdown').hide();
    })
    
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
    
    $("#nav-toggle").click(function() {
          $("nav ul").toggle();
        });
        
    return (
      <div>
      
    <section class="navigation">
    <div class="nav-container">
      <div class="brand"><a href="/"><img src={techLogo} height="70" alt="techLogo"/></a></div>
      <nav>
        <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
        <ul class="nav-list">
          <li><a href="/about">Road Map</a></li>
          <li class = "dropdown"><a href="#!">Web Development</a>
              <ul class="nav-dropdown">
                <li><a href="/front-end-tech">Fontend Development</a></li>
                <li><a href="/other">Backend Development</a></li>
                <li><a href="/ios-tech">IOS Development</a></li>
              </ul>
            </li>
            <li><a href="/other1">Technologies</a></li>
            <li><a href="/other2">Game Development</a></li>
        </ul>
      </nav>
    </div>
  </section>

  </div>
    );
  }
}

 
export default withRouter(NavBar);