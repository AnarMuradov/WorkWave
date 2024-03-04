import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t, i18n } = useTranslation();

  const { decode, LogOut } = useContext(UserContext);
  return (
    <nav className="navbar">
      <div className="navbar_top">
        <div className="navbar_top_container">
          <div className="navbar_top_container_lang">
            <button
              onClick={() => {
                i18n.changeLanguage("en");
              }}
            >
              En
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("ru");
              }}
            >
              Ru
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage("az");
              }}
            >
              Az
            </button>

          
          </div>

          {decode?.role === "Admin" ? (
            <Link to={"/AdminPanel"}>
              <div className="navbar_top_container_adminPanel">Admin Panel</div>
            </Link>
          ) : null}
          <Link to={"/advertising"}>
            <div className="navbar_top_container_ad">
              {t("navbar_advertising")}
            </div>
          </Link>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="navbar_bottom_container">
          <div className="navbar_bottom_container_logo">
            <Link to={"/"}>
              <img src="/src/Image/logo.png" alt="" />
            </Link>
          </div>
          <div className="navbar_bottom_container_items">
            {decode ? (
              <>
                <div
                  onClick={() => {
                    LogOut();
                  }}
                  className="navbar_bottom_container_items_login"
                >
                  <span>{t("logout")}</span>
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>
                </div>
                <Link to={"/PostYourAd"}>
                  <div className="navbar_bottom_container_items_ad">
                    {t("navbar_post")}
                  </div>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <div className="navbar_bottom_container_items_login">
                    <span>{t("navbar_login")}</span>
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                  </div>
                </Link>
              </>
            )}
            <Link to={"/wishlist"}>
              <div className="navbar_bottom_container_items_wishlist">
                <i className="fa-regular fa-heart"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
