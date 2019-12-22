import React, { Component } from 'react'
import Slider from './NSlider'


const movies = [
    {
      id: 1,
      image: '/images/angularPic.jpg',
      imageBg: '/images/angularPic.jpg',
      title: 'Angular',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #1 but will test 3 to see if it works!'
    },
    {
      id: 2,
      image: '/images/reactPic.jpg',
      imageBg: '/images/reactPic.jpg',
      title: 'React',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #2 but will test 3 to see if it works!'
    },
    {
      id: 3,
      image: '/images/djangoPic.jpg',
      imageBg: '/images/djangoPic.jpg',
      title: 'Django',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #3 but will test 3 to see if it works!'
    },
    {
      id: 4,
      image: '/images/expressPic.jpg',
      imageBg: '/images/expressPic.jpg',
      title: 'Express',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #4 but will test 3 to see if it works!'
    },
    {
      id: 5,
      image: '/images/meteorPic.jpg',
      imageBg: '/images/meteorPic.jpg',
      title: 'Meteor',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #5 but will test 3 to see if it works!'

    },
    {
      id: 6,
      image: '/images/rorPic.png',
      imageBg: '/images/rorPic.png',
      title: 'Ruby on Rails',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #6 but will test 3 to see if it works!'
    },
    {
      id: 7,
      image: '/images/springPic.jpg',
      imageBg: '/images/springPic.jpg',
      title: 'Spring',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #7 but will test 3 to see if it works!'
    },
    {
      id: 8,
      image: '/images/vuePic.jpg',
      imageBg: '/images/vuePic.jpg',
      title: 'Vue',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #8 but will test 3 to see if it works!'
    },
    {
      id: 9,
      image: '/images/asapPic.jpg',
      imageBg: '/images/asapPic.jpg',
      title: 'ASAP.NET',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #9 but will test 3 to see if it works!'
    },
    {
      id: 10,
      image: '/images/emberPic.png',
      imageBg: '/images/emberPic.png',
      title: 'Emberp',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    }
  ];

  const movies1 = [
    {
      id: 1,
      image: '/images/tensorflowML.jpg',
      imageBg: '/images/tensorflowML.jpg',
      title: 'Tensor Flow'
    },
    {
      id: 2,
      image: '/images/microsoftML.jpg',
      imageBg: '/images/microsoftML.jpg',
      title: 'Microsoft CNTK (Cognitive Toolkit)'
    },
    {
      id: 3,
      image: '/images/pythonML.jpg',
      imageBg: '/images/pythonML.jpg',
      title: 'The Other stuff',
    },
    {
      id: 4,
      image: '/images/mML.svg',
      imageBg: '/images/mML.svg',
      title: 'Blah blah...'
    },
    {
      id: 5,
      image: '/images/apachesparkML.jpg',
      imageBg: '/images/apachesparkML.jpg',
      title: 'Blah blah...'
    },
    {
      id: 6,
      image: '/images/amazonML.jpg',
      imageBg: '/images/amazonML.jpg',
      title: 'Blah blah...'
    },
    {
      id: 7,
      image: '/images/pytorchML.jpg',
      imageBg: '/images/pytorchML.jpg',
      title: 'Blah blah...',
    },
    {
      id: 8,
      image: '/images/caffe2ML.jpg',
      imageBg: '/images/caffe2ML.jpg',
      title: 'Blah blah...'
    },
    {
      id: 9,
      image: '/images/apacheSingmaML.jpg',
      imageBg: '/images/apacheSingmaML.jpg',
      title: 'Blah blah...'
    },
    {
      id: 10,
      image: '/images/accordNetML.jpg',
      imageBg: '/images/accordNetML.jpg',
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