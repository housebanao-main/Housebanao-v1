"use client"
import React, { useRef, Children } from 'react'
import { motion, useInView } from 'framer-motion'

const Heading = ({children, className}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const renderChildren = () => {
    if (typeof children === 'string') {
      return children.split(" ").map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
          {word}
        </motion.span>
      ));
    } else {
      return Children.map(children, (child, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block mr-1">
          {child}
        </motion.span>
      ));
    }
  };

  return (
    <motion.h1
      ref={containerRef}
      className={`text-2xl sm:text-3xl md:text-4xl font-semibold ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {renderChildren()}
    </motion.h1>
  )
}

export default Heading