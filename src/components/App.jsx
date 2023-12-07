import React from "react";
import { useEffect, lazy, startTransition } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout.jsx";
import { PrivateRoute } from "./PrivateRoute.js";
import { RestrictedRoute } from "./RestrictedRoute.js";
import { refreshUser } from "redux/auth/operations.js";



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {

    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong. Please try again later.</p>;
    }

    return this.props.children;
  }
}

const Home = lazy(() => import("../pages/Home.jsx"));
const Register = lazy(() => import("../pages/Register.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const Contacts = lazy(() => import("../pages/Contacts.jsx"));

const App = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    startTransition(() => {
      dispatch(refreshUser());
    });
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <startTransition>
                  <Home />
                </startTransition>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={
                    <startTransition>
                      <Register />
                    </startTransition>
                  }
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={
                    <startTransition>
                      <Login />
                    </startTransition>
                  }
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={
                    <startTransition>
                      <Contacts />
                    </startTransition>
                  }
                />
              }
            />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;