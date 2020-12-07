import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Catagories from './components/Catagories';

// import './App.css';
import Navbar from "./components/Nav-bar/Nav-bar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
        </p>
        <div>

          <Signup />

        </div>

        <div>
          <h2>
            <Login />
          </h2>
        </div>

        <div>
          <h1>
            <Catagories />
          </h1>
        </div>

        <Navbar />
        <Main />
        <Footer />

      </header>
    </div>
  );
}

export default App;
