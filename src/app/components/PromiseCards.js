import React from 'react'
import { BiSolidLike } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { IoEyeOffOutline } from "react-icons/io5";
import Wrapper from './Wrapper';

const PromiseCards = () => {
    const data = [
        {
          heading: "Professional Expertise",
          icon: <HiOutlineShieldCheck/>,
          isColored: true
        },
        {
          heading: "Reliable Services",
          icon: <BiSolidLike/>,
        },
        {
          heading: "Affordable Rates",
          icon: <BsStars/>,
          
        },
        {
          heading: "Quality checks",
          icon: <SiTicktick/>,
        },
        {
          heading: "No Hidden cost",
          icon: <IoEyeOffOutline/>,
        },
      ];
  return (
    <div className='bg-gradient-to-b from-[#2A27E8] from-50% to-[#F5F5F7] to-50%'>
         <Wrapper className="flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-center ">
        {data.map(({ heading, icon, isColored }, index) => (
          <Circles key={heading} heading={heading} icon={icon} isColored={isColored} index={index} />
        ))}
      </Wrapper>
    </div>
  )
}


const Circles = ({ heading, icon, isColored, index }) => {
    return (
      <div
        
        className={` min-w-80 md:min-w-[20%]  aspect-[1] h-full bg-[#E2E7F1] rounded-full cursor-pointer flex items-center justify-center gap-2 text-lg lg:text-xl hover:text-primary hover:border-b-2 hover:border-gray-300 hover:shadow-md`}
      >
        {icon}{heading}
      </div>
    );
  };

export default PromiseCards