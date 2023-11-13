import React, { useContext } from "react";
import './Navbar.css';
import MobileMenu from "../../../components/MobileMenu";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { authContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user, signOutUser} = useContext(authContext)
  const navigate = useNavigate()
  const handleSignOut = ()=>{
    signOutUser()
    .then(()=>{
      toast.success("Logout was successful", {autoClose:1000})
      navigate("/");
    })
    .catch(error => {
      toast.error(error.message, {autoClose:1000})
    })
  }
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


        <ul className="flex items-center gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT US</NavLink>
          </li>
          <li>
            <NavLink to="/menu">OUR MENU</NavLink>
          </li>
          <li>
            <NavLink to="/shop/salad">OUR SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/cart">CART</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">DASHBOARD</NavLink>
          </li>
          <li>
            <NavLink to="/user">
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
            </NavLink>
          </li>
          <li>
            <button onClick={handleSignOut} className="px-5 py-2 bg-[] text-white border-[1px] border-[#D1A054] hover:bg-[#D1A054] duration-300 rounded-md">Logout</button>
          </li>
          <li>
            <button className="px-5 py-2 bg-[] text-white border-[1px] border-[#D1A054] hover:bg-[#D1A054] duration-300 rounded-md">Login</button>
          </li>
        </ul>
    </div>
    <MobileMenu photoURL={user?.photoURL} displayName={user?.displayName} handleSignOut={handleSignOut}></MobileMenu>
    </div>
  );
};

export default Navbar;
