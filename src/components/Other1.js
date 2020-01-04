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
      description : 'GameMaker accommodates the creation of cross-platform and multi-genre video games using a custom drag-and-drop visual programming language or a scripting language known as Game Maker Language, which can be used to develop more advanced games that could not be created just by using the drag and drop features. GameMaker was originally designed to allow novice computer programmers to be able to make computer games without much programming knowledge by use of these actions. Recent versions of software also focus on appealing to advanced developers.',
      link: 'https://www.yoyogames.com/get'
    },
    {
      id: 2,
      image: '/images/game2.jpg',
      imageBg: '/images/game2.jpg',
      title: 'Unity',
      description : 'Unity is a cross-platform game engine developed by Unity Technologies, first announced and released in June 2005 at Apple Inc.s Worldwide Developers Conference as a Mac OS X-exclusive game engine. As of 2018, the engine had been extended to support more than 25 platforms. The engine can be used to create three-dimensional, two-dimensional, virtual reality, and augmented reality games, as well as simulations and other experiences. The engine has been adopted by industries outside video gaming, such as film, automotive, architecture, engineering and construction.',
      link: 'https://unity.com/'
    },
    {
      id: 3,
      image: '/images/game3.jpg',
      imageBg: '/images/game3.jpg',
      title: 'Unreal Engine',
      description : 'The Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. Although initially developed for first-person shooters, it has been successfully used in a variety of other genres, including platformers, fighting games, MMORPGs, and other RPGs. With its code written in C++, the Unreal Engine features a high degree of portability and is a tool used by many game developers today, with it being source-available.',
      link: 'https://www.unrealengine.com/en-US/'
    },
    {
      id: 4,
      image: '/images/game4.jpg',
      imageBg: '/images/game4.jpg',
      title: 'C# and Java',
      description : 'C++ and Java both are object-oriented programming languages, still, both C++ and Java languages are different from each other in many ways.  C++ was implemented for application and system development and is an extension of C language. Along with the features of the procedural language, C++ has added support for object-oriented programming features, exception handling, generic programming. Java has a functionality of an interpreter for printing systems which later supported network computing. It is built upon the virtual machine which is highly secure and portable in nature. It is grouped with a comprehensive library implemented to provide support for the abstraction of the existing platform. The main purpose of developing Java was to develop an easy to use and widely available programming language.',
      link: 'https://www.educba.com/c-plus-plus-vs-java/'
    },
    {
      id: 5,
      image: '/images/game5.jpg',
      imageBg: '/images/game5.jpg',
      title: 'Stencyl',
      description : 'Stencyl isnt your average game creation software, its a gorgeous, intuitive toolset that accelerates your workflow and then gets out of the way. We take care of the essentials, so you can focus on whats important - making your game yours. Publish Everywhere with extensive platform support, you can rest assured that all players will have access to your game. Today, Stencyl supports: iOS(iPhone/iPad), Android, Windows, Mac, Linux, Flash, HTML5',
      link: 'http://www.stencyl.com/'

    },
    {
      id: 6,
      image: '/images/game6.jpg',
      imageBg: '/images/game6.jpg',
      title: 'Construct 2',
      description : 'Construct is an HTML5-based 2D game editor, developed by Scirra Ltd. It is aimed primarily at non-programmers, allowing quick creation of games in a drag-and-drop fashion using a visual editor and a behavior-based logic system',
      link: 'https://www.scirra.com/'
    },
    {
      id: 7,
      image: '/images/game7.jpg',
      imageBg: '/images/game7.jpg',
      title: 'Quest',
      description : 'Quest lets you make interactive story games. Text adventure games like Zork and The Hitchhikers Guide to the Galaxy. Gamebooks like the Choose Your Own Adventure and Fighting Fantasy books. ... All you need is a story to tell. Your game can be played anywhere.',
      link: 'http://textadventures.co.uk/quest'
    },
    {
      id: 8,
      image: '/images/game8.jpg',
      imageBg: '/images/game8.jpg',
      title: 'Twine',
      description : 'Twine is a free and open-source tool created by Chris Klimas for making interactive fiction in the form of web pages. It is available on Mac OS X, Windows, and Linux.',
      link: 'https://twinery.org/'
    },
    {
      id: 9,
      image: '/images/game9.jpg',
      imageBg: '/images/game9.jpg',
      title: 'RPG Maker',
      description : 'RPG Maker MV allows you to make the RPG of your dreams! This latest version includes a host of new features and export options for MacOSX, Android, and iPhone! Download Buy Now. Simple enough for a child; powerful enough for a developer.',
      link: 'https://www.rpgmakerweb.com/products/programs/rpg-maker-mv'
    },
    {
      id: 10,
      image: '/images/game10.jpg',
      imageBg: '/images/game10.jpg',
      title: 'Game Salad',
      description : 'GameSalad Creator is an authoring tool developed by GameSalad, Inc. used by educators and non-programmers alike. It consists of a visual editor and a behavior-based logic system.',
      link: 'https://gamesalad.com/'
    }
  ];


  const movies1 = [
    {
      id: 1,
      image: '/images/tensorflowML.jpg',
      imageBg: '/images/tensorflowML.jpg',
      title: 'Tensor Flow',
      description : 'TensorFlow is a free and open-source software library for dataflow and differentiable programming across a range of tasks. It is a symbolic math library, and is also used for machine learning applications such as neural networks.',
      link: 'https://www.tensorflow.org/'
    },
    {
      id: 2,
      image: '/images/microsoftML.jpg',
      imageBg: '/images/microsoftML.jpg',
      title: 'Microsoft CNTK (Cognitive Toolkit)',
      description : 'Microsoft Cognitive Toolkit, previously known as CNTK and sometimes styled as The Microsoft Cognitive Toolkit, is a deep learning framework developed by Microsoft Research. Microsoft Cognitive Toolkit describes neural networks as a series of computational steps via a directed graph.',
      link: 'https://docs.microsoft.com/en-us/cognitive-toolkit/'
    },
    {
      id: 3,
      image: '/images/pythonML.jpg',
      imageBg: '/images/pythonML.jpg',
      title: 'Python Machine Learning',
      description : 'Introduction To Machine Learning using Python. Machine learning is a type of artificial intelligence (AI) that provides computers with the ability to learn without being explicitly programmed. Machine learning focuses on the development of Computer Programs that can change when exposed to new data.',
      link: 'https://www.geeksforgeeks.org/introduction-machine-learning-using-python/'
    },
    {
      id: 4,
      image: '/images/mML.svg',
      imageBg: '/images/mML.svg',
      title: 'Mahout Machine Learning',
      description : 'Apache Mahout is a project of the Apache Software Foundation to produce free implementations of distributed or otherwise scalable machine learning algorithms focused primarily on linear algebra.',
      link: 'https://mahout.apache.org/'
    },
    {
      id: 5,
      image: '/images/apachesparkML.jpg',
      imageBg: '/images/apachesparkML.jpg',
      title: 'Apache Spark',
      description : 'Apache Spark is an open-source distributed general-purpose cluster-computing framework. Spark provides an interface for programming entire clusters with implicit data parallelism and fault tolerance.',
      link: 'https://spark.apache.org/'
    },
    {
      id: 6,
      image: '/images/amazonML.jpg',
      imageBg: '/images/amazonML.jpg',
      title: 'Amazon Machine Learning',
      description : 'AWS has the broadest and deepest set of machine learning and AI services for your business. ... Our capabilities are built on the most comprehensive cloud platform, optimized for machine learning with high-performance compute, and no compromises on security and analytics.',
      link: 'https://aws.amazon.com/machine-learning/'
    },
    {
      id: 7,
      image: '/images/pytorchML.jpg',
      imageBg: '/images/pytorchML.jpg',
      title: 'Pytorch',
      description : 'PyTorch is an open source machine learning library based on the Torch library, used for applications such as computer vision and natural language processing. It is primarily developed by Facebooks AI Research lab. It is free and open-source software released under the Modified BSD license.',
      link: 'https://pytorch.org/'
    },
    {
      id: 8,
      image: '/images/caffe2ML.jpg',
      imageBg: '/images/caffe2ML.jpg',
      title: 'Caffe 2 Machine Learning',
      description : 'CAFFE is a deep learning framework, originally developed at University of California, Berkeley. It is open source, under a BSD license. It is written in C++, with a Python interface.',
      link: 'https://caffe2.ai/'
    },
    {
      id: 9,
      image: '/images/apacheSingmaML.jpg',
      imageBg: '/images/apacheSingmaML.jpg',
      title: 'Apache Singa Machine Learning',
      description : 'Apache SINGA is an Apache top-level project for developing an open source machine learning library. It provides a flexible architecture for scalable distributed training, is extensible to run over a wide range of hardware, and has a focus on health-care applications.',
      link: 'https://singa.apache.org/'
    },
    {
      id: 10,
      image: '/images/accordNetML.jpg',
      imageBg: '/images/accordNetML.jpg',
      title: 'Accord Net Machine Learning',
      description : 'Accord.NET is a framework for scientific computing in .NET. The source code of the project is available under the terms of the Gnu Lesser Public License, version 2.1. The framework comprises a set of libraries that are available in source code as well as via executable installers and NuGet packages.',
      link: 'http://accord-framework.net/'
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