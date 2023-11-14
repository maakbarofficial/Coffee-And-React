import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import AboutUs from "./components/AboutUs/AboutUs.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// Two Methods to write a routes

// first
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "about", element: <AboutUs /> },
//       { path: "contact", element: <ContactUs /> },
//     ],
//   },
// ]);

// second
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* Nesting Routes */}
      <Route path="about" element={<AboutUs />}>
        <Route path="akbar" element={<User />} />
      </Route>
      <Route path="contact" element={<ContactUs />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
