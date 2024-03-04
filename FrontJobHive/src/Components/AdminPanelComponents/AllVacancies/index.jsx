import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { VacanciesDelete } from "../../../Services/DataCrud";
const AllVacancies = () => {
  const [vacancies, setVacancies] = useState(null);
  const { token } = useContext(UserContext);
  async function getApi() {
    await fetch("http://localhost:3000/vacancies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setVacancies(data);
      });
  }
  useEffect(() => {
    getApi();
  }, []);

  async function handleDelete(id) {
    await VacanciesDelete(id);
    await getApi();
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Company</th>
            <th>Date</th>
            <th>Salary</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {vacancies &&
            vacancies.map((x) => {
              return (
                <tr key={x._id}>
                  <td>{x.position}</td>
                  <td>{x.company}</td>
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

export default AllVacancies;
