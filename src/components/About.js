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
                The foundation of web development starts with HTML. Here you
                will learn the backbone of Websites and is a great fundamental
                skill to know.
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
                Look up free coding recources and applications. Such as
                freeCodeCamp and Codecademy. Utilize blog posts that have
                tutorials in it and dont be afraid to break things.
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
                Hop into an online editor and start messing around with html,
                change the way things are positioned on the page research
                properties and google things you'd like to explore. A good way
                to practice is to try make a mock web page of yoyr favorite
                site.
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
                Apply as in fix code. Look at how people handle problems and
                look to see if you can solve it as well or find a better way to
                do it. This is a great way to progess fast.
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
                Like previously stated, look for inspiration. Find sites you
                like and try to mimic them or take a bit of what they have and
                include on your site in a diffrent way.
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
                Now comes time to take what you\'ve learned and start from
                scratch. Take any topic you want and draw out a design and
                layout of how you wnat it. (Not only will you get a feel for
                what the page will look like but it will challenge you to align
                content a certain way.)
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
                A wireframe is a visual mockup that outlines the basic structure
                of your website, app, or landing page. Traditionally, a
                wireframe is fairly simplistic. Basic shapes and elements are
                used to block out where each piece of content and UI element
                will go. Learning to wireframe helps you plan and organize
                content faster, and its easy to learn.
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
                Bloggers often write from a personal perspective that allows
                them to connect directly with their readers. Interacting with
                your readers in the comments section helps to further the
                connection between the blogger and the reader. It's a good way
                to show your progress, make connections and develop your
                personal brand.
              </p>
              <span class="time-stamp">Start a Blog</span>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-icon">
              <i class="fa fa-check-square-o" aria-hidden="true"></i>
            </div>
            <div class="timeline-content right">
              <h2>Day 10</h2>
              <p>
                Monitor social media, balance new and traditional resources,
                reading bologs and upcoming research, watch Ted Talks, and stay
                connected locally and beyond.
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
                Bloggers often write from a personal perspective that allows
                them to connect directly with their readers. In addition, most
                blogs also have a “comments” section where readers can
                correspond with the blogger. Interacting with your readers in
                the comments section helps to further the connection between the
                blogger and the reader.
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
                Finding tutorials is the best way to learn something new. At the same time it is good to draw inspiration from and implement certain features into your own project.
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
                Online forums is a good way to gain your network by getting to know people in the field at the same time it is a fast way to finding answers to your questions, develop a mentorship, and learn new information.
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
                Learn to be resourceful. There is going to be alot of times where you are stuck and finding a way to solve it, is the best part of being a developer.
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
              Simplicity and elegance can produce products that are a joy to use. True user experience goes far beyond giving customers what they say they want, or providing checklist features. In order to achieve high-quality user experience there must be a seamless merging of the services of multiple disciplines, including engineering, marketing, graphical and industrial design, and interface design.
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
                Keep up with the latest design trends to challenge yourself with new problems as well as creating a new, fun and exciting project. 
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
                Exactly as it says. Creating without color challenges you to use containers and position your content strategiaclly.
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
                Google fonts allows you to change the overall design of your project. It can dramatiacally change a product and will give you inspiration.
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
              JavaScript is somewhat easy to get started with as it is a higher level language, which means JavaScript abstracts away most of the complex details of the machine so you can focus on learning how to program. What's more, you can get started with coding JavaScript straight from your browser without setting up any development environment, which is a reason many beginners seem to like it.


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
              Think of it this way; is it useful to know for when you’re looking for a job? Absolutely. However, jQuery is slowly becoming less relevant. It’s like a lot of older technology, staying on by the power of its previous momentum.
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
