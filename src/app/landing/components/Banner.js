"use client";
import CenterWrapper from "@/app/components/CenterWrapper";
import Header from "@/app/components/Header";
import Image from "next/image";
import React from "react";
import LeftInfo from "./LeftInfo";
import RightForm from "./RightForm";
import { Stats } from "./Stats";

const Banner = () => {
  return (
    // <CenterWrapper>
    <div
      className="relative w-full bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/banner.svg')" }}
    >
      {/* <CenterWrapper
        className={
          "text-center container flex flex-col md:flex-row gap-10 h-full relative z-10 "
        }
      > */}

      <Header className={"bg-transparent text-white "} />
      <CenterWrapper className={"!p-0"}>
        <div className="text-white flex flex-col items-center md:flex-row grow relative  h-full  py-8">
          <LeftInfo />
          <RightForm />
        </div>
      </CenterWrapper>
      {/* </CenterWrapper> */}
      <Stats />
    </div>
    // </CenterWrapper>
  );
};

export default Banner;
