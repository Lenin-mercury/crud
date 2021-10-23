import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Routes
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";

import PrivateRoute from './components/routing/PrivateRoute';

// //actions
import { LOGOUT } from "./components/actions/types";
import setAuthToken from "./components/utils/setAuthToken";
const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, [localStorage.token]);
  return (
    <Provider store={store}>
      <Fragment>
        <BrowserRouter>
          {/* <section className="container"> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          {/* </section> */}
        </BrowserRouter>
      </Fragment>
    </Provider>
  );
};

export default App;
