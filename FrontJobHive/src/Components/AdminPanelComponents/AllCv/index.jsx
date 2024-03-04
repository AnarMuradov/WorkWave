import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { CvDelete } from "../../../Services/DataCrud";
const AllCv = () => {
  const [cv, setCv] = useState(null);
  const { token } = useContext(UserContext);
  async function getApi() {
    await fetch("http://localhost:3000/cv", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setCv(data);
      });
  }
  useEffect(() => {
    getApi();
  }, []);

  async function handleDelete(id) {
    await CvDelete(id);
    await getApi();
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Full Name</th>
            <th>Date</th>
            <th>Salary</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cv &&
            cv.map((x) => {
              return (
                <tr key={x._id}>
                  <td>{x.position}</td>
                  <td>
                    {x.name} {x?.patronymic} {x.surname}
                  </td>
                  <td>{x.date.slice(0, 10)}</td>
                  <td>{x.salary}AZN</td>
                  <td>
                    <button className="btn" onClick={() => handleDelete(x._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default AllCv;
