import React, { useContext, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
const CvCategoryUpdate = () => {
    const [category, setCategory] = useState("");
    const { id } = useParams();
    const { token } = useContext(UserContext);
    const handleUpdate = async (e) => {
      e.preventDefault();
      fetch(`http://localhost:3000/cvcategories/${id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            category,
        }),
      });
    };
  return (
    <div className="cvUpdate-form">
      <h2>Category Update</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />

        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default CvCategoryUpdate