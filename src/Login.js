import React, { Component } from 'react';
import store from './redux/store';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newUser: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  handleChange(event) {
    this.setState({
      newUser: event.target.value
    })
  }

  loginUser() {
    store.dispatch({
      type: 'users/LOGIN_USER',
      payload: this.state.newUser
    })
  }

  render() {
    return (
      <div>
        <input value={this.state.newUser} onChange={this.handleChange}/>
        <button onClick={this.loginUser}>Login</button>
      </div>
    )
  }
}

export default Login;