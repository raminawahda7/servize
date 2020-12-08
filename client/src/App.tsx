import React from 'react';
// import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Nav-bar/Nav-bar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";
import ForgotPassword from "./components/Forgot-password/Forgot-password";
import ResetPassword from "./components/Reset-password/Reset-password";
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />

        <Switch>

          <Route exact path="/" component={Main} />
          <Route path="/user/forgot-password" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />

        </Switch>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
