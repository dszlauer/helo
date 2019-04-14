import React, { Component } from "react";
import axios from "axios";

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
      username: "",
      password: ""
    };
    this.newUser = this.newUser.bind(this);
  }

  newUser() {
    const { username, password } = this.state;

    const newUser = {
      username: username.value,
      password: password.value
    };
    axios.post("/api/auth/register", newUser).then(response => {
      this.setState({ user: response.data });
    });
  }
  render() {
    console.log(this.state);
    const { username, password } = this.state;
    return (
      <div className="auth_container">
        <p>Username: </p>
        <input
          value={username}
          onChange={e => this.setState({ username: e.target.value })}
        />
        <p>Password: </p>
        <input
          value={password}
          onChange={e => this.setState({ password: e.target.value })}
        />
        <div className="auth_button_container">
          <button>Login</button>
          <button onClick={this.newUser}>Register</button>
        </div>
      </div>
    );
  }
}
export default Auth;
