import React, { Component } from "react";

class Tag extends Component {
  render() {
    const { tag, onDelete } = this.props;

    return (
      <div className="card" style={{ marginBottom: 5 }}>
        <div className="card-body" style={{ padding: "7px 10px" }}>
          <div
            className="row"
            style={{ padding: "0px 10px 0px 0px", margin: 0 }}
          >
            <h6 className="col-10" style={{ margin: 0, marginTop: 5 }}>
              {tag.name}
            </h6>
            <div className="col-2">
              <button
                className="btn btn-danger"
                onClick={() => onDelete(tag._id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tag;
