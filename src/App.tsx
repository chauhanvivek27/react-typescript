import React from 'react';
import './App.css';
import { default as Message1 }   from './Detail';
import Example from './Count'
import FetchApi from './CustomHookDataFetch'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Message1 text="Nice example" />
         <Example />
         <FetchApi />
      </header>
    </div>
  );
}

export default App;
