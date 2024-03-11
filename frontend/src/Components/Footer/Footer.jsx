import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Refund Policy", url: "/refund-policy" },
    { name: "Shipping Policy", url: "/shipping-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Contact Us", url: "/contact-us" },
    { name: "Career Opportunities", url: "/career-opportunities" },
    { name: "Care Label", url: "/care-label" },
  ];

  return (
    <footer className="flex flex-col gap-4 px-8 md:px-20 pt-10">
      <div className="flex flex-col gap-5 md:gap-[50%] md:flex-row md:justify-center">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-lg">Quick Links</h1>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) => (
              <Link
                to={link.url}
                key={link.name}
                className="text-md text-gray-500 hover:text-gray-800 hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <img className="w-[150px]" src={logo} alt="logo" />
          <p className="text-xl font-semibold">Wear Goodness.</p>
          <p>
            Office Address: House 69, Road 17, Banani (Opposite of Rancon, Near
            Star Kabab)
          </p>
          <p>
            Call for order:{" "}
            <span className="font-semibold">09613119911 (10am- 10pm)</span>
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/GoodyBro/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-2xl text-gray-500 hover:text-gray-800" />
            </a>
            <a
              href="https://www.instagram.com/goodybro/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-2xl text-gray-500 hover:text-gray-800" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t py-3 flex items-center justify-center">
        <p className="text-xs">
          &copy; 2024,{" "}
          <a
            href="istieakahmed.com"
            target="_blank"
            className="font-bold hover:underline"
          >
            Istieak Ahmed
          </a>
          . All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
