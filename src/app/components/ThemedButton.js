"use client"
import { motion } from 'framer-motion'
import React from 'react'

const ThemedButton = ({className, children}) => {
  return (
    
<motion.button   whileHover={{ scale: 1.05 ,backgroundColor: "#7a3e2f"  }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }} className={`${className} text-sm  bg-primary px-4 rounded-2xl py-2 text-white `}>{children}</motion.button>
    
  )
}

export default ThemedButton