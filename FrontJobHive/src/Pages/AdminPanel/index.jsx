import React from "react";
import "./style.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
const AdminPanel = () => {
  return (
    <section className="adminPanel">
      <div className="adminPanel_container">
        <div className="adminPanel_container_content">
          <Link to={"/AdminPanel"}>
            <div className="adminPanel_container_content_title">
              Admin Panel
            </div>
          </Link>
          <div className="adminPanel_container_content_items">
            <ul className="adminPanel_container_content_items_list">
              <NavLink
                to="/AdminPanel/Users"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>Users</li>
              </NavLink>
              <NavLink
                to="/AdminPanel/Vacancies"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>Vacancies</li>
              </NavLink>
              <NavLink
                to="/AdminPanel/Cv"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>CV's</li>
              </NavLink>
              <NavLink
                to="/AdminPanel/VacancyCategories"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>Vacancy categories</li>
              </NavLink>
              <NavLink
                to="/AdminPanel/CvCategories"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>Cv's categories</li>
              </NavLink>
            </ul>
          </div>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
