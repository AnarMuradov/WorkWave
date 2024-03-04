import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useTranslation } from "react-i18next";
const Advertising = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="advertising">
      <div className="advertising_container">
        <div className="advertising_container_content">
          <div className="advertising_container_content_title">{t("advertising_title")}</div>
          <div className="advertising_container_content_info">
            <p>
            {t("advertising1")}
            </p>
            <p>
            {t("advertising2")}
            </p>
            <p>
            {t("advertising3")}
            </p>
            <p> {t("advertising4")}</p>
            <Link to={`mailto:anarmurado2004@gmail.com`}>
              anarmurado2004@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;
