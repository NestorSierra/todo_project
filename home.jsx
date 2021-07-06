import React, { Component } from "react";
import CreateTodoForm from "./createTodoForm";
import NavBar from "./nav";
import SideBarComponent from "./sideBar";
import * as todoApi from "../services/todoService";

class Home extends Component {
  state = {
    tags: todoApi.getTodos(),
    data: { name: "" },
    errors: {},
  };

  handleRefresh = () => {
    const tags = this.state.tags.map((c) => {
      return c;
    });

    this.setState({ tags });
  };

  handleDelete = (tagId) => {
    const tags = this.state.tags.filter((tag) => tag._id !== tagId);
    this.setState({ tags });
  };

  handleOnChange = (status) => {
    const statusId = parseInt(status.target.value);

    const tags =
      statusId !== 0 ? todoApi.getTodoByStatusId(statusId) : todoApi.getTodos();

    this.setState({ tags });
  };

  handleSignOut = () => {
    localStorage.removeItem("user");
    this.props.history.replace("/");
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onSignOut={this.handleSignOut} />
        <div className="row" style={{ margin: 0 }}>
          <div
            className="col-md-3"
            style={{ border: "1px solid grey", height: "100%" }}
          >
            <SideBarComponent
              tags={this.state.tags}
              onDelete={this.handleDelete}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="col-md-9">
            <main className="container">
              <CreateTodoForm onRefresh={this.handleRefresh} />
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
