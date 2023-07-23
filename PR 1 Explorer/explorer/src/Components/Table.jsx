import React from "react";

const renderCourse = (course) => {
  return course.map((courseItem) => <p key={courseItem}>{courseItem}</p>);
};

const createTable = (record) => {
  return record.map((v) => {
    const { grid, name, email, password, course, city } = v;
    return (
      <tr key={grid}>
        <td>{grid}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{password}</td>
        <td>{renderCourse(course)}</td>
        <td>{city}</td>
      </tr>
    );
  });
};

const Table = ({ record }) => {
  return (
    <>
      <h1>Using Function</h1>
      <table border={1} style={{ borderCollapse: "collapse" , display : "inline-block"}}>
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
        <tbody>{createTable(record)}</tbody>
      </table>
    </>
  );
};

export default Table;
