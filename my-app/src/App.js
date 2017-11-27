import React, { Component } from 'react';
import logo from './componentstyle/imgs/logo.svg';
import './componentstyle/css/App.css';
import { Button } from 'react-bootstrap';
import {FormattedMessage } from 'react-intl';


class App extends Component {

  render() {
    console.log(navigator.language.split('_')[0])
    
    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
          <FormattedMessage
          id='hello'
    />
    </h1>
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
