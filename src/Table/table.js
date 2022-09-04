import React from "react";
import "./table.css";

export class Table extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div id="table">
        <table>
          <thead>
            <tr>
              <th>S NO</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
