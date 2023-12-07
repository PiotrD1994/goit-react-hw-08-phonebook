import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout.jsx";
import { PrivateRoute } from "./PrivateRoute.js";
import { RestrictedRoute } from "./RestrictedRoute.js";
import { refreshUser } from "../redux/auth/operations.js";

const Home = lazy(() => import("../pages/Home.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Contacts = lazy(() => import("../pages/Contacts.jsx"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<Suspense fallback={<div>Loading...</div>}><Register /></Suspense>}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Suspense fallback={<div>Loading...</div>}><Contacts /></Suspense>}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>}
              />
            }
          />
        </Route>
        <Route path="*" element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
      </Routes>
    </div>
  );
};

export default App;