import React, { Component } from 'react'
import Slider from './NSlider'


const movies = [
    {
      id: 1,
      image: '/images/angularPic.jpg',
      imageBg: '/images/angularPic.jpg',
      title: 'Angular',
      description : 'AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML syntax to express your applications components clearly and succinctly. AngularJS data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.',
      link: 'https://angular.io/'
    },
    {
      id: 2,
      image: '/images/reactPic.jpg',
      imageBg: '/images/reactPic.jpg',
      title: 'React',
      description : 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Build encapsulated components that manage their own state, then compose them to make complex UIs.',
      link: 'https://reactjs.org/'
    },
    {
      id: 3,
      image: '/images/djangoPic.jpg',
      imageBg: '/images/djangoPic.jpg',
      title: 'Django',
      description : 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.',
      link: 'https://www.djangoproject.com/'
    },
    {
      id: 4,
      image: '/images/expressPic.jpg',
      imageBg: '/images/expressPic.jpg',
      title: 'Express',
      description : 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
      link: 'https://expressjs.com/'
    },
    {
      id: 5,
      image: '/images/meteorPic.jpg',
      imageBg: '/images/meteorPic.jpg',
      title: 'Meteor',
      description : 'Accomplish in 10 lines what would otherwise take 1000, thanks to an integrated JavaScript stack that extends from the database to the end users screen. Build apps for any device. Use the same code whether you’re developing for web, iOS, Android, or desktop. Hot push new features without app store approval or forcing users to download a new native app.',
      link: 'https://www.meteor.com/'

    },
    {
      id: 6,
      image: '/images/rorPic.png',
      imageBg: '/images/rorPic.png',
      title: 'Ruby on Rails',
      description : 'Learning to build a modern web application is daunting. Ruby on Rails makes it much easier and more fun. It includes everything you need to build fantastic applications, and you can learn it with the support of our large, friendly community.',
      link: 'https://rubyonrails.org/'
    },
    {
      id: 7,
      image: '/images/springPic.jpg',
      imageBg: '/images/springPic.jpg',
      title: 'Spring',
      description : 'Spring Boot is designed to get you up and running as quickly as possible, with minimal upfront configuration of Spring. Spring Boot takes an opinionated view of building production-ready applications.',
      link: 'https://spring.io/'
    },
    {
      id: 8,
      image: '/images/vuePic.jpg',
      imageBg: '/images/vuePic.jpg',
      title: 'Vue',
      description : 'Already know HTML, CSS and JavaScript? Read the guide and start building things in no time. Versatile, An incrementally adoptable ecosystem that scales between a library and a full-featured framework. Performant',
      link: 'https://vuejs.org/'
    },
    {
      id: 9,
      image: '/images/asapPic.jpg',
      imageBg: '/images/asapPic.jpg',
      title: 'ASAP.NET',
      description : '.NET is a developer platform made up of tools, programming languages, and libraries for building many different types of applications. ASP.NET extends the .NET developer platform with tools and libraries specifically for building web apps.',
      link: 'https://dotnet.microsoft.com/apps/aspnet'
    },
    {
      id: 10,
      image: '/images/emberPic.png',
      imageBg: '/images/emberPic.png',
      title: 'Ember',
      description : 'Developers write dramatically less code with integrated templates that update automatically when the underlying data changes. No need to waste time on trivial choices. Embers abstractions allow developers to focus on what makes your app unique.Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help developers efficiently get the job done.',
      link: 'https://emberjs.com/'
    }
  ];

  const movies0 = [
    {
      id: 1,
      image: '/images/game1.jpg',
      imageBg: '/images/game1.jpg',
      title: 'Game Maker Studio',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #1 but will test 3 to see if it works!'
    },
    {
      id: 2,
      image: '/images/game2.jpg',
      imageBg: '/images/game2.jpg',
      title: 'Unity',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #2 but will test 3 to see if it works!'
    },
    {
      id: 3,
      image: '/images/game3.jpg',
      imageBg: '/images/game3.jpg',
      title: 'Unreal Engine',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #3 but will test 3 to see if it works!'
    },
    {
      id: 4,
      image: '/images/game4.jpg',
      imageBg: '/images/game4.jpg',
      title: 'C# and Java',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #4 but will test 3 to see if it works!'
    },
    {
      id: 5,
      image: '/images/game5.jpg',
      imageBg: '/images/game5.jpg',
      title: 'Stencyl',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #5 but will test 3 to see if it works!'

    },
    {
      id: 6,
      image: '/images/game6.jpg',
      imageBg: '/images/game6.jpg',
      title: 'Construct 2',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #6 but will test 3 to see if it works!'
    },
    {
      id: 7,
      image: '/images/game7.jpg',
      imageBg: '/images/game7.jpg',
      title: 'Quest',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #7 but will test 3 to see if it works!'
    },
    {
      id: 8,
      image: '/images/game8.jpg',
      imageBg: '/images/game8.jpg',
      title: 'Twine',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #8 but will test 3 to see if it works!'
    },
    {
      id: 9,
      image: '/images/game9.jpg',
      imageBg: '/images/game9.jpg',
      title: 'RPG Maker',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #9 but will test 3 to see if it works!'
    },
    {
      id: 10,
      image: '/images/game10.jpg',
      imageBg: '/images/game10.jpg',
      title: 'Game Salad',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    }
  ];


  const movies1 = [
    {
      id: 1,
      image: '/images/tensorflowML.jpg',
      imageBg: '/images/tensorflowML.jpg',
      title: 'Tensor Flow',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 2,
      image: '/images/microsoftML.jpg',
      imageBg: '/images/microsoftML.jpg',
      title: 'Microsoft CNTK (Cognitive Toolkit)',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 3,
      image: '/images/pythonML.jpg',
      imageBg: '/images/pythonML.jpg',
      title: 'Python Machine Learning',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 4,
      image: '/images/mML.svg',
      imageBg: '/images/mML.svg',
      title: 'Mahout Machine Learning',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 5,
      image: '/images/apachesparkML.jpg',
      imageBg: '/images/apachesparkML.jpg',
      title: 'Apache Spark',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 6,
      image: '/images/amazonML.jpg',
      imageBg: '/images/amazonML.jpg',
      title: 'Amazon Machine Learning',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 7,
      image: '/images/pytorchML.jpg',
      imageBg: '/images/pytorchML.jpg',
      title: 'Pytorch',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 8,
      image: '/images/caffe2ML.jpg',
      imageBg: '/images/caffe2ML.jpg',
      title: 'Caffe 2 Machine Learning',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 9,
      image: '/images/apacheSingmaML.jpg',
      imageBg: '/images/apacheSingmaML.jpg',
      title: 'Apache Singa Machine Learning',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    },
    {
      id: 10,
      image: '/images/accordNetML.jpg',
      imageBg: '/images/accordNetML.jpg',
      title: 'Accord Net Machine Learning',
      description : 'This is a test to see if individual content works, as of right now this content is just for the ID #10 but will test 3 to see if it works!'
    }
  ];
  
  class Other1 extends Component {
    render() {
      return (
        <div>
          {/* <div style={{marginTop: '90px', textAlign: 'center'}}>
          <h1 style={{display: 'inline', fontSize: '29px', color: 'whitesmoke'}}>30 Popular Technologies</h1>
          </div> */}
          <Slider>
            {movies.map(movie => (
              <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
            ))}
          </Slider>
          <Slider>
            {movies0.map(movie => (
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