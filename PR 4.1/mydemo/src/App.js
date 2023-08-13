import React, { useState } from 'react';
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    date: '',
    bio: '',
    gender: '',
    agree: false,
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    date: '',
    bio: '',
    gender: '',
    agree: '',
  });
  const countries = ['India', 'Pakistan', 'USA', 'Sri Lanka', 'Other']; 


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'country', 'date', 'bio', 'gender', 'agree'];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      } else {
        newErrors[field] = '';
      }
    });

    setErrors(newErrors);

    // If there are no errors and terms are agreed, you can perform further actions
    if (Object.values(newErrors).every((error) => error === '') && formData.agree) {
      // Perform form submission logic here
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="App">
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
        <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <span className="error">{errors.country}</span>}
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div>
          <label>Bio:</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange} maxLength={100} />
          {errors.bio && <span className="error">{errors.bio}</span>}
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
            Female
          </label>
          <label>
            <input type="radio" name="gender" value="other" checked={formData.gender === 'other'} onChange={handleChange} />
            Other
          </label>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div>
          <label>
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} />
            I agree to the terms and conditions
          </label>
          {errors.agree && <span className="error">{errors.agree}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
