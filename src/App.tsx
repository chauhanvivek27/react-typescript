import React from 'react';
import logo from './logo.svg';
import './App.css';
import { default as Message1 }   from './Detail';
import Example from './Count'
import FetchApi from './FetchData'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Message1 text="Nice example" />
         <Example />
         <FetchApi />
      </header>
    </div>
  );
}

export default App;
