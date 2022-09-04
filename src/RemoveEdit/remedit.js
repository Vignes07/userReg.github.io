import React from "react";
import "./remedit.css";

export class RemEdit extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          name="fname"
          defaultValue={this.props.user.fname}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          name="lname"
          defaultValue={this.props.user.lname}
          onChange={this.props.handleChange}
        />
        <button
          onClick={(e) => this.props.updateSubmit(e, this.props.index)}
          type="submit"
        >
          Edit
        </button>
        <button
          onClick={(e) => this.props.remove(e, this.props.index)}
          type="submit"
        >
          Remove
        </button>
      </form>
    );
  }
}
