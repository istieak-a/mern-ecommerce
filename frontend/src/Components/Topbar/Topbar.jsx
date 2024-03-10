import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";


const Topbar = () => {

    const data = [
        {id: 1, title: "Advance bKash 130 BDT on Outside Dhaka Orders. (bKash merchant payment-01708729789)"}, 
        {id: 2, title: "Call to Order: 096 13119911 (10am- 10pm)"},
    ]

  return (
    <div className='border-b px-8 flex justify-between py-4 items-center'>
      <MdKeyboardArrowLeft className="text-xs" />
      <p className='text-xs'>{data[1].title}</p>
      <MdKeyboardArrowRight className="text-xs" />
    </div>
  )
}

export default Topbar
