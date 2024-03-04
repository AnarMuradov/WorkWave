import React from "react";
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import HomeCvPage from "./Pages/HomeCvPage";
import VacancyDetailPage from "./Pages/VacancyDetailPage";
import VacancyCategoryPage from "./Pages/VacancyCategoryPage";
import CvCategoryPage from "./Pages/CvCategoryPage";
import CvDetailPage from "./Pages/CvDetailPage";
import WishListPage from "./Pages/WishListPage";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/RegisterPage";
import Advertising from "./Pages/AdvertisingPage";
import AboutPage from "./Pages/AboutPage";
import LoginHelp from "./Pages/LoginHelpPage";
import AdminPanel from "./Pages/AdminPanel";
import AllUsers from "./Components/AdminPanelComponents/AllUsers";
import UserUpdate from "./Pages/UserUpdatePage";
import CreateUser from "./Pages/CreateUserPage";
import AllVacancies from "./Components/AdminPanelComponents/AllVacancies";
import AllCv from "./Components/AdminPanelComponents/AllCv";
import AllVacancyCategory from "./Components/AdminPanelComponents/AllVacancyCategory";
import VacancyCategoryUpdate from "./Pages/VacancyCategoryUpdate";
import CreateVacancyCategory from "./Pages/CreateVacancyCategory";
import AllCvCategory from "./Components/AdminPanelComponents/AllCvCategory";
import CvCategoryUpdate from "./Pages/CvCategoryUpdate";
import CreateCvCategory from "./Pages/CreateCvCategory";
import PrivateRoute from "./Routes/PrivateRoute";
import PostYourAd from "./Pages/PostYourAdPage";
import PostYourResume from "./Pages/PostYourResume";
import SettingsPage from "./Pages/SettingsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cv" element={<HomeCvPage />} />
          <Route
            path="/vacancydetailpage/:id"
            element={<VacancyDetailPage />}
          />
          <Route path="/cv/detailpage/:id" element={<CvDetailPage />} />
          <Route
            path="/vacancycategory/:id"
            element={<VacancyCategoryPage />}
          />
          <Route path="/cvcategory/:id" element={<CvCategoryPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
          <Route path="/advertising" element={<Advertising />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/PostYourAd" element={<PostYourAd />} />
          <Route path="/PostYourResume" element={<PostYourResume />} />
          <Route path="/settings" element={<SettingsPage />} />


        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/help" element={<LoginHelp />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute roles={["Admin"]} />}>
          <Route path="/AdminPanel" element={<AdminPanel />}>
            <Route path="/AdminPanel/Users" element={<AllUsers />} />
            <Route
              path="/AdminPanel/Users/Update/:id"
              element={<UserUpdate />}
            />
            <Route
              path="/AdminPanel/Users/CreateUser"
              element={<CreateUser />}
            />
            <Route path="/AdminPanel/Vacancies" element={<AllVacancies />} />
            <Route path="/AdminPanel/Cv" element={<AllCv />} />
            <Route
              path="/AdminPanel/VacancyCategories"
              element={<AllVacancyCategory />}
            />
            <Route
              path="/AdminPanel/VacancyCategories/Update/:id"
              element={<VacancyCategoryUpdate />}
            />
            <Route
              path="/AdminPanel/VacancyCategories/CreateCategory"
              element={<CreateVacancyCategory />}
            />
            <Route
              path="/AdminPanel/CvCategories"
              element={<AllCvCategory />}
            />
            <Route
              path="/AdminPanel/CvCategories/Update/:id"
              element={<CvCategoryUpdate />}
            />
            <Route
              path="/AdminPanel/CvCategories/CreateCategory"
              element={<CreateCvCategory />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
