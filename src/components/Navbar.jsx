import React from "react";
import logo from "../assets/more/logo1.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/" className="btn btn-sm border-none">
        Home
      </NavLink>

      <NavLink to="/addCoffee" className="btn btn-sm border-none">
        Add Coffee
      </NavLink>
      <NavLink to="/signin" className="btn btn-sm border-none">
        SignIn
      </NavLink>
    </>
  );
  return (
    <div className="navbar  bg-nav-bar bg-cover bg-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-x-3"
          >
            {links}
          </ul>
        </div>
        <a className=" flex flex-row items-center space-x-2 text-center  text-4xl font-rancho text-white">
          <img src={logo} className="w-[60px] h-[60px]" alt="" />
          Espresso Emporium
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
