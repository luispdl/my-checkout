import React from 'react';
import logo from '../logo.svg';

function One() {
  return (
    <div className="One">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page One
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

export default One;
