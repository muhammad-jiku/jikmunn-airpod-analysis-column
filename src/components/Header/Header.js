import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex items-center justify-center bg-orange-600">
      <NavLink
        to="/"
        className="p-3 text-white text-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        className="p-3 text-white text-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        Reviews
      </NavLink>
      <NavLink
        to="/dashboard"
        className="p-3 text-white text-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/blogs"
        className="p-3 text-white text-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        Blogs
      </NavLink>
      <NavLink
        to="/about"
        className="p-3 text-white text-lg hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
