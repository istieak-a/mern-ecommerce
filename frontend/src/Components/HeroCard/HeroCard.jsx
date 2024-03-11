import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const HeroCard = ({ title, img }) => {
  return (
    <div className="w-full">
      <Link>
        <img src={img} alt="hero-image" />
      </Link>
      <Link className="flex items-center gap-1 hover:gap-3 duration-300 pt-3 hover:underline text-lg font-semibold">
        {title} <MdKeyboardArrowRight className="text-xl" />
      </Link>
    </div>
  );
};

export default HeroCard;
