import React, { Component } from 'react';
import './App.css';
import Mail from './Mail_hooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Genesia</h1>
        <Mail />
        <h4 className="thanks">
          Thanks to <a href="http://mailnesia.com/">Mailnesia</a>
        </h4>
      </div>
    );
  }
}

export default App;
