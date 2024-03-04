

export const Lgn = async (data) => {
  await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      addToken(data);
      navigate("/");
    });
};


export const VacanciesDelete = async (id) => {
  await fetch(`http://localhost:3000/vacancies/${id}`, {
    method: "DELETE",
  });
};
export const CvDelete = async (id) => {
  await fetch(`http://localhost:3000/cv/${id}`, {
    method: "DELETE",
  });
};
