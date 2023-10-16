import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
} from "@firebase/firestore";
export const Crud = () => {
  const tbl = collection(db, "Users");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [record, setRecord] = useState([]);
  const [edit, setEdit] = useState("");
  const getData = async () => {
    let data = await getDocs(tbl);
    setRecord(data.docs.map((doc, i) => ({ id: doc.id, ...doc.data() })));
  };
  const handleSubmit = async () => {
    if (edit) {
      try {
        await setDoc(doc(tbl, edit), { name, phone });
        alert("Updated");
        getData();
      } catch (error) {
        console.error("Error updating document:", error);
      }
    }
    if (!edit) {
      await addDoc(tbl, { name, phone });
      getData();
      alert("Added");
    }
    setName("");
    setPhone("");
    setEdit("");
  };
  const handleDelete = async (id) => {
    try {
      const data = doc(tbl, id);
      await deleteDoc(data);
      getData();
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  const handleEdit = async (id, name, phone) => {
    setName(name);
    setPhone(phone);
    setEdit(id);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Firebase Crud</h1>
      <div className="form-container">
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <th className="form-label">Name</th>
              <th>
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </th>
            </tr>
            <tr>
              <th className="form-label">Phone</th>
              <th>
                <input
                  type="text"
                  value={phone}
                  name="name"
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
              </th>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  value="Submit"
                  onClick={handleSubmit}
                  className="submit-button"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <hr />

      <table className="data-table" border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {record.map((record, index) => {
            return (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.phone}</td>
                <td>
                  <button
                    onClick={() =>
                      handleEdit(record.id, record.name, record.phone)
                    }
                    className="action-button"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleDelete(record.id, record.name, record.phone)
                    }
                    className="action-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
