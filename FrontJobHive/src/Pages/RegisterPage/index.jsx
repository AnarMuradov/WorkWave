import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { UserContext } from "../../Context/UserContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
const Register = () => {
  const { t, i18n } = useTranslation();

  const { addToken } = useContext(UserContext);
  const navigate = useNavigate();
  function handleSubmit({ username, email, password }) {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addToken(data);
        navigate("/");
      });
  }
  return (
    <section className="register">
      <div className="register_container">
        <div className="register_container_content">
          <div className="register_container_content_title">{t("register")}</div>

          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={Yup.object({
              username: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required(<span>{t("required")}</span>),
              email: Yup.string()
                .email("Invalid email address")
                .required(<span>{t("required")}</span>),
              password: Yup.string()
                .min(8, "Too short!")
                .required(<span>{t("required")}</span>),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="username" />

              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" />

              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" />

              <button type="submit">{t("submit")}</button>
            </Form>
          </Formik>
        </div>
      </div>
      <p>
      {t("register1")}<Link to={"/login"}>{t("register2")}</Link>
      </p>
    </section>
  );
};

export default Register;
