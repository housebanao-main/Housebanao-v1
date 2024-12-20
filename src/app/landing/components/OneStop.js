"use client";
import CenterWrapper from "@/app/components/CenterWrapper";
import Heading from "@/app/components/Heading";
import SmallText from "@/app/components/SmallText";
import SubHeading from "@/app/components/SubHeading";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const OneStop = () => {
  const data = [
    {
      heading: "End-to-end Construction",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-home-design-Warm-grey-exteriors.png",
      isImageTop: false,
    },
    {
      heading: "Home Interior",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-home-design-Warm-grey-exteriors.png",
      isImageTop: true,
    },
    {
      heading: "Office Interior",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-home-design-Warm-grey-exteriors.png",
      isImageTop: false,
    },
  ];
  return (
    <div className="bg-gray-100 ">
      <CenterWrapper className={"space-y-6"}>
        <Heading className={"text-center"}>
          One-stop shop,{" "}
          <span className="text-gray-400">
            for all construction and interior
          </span>{" "}
        </Heading>
        <SubHeading className={"text-gray-400 text-center"}>
          Be it end-to-end construction, interior or modular solutions, we have
          it all for your home or office. With a wide range of furniture &
          decor, we have your back from start to finish
        </SubHeading>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {data.map(({ heading, description, image, isImageTop }, index) => (
            <Card
              idx={index}
              key={heading}
              heading={heading}
              description={description}
              image={image}
              isImageTop={isImageTop}
            />
          ))}
        </div>
      </CenterWrapper>
    </div>
  );
};

const Card = ({ heading, description, image, isImageTop, idx }) => {
  const [isTop, setIsTop] = React.useState(isImageTop);

  React.useEffect(() => {
    window.innerWidth < 768 && setIsTop(false);
  }, []);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const style = document.createElement("style");
      style.innerHTML = `
              .animate-card {
                transform: translateY(0);
                opacity: 1;
                transition: transform 0.5s ease-out, opacity 0.5s ease-out;
              }
              .animate-card img {
                transform: translateY(0);
                opacity: 1;
                transition: transform 0.5s ease-out, opacity 0.5s ease-out;
              }
            `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-80 sm:max-w-96 w-full p-4 border space-y-4 rounded-lg hover:scale-105 animate-card"
    >
      {!isTop && (
        <div>
          <SubHeading className={"font-semibold text-primary"}>
            0{idx + 1}
          </SubHeading>
          <SubHeading className={"font-semibold mt-2"}>{heading} </SubHeading>
          <SmallText className={"text-gray-400 mt-4"}>{description} </SmallText>
        </div>
      )}
      <motion.img
        src={image || null}
        className="w-full object-cover rounded-lg h-72"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      />
      {isTop && (
        <div>
          <SubHeading className={"font-semibold text-primary"}>
            0{idx + 1}
          </SubHeading>
          <SubHeading className={"font-semibold mt-2"}>{heading} </SubHeading>
          <SmallText className={"text-gray-400 mt-4"}>{description} </SmallText>
        </div>
      )}
    </motion.div>
  );
};

export default OneStop;
