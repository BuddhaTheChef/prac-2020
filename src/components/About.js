import React from 'react';
import '../components/App.scss';
import $ from 'jquery';


export default function About() {
    $(function() {
        var timelineBlocks = $('.timeline-item'),
            offset = 0.8;
    
        //hide timeline blocks which are outside the viewport
        hideBlocks(timelineBlocks, offset);
    
        //on scolling, show/animate timeline blocks when entering the viewport
        $(window).on('scroll', function(){
            (!window.requestAnimationFrame) 
                ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
                : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
        });
    
        function hideBlocks(blocks, offset) {
            blocks.each(function(){
                ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.timeline-icon, .timeline-content').addClass('is-hidden');
            });
        }
    
        function showBlocks(blocks, offset) {
            blocks.each(function(){
                ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.timeline-icon').hasClass('is-hidden')) && $(this).find('.timeline-icon, .timeline-content').removeClass('is-hidden').addClass('animate-it');
    
            });
        }
    });

        return (
            <div>
            <header>
            <h1>30 Day Challenge to learning a new technology</h1>
        </header>
    
        <div class="timeline-container">
 
  <div id="timeline">

      <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content right">
          <h2>Day 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon success">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Quick Trial generation finished</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
           <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

       <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content right">
          <h2>Marketo Syncronization</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
           <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Application Licenses</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
           <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
  </div>

       <div class="timeline-item right">
        <div class="timeline-icon">
          <i class="fa fa-key" aria-hidden="true"></i>
        </div>
       
      </div>

        <div class="timeline-item">
        <div class="timeline-icon success">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Quick Trial Generation Started</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
           <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

        <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content right">
          <h2>The email was delivered to the user</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

  <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-envelope-open-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content right">
          <h2>The email was delivered to the user</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

         <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Application Licenses</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
           <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
  </div>

  </div>
  </div>
        </div>
        )

}
