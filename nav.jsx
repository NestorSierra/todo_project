import React from "react";

const NavBar = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand text-light" href="#">
          <b>TODO Application</b>
        </span>
        <div className="form-inline">
          <button className="btn btn-success my-2 my-sm-0" type="button">
            Settings
          </button>
          <label style={{ marginRight: "10px" }}></label>
          <button
            className="btn btn-secondary my-2 my-sm-0"
            type="button"
            onClick={props.onSignOut}
          >
            Logout
          </button>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
