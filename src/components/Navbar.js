import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import $ from 'jquery';

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
      <div class="brand"><a href="/">Logo</a></div>
      <nav>
        <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
        <ul class="nav-list">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li class = "dropdown"><a href="#">Other</a>
              <ul class="nav-dropdown">
                <li><a href="/ox">Web Design</a></li>
                <li><a href="/lc">Web Development</a></li>
                <li><a href="/csvd">Graphic Design</a></li>
              </ul>
            </li>
            <li><a href="/other1">Other 1</a></li>
            <li><a href="/other2">Other 2</a></li>
        </ul>
      </nav>
    </div>
  </section>

  </div>
    );
  }
}

 
export default withRouter(NavBar);