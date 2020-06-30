import React from 'react';
import './App.css';
import FetchApi from './FetchDataLoading'

function Start() {
  return (
    <div className="App">
      <header className="App-header">
         <FetchApi />
      </header>
    </div>
  );
}

export default Start;
