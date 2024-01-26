import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from '@layout/DashboardLayout/DashboardLayout';
import PublicLayout from "@layout/PublicLayout/PublicLayout";
import LandingPage from "../pages/LandingPage/LandingPage";

const Login = lazy(() => import("@pages/Auth/Login"));
const SignUp = lazy(() => import("@pages/Auth/SignUp"));
const FromText = lazy(() => import("@pages/ArtGenerator/FromText"));
const ImageRemix = lazy(() => import("@pages/ArtGenerator/ImageRemix"));
const NotFound = lazy(() => import("@pages/NotFound/NotFound"));

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="login" exact element={<Login />} />
        <Route path="signup" exact element={<SignUp />} />
        <Route index exact element={<LandingPage />} />
        <Route path="/dashboard/tool/from-text" exact element={<FromText />} />
        <Route path="/dashboard/tool/image-remix" exact element={<ImageRemix />} />
      </Route>
      {/* protected layout */}
      <Route path="dashboard" element={<DashboardLayout />}>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
