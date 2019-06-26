import React, { Component } from 'react';

export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className="fab fa-github" /> NavBar
        </h1>
      </nav>
    );
  }
}

export default NavBar;
