import React, { Component } from 'react'
import Slider from './NSlider'


const movies = [
    {
      id: 1,
      image: '/images/angularPic.jpg',
      imageBg: '/images/angularPic.jpg',
      title: 'FOREST',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #1 but will test 3 to see if it works!'
    },
    {
      id: 2,
      image: '/images/reactPic.jpg',
      imageBg: '/images/reactPic.jpg',
      title: 'STUff',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #2 but will test 3 to see if it works!'
    },
    {
      id: 3,
      image: '/images/djangoPic.jpg',
      imageBg: '/images/djangoPic.jpg',
      title: 'The Other stuff',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #3 but will test 3 to see if it works!'
    },
    {
      id: 4,
      image: '/images/expressPic.jpg',
      imageBg: '/images/expressPic.jpg',
      title: 'Blah blah...',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #4 but will test 3 to see if it works!'
    },
    {
      id: 5,
      image: '/images/meteorPic.jpg',
      imageBg: '/images/meteorPic.jpg',
      title: 'Blah blah...',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #5 but will test 3 to see if it works!'

    },
    {
      id: 6,
      image: '/images/rorPic.png',
      imageBg: '/images/rorPic.png',
      title: 'Blah blah...',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #6 but will test 3 to see if it works!'
    },
    {
      id: 7,
      image: '/images/springPic.jpg',
      imageBg: '/images/springPic.jpg',
      title: 'Blah blah...',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #7 but will test 3 to see if it works!'
    },
    {
      id: 8,
      image: '/images/vuePic.jpg',
      imageBg: '/images/vuePic.jpg',
      title: 'Blah blah...',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #8 but will test 3 to see if it works!'
    },
    {
      id: 9,
      image: '/images/asapPic.jpg',
      imageBg: '/images/asapPic.jpg',
      title: 'Blah blah...',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #9 but will test 3 to see if it works!'
    },
    {
      id: 10,
      image: '/images/emberPic.png',
      imageBg: '/images/emberPic.png',
      title: 'Blah blah...',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    }
  ];

  const movies1 = [
    {
      id: 1,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2.jpg',
      title: 'FOREST'
    },
    {
      id: 2,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2.jpg',
      title: 'STUff'
    },
    {
      id: 3,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2.jpg',
      title: 'The Other stuff',
    },
    {
      id: 4,
      image: '/images/slide5.jpg',
      imageBg: '/images/slide5.jpg',
      title: 'Blah blah...'
    },
    {
      id: 5,
      image: '/images/slide5.jpg',
      imageBg: '/images/slide5.jpg',
      title: 'Blah blah...'
    },
    {
      id: 6,
      image: '/images/slide1.jpg',
      imageBg: '/images/slide1.jpg',
      title: 'Blah blah...'
    },
    {
      id: 7,
      image: '/images/slide2.jpg',
      imageBg: '/images/slide2.jpg',
      title: 'Blah blah...',
    },
    {
      id: 8,
      image: '/images/slide3.jpg',
      imageBg: '/images/slide3.jpg',
      title: 'Blah blah...'
    },
    {
      id: 9,
      image: '/images/slide4.jpg',
      imageBg: '/images/slide4.jpg',
      title: 'Blah blah...'
    },
    {
      id: 10,
      image: '/images/slide5.jpg',
      imageBg: '/images/slide5.jpg',
      title: 'Blah blah...'
    }
  ];
  
  class Other1 extends Component {
    render() {
      return (
        <div>
          <div style={{marginTop: '90px', textAlign: 'center'}}>
          <h1 style={{display: 'inline', fontSize: '29px', color: 'whitesmoke'}}>30 Popular Technologies</h1>
          </div>
          <Slider>
            {movies.map(movie => (
              <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            ))}
          </Slider>
          <Slider>
            {movies.map(movie => (
              <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            ))}
          </Slider>
          <Slider>
            {movies1.map(movie1 => (
              <Slider.Item movie={movie1} key={movie1.id}>item1</Slider.Item>
            ))}
          </Slider>
        </div>
      );
    }
  }
  
  export default Other1;