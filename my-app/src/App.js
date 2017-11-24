import React, { Component } from 'react';
import logo from './componentstyle/imgs/logo.svg';

import './componentstyle/css/App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
// alert('%process.env.PUBLIC_URL%')
// import logo from {%process.env.PUBLIC_URL%+'/favicon.ico'};
// const logo=require( 'http://localhost:3000/favicon.ico')
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
   
        </header>
   
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
      </div>
    );
  }
}

export default App;
