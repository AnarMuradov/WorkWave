import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useTranslation } from "react-i18next";
const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="about">
      <div className="about_container">
        <div className="about_container_content">
          <div className="about_container_content_title">{t("about_title")}</div>
          <div className="about_container_content_info">
            <p>
            {t("about1")}
            </p>
            <p>
            {t("about2")}
            </p>
            <p>
            {t("about3")}
            </p>
            <p>
            {t("about4")}
            </p>
            <p>
            {t("about5")}
              <Link to={`mailto:anarmurado2004@gmail.com`}>
                anarmurado2004@gmail.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
