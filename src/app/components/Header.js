"use client"
import { motion } from "framer-motion";
import CenterWrapper from "./CenterWrapper";
import ThemedButton from "./ThemedButton";

const Header = ({ className }) => {
  // console.log(motion);
  
  return (
    <CenterWrapper className={"!py-4"}>
      <div className={` flex justify-between  ${className}`}>
        <h1 className="text-xl capitalize font-semibold "> house banao</h1>
        <div className="flex space-x-4">
          <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="text-sm font-semibold px-4 rounded-2xl border py-1 ">
            Log in
          </motion.button>
          {/* <button className="text-sm font-semibold bg-primary px-4 rounded-2xl py-1 text-white">Get in touch</button> */}
          <ThemedButton>Get in touch</ThemedButton>
        </div>
      </div>
    </CenterWrapper>
  );
};

export default Header;
