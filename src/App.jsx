import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing_page from "./components/landing_page";
import Projects from "./components/Projects/Projects";
import Project from "./components/Project/Project";
import Error_page from "./components/Error_Page/Error_page";

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
      </>
    ),
  },
  {
    path: "/services",
    element: <Navigate to="/#services" replace />,
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <Error_page />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
