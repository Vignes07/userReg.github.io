import React from "react";
import { Header } from "./Header/header";
import { Form } from "./Form/form";
import { Table } from "./Table/table";
import { RemEdit } from "./RemoveEdit/remedit";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fname: "",
      lname: "",
      firstname: "",
      lastname: "",
    };
  }
  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  updateSubmit = (event, index) => {
    event.preventDefault();
    let data = [...this.state.data];

    data[index].fname = this.state.fname ? this.state.fname : data[index].fname;
    data[index].lname = this.state.lname ? this.state.lname : data[index].lname;

    this.setState({
      data: data,
    });
  };

  remove = (event, index) => {
    event.preventDefault();
    let data = [...this.state.data];
    data.splice(index, 1);

    this.setState({
      data: data,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let data = [...this.state.data];
    data.push({
      fname: this.state.firstname,
      lname: this.state.lastname,
    });

    this.setState({
      data: data,
      firstname: "",
      lastname: "",
    });
  };
  render() {
    return (
      <div>
        <Header />
        {this.state.data.map((user, index) => {
          return (
            <RemEdit
              key={index}
              updateSubmit={this.updateSubmit}
              handleChange={this.handleChange}
              remove={this.remove}
              user={user}
              index={index}
            />
          );
        })}
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          firstname={this.state.firstname}
          lastname={this.state.lastname}
        />
        <Table data={this.state.data} />
      </div>
    );
  }
}
