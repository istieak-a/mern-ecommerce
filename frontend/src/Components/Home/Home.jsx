import React from "react";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.png";
import HeroCard from "../HeroCard/HeroCard";

const Home = () => {
  const banners = [
    { title: "Goody Jhor is back!! Upto 70% discount!", img: banner1 },
    { title: "GoodyBro Shorts/Half Pant", img: banner2 },
  ];

  return (
    <div className="px-8 md:px-20 py-10">
      <section className="flex flex-col gap-8 md:flex-row md:gap-2">
        {banners.map((banner, index) => (
          <HeroCard key={index} title={banner.title} img={banner.img} />
        ))}
      </section>
    </div>
  );
};

export default Home;
