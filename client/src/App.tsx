import React from 'react';
// import './App.css';
import Navbar from "./components/Nav-bar/Nav-bar";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Navbar />
        <Main />
        <Footer />
        
      </header>
    </div>
  );
}

export default App;
