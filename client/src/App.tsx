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
<<<<<<< HEAD
import Search from './components/search/Search';
import StarRating from './components/rates/StarRate';
=======
import Search from "./components/Search/Search";
>>>>>>> 0840f3b8ee660639ca5e2867b32bce2de759b634

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        {/* <Navbar /> */}
<<<<<<< HEAD
        <Signup />
        {/* <Login />
=======
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
>>>>>>> 7565a5e971b9e202e023c70e4d5a8fba73c3f534
        <ProviderSignup /> */}
        {/* <Catagories /> */}
        {/* <Search /> */}

        <Switch>

          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Categories} />
<<<<<<< HEAD
          <Route path="/prov/signup" component={ProviderSignup} />
          <Route path="/user/signup" component={Signup} />
          <Route path="/user/login" component={Login} />
          <Route path="/provider" component={ProviderContainer} />
          <Route path="/reset_password" component={ForgotPassword} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
=======
          {/* <Route path="/prov/signup" component={ProviderSignup} /> */}
          {/* <Route path="/user/signup" component={Signup} /> */}
          {/* <Route path="/user/login" component={Login} /> */}
          {/* <Route path="/provider" component={ProviderContainer} /> */}
          <Route path="/auth/users/reset_password/" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
>>>>>>> 7565a5e971b9e202e023c70e4d5a8fba73c3f534
          <Route path="/activate/:uid/:token" component={Activate} />

        </Switch>

        {/* <Footer /> */}

      </div>
    </Router>
  );
}

export default App;
