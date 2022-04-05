import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    // custom class added to this component
    <nav className="flex items-center justify-center custom-nav-style">
      <NavLink to="/" className="custom-navlink-style">
        Home
      </NavLink>
      <NavLink to="/reviews" className="custom-navlink-style">
        Reviews
      </NavLink>
      <NavLink to="/dashboard" className="custom-navlink-style">
        Dashboard
      </NavLink>
      <NavLink to="/blogs" className="custom-navlink-style">
        Blogs
      </NavLink>
      <NavLink to="/about" className="custom-navlink-style">
        About
      </NavLink>
    </nav>
  );
};

export default NavBar;
