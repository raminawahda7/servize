import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {/* Edit <code>src/App.tsx</code> and save to reload. */}
        </p>
        <div>
          <h1>
            <Signup />
          </h1>
        </div>

        <div>
          <h2>
            <Login />
          </h2>
        </div>
      </header>
    </div>
  );
}

export default App;
