import React, { useContext, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
const UserUpdate = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { id } = useParams();
  const { token } = useContext(UserContext);
  const handleUpdate = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/adminupdate/${id}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username,
        email,
        role,
      }),
    });
  };

  return (
    <div className="update-form">
      <h2>User Update</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UserUpdate;
