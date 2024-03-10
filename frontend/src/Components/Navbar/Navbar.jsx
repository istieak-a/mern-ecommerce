import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between px-10 py-6 items-center">
      <RxHamburgerMenu className="text-2xl" />
      <img className="w-[100px]" src={logo} alt="logo" />
      <div className="flex text-xl gap-3">
        <CiSearch />
        <LuShoppingCart />
      </div>
    </nav>
  );
};

export default Navbar;
