'use client';
import React from 'react';
import { CommonButton } from '../Button/CommonButton';
import { HeroSectionButton } from '../Button/HeroSectionButton';

export const HeroSectionContent = () => {
  return (
    <section className='relative flex-grow lg:flex lg:items-start lg:justify-start w-full lg:text-left text-center'>
      <div className='lg:pl-20 py-10'>
        <h1 className='text-black text-[45px] font-bold'>Construct your</h1>
        <h1 className='text-[#A46254] text-[45px] font-bold'>Dream Home</h1>
        <p className='text-black text-[18px] leading-[24px] font-medium'>
          Hassle free Interiors and Construction from start to finish.
        </p>
        <CommonButton>Start your construction</CommonButton>
        <div className='flex justify-center lg:justify-start gap-4 mt-4'>
          <HeroSectionButton title='Interior designing' />
          <HeroSectionButton title='End to end construction' />
        </div>
      </div>
    </section>
  );
};
