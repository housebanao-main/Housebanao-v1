import React from 'react';

export const HeroSectionButton = ({ title, onclick = () => {} }) => {
  const handleClick = () => {
    if (onclick) {
      onclick();
    }
  };

  return (
    <>
      <button
        className='bg-transparent rounded-full py-[5px] px-[6px] lg:py-[7px] lg:px-[10px] border-[1px] border-black text-sm lg:text-base'
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
};
