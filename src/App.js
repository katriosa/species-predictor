import React, { useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/authActions";
import PasswordUpdate from "./components/PasswordUpdate";
import { checkAuthLoader } from "./utils";

function App(props) {
  const { logout, isAuthenticated, setAuthenticatedIfRequired } = props;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout logout={logout} />,
      children: [
        {
          path: "/",
          element: <Home isAuthenticated={isAuthenticated} />,
          loader: checkAuthLoader,
        },
        {
          path: "/login",
          element: <Login isAuthenticated={isAuthenticated} />,
        },
        {
          path: "/update_password",
          element: <PasswordUpdate />,
          loader: checkAuthLoader,
        },
      ],
    },
  ]);

  useEffect(() => {
    if (!isAuthenticated) {
      setAuthenticatedIfRequired();
    }
  }, [isAuthenticated, setAuthenticatedIfRequired]);

  return <RouterProvider router={router} />;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated:
      state.auth.token !== null && typeof state.auth.token !== "undefined",
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.authLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
