import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Other from './components/Other';
import Other1 from './components/Other1';
import Other2 from './components/Other2';
import Frontend from './components/Frontend';
import Ios from './components/Ios';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} /> 
        <Route path="/about" component={About} /> 
        <Route path="/other" component={Other} /> 
        <Route path="/front-end-tech" component={Frontend}/>
        <Route path="/ios-tech" component={Ios}/>
        <Route path="/other1" component={Other1} /> 
        <Route path="/other2" component={Other2} />
      </Switch>
    </Router>
  );
}

export default App;
