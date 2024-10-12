import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing_page from "./components/landing_page";
import Projects from "./components/Projects/Projects";
import Project from "./components/Project/Project";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
      </>
    ),
  },
  {
    path: "/projects/:projectId",
    element: (
      <>
        <Navbar />
        <Project />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
