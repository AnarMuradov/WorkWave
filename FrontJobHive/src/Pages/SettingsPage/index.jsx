import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { useTranslation } from "react-i18next";

const SettingsPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [api, setApi] = useState([]);
  const { id } = useParams();
  const { token, decode } = useContext(UserContext);
  const handleUpdate = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/users/adminupdate/${decode?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        username,
        email,
      }),
    });
  };
  const { t, i18n } = useTranslation();

  async function getUserById(id) {
    const data = await fetch(`http://localhost:3000/users/${decode?.id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await data.json();
    console.log(res);
    setUsername(res.username);
    setEmail(res.email);
  }
  useEffect(() => {
    getUserById(id);
  }, [decode?.id]);

  return (
    <section className="setting">
      <div className="setting_container">
        <div className="setting_container_title">{t("settings")}</div>
        <div className="setting_container_card">
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <button type="submit">{t("update")}</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
