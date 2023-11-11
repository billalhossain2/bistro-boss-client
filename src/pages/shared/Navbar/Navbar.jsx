import React from "react";
import './Navbar.css';
import MobileMenu from "../../../components/MobileMenu";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="relative">
      <div className="fixed z-50 md:flex items-center bg-black bg-opacity-50  hidden text-white lg:w-[95%] md:w-[100%] p-5">
      
          <div className="flex-1">
          <div className="flex items-center gap-3">
          <NavLink className="uppercase">
          <img className="w-16 h-16" src={logo} alt="Logo" />
          </NavLink>

          <div>
          <p className="text-2xl font-bold">Bistro Boss</p>
          <p>Restaurant</p>
          </div>
          </div>
          </div>


        <ul className="flex gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">DASHBOARD</NavLink>
          </li>
          <li>
            <NavLink to="/menu">OUR MENU</NavLink>
          </li>
          <li>
            <NavLink to="/shop">OUR SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/cart">CART</NavLink>
          </li>
          <li>
            <NavLink to="/user">USER</NavLink>
          </li>
        </ul>
    </div>
    </div>
  );
};

export default Navbar;
