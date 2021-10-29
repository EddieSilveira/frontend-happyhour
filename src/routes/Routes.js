import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn/SignIn.js';
import SignUp from '../pages/SignUp/SignUp.js';
import Products from '../pages/Products/Products';
import Dashboard from '../pages/Dashboard/Dashboard.js';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';

function CustomRoute({ isPrivate, ...rest }) {
  const { authenticated } = useContext(AuthContext);

  if (isPrivate && !authenticated) {
    return <Redirect to="/signin" />;
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={Home} />
      <CustomRoute exact path="/signin" component={SignIn} />
      <CustomRoute exact path="/signup" component={SignUp} />
      <CustomRoute exact path="/products" component={Products} />
      <CustomRoute isPrivate exact path="/dashboard" component={Dashboard} />
      <CustomRoute
        isPrivate
        exact
        path="/dashboardadm"
        component={DashboardAdmin}
      />
    </Switch>
  );
}
