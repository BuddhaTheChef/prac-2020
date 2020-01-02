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
            <header className="about-header">
            <h1 style={{fontWeight: 900}}>30 Day Challenge to learning a new technology</h1>
        </header>
    
        <div class="timeline-container">
 
  <div id="timeline">

      <div class="timeline-item">
        <div class="timeline-icon success">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
          </p>
          <span class="time-stamp">Pick a technology</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content right">
          <h2>Day 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Research basic concepts and pre-requsites</span>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon success">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 3</h2>
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
          <h2>Day 4</h2>
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
        <div class="timeline-content">
          <h2>Day 5</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
           <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
  </div>


        <div class="timeline-item">
        <div class="timeline-icon success">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 6</h2>
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
          <h2>Day 7</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

  <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content right">
          <h2>Day 8</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 9</h2>
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
          <h2>Day 10</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

          <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 11</h2>
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
          <h2>Day 12</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 13</h2>
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
          <h2>Day 14</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 15</h2>
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
          <h2>Day 16</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 17</h2>
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
          <h2>Day 18</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 19</h2>
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
          <h2>Day 20</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>

          <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 21</h2>
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
          <h2>Day 22</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 23</h2>
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
          <h2>Day 24</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 25</h2>
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
          <h2>Day 26</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 27</h2>
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
          <h2>Day 28</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>


    <div class="timeline-item">
        <div class="timeline-icon">
          <i class="fa fa-check-square-o" aria-hidden="true"></i>
        </div>
        <div class="timeline-content">
          <h2>Day 29</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
           <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
  </div>

   <div class="timeline-item">
        <div class="timeline-icon success">
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <div class="timeline-content right">
          <h2>Day 30</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero praesentium blanditiis consequatur aspernatur.
          </p>
          <span class="time-stamp">Thu Jan - 26 - 2017 01:54</span>
        </div>
      </div>



  </div>
  </div>
        </div>
        )

}
