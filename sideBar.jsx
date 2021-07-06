import React, { Component } from "react";
import Tag from "./tag";
import { getStatus } from "../services/todoStatusService";

class SideBarComponent extends Component {
  renderTags() {
    const { tags, onDelete } = this.props;
    if (tags.length === 0) return <p>There are no items</p>;

    return (
      <React.Fragment>
        <small>Showing total of {tags.length} todo items</small>
        <br />
        {tags.map((tag) => (
          <Tag key={tag._id} tag={tag} onDelete={onDelete} />
        ))}
      </React.Fragment>
    );
  }

  render() {
    const status = getStatus();

    return (
      <React.Fragment>
        <aside style={{ padding: "10px", borderColor: "honeydew" }}>
          <div>
            <label htmlFor="select-status" className="label-control">
              <b>TODOS:</b>
            </label>
            <select
              defaultValue="0"
              name="select-status"
              id="status"
              className="form-control"
              onChange={this.props.onChange}
            >
              {status.map((statu) => (
                <option key={statu._id} value={statu._id}>
                  {statu.name}
                </option>
              ))}
              <option value="0">All Todos</option>
            </select>
          </div>
          <br />
          <div>{this.renderTags()}</div>
        </aside>
      </React.Fragment>
    );
  }
}

export default SideBarComponent;
