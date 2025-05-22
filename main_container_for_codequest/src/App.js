import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">{'{ }'}</span> CodeQuest
            </div>
            <button className="btn">Sign In</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <MainContainer />
        </div>
      </main>
    </div>
  );
}

export default App;