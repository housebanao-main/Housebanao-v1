"use client"
import React, { useRef } from 'react'
import { MdArrowOutward } from "react-icons/md";
import { motion, useInView } from 'framer-motion';

const LeftInfo = () => {
    const data= [
        {name: "Get in touch",
            icon: "",
            link: ""
        },
        {name: "Our Services",
            icon: "",
            link: ""
        },
    ]

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true });

    const containerVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    const buttonVariants = {
        hover: { scale: 1.1 },
        tap: { scale: 0.9 }
    };

    return (
        <motion.div 
            ref={containerRef}
            className='flex flex-col items-start w-full md:basis-1/2 justify-center gap-8 pl-4'
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.h2 className='text-left text-lg' variants={itemVariants}>
                #1 Home constructor in India
            </motion.h2>
            <motion.h1 className='text-4xl text-left' variants={itemVariants}>
                Innovative Modular Homes for the Future Generation
            </motion.h1>
            <motion.div className='space-x-4 flex' variants={itemVariants}>
                {data.map(({name, icon, link}) => (
                    <motion.button 
                        key={name} 
                        className='relative flex items-center gap-1'
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        {name} <MdArrowOutward/>
                        <motion.span 
                            className='absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left scale-x-0'
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{ transformOrigin: 'left' }}
                        />
                    </motion.button>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default LeftInfo