import React from "react";
import store from "../Assets/store.png";
import cart from "../Assets/cart_icon.png";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar_main h-16 py-2 w-full">
      <div className="main_content flex justify-around">
        <div className="nav_logo flex justify-center items-center">
          <img src={store} alt="store" width={45} />
          <h3 className="text-2xl font-bold mx-6 font-Nunito">SHOPPEE.</h3>
        </div>
        <ul className="category flex w-1/4 justify-between items-center">
          <li className="font-JosefinSans text-lg font-light hover:underline decoration-2 underline-offset-8 hover:text-sopify-color cursor-pointer">
            <Link to='/'>Shop</Link>
          </li>
          <li className="font-JosefinSans text-lg font-light hover:underline decoration-2 underline-offset-8 hover:text-sopify-color cursor-pointer">
            <Link to='/means'>Mens</Link>
          </li>
          <li className="font-JosefinSans text-lg font-light hover:underline decoration-2 underline-offset-8 hover:text-sopify-color cursor-pointer">
            <Link to='/womens'>Womens</Link>
          </li>
          <li className="font-JosefinSans text-lg font-light hover:underline decoration-2 underline-offset-8 hover:text-sopify-color cursor-pointer">
            <Link to='/kids'>Kids</Link>
          </li>
        </ul>
        <div className="nav_function flex w-44 justify-between items-center">
          <button className="font-JosefinSans text-lg  px-2 py-1 flex items-center w-20 justify-between bg-sopify-color rounded-full  hover:text-white">
            <FaRegUserCircle />
            <span><Link to='/login'>Login</Link></span>
          </button>
          <div>
            <Link to='/cart'><img className="w-8 h-8" src={cart} alt="cart" /></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
