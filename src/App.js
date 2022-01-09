import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect, Suspense } from "react";
import "./App.css";
import AppBar from "./components/UserMenu/AppBar";
import { fetchCurrentUser } from "./redux/auth/auth-operation";
import Container from "./components/Container/Container";
import PrivateRoute from "./components/UserMenu/PrivateRoute";
import PublicRoute from "./components/UserMenu/PublicRoute";
import authSelectors from "./redux/auth/auth-selectors";
import Loading from "./components/Loader/Loading";

const HomeView = lazy(() => import("./views/HomeView"));
const ContactsView = lazy(() => import("./views/ContactsView"));
const RegisterView = lazy(() => import("./views/RegisrterView"));
const LoginView = lazy(() => import("./views/LoginView"));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/*" element={<HomeView />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/*">
                  <RegisterView />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts">
                  <LoginView />
                </PublicRoute>
              }
            />
          </Routes>
        </Suspense>
      </Container>
    )
  );
}
