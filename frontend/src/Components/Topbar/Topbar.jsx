import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Topbar = () => {

    const data = [
        {id: 1, title: "Advance bKash 130 BDT on Outside Dhaka Orders. (bKash merchant payment-01708729789)"}, 
        {id: 2, title: "Call to Order: 096 13119911 (10am- 10pm)"},
    ]; 

    const [currentSlide, setCurrentSlide] = useState(0);

    const leftClick = () => {
      setCurrentSlide(oldSlideIndex => {
        let newSlideIndex = oldSlideIndex - 1;
        if(newSlideIndex < 0) newSlideIndex = data.length - 1; // loop back to last slide
        return newSlideIndex;
      });
    }

    const rightClick = () => {
      setCurrentSlide(oldSlideIndex => {
        let newSlideIndex = oldSlideIndex + 1;
        if(newSlideIndex === data.length) newSlideIndex = 0; // loop back to first slide
        return newSlideIndex;
      });
    }

  return (
    <div className='border-b px-8 md:px-16 flex py-4 justify-between '>
      <MdKeyboardArrowLeft onClick={leftClick} className="text-xl " />
      <p className='text-xs md:text-sm px-5 text-center '>{data[currentSlide].title}</p>
      <MdKeyboardArrowRight onClick={rightClick} className="text-xl " />
    </div>
  )
}

export default Topbar