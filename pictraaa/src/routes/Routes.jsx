import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from '@layout/DashboardLayout/DashboardLayout';
import PublicLayout from "@layout/PublicLayout/PublicLayout";
import LandingPage from "../pages/LandingPage/LandingPage";

const Login = lazy(() => import("@pages/Auth/Login"));
const SignUp = lazy(() => import("@pages/Auth/SignUp"));
const ArtGenerator = lazy(() => import("@pages/ArtGenerator/ArtGenerator"));
const NotFound = lazy(() => import("@pages/NotFound/NotFound"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="login" exact element={<Login />} />
        <Route path="signup" exact element={<SignUp />} />
        <Route index exact element={<LandingPage />} />
        <Route path="art-generator" exact element={<ArtGenerator/>} />
      </Route>
      {/* protected layout */}
      <Route path="dashboard" element={<DashboardLayout />}>
            
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
