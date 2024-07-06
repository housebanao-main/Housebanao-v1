'use client';
import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CommonSlider = ({ children, className, slidesShow, autoPlay, autoPlaySpeed }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: slidesShow,
    slidesToScroll: 1,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: autoPlaySpeed,
        },
      },
    ],
  };

  return (
    <div className="slickDots lg:px-3 px-8">
      <Slider {...settings} ref={sliderRef} className={className}>
        {children}
      </Slider>
      <SliderButton sliderRef={sliderRef} />
    </div>
  );
};

export const SliderButton = ({ sliderRef }) => {
  const styles = "lg:w-[35px] lg:h-[35px] w-[30px] h-[30px] lg:block rounded-full shadow-md bg-gray-200 border-[2px] border-white text-gray-600 hover:border hover:border-black transition-colors lg:flex items-center justify-center absolute lg:top-[45%] top-[45%]";

  return (
    <>
      <button
        className={`${styles} left-0`}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={`${styles} right-0`}
        onClick={() => sliderRef.current.slickNext()}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
};
