import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as TodoServiceApi from "../services/todoService";
import { getTodos } from "./../services/todoService";

class CreateTodoForm extends Form {
  state = {
    data: { name: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().min(4).label("Todo"),
  };

  doSubmit = () => {
    console.log("submitted");
    const userId = localStorage.getItem("user");
    console.log(userId);
    if (userId !== null) {
      const todo = { ...this.state.data, userId, statusId: 1 };
      TodoServiceApi.saveTodo(todo);
    }
    const todos = TodoServiceApi.getTodos();
    this.props.onRefresh();
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
              {this.renderInput("name", "Todo")}
              {this.renderButton("Add", "fa-plus")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateTodoForm;
