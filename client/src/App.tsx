import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Catagories from './components/catagories/Catagories';
import ProviderProf from './components/profiles/ProviderProf';
import ProviderView from './components/profiles/ProviderView'
import UserView from './components/profiles/UserView'
import UserProf from './components/profiles/UserProf'
// import './App.css';

import ProviderSignup from './components/Provider-signup/Provider-signup'
import Navbar from "./components/Nav-bar/Nav-bar";
import Categories from "./components/Categories-container/Categories-container";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";
import ForgotPassword from "./components/Forgot-password/Forgot-password";
import ResetPassword from "./components/Reset-password/Reset-password";
import ResetPasswordConfirm from "./components/Reset-password/Reset-password-confirm"
import ProviderContainer from "./components/Provider-container/Provider-container";
import Activate from './components/Activate';
// import Search from './components/search/Search';
import StarRating from './components/rates/StarRate';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        {/* <Navbar /> */}
        {/* <Navbar /> */}
        {/* <Search /> */}
        {/* <Catagories /> */}
        {/* <ProviderProf /> */}
        {/* <ProviderView /> */}
        {/* <UserView /> */}
        {/* <UserProf /> */}
        <StarRating />
        {/* <Login />
        {/* <Signup />
        <ProviderSignup /> */}
        {/* <Catagories /> */}
        {/* <Search /> */}

        <Switch>

          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Categories} />
          {/* <Route path="/prov/signup" component={ProviderSignup} /> */}
          {/* <Route path="/user/signup" component={Signup} /> */}
          <Route path="/user/login" component={Login} />
          {/* <Route path="/provider" component={ProviderContainer} /> */}
          <Route path="/auth/users/reset_password/" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
          <Route path="/activate/:uid/:token" component={Activate} />

        </Switch>

        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
