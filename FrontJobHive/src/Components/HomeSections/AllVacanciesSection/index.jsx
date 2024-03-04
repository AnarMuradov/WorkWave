import React, { useContext, useEffect, useState } from "react";
import "./style.scss";

import { Link } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext";
import { UserContext } from "../../../Context/UserContext";
import { useTranslation } from "react-i18next";
const AllVacancies = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [api, setApi] = useState([]);
  const { decode, token } = useContext(UserContext);

  function handleWishlist(vacancyId) {

    fetch("http://localhost:3000/users/addwishlist", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: decode.id,  vacancyId: vacancyId  }),
    });
    console.log(decode);

  }
  const { t, i18n } = useTranslation();

  useEffect(() => {

    fetch("http://localhost:3000/vacancies")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <section className="allVacancies">
      <div className="allVacancies_container">
        <div className="allVacancies_container_title">{t('title_AllVacancy')}</div>
        <div className="allVacancies_container_allCards">
          {api
            .filter(
              (x) =>
                x.position.toLowerCase().includes(search.toLowerCase()) ||
                x.company.toLowerCase().includes(search.toLowerCase())
            )
            .map((x) => {
              return (
                <div
                  key={x._id}
                  className="allVacancies_container_allCards_card"
                >
                  <div className="allVacancies_container_allCards_card_content">
                    <div className="allVacancies_container_allCards_card_content_title">
                      <div className="allVacancies_container_allCards_card_content_title_vacancyName">
                        <Link to={`/vacancydetailpage/${x._id}`}>
                          {x.position}
                        </Link>
                      </div>
                      <div className="allVacancies_container_allCards_card_content_title_companyName">
                        {x.company}
                      </div>
                      <div className="allVacancies_container_allCards_card_content_title_published">
                        <i className="fa-regular fa-calendar"></i>
                        {x.date.slice(0, 10)}
                      </div>
                    </div>
                    <div className="allVacancies_container_allCards_card_content_salary">
                      <div
                        className="allCv_container_allCards_card_content_salary_wishlist"
                        onClick={() => handleWishlist(x._id)}
                      >
                        <i className="fa-regular fa-heart"></i>
                      </div>
                      <div className="allVacancies_container_allCards_card_content_salary_slr">
                        {x.salary} AZN
                      </div>
                      <div className="allVacancies_container_allCards_card_content_salary_view">
                        <i className="fa-regular fa-eye"></i> {x.view}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AllVacancies;
