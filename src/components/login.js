import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
  }

  updateUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  updatePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  updateFields = (event) => {
    this.setState({ ...this.state, [event.target.id]: event.target.value });
  };

  updateFields2 = (event, fieldName) => {
    this.setState({ ...this.state, [fieldName]: event.target.value });
  };

  updateFieldsUpdated = (fieldName) => {
    return (event) => {
      this.setState({ ...this.state, [fieldName]: event.target.value });
    };
  };
  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <div>
          <input
            onChange={this.updateFieldsUpdated("username")}
            placeholder="Useraname or Email "
            id="username"
          />
          <input
            onChange={(e) => {
              //   this.updateFields2(e, "password");
              this.setState({ ...this.state, password: e.target.value });
            }}
            placeholder="Password"
            id="password"
            type={"password"}
          />
          <br />
          <br />
          <button>Login</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
