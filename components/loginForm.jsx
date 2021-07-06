import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as UserApi from "../services/userService";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  handleRegister = () => {
    console.log(this.props.history);
    this.props.history.push("/register");
  };

  doSubmit = () => {
    console.log("submitted");
    const user = UserApi.loginUser(this.state.data);
    if (user) {
      localStorage.setItem("user", user._id);

      this.props.history.replace("/home");
    }
  };

  render() {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="card" style={{ width: 400, marginTop: 50 }}>
          <div className="card-header" style={{ textAlign: "center" }}>
            <b>Login Todo</b>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login", "fa-sign-in")}
              <button
                type="button"
                className="btn btn-dark pull-right"
                onClick={this.handleRegister}
              >
                <i className="fa fa-plus"></i> Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
