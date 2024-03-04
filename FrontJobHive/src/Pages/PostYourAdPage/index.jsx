import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { useTranslation } from "react-i18next";
const PostYourAd = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/vacancycategories")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  function handleSubmit({
    categoryId,
    position,
    region,
    salary,
    age,
    education,
    experience,
    requirements,
    description,
    company,
    contact,
    email,
    phone,
  }) {
    fetch("http://localhost:3000/vacancies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        categoryId: categoryId,
        position: position,
        region: region,
        salary: salary,
        age: age,
        education: education,
        experience: experience,
        requirements: requirements,
        description: description,
        company: company,
        contact: contact,
        email: email,
        phone: phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
      });
  }
  return (
    <section className="postAd">
      <div className="postAd_container">
        <div className="postAd_container_title">
          <span>{t("postad_title")}</span>
          <Link to={"/PostYourResume"}>
            <span>{t("postad_cvlink")}</span>
          </Link>
        </div>
        <div className="postAd_container_advert">
          <Formik
            initialValues={{
              categoryId: "",
              position: "",
              region: "",
              salary: "",
              age: "",
              education: "",
              experience: "",
              requirements: "",
              description: "",
              company: "",
              contact: "",
              email: "",
              phone: "",
            }}
            validationSchema={Yup.object({
              categoryId: Yup.string(),
              position: Yup.string()
                .min(2, "Too Short")
                .required(<span>{t("required")}</span>),
              region: Yup.string()
                .min(2, "Too short!")
                .required(<span>{t("required")}</span>),
              salary: Yup.string()
                .min(2, "Too Short")
                .required(<span>{t("required")}</span>),
              age: Yup.string()
                .min(1, "Too Short")
                .required(<span>{t("required")}</span>),
              education: Yup.string(),
              experience: Yup.string(),
              requirements: Yup.string(),
              description: Yup.string(),
              company: Yup.string(),
              contact: Yup.string(),
              email: Yup.string()
                .email("Invalid email address")
                .required(<span>{t("required")}</span>),
              phone: Yup.string()
                .min(9, "Too short!")
                .required(<span>{t("required")}</span>),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log(values);

                handleSubmit(values);
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <Field
                as="select"
                name="categoryId"
                type="text"
                component="select"
              >
                {api.map((x) => {
                  return (
                    <option key={x._id} value={x._id}>
                      {x.category}
                    </option>
                  );
                })}
              </Field>
              <ErrorMessage name="categoryId" />

              <Field name="position" type="text" placeholder="position" />
              <ErrorMessage name="position" />

              <Field name="region" type="text" placeholder="region" />
              <ErrorMessage name="region" />

              <Field name="salary" type="text" placeholder="salary" />
              <ErrorMessage name="salary" />

              <Field name="age" type="text" placeholder="age" />
              <ErrorMessage name="age" />

              <Field
                as="select"
                name="education"
                type="text"
                component="select"
              >
                <option disabled selected>
                  {t("education")}
                </option>
                <option> </option>
                <option>{t("education1")}</option>
                <option>{t("education2")}</option>
                <option>{t("education3")}</option>
                <option>{t("education4")}</option>
                <option>{t("education5")}</option>
                <option>{t("education6")}</option>
              </Field>
              <ErrorMessage name="education" />

              <Field
                as="select"
                name="experience"
                type="text"
                component="select"
              >
                <option>{t("experience")}</option>
                <option> </option>
                <option>{t("experience1")}</option>
                <option>{t("experience2")}</option>
                <option>{t("experience3")}</option>
                <option>{t("experience4")}</option>
              </Field>
              <ErrorMessage name="experience" />

              <Field
                as="textarea"
                name="requirements"
                type="text"
                placeholder="requirements"
                component="textarea"
              />
              <ErrorMessage name="requirements" />

              <Field
                as="textarea"
                name="description"
                type="text"
                component="textarea"
                placeholder="description"
              />
              <ErrorMessage name="description" />

              <Field name="company" type="text" placeholder="company" />
              <ErrorMessage name="company" />

              <Field name="contact" type="text" placeholder="contact" />
              <ErrorMessage name="contact" />

              <Field name="email" type="email" placeholder="email" />
              <ErrorMessage name="email" />

              <Field name="phone" type="text" placeholder="phone" />
              <ErrorMessage name="phone" />

              <button type="submit">{t("submit")}</button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default PostYourAd;
