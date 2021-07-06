import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

import * as UserApi from "../services/userService";

class Register extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().email().label("Username"),
    password: Joi.string().min(5).label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    UserApi.saveUser(this.state.data);
    this.props.history.push("/");
  };

  render() {
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="card" style={{ width: 400, marginTop: 50 }}>
          <div className="card-header" style={{ textAlign: "center" }}>
            <b>Create Account Todo</b>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name", "name")}
              <center>{this.renderButton("Register", "fa-sign-in")}</center>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
