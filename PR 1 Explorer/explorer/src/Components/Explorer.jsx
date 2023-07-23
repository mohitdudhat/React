import { Component } from "react";

class Explore extends Component {
  createTable = () => {
    return this.props.record.map((v) => {
      const { grid, name, email, password, course, city } = v;
      return (
        <>
          <tr key={grid}>
            <td>{grid}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{password}</td>
            <td>
              {course.map((v) => {
                return (
                  <>
                    <tr key={grid} style={{ border: "none" }}>
                      <td colSpan={2}>{v}</td>
                    </tr>
                  </>
                );
              })}
            </td>
            <td>{city}</td>
          </tr>
        </>
      );
    });
  };
  render() {
    return (
      <>
        <h1>Using Class</h1>
        <table
          border={1}
          style={{ borderCollapse: "collapse", display: "inline-block" }}
        >
          <thead>
            <tr>
              <th>Grid</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Course</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.createTable()}</tbody>
        </table>
      </>
    );
  }
}

export default Explore;
