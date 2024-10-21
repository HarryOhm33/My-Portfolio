import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing_page from "./components/landing_page";
import Projects from "./components/Projects/Projects";
import Project from "./components/Project/Project";
import Error_Page from "./components/Error_Page/Error_page";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Service from "./components/Service/Service";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Landing_page />
        <Footer />
      </>
    ),
  },
  {
    path: "/work",
    element: <Navigate to="/#work" replace />,
  },
  {
    path: "/projects",
    element: (
      <>
        <Navbar />
        <Projects />
        <Footer />
      </>
    ),
  },
  {
    path: "/projects/:projectId",
    element: (
      <>
        <Navbar />
        <Project />
        <Footer />
      </>
    ),
  },
  {
    path: "/services/:serviceId",
    element: (
      <>
        <Navbar />
        <Service />
        <Footer />
      </>
    ),
  },
  {
    path: "/services",
    element: <Navigate to="/#services" replace />,
  },
  {
    path: "/error",
    element: (
      <>
        <Navbar />
        <Error_Page />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/error" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
