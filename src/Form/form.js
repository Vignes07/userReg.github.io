import React from "react";
import "./form.css";

export class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name"
          value={this.props.firstname}
          onChange={this.props.handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name"
          value={this.props.lastname}
          onChange={this.props.handleChange}
        />
        <button
          type="submit"
          disabled={!this.props.firstname || !this.props.lastname}
        >
          Add
        </button>
      </form>
    );
  }
}
