import React, { Component } from 'react';
import Login from './Login';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: ''
    }

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(user) {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>Logged in with {this.state.user}</h1>
        <Login loginAction={this.loginUser} />
      </div>
    );
  }
}

export default App;
