import React from "react";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout.jsx";
import { PrivateRoute } from "./PrivateRoute.js";
import { RestrictedRoute } from "./RestrictedRoute.js";
import { refreshUser } from "redux/auth/operations.js";
import { useAuth } from "hooks/useAuth.js";


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
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/login"
                  component={
                    <Suspense fallback={<p>Loading...</p>}>
                      <Register />
                    </Suspense>
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
                    <Suspense fallback={<p>Loading...</p>}>
                      <Login />
                    </Suspense>
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
                    <Suspense fallback={<p>Loading...</p>}>
                      <Contacts />
                    </Suspense>
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