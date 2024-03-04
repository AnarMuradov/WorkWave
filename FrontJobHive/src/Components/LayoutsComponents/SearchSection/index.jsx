import React, { useState } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../../Context/SearchContext";
import { useTranslation } from "react-i18next";
const SearchSeaction = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="seachSct">
      <div className="seachSct_container">
        <div className="seachSct_container_items">
          <div className="seachSct_container_items_vacancy">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {t("title_Vacancy")}
            </NavLink>
          </div>
          <div className="seachSct_container_items_">
            <NavLink
              to={"/cv"}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {t("title_Cv")}
            </NavLink>
          </div>
        </div>
        <div className="seachSct_container_input">
          <input
            className={isOpen ? "active" : ""}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
          />
          <i
            onClick={handleToggle}
            className={isOpen ? "fa-solid fa-x" : "fa-solid fa-search"}
          ></i>
        </div>
      </div>
    </section>
  );
};

export default SearchSeaction;
