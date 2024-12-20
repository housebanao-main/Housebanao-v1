import React from 'react'

const CenterWrapper = ({children, className}) => {
  return (
    <div className={`  ${className} container mx-auto md:py-[4svh] lg:py-[5svh]  px-4 py-[3svh]  `}>
{children}
    </div>
  )
}

export default CenterWrapper