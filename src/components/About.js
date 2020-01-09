import React from "react";
import "../components/App.scss";
import $ from "jquery";

export default function About() {
  $(function() {
    var timelineBlocks = $(".timeline-item"),
      offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when entering the viewport
    $(window).on("scroll", function() {
      !window.requestAnimationFrame
        ? setTimeout(function() {
            showBlocks(timelineBlocks, offset);
          }, 100)
        : window.requestAnimationFrame(function() {
            showBlocks(timelineBlocks, offset);
          });
    });

    function hideBlocks(blocks, offset) {
      blocks.each(function() {
        $(this).offset().top >
          $(window).scrollTop() + $(window).height() * offset &&
          $(this)
            .find(".timeline-icon, .timeline-content")
            .addClass("is-hidden");
      });
    }

    function showBlocks(blocks, offset) {
      blocks.each(function() {
        $(this).offset().top <=
          $(window).scrollTop() + $(window).height() * offset &&
          $(this)
            .find(".timeline-icon")
            .hasClass("is-hidden") &&
          $(this)
            .find(".timeline-icon, .timeline-content")
            .removeClass("is-hidden")
            .addClass("animate-it");
      });
    }
  });

  return (
    <div>
      <header className="about-header">
        <h1 style={{ fontWeight: 900 }}>
          30 Day Challenge to a Software Developer
        </h1>
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
                Read everything you can about website design, and trends, and
                techniques, and best practices.Read about the basics to learn
                some code, read about design theory and read tutorials and
                current articles.
              </p>
              <span class="time-stamp">Read up on intresting technology</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 2</h2>
              <p>
                The foundation of web development starts with HTML. Here you will learn the backbone of Websites and is a great fundamental skill to know. 
              </p>
              <span class="time-stamp">Start with HTML</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon success">
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 3</h2>
              <p>
                Look up free coding recources and applications. Such as freeCodeCamp and Codecademy. Utilize blog posts that have tutorials in it and dont be afraid to break things.
              </p>
              <span class="time-stamp">
                Play around with free online resources
              </span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 4</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Understand CSS</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 5</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Apply your skills to the web</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon success">
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 6</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Look at websites you like</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 7</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Draw up a wireframe</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 8</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Learn online wireframe tools</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 9</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Start a website</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 10</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Stay Up to Date with Technology</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 11</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Get Comfortable with SEO</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 12</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Subscribe to Tutorials</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 13</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Join online community forums</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 14</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">
                Want to learn something? Google it.
              </span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 15</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Pay attention to User experince</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 16</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Pay attention to design trends</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 17</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Create apps without adding color</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 18</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Look through Google fonts</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 19</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Jump into Javascript</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 20</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Learn jQuery</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 21</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">
                Create an app with HTML, CSS, and Javascript
              </span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 22</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Learn a Fontend Framework</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 23</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Make an App using the framework</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 24</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Update your portfolio</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 25</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Learn about APIs</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 26</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Connect your app to an API</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 27</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Learn about databases</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 28</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Connect your app to a database</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content">
              <h2>Day 29</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur accusantium maxime molestiae
                sunt ipsa.
              </p>
              <span class="time-stamp">Make a Full Stack Application</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon success">
              <i class="fa fa-star" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 30</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                facilis quo. Maiores magnam modi ab libero praesentium
                blanditiis consequatur aspernatur.
              </p>
              <span class="time-stamp">Never Stop Learning</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
