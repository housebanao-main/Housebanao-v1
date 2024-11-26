import React from 'react';

export const HeroSectionButton = ({ title, onClick = () => {} }) => {
  return (
    <button
      className='bg-transparent rounded-full py-1 px-2 text-xs md:text-sm lg:text-base whitespace-nowrap border-[1px] border-black'
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default HeroSectionButton;
