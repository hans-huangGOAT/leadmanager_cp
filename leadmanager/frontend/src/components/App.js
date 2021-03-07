import React, { useEffect } from "react";

// alert import
import {
  positions,
  Provider as AlertProvider,
} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

// react router dom import
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// action import
import { loadUser } from "../actions/auth";

// components import
import Header from "./layout/Header";
import Alerts from "./layout/Alerts";
import Dashboard from "./content/Dashboard";
import Register from "./authentication/Register";
import Login from "./authentication/Login";
import PrivateRoute from "./common/PrivateRoute";

// redux import
import { Provider } from "react-redux";
import store from "../store";

const App = () => {
  const options = {
    position: positions.TOP_CENTER,
    timeout: 3000,
  };

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <AlertProvider
          template={AlertTemplate}
          {...options}
        >
          <Header />
          <Alerts />
          <Switch>
            <PrivateRoute
              exact
              path="/"
              component={Dashboard}
            />
            <Route
              exact
              path="/register"
              component={Register}
            />
            <Route
              exact
              path="/login"
              component={Login}
            />
          </Switch>
        </AlertProvider>
      </Router>
    </Provider>
  );
};

export default App;
