import React from 'react';

import Signup from './components/Signup';
import Login from './components/Login';
import Catagories from './components/catagories/Catagories';
import Profile from './components/profile/Profile';
import Provider from './components/Register-provider/Regester-provider'

// import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Nav-bar/Nav-bar";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";

import ForgotPassword from "./components/Forgot-password/Forgot-password";
import ResetPassword from "./components/Reset-password/Reset-password";
import ProviderContainer from "./components/Provider-container/Provider-container";



function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* <Navbar /> */}
        <Signup />
        <Login />
        <Provider />
        <Navbar />
        <Main />
        <Catagories />

        <Switch>

          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={Categories} />
          <Route path="/provider" component={ProviderContainer} />
          <Route path="/user/forgot-password" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />

        </Switch>

        {/* <Footer /> */}

      </div>
    </BrowserRouter>
  );
}

export default App;
