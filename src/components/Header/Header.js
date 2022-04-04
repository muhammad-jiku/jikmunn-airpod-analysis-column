import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center' }}>
      <NavLink
        style={({ isActive }) => {
          return {
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          };
        }}
        to="/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          };
        }}
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          };
        }}
        to="/blogs"
      >
        Blogs
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            margin: '1rem 0',
            color: isActive ? 'red' : '',
          };
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
