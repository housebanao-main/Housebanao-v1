"use client";
import CenterWrapper from "@/app/components/CenterWrapper";
import Heading from "@/app/components/Heading";
import SubHeading from "@/app/components/SubHeading";
import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { IoEyeOffOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const FocusQuality = () => {
  const data = [
    {
      heading: "Professional Expertise",
      icon: <HiOutlineShieldCheck />,
      isColored: true,
    },
    {
      heading: "Reliable Services",
      icon: <BiSolidLike />,
    },
    {
      heading: "Affordable Rates",
      icon: <BsStars />,
    },
    {
      heading: "Quality checks",
      icon: <SiTicktick />,
    },
    {
      heading: "No Hidden cost",
      icon: <IoEyeOffOutline />,
    },
  ];
  return (
    <CenterWrapper>
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
        <Heading className={"basis-1/2"}>
          Focusing on quality,
          <span className="text-gray-400">
            {" "}
            we maintain customer trust{" "}
          </span>{" "}
        </Heading>
        <SubHeading className={"basis-1/2 text-gray-400 "}>
          Seamless Interiors & Construction: Start to Finish, Hassle-Free.
          Effortless Interior & Construction Solutions: From Concept to
          Completion.
        </SubHeading>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0 justify-center mt-8">
        {data.map(({ heading, icon, isColored }, index) => (
          <Circles
            key={heading}
            heading={heading}
            icon={icon}
            isColored={isColored}
            index={index}
          />
        ))}
      </div>
    </CenterWrapper>
  );
};

const Circles = ({ heading, icon, isColored, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`min-w-80 md:min-w-[20%] aspect-[1] h-full bg-gray-100 rounded-full cursor-pointer flex items-center justify-center gap-2 text-base md:text-lg lg:text-xl hover:text-primary hover:border-b-2 hover:border-gray-300 hover:shadow-md`}
    >
      {icon}
      {heading}
    </motion.div>
  );
};

export default FocusQuality;
