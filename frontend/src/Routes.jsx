import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopOne from "pages/DesktopOne";
import DesktopOnePage from "pages/DesktopOne/index.jsx"
import Signup from "pages/authenticationpages/Signup.jsx";
import Login from "./pages/authenticationpages/Login.jsx";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: < DesktopOnePage/> },
    {path:"/signup",element:<Signup/>},
    { path: "/login", element: <Login/> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopone",
      element: <DesktopOne />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
