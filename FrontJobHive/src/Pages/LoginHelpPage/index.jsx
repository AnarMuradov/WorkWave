import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
const LoginHelp = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
    <Helmet>
      <title>Login Help</title>
    </Helmet>
    <section className="help">
      <div className="help_container">
        <div className="help_container_content">
          <p>
          {t("login_help")}
          </p>
          <Link to={`mailto:anarmurado2004@gmail.com`}>
            anarmurado2004@gmail.com
          </Link>
          <Link to={'/login'}>{t("login_help1")}</Link>
        </div>
      </div>
    </section>
    </>
  );
};

export default LoginHelp;
