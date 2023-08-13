import React, { useState } from 'react';
import './App.css';
import './Style.css';

function App() {
  const [input, setInput] = useState([
    {
      name: '',
      address: '',
      salary: '',
    },
  ]);

  const handlechange = (index, e) => {
    const { name, value } = e.target;
    const newData = [...input];
    newData[index][name] = value;
    setInput(newData);
  };

  const addMore = () => {
    setInput([...input, { name: '', address: '', salary: '' }]);
  };

  const deleteData = (index) => {
    const newData = [...input];
    newData.splice(index, 1);
    setInput(newData);
  };

  return (
    <center>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
           <th><button onClick={() => addMore()}><i class="bi bi-plus-circle-dotted"></i></button></th>
          </tr>
        </thead>
        <tbody>
          
          {input.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  name="name"
                  value={item.name}
                  onChange={(e) => handlechange(index, e)}
                  type="text"
                  placeholder='Full Name'
                />
              </td>
              <td>
                <input
                  name="address"
                  value={item.address}
                  onChange={(e) => handlechange(index, e)}
                  type="text"
                  placeholder='Email Address'
                />
              </td>
              <td>
                <input
                  name="salary"
                  value={item.salary}
                  onChange={(e) => handlechange(index, e)}
                  type='number'
                  placeholder='Salary'
                />
              </td>
              <td>
                <button
                  onClick={() => deleteData(index)}
                  type="button"
                  value=""
                ><i class="bi bi-x-circle"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
}

export default App;
