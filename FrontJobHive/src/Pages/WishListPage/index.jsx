import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import { SearchContext } from "../../Context/SearchContext";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../Context/UserContext";

const WishListPage = () => {
  const { t, i18n } = useTranslation();
  const { decode, token } = useContext(UserContext);
 
  const { search, setSearch } = useContext(SearchContext);

  const [cv, setCv] = useState([]);
  const [vacancy, setVacancy] = useState([]);
  useEffect(() => {
    console.log(decode);
    fetch(`http://localhost:3000/users/showcvwishlist/${decode?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCv(data));
  }, []);

  useEffect(() => {
    console.log(decode);
    fetch(`http://localhost:3000/users/showwishlist/${decode?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setVacancy(data));
  }, []);

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

  return (
    <section className="wishList">
      <div className="wishList_container">
        <div className="wishList_container_title">{t("wishlist")}</div>
        <div className="wishList_container_allCards">
          {cv?.cvWishlist?.filter(
              (x) =>
                x.position.toLowerCase().includes(search.toLowerCase()) ||
                x.name.toLowerCase().includes(search.toLowerCase())
            )
        .map((x) => {
            return (
              <div key={x._id} className="wishList_container_allCards_card">
                <div className="wishList_container_allCards_card_content">
                  <div className="wishList_container_allCards_card_content_title">
                    <div className="wishList_container_allCards_card_content_title_vacancyName">
                      <Link to={`/vacancydetailpage/${x._id}`}>
                        {x.position}
                      </Link>
                    </div>
                    <div className="wishList_container_allCards_card_content_title_companyName">
                      {x?.name} {x?.patronymic} {x?.surname}
                    </div>
                    <div className="wishList_container_allCards_card_content_title_published">
                      <i className="fa-regular fa-calendar"></i>
                      {x.date?.slice(0, 10)}
                    </div>
                  </div>
                  <div className="wishList_container_allCards_card_content_salary">
                  <div
                        className="allCv_container_allCards_card_content_salary_wishlist"
                        onClick={() => handleWishlist(x._id)}
                      >
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    <div className="wishList_container_allCards_card_content_salary_slr">
                      {x.salary} AZN
                    </div>
                    <div className="wishList_container_allCards_card_content_salary_view">
                      <i className="fa-regular fa-eye"></i> {x.view}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {vacancy?.vacancyWishlist?.map((x) => {
            return (
              <div key={x._id} className="wishList_container_allCards_card">
                <div className="wishList_container_allCards_card_content">
                  <div className="wishList_container_allCards_card_content_title">
                    <div className="wishList_container_allCards_card_content_title_vacancyName">
                      <Link to={`/vacancydetailpage/${x._id}`}>
                        {x.position}
                      </Link>
                    </div>
                    <div className="wishList_container_allCards_card_content_title_companyName">
                      {x?.company}
                    </div>
                    <div className="wishList_container_allCards_card_content_title_published">
                      <i className="fa-regular fa-calendar"></i>
                      {x.date?.slice(0, 10)}
                    </div>
                    
                    
                  </div>
                  <div className="wishList_container_allCards_card_content_salary">
                  <div
                        className="allCv_container_allCards_card_content_salary_wishlist"
                        onClick={() => handleWishlist(x._id)}
                      >
                        <i className="fa-regular fa-heart"></i>
                      </div>
                    {/* <div className="allCv_container_allCards_card_content_salary_wishlist"></div> */}
                    <div className="wishList_container_allCards_card_content_salary_slr">
                      {x.salary} AZN
                    </div>
                    <div className="wishList_container_allCards_card_content_salary_view">
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

export default WishListPage;
