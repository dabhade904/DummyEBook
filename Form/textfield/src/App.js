import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Textfield from '../src/component/textfield';
import '../src/component/textfield.css'

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
             <Textfield/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;