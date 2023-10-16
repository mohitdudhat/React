import "./App.css";
import { db } from "./firebase";
import { onValue, push, update, remove } from "firebase/database";
import { useEffect, useState } from "react";

function App() {
  const [records, setRecords] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");

  const databaseURL = "https://pr-12-4898c-default-rtdb.firebaseio.com"; // Replace with your database URL

  const getUsers = () => {
    const dataPath = "/users"; // Replace with the path to the data you want to retrieve

    fetch(`${databaseURL}${dataPath}.json`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const records = Object.entries(data).map(([id, values]) => ({
            ...values,
            id,
          }));
          setRecords(records);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getUsers();
  }, [records]);

  const onSubmit = () => {
    if (editId) {
      const dataPath = `/users/${editId}`; // Replace with the path to the data you want to update

      const dataToUpdate = {
        name: name,
        phone: phone,
        email: email,
      };

      fetch(`${databaseURL}${dataPath}.json`, {
        method: "PUT",
        body: JSON.stringify(dataToUpdate),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Data updated successfully");
          } else {
            console.error("Failed to update data");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const dataPath = "/users"; // Replace with the path to the collection where you want to add data

      const dataToAdd = {
        name: name,
        email: email,
        phone: phone,
      };

      fetch(`${databaseURL}${dataPath}.json`, {
        method: "POST",
        body: JSON.stringify(dataToAdd),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Data added successfully");
          } else {
            console.error("Failed to add data");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      alert("Record successfully inserted");
    }
    getUsers();
    setName("");
    setEmail("");
    setPhone("");
    setEditId("");
  };

  const onDelete = (id) => {
    const dataPath = `/users/${id}`; // Replace with the path to the data you want to delete

    fetch(`${databaseURL}${dataPath}.json`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log("Data deleted successfully");
        } else {
          console.error("Failed to delete data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onEdit = (id, email, phone, name) => {
    setName(name);
    setEmail(email);
    setPhone(phone);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h2>User Record Management</h2>
        <div className="form-input">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-input">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-input">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        <div className="form-actions">
          {editId ? (
            <button onClick={onSubmit}>Edit</button>
          ) : (
            <button onClick={onSubmit}>Submit</button>
          )}
        </div>
      </div>
      <table className="table-dark" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((user) => {
            const { id, name, email, phone } = user;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>
                  <button onClick={() => onDelete(id)}>Delete</button>
                  <button onClick={() => onEdit(id, email, phone, name)}>
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
