"use client";
import CenterWrapper from "@/app/components/CenterWrapper";
import Heading from "@/app/components/Heading";
import SubHeading from "@/app/components/SubHeading";
import ThemedButton from "@/app/components/ThemedButton";
import { MdArrowOutward } from "react-icons/md";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Getintouch = () => {
  const data = [
    {
      name: "Raise a request",
      link: "",
    },
    {
      name: "Meet our expert",
      link: "",
    },
    {
      name: "Book with us",
      link: "",
    },
    {
      name: "Recieve detailed plan",
      link: "",
    },
    {
      name: "Track & Transact",
      link: "",
    },
    {
      name: "Move In",
      link: "",
    },
  ];
  return (
    <CenterWrapper
      className={
        "flex flex-col md:flex-row flex-wrap-reverse md:flex-nowrap justify-between gap-4 "
      }
    >
      <div>
        <Heading className={"mb-4"}>Your Dream Home in 6 Steps </Heading>
        <SubHeading className={"text-gray-400 mb-2"}>
          Looking to design your home interiors? Here's how you can get started.
        </SubHeading>
        <ThemedButton className={"flex items-center gap-1.5"}>
          Get in touch <MdArrowOutward size={"1.2rem"} />{" "}
        </ThemedButton>
        <div className="grid grid-cols-2 mt-4 gap-2">
          {data.map(({ name, link }, idx) => (
            <Card key={name} idx={idx} name={name} link={link} />
          ))}
        </div>
      </div>
      <motion.div
        className="basis-full md:basis-1/2 relative min-h-80 sm:min-h-96"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          alt="home"
          src={
            "https://cbx-prod.b-cdn.net/COLOURBOX61553501.jpg?width=1200&height=1200&quality=70"
          }
          layout="fill"
          objectFit="cover"
          className="rounded-xl h-full  "
        />
      </motion.div>
    </CenterWrapper>
  );
};

const Card = ({ idx, name, link }) => {
  return (
    <div className="space-y-2 p-4 border rounded-lg">
      <SubHeading className={"text-gray-400"}>0{idx + 1}</SubHeading>
      <SubHeading>{name}</SubHeading>
      <button className="hover:underline text-sm">View Details</button>
    </div>
  );
};
export default Getintouch;
