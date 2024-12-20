"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SubHeading = ({children, className}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={containerRef}
      className={`text-base sm:text-lg ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export default SubHeading