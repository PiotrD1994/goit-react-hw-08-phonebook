import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout.jsx";
import { PrivateRoute } from "./PrivateRoute.js";
import { RestrictedRoute } from "./RestrictedRoute.js";
import { refreshUser } from "../redux/auth/operations.js";

import Home from "../pages/Home.jsx";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Contacts from "../pages/Contacts.jsx";


const App = () => {
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={<Register />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Contacts />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<Login />}
                />
              }
            />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
  );
};

export default App;