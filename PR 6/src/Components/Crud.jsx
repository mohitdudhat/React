import React, { useEffect, useState } from "react";

const Crud = () => {
  const initialInputState = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    salary: "",
  };

  const [input, setInput] = useState(initialInputState);
  const [alldata, setAlldata] = useState([]);
  const [edit, setEdit] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("crud"));
    setAlldata(data || []);
  }, []);

  const validateForm = () => {
    const errors = {};
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        const value = input[key];
        if (typeof value === "string" && value.trim() === "") {
          errors[key] = "This field is required";
        }
      }
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    if (edit) {
      const updatedData = alldata.map((item) =>
        item.id === edit ? { ...item, ...input } : item
      );
      setAlldata(updatedData);
      setEdit("");

      localStorage.setItem("crud", JSON.stringify(updatedData)); // Update local storage
    } else {
      const newData = [
        ...alldata,
        { id: Math.floor(Math.random() * 1000), ...input },
      ];
      setAlldata(newData);
      localStorage.setItem("crud", JSON.stringify(newData));
    }

    setInput(initialInputState);
    setShowForm(false);
  };

  const deleteData = (id) => {
    const updatedData = alldata.filter((item) => item.id !== id);
    setAlldata(updatedData);
    localStorage.setItem("crud", JSON.stringify(updatedData));
  };

  const editData = (id) => {
    const itemToEdit = alldata.find((item) => item.id === id);
    setInput(itemToEdit);
    setEdit(id);
    setShowForm(true);
  };

  return (
    <div>
      <header className="p-3">Employee Management App</header>
      <div className="container">
        <h1 className="text-center">Employee List</h1>
        <button className="btn1" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Employee"}
        </button>
        {showForm && (
          <form className="row d-flex g-3">
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="fname"
                className={`form-control ${
                  formErrors.fname ? "is-invalid" : ""
                }`}
                onChange={handleInputChange}
                value={input.fname}
              />
              {formErrors.fname && (
                <div className="invalid-feedback">{formErrors.fname}</div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lname"
                className={`form-control ${
                  formErrors.lname ? "is-invalid" : ""
                }`}
                onChange={handleInputChange}
                value={input.lname}
              />
              {formErrors.lname && (
                <div className="invalid-feedback">{formErrors.lname}</div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${
                  formErrors.email ? "is-invalid" : ""
                }`}
                onChange={handleInputChange}
                value={input.email}
              />
              {formErrors.email && (
                <div className="invalid-feedback">{formErrors.email}</div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className={`form-control ${
                  formErrors.password ? "is-invalid" : ""
                }`}
                onChange={handleInputChange}
                value={input.password}
              />
              {formErrors.password && (
                <div className="invalid-feedback">{formErrors.password}</div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className={`form-control ${
                  formErrors.address ? "is-invalid" : ""
                }`}
                onChange={handleInputChange}
                value={input.address}
              />
              {formErrors.address && (
                <div className="invalid-feedback">{formErrors.address}</div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                name="city"
                className={`form-control ${
                  formErrors.city ? "is-invalid" : ""
                }`}
                onChange={handleInputChange}
                value={input.city}
              />
              {formErrors.city && (
                <div className="invalid-feedback">{formErrors.city}</div>
              )}
            </div>
            <div className="col-md-6">
              <label className="form-label">Salary</label>
              <input
                type="text"
                name="salary"
                className={`form-control ${
                  formErrors.salary ? "is-invalid" : ""
                }`}
                onChange={handleInputChange}
                value={input.salary}
              />
              {formErrors.salary && (
                <div className="invalid-feedback">{formErrors.salary}</div>
              )}
            </div>
            <div className="col-12">
              {edit ? (
                <button type="button" className="btn1" onClick={handleSubmit}>
                  Edit
                </button>
              ) : (
                <button type="button" className="btn1" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </form>
        )}
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Address</th>
              <th>City</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.fname}</td>
                <td>{v.lname}</td>
                <td>{v.email}</td>
                <td>{v.password}</td>
                <td>{v.address}</td>
                <td>{v.city}</td>
                <td>{v.salary}</td>
                <td>
                  <button
                    className="btn1 w-10"
                    onClick={() => deleteData(v.id)}
                  >
                    Delete
                  </button>{" "}
                  &nbsp; &nbsp;
                  <button className="btn1 w-10" onClick={() => editData(v.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="b-container">
        <img className="b-image" src="b.png" alt="b.png" />
      </div>
    </div>
  );
};

export default Crud;
