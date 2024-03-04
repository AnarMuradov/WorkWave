import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./style.scss";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../Context/UserContext";

const VacancyDetailPage = () => {
  const { t, i18n } = useTranslation();

  const [api, setApi] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/vacancies/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);
  const {token,decode} = useContext(UserContext)

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
    <section className="vacancyDetail">
      <div className="vacancyDetail_container">
        <div className="vacancyDetail_container_title">
          <div className="vacancyDetail_container_title_content">
            <div className="vacancyDetail_container_title_content_name">
              <div className="vacancyDetail_container_title_content_name_position">
                {api.position}
              </div>
              <div className="vacancyDetail_container_title_content_name_company">
                {api.company}
              </div>
            </div>
            <div className="vacancyDetail_container_title_content_salaryColumn">
              <div
                className="vacancyDetail_container_title_content_salaryColumn_wishlist"
                onClick={() => handleWishlist(api._id)}
              >
                  <i className="fa-regular fa-heart"></i>
               
              </div>
              <div className="vacancyDetail_container_title_content_salaryColumn_salary">
                {api.salary} AZN
              </div>
            </div>
          </div>
        </div>
        <div className="vacancyDetail_container_vacancyInfo">
          <div className="vacancyDetail_container_vacancyInfo_content">
            <div className="vacancyDetail_container_vacancyInfo_content_column">
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list1">
                <li>{t("detail_region")}</li>
                <li>{t("detail_age")}</li>
                <li>{t("detail_education")}</li>
                <li>{t("detail_experience")}</li>
              </ul>
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list">
                <li>{api.region}</li>
                <li>{api.age}</li>
                <li>{api.education}</li>
                <li>{api.experience}</li>
              </ul>
            </div>
            <div className="vacancyDetail_container_vacancyInfo_content_column">
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list1">
                <li>{t("cv_detail_phone")}</li>
                <li>Email</li>
                <li>{t("vacancy_contact")}</li>
                <li>{t("cv_detail_published")}</li>
              </ul>
              <ul className="vacancyDetail_container_vacancyInfo_content_column_list">
                <Link to={`tel:${api.phone}`}>
                  <li>{api.phone}</li>
                </Link>
                <Link to={`mailto:${api.email}`}>
                  <li>{api.email}</li>
                </Link>
                <li>{api.contact}</li>
                <li>{api.date?.slice(0, 10)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="vacancyDetail_container_description">
          <div className="vacancyDetail_container_description_content">
            <div className="vacancyDetail_container_description_content_text">
              <span>{t("vacancy_description")}</span>
              <p>{api.description}</p>
            </div>
            <div className="vacancyDetail_container_description_content_text">
              <span>{t("vacancy_requirements")}</span>
              <p>{api.requirements}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VacancyDetailPage;
