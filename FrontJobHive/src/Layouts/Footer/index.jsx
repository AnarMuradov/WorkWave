import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="footer">
      <div className="footer_container">
        <div className="footer_container_logo">
          <img src="/src/Image/footer_logo.png" alt="" />
          <div className="footer_container_logo_slogan">{t("slogan")}</div>
        </div>
        <div className="footer_container_content">
          <div className="footer_container_content_block">
            <div className="footer_container_content_block_title">
              <Link to={"/"}>WorkWave</Link>
            </div>
            <div className="footer_container_content_block_items">
              <ul className="footer_container_content_block_items_list">
                <Link to={"/about"}>
                  <li>{t("footer_about")}</li>
                </Link>
                <Link to={"/advertising"}>
                  <li>{t("footer_advertising")}</li>
                </Link>
                <Link to={"/settings"}>
                <li>{t("settings")}</li></Link>
              </ul>
            </div>
          </div>

          <div className="footer_container_content_block">
            <div className="footer_container_content_block_title">
              {t("footer_ads")}
            </div>
            <div className="footer_container_content_block_items">
              <ul className="footer_container_content_block_items_list">
                <li>
                  <Link to={"/"}>{t("footer_AllVacancy")}</Link>
                </li>
                <li>
                  <Link to={"/cv"}>{t("footer_AllCv")}</Link>
                </li>
                <li>
                  <Link to={"/PostYourAd"}>{t("footer_post")}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer_container_content_icons">
            <Link to={"https://www.instagram.com/muradov_v04"}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to={"https://t.me/muradov_v"}>
              <i className="fa-brands fa-telegram"></i>
            </Link>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
