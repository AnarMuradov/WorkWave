import React from "react";
import CategoriesSection from "../../Components/HomeSections/CategoriesSection";
import AllVacancies from "../../Components/HomeSections/AllVacanciesSection";
import "./style.scss";
const Home = () => {
  return (
    <main>
      <CategoriesSection />
      <AllVacancies />
      
    </main>
  );
};

export default Home;
