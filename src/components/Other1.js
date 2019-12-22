import React, { Component } from 'react'
import Slider from './NSlider'


const movies = [
    {
      id: 1,
      image: '/images/slide1.jpg',
      imageBg: '/images/slide1.jpg',
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
      image: '/images/slide3.jpg',
      imageBg: '/images/slide3.jpg',
      title: 'The Other stuff',
    },
    {
      id: 4,
      image: '/images/slide4.jpg',
      imageBg: '/images/slide4.jpg',
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
          <h1 style={{display: 'inline', fontSize: '29px'}}>30 Popular Technologies</h1>
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