import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Main from "./Main";

function Header() {
  return (
    // <Router>
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/springbreak/home">Home</Link>
            </li>
            <li>
              <Link to="/springbreak/data">Data</Link>
            </li>
            <li>
              <Link to="/springbreak/form">Form</Link>
            </li>
          </ul>
        </nav>

        <Main />
      </div>
    // </Router>
  );
}

export default Header;