import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { Link } from "react-router-dom";
import "./style.scss";
const AllUsers = () => {
  const [users, setUsers] = useState(null);
  const { token } = useContext(UserContext);
  const UserDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  async function getApi() {
    await fetch("http://localhost:3000/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }
  useEffect(() => {
    getApi();
  }, []);

  async function handleDelete(id) {
    await UserDelete(id);
    await getApi();
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((x) => {
              return (
                <tr key={x._id}>
                  <td>{x.username}</td>
                  <td>{x.email}</td>
                  <td>{x.role}</td>
                  <td>
                    <button className="btn" onClick={() => handleDelete(x._id)}>Delete</button>
                  </td>
                  <td>
                    <Link to={`/AdminPanel/Users/Update/${x._id}`}>
                      <button className="btn">Update</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
     <Link to={'/AdminPanel/Users/CreateUser'}> <button className="btn">Create User</button></Link>
    </>
  );
};

export default AllUsers;
