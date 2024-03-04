import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./style.scss";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../Context/UserContext";

const CvDetailPage = () => {
  const {token,decode} = useContext(UserContext)
  const { t, i18n } = useTranslation();

    const [api, setApi] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/cv/${id}`)
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  function handleWishlist(vacancyId) {

    fetch("http://localhost:3000/users/addcvwishlist", {
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
    <section className="cvDetail">
      <div className="cvDetail_container">
        <div className="cvDetail_container_title">
          <div className="cvDetail_container_title_content">
            <div className="cvDetail_container_title_content_name">
              <div className="cvDetail_container_title_content_name_position">
                {api.position}
              </div>
              <div className="cvDetail_container_title_content_name_company">
                {api.name} {api.surname}
              </div>
            </div>
            <div className="cvDetail_container_title_content_salaryColumn">
              <div
                className="cvDetail_container_title_content_salaryColumn_wishlist"
                onClick={() => handleWishlist(api._id)}
              >
                  <i className="fa-regular fa-heart"></i>
                
              </div>
              <div className="cvDetail_container_title_content_salaryColumn_salary">
                {api.salary} AZN
              </div>
            </div>
          </div>
        </div>
        <div className="cvDetail_container_vacancyInfo">
          <div className="cvDetail_container_vacancyInfo_content">
            <div className="cvDetail_container_vacancyInfo_content_column">
              <ul className="cvDetail_container_vacancyInfo_content_column_list1">
                <li>{t("detail_region")}</li>
                <li>{t("detail_age")}</li>
                <li>{t("cv_detail_gender")}</li>
                {api.patronymic ? <li>{t("cv_detail_fullname")}</li> :null}
              </ul>
              <ul className="cvDetail_container_vacancyInfo_content_column_list">
                <li>{api.region}</li>
                <li>{api.age} {t("cv_detail_years")}</li>
                <li>{api.gender}</li>
                {api.patronymic ? <li>{api.name} {api?.patronymic} {api.surname}</li> :null}
              </ul>
            </div>
            <div className="cvDetail_container_vacancyInfo_content_column">
              <ul className="cvDetail_container_vacancyInfo_content_column_list1">
                <li>{t("cv_detail_phone")}</li>
                <li>Email</li>
                <li>{t("cv_detail_published")}</li>
              </ul>
              <ul className="cvDetail_container_vacancyInfo_content_column_list">
                <Link to={`tel:${api.phones}`}>
                  <li>{api.phones}</li>
                </Link>
                <Link to={`mailto:${api.email}`}>
                  <li>{api.email}</li>
                </Link>
                <li>{api.date?.slice(0, 10)}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="cvDetail_container_description">
          <div className="cvDetail_container_description_content">
            <div className="cvDetail_container_description_content_text">
              <div className="cvDetail_container_description_content_text_row">
              <span>{t("detail_education")}</span>
              <p>{api.education}</p>
              </div>
              <div className="cvDetail_container_description_content_text_row">
              <span>{t("cv_detail_skills")}</span>
              <p>{api.skills}</p>
              </div>

            </div>
            <div className="cvDetail_container_description_content_text">
            
            <div className="cvDetail_container_description_content_text_row">
            <span>{t("detail_experience")}</span>
              <p>{api.experience}</p>
            </div>
            <div className="cvDetail_container_description_content_text_row">
            <span>{t("cv_detail_about")}</span>
              <p>{api.about}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CvDetailPage