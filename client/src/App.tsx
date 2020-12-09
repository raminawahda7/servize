import React from 'react';

import Signup from './components/Signup';
import Login from './components/Login';
import Catagories from './components/catagories/Catagories';
import Profile from './components/profile/Profile';
import Provider from './components/Register-provider/Regester-provider'

// import './App.css';
import Navbar from "./components/Nav-bar/Nav-bar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signup />
        <Login />
        <Provider />
        <Navbar />
        <Main />
        <Catagories />
        <Footer />
      </header>
    </div>
  );
}

export default App;
