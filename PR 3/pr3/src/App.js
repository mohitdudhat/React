import React, { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      images: "img/butter-chicken.jpg",
      name: "Butter Chicken",
      price: "150",
      category: "Lunch",
    },
    {
      images: "img/dosa.jpg",
      name: "Dosa",
      price: "80",
      category: "Breakfast",
    },
    {
      images: "img/Chole Bhature.jpg",
      name: "Chole Bhature",
      price: "100",
      category: "Breakfast",
    },
    {
      images: "img/Chicken Biryani.jpg",
      name: "Chicken Biryani",
      price: "180",
      category: "Dinner",
    },
    {
      images: "img/Khaman.JPG",
      name: "Khaman",
      price: "140",
      category: "Dinner",
    },
    {
      images: "img/Samosa.jpg",
      name: "Samosa",
      price: "30",
      category: "Snacks",
    },
    {
      images: "img/pasta.jpg",
      name: "Pasta",
      price: "120",
      category: "Supper",
    },
  ];

  const categories = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snacks",
    "Supper",
  ];

  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
  };

  const filteredRecords =
    categoryFilter === "All"
      ? data
      : data.filter((record) => record.category === categoryFilter);

  return (
    <div className="App">
      <div className="buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={categoryFilter === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <table className="records-table">
        <thead>
          <tr>
            <th>Images</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((item, index) => {
            const { images, name, price, category } = item;
            return (
              <tr key={name} className="fade-in">
                <td>
                  <img src={images} alt={name} width={100} height={90} />
                </td>
                <td>{name}</td>
                <td>{price + " ₹"}</td>
                <td>{category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
