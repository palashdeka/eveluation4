// App.js
import React, { useState } from 'react';
import Display from './components/DIsplayContent';

function App() {
 

  return (
    <div>
     <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Welcome</a>
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>
 
      
    </div>
  );
}

export default App;
