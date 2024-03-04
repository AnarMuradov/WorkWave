import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { useTranslation } from "react-i18next";
const PostYourResume = () => {
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const [api, setApi] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cvcategories")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  function handleSubmit({
    name,
    surname,
    patronymic,
    gender,
    age,
    education,
    experience,
    details,
    categoryId,
    position,
    region,
    salary,
    skills,
    about,
    email,
    phone,
  }) {
    fetch("http://localhost:3000/cv", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        patronymic: patronymic,
        gender: gender,
        age: age,
        education: education,
        experience: experience,
        details: details,
        categoryId: categoryId,
        position: position,
        region: region,
        salary: salary,
        skills: skills,
        about: about,
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
    <section className="postResume">
      <div className="postResume_container">
        <div className="postResume_container_title">
          <span>{t("postcv_title")}</span>
          <Link to={"/PostYourAd"}>
            <span>{t("postcv_vacancylink")}</span>
          </Link>
        </div>
        <div className="postResume_container_advert">
          <Formik
            initialValues={{
              name: "",
              surname: "",
              patronymic: "",
              gender: "",
              age: "",
              education: "",
              experience: "",
              details: "",
              categoryId: "",
              position: "",
              region: "",
              salary: "",
              skills: "",
              about: "",
              email: "",
              phone: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(1, "Too Short")
                .required(<span>{t("required")}</span>),
              surname: Yup.string()
                .min(1, "Too Short")
                .required(<span>{t("required")}</span>),
              patronymic: Yup.string(),
              gender: Yup.string(),
              age: Yup.number()
                .min(1, "Too Short")
                .required(<span>{t("required")}</span>),
              education: Yup.string(),
              experience: Yup.string(),
              details: Yup.string(),
              categoryId: Yup.string(),
              position: Yup.string()
                .min(2, "Too Short")
                .required(<span>{t("required")}</span>),
              region: Yup.string()
                .min(2, "Too short!")
                .required(<span>{t("required")}</span>),
              salary: Yup.number()
                .min(2, "Too Short")
                .required(<span>{t("required")}</span>),
              skills: Yup.string(),
              about: Yup.string(),
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
              <Field name="name" type="text" placeholder="Name" />
              <ErrorMessage name="name" />
              <Field name="surname" type="text" placeholder="Surname" />
              <ErrorMessage name="surname" />
              <Field name="patronymic" type="text" placeholder="Patronymic" />
              <ErrorMessage name="patronymic" />

              <Field
                as="select"
                name="gender"
                type="text"
                component="select"
              >
                <option disabled selected>
                {t("gender")}
                </option>
                <option></option>
                <option>{t("male")}</option>
                <option>{t("female")}</option>
              </Field>
              <ErrorMessage name="gender" />

              <Field name="age" type="text" placeholder="Age" />
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
                <option disabled selected>
                {t("experience")}
                </option>
                <option> </option>
                <option>{t("experience1")}</option>
                <option>{t("experience2")}</option>
                <option>{t("experience3")}</option>
                <option>{t("experience4")}</option>
              </Field>
              <ErrorMessage name="experience" />

              <Field
                as="textarea"
                name="details"
                type="text"
                placeholder="details"
                component="textarea"
              />
              <ErrorMessage name="details" />

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

              <Field
                as="textarea"
                name="skills"
                type="text"
                component="textarea"
                placeholder="skills"
              />
              <ErrorMessage name="skills" />

              <Field name="about" type="text" placeholder="about" />
              <ErrorMessage name="about" />

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

export default PostYourResume;
