import React from "react";
import CategoriesSection from "../../Components/HomeSections/CategoriesSection";
import AllVacancies from "../../Components/HomeSections/AllVacanciesSection";
import "./style.scss";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <main>
      <CategoriesSection />
      <AllVacancies />
      
    </main>
    </>
  );
};

export default Home;
