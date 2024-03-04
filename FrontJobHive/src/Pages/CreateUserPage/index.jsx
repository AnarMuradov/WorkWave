import React, { useContext, useState } from "react";
import "./style.scss";
import { UserContext } from "../../Context/UserContext";
const CreateUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { token } = useContext(UserContext);

  const handleCreate = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: role,
      }),
    });
  };

  return (
    <div className="create-form">
      <h2>User Create</h2>
      <form onSubmit={handleCreate}>
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
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
