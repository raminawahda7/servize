import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Catagories from './components/catagories/Catagories';
<<<<<<< HEAD
import ProviderProf from './components/profiles/ProviderProf';
import UserProf from './components/profiles/UserProf'
import Provider from './components/Register-provider/Regester-provider'

// import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
=======
import Profile from './components/profile/Profile';
import ProviderSignup from './components/Provider-signup/Provider-signup'
>>>>>>> b6e47cb64a9f99a54cee53dbaf7cd418fbc4a883
import Navbar from "./components/Nav-bar/Nav-bar";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";
import ForgotPassword from "./components/Forgot-password/Forgot-password";
import ResetPassword from "./components/Reset-password/Reset-password";
import ProviderContainer from "./components/Provider-container/Provider-container";
import Activate from './components/Activate';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* <Navbar /> */}
        <Navbar />
        {/* <Catagories /> */}
        <ProviderProf />
        <UserProf />
        {/* <Login />
        <ProviderSignup /> */}
        {/* <Catagories /> */}

        <Switch>

          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Categories} />
          <Route path="/prov/signup" component={ProviderSignup} />
          <Route path="/user/signup" component={Signup} />
          <Route path="/user/login" component={Login} />
          <Route path="/provider" component={ProviderContainer} />
          <Route path="/auth/users/reset_password/" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
          <Route path="/activate/:uid/:token" component={Activate} />

        </Switch>

        {/* <Footer /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
