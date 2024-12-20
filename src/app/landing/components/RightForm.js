"use client"
import React, { useRef } from "react";
import { IoMdContact } from "react-icons/io";
import { Stats } from "./Stats";
import { motion, useInView } from 'framer-motion';

const RightForm = () => {
  const data = [
    {
      placeholder: "Name",
      icon: <IoMdContact />,
    },
    {
      placeholder: "Phone number",
      icon: <IoMdContact />,
    },
    {
      placeholder: "Plot location",
      icon: <IoMdContact />,
    },
  ];

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#7a3e2f" },
    tap: { scale: 0.95 }
  };

  const whatsappButtonVariants = {
    hover: { scale: 1.05, backgroundColor: "#2e7d32" },
    tap: { scale: 0.95 }
  };

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="basis-full md:basis-1/2 flex flex-col items-center justify-center p-4 pb-20">
      <motion.div
        ref={containerRef}
        id="container"
        className="max-w-xl mx-auto pb-[3vw] pt-[1vw] space-y-4 backdrop-blur-sm bg-white bg-opacity-20 rounded-t-md rounded-b-full overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center justify-center gap-4" variants={itemVariants}>
          <motion.h1 className="text-center text-base sm:text-xl" variants={itemVariants}>
            Get your cost estimate for free
          </motion.h1>
          <div className="w-[80%] space-y-3">
            {data.map(({ placeholder, icon }) => (
              <motion.div
                key={placeholder}
                className="border rounded-full flex items-center p-1"
                variants={itemVariants}
              >
                <span className="text-2xl pl-2"> {icon}</span>
                <input
                  key={placeholder}
                  className="bg-transparent w-full placeholder-white p-2 outline-none"
                  placeholder={placeholder}
                  style={{ color: "white" }}
                />
              </motion.div>
            ))}
          </div>
          <div className="w-full flex flex-col items-center gap-3">
            <motion.button
              className="bg-primary text-white w-[80%] py-2 rounded-md"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Get in touch
            </motion.button>
            <motion.button
              className="bg-green-500 text-white w-[80%] py-2 rounded-md"
              variants={whatsappButtonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Chat with Whatsapp
            </motion.button>
          </div>
          <motion.p className="w-[80%] text-center mx-auto relative bottom-2 text-sm" variants={itemVariants}>
            By submitting this form, you agree to the privacy policy and terms
            of use
          </motion.p>
        </motion.div>
      </motion.div>
      {/* <div className="overflow-hidden"> */}
        {/* <Stats /> */}
      {/* </div> */}
    </div>
  );
};

export default RightForm;
