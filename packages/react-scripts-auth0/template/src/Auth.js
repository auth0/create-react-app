import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Auth extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Auth0 Component</h2>
        </div>
        <p className="App-intro">
          You will be editing this file to get started with the React Auth0 Component
        </p>
      </div>
    );
  }
}

export default Auth;
