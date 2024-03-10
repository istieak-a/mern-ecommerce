import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import logo from "../../assets/logo.png";
import { IoMdClose } from "react-icons/io";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const categories = [
    { name: "Home", url: "/home" },
    { name: "Crazy OFFERS!", url: "/offers" },
    { name: "Round Neck Half Sleeve", url: "/round-neck-half-sleeve" },
    { name: "Round Neck Full Sleeve", url: "/round-neck-full-sleeve" },
    { name: "Joggers", url: "/joggers" },
    { name: "Cargo & Chinos", url: "/cargo-chinos" },
    { name: "Drop Shoulders", url: "/drop-shoulders" },
    { name: "Solid POLO", url: "/solid-polo" },
    { name: "V-Neck", url: "/v-neck" },
    { name: "Shorts", url: "/shorts" },
  ];

  return (
    <nav className=" w-full  px-8 md:px-20 py-6 border-b">
      <div className="flex justify-between w-full">
        {navOpen ? (
          <IoMdClose className="nav-ico" onClick={() => setNavOpen(false)} />
        ) : (
          <RxHamburgerMenu className="nav-ico md:hidden" onClick={() => setNavOpen(true)} />
        )}
        <CiSearch className="nav-ico hidden md:block" />
        <img className="w-[100px]" src={logo} alt="logo" />
        <div className="flex gap-3">
          <CiSearch className="nav-ico md:hidden" />
          <CiShoppingCart className="nav-ico" />
          <CiUser className="nav-ico" />
        </div>
      </div>
      {navOpen && (
        <div className="flex flex-col">
          {categories.map((category) => (
            <Link
              key={category.name}
              className="hover:bg-gray-200 py-2 px-3"
              to={category.url}
            >
              {category.name}
            </Link>
          ))}
        </div>
      )}
      <div className="hidden md:flex flex-wrap gap-8 justify-center mt-5">
        {
            categories.map((category) => (
                <Link key={category.name} className="hover:underline" to={category.url}>{category.name}</Link>
            ))

        }
      </div>
    </nav>
  );
};

export default Navbar;
