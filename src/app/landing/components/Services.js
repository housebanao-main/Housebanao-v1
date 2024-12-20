"use client";
import CenterWrapper from "@/app/components/CenterWrapper";
import Heading from "@/app/components/Heading";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const data = [
    {
      name: "Design",
      icon: "https://placehold.co/600x400",
    },
    {
      name: "Core Material",
      icon: "https://placehold.co/600x400",
    },
    {
      name: "Manufacturing",
      icon: "https://placehold.co/600x400",
    },
    {
      name: "Quality Checks",
      icon: "https://placehold.co/600x400",
    },
    {
      name: "Packaging",
      icon: "https://placehold.co/600x400",
    },
    {
      name: "Delivery & installations",
      icon: "https://placehold.co/600x400",
    },
  ];
  return (
    <div className="bg-gray-100">
      <CenterWrapper className={"space-y-4"}>
        <Heading className={"max-w-xl"}>
          What goes into{" "}
          <span className="text-gray-400"> crafting the best for you </span>
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map(({ name, icon }, index) => (
            <Card key={name} name={name} icon={icon} index={index} />
          ))}
        </div>
      </CenterWrapper>
    </div>
  );
};

const Card = ({ name, icon, index }) => {
  const getInitial = () => {
    if (index % 3 === 0) return { opacity: 0, x: -50 }; // left cards
    if (index % 3 === 2) return { opacity: 0, x: 50 }; // right cards
    if (index === 1) return { opacity: 0, y: -50 }; // top center card
    return { opacity: 0, y: 50 }; // bottom center card
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-xl min-h-56 bg-gray-200 relative rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
      <img alt={name} src={icon} className="w-full object-cover" />
      <div className="absolute bottom-4 left-4 z-20 text-white">
        <p className="font-bold">{name}</p>
      </div>
    </motion.div>
  );
};

export default Services;
