import React, { useContext, useState } from "react";
import "./style.scss";
import { UserContext } from "../../Context/UserContext";
const CreateVacancyCategory = () => {
    const [category, setCategory] = useState("");
    const { token } = useContext(UserContext);
  
    const handleCreate = async (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/vacancycategories`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          category: category,
        }),
      });
    };
  
  return (
    <div className="create-form">
      <h2>Category Create</h2>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreateVacancyCategory