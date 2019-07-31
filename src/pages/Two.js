import React from 'react';
import logo from '../logo.svg';

function Two() {
  return (
    <div className="Two">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page Two
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default Two;