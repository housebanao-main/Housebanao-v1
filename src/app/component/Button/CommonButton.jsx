'use client'
import React from 'react';

export const CommonButton = ({ children, onClick = () => {} }) => {
  return (
    <button
      className='rounded-lg shadow-md py-1 lg:py-3 px-3 lg:px-6 text-sm lg:text-lg text-white bg-[#A46254] leading-tight hover:bg-[#93503e]'
      onClick={onClick}
    >
      {children}
    </button>
  );
};
