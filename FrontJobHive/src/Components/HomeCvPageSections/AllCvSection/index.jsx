import React, { useContext, useEffect, useState } from "react";
import "./style.scss";

import { Link } from "react-router-dom";
import { SearchContext } from "../../../Context/SearchContext";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../../Context/UserContext";
const AllCvSection = () => {
  const { decode, token } = useContext(UserContext);
 
  const { search, setSearch } = useContext(SearchContext);
  const { t, i18n } = useTranslation();
  const [api, setApi] = useState([]);
  function handleWishlist(vacancyId) {
    fetch("http://localhost:3000/users/addcvwishlist", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id: decode.id, vacancyId: vacancyId }),
    });
  }
  useEffect(() => {
    fetch("http://localhost:3000/cv")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  return (
    <section className="allCv">
      <div className="allCv_container">
        <div className="allCv_container_title">{t("title_AllCv")}</div>
        <div className="allCv_container_allCards">
          {api
            .filter(
              (x) =>
                x.position.toLowerCase().includes(search.toLowerCase()) ||
                x.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((x) => {
              return (
                <div key={x._id} className="allCv_container_allCards_card">
                  <div className="allCv_container_allCards_card_content">
                    <div className="allCv_container_allCards_card_content_title">
                      <Link to={`/cv/detailpage/${x._id}`}>
                        <div className="allCv_container_allCards_card_content_title_vacancyName">
                          {x.position}
                        </div>
                      </Link>
                      <div className="allCv_container_allCards_card_content_title_name">
                        {x.name} {x.surname}
                      </div>
                      <div className="allCv_container_allCards_card_content_title_published">
                        <i className="fa-regular fa-calendar"></i>
                        {x.date.slice(0, 10)}
                      </div>
                    </div>
                    <div className="allCv_container_allCards_card_content_salary">
                      <div
                        className="allCv_container_allCards_card_content_salary_wishlist"
                        onClick={() => handleWishlist(x._id)}
                      >
                      <i className="fa-regular fa-heart"></i>
                        
                      </div>

                      <div className="allCv_container_allCards_card_content_salary_slr">
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

export default AllCvSection;
