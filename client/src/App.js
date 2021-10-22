import React, {
      Fragment,
      useEffect
            }
 from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Routes
import Register from './components/Auth/Register';
import Login from './components/Auth/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

//Approver routes
import AppRegister from './components/Approver/AppRegister';
// import AppLogin from './components/Approver/AppLogin';

// //actions
// import { loadUser } from './components/actions/auth';
// import {loadApprover} from './components/actions/approver'
import { LOGOUT } from './components/actions/types';
import setAuthToken from './components/utils/setAuthToken';
// import PrivateRoute from './components/routing/PrivateRoute';
import AppDashboard from './components/Approver/AppDashboard';

const App = () => {

  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    // store.dispatch(loadUser());
    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);


  return (
    <Provider store = {store}>
    <Fragment>
    <BrowserRouter>
          {/* <section className="container"> */}
              <Switch>
                <Route exact path='/approver/register' component={AppRegister} />
                <Route exact path='/approver/dashboard' component={AppDashboard} />
                <Route exact path='/' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/dashboard' component={Dashboard} />
                {/* <Route exact path='/addcustomer' component={Addcustform} /> */}
              </Switch>
            {/* </section> */}
      </BrowserRouter>
   </Fragment>
   </Provider>
  );
};

export default App;