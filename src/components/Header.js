import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="I am searching for..." />
        <button type="button">Search</button>
      </div>
      <nav className="nav-bar">
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Message</li>
          <li>Cart</li>
          <li>Account</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
