/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { AppLoader } from "../components/AppLoader/AppLoader";

// route imports
const DeveloperSetupPage = React.lazy(() => import("../pages/DeveloperSetupPage"));
const HomePage = React.lazy(() => import("../pages/HomePage"));
const ResourcesPage = React.lazy(() => import("../pages/ResourcesPage"));
const SkillsPage = React.lazy(() => import("../pages/SkillsPage"));
const WorkPage = React.lazy(() => import("../pages/WorkPage"));

// portfolio router
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<AppLoader />}>
        <HomePage />
      </React.Suspense>
    ),
    errorElement: <div>Uh oh!</div>,
  },
  {
    path: "/developer-setup",
    element: (
      <React.Suspense fallback={<AppLoader />}>
        <DeveloperSetupPage />
      </React.Suspense>
    ),
  },
  {
    path: "/resources",
    element: (
      <React.Suspense fallback={<AppLoader />}>
        <ResourcesPage />
      </React.Suspense>
    ),
  },
  {
    path: "/skills",
    element: (
      <React.Suspense fallback={<AppLoader />}>
        <SkillsPage />
      </React.Suspense>
    ),
  },
  {
    path: "/work",
    element: (
      <React.Suspense fallback={<AppLoader />}>
        <WorkPage />
      </React.Suspense>
    ),
  },
]);

export default router;
