import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import WhitePage from '../White';
import YellowPage from '../Yellow';
import GreenPage from '../Green';
import BrownPage from '../Brown';
import BlackPage from '../Black';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <React.Fragment>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />

      <Route path={ROUTES.WHITE} component={WhitePage} />
      <Route path={ROUTES.YELLOW} component={YellowPage} />
      <Route path={ROUTES.GREEN} component={GreenPage} />
      <Route path={ROUTES.BROWN} component={BrownPage} />
      <Route path={ROUTES.BLACK} component={BlackPage} />
    </React.Fragment>
  </Router>
);

export default withAuthentication(App);
