import { useEffect , lazy} from "react"
import { useDispatch } from "react-redux"
import {Route, Routes} from 'react-router-dom'
import { Layout } from "./Layout/Layout.jsx"
import { PrivateRoute } from "./PrivateRoute.js"
import { RestrictedRoute } from "./RestrictedRoute.js"
import { refreshUser } from "redux/auth/operations.js"
import { useAuth } from "hooks/useAuth.js"

const Home = lazy(() => import('pages/Home'))
const Register = lazy(() => import('pages/Register'))
const Login = lazy(() => import('pages/Login'))
const Contacts = lazy(() => import('pages/Contacts'))

export const App = () => {
  const dispatch = useDispatch()
  const {isRefreshing} = useAuth()

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return isRefreshing ? (
    <p>User update...</p>
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/login" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};

