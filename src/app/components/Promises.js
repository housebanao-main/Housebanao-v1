import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import img from '@/public/promises.png'

const Promises = () => {
  return (
    <div className='bg-[#2A27E8]'>
      <Wrapper className={"py-8 md:py-16 "}>
        <h1 className='text-2xl lg:text-4xl xl:text-6xl uppercase text-white font-bold mb-4 sm:mb-6 md:mb-12'>
          <span className='text-[#ADFF00] font-bold '>housebanao</span> promises ...
        </h1>
        {/* <div className='mx-auto space-y-2 max-w-[650px]'>
          <div className='flex justify-between items-center flex-wrap md:flex-nowrap gap-2 md:gap-8'>
            <h2 style={{
              "-webkit-text-stroke": "19.43px red",
              "fontWeight": '800',
               "fontSize": "93.57px"
            }} className=' basis-full  text-nowrap  md:basis-1/3 text-white font-bold xl:-webkit-text-stroke-19.43px'>
              NO FAKE
            </h2>
            <h2 style={{
              "-webkit-text-stroke": "2px #ADFF00",
              "fontWeight": '800',
            //   "fontSize": "7vw"
            }} className='text-3xl lg:text-3xl xl:text-5xl basis-full text-center  text-nowrap md:basis-1/3 text-black font-bold xl:-webkit-text-stroke-4px'>
              BEST PRICES
            </h2>
            <h2 style={{
              "-webkit-text-stroke": "2px white",
              "fontWeight": '800',
            //   "fontSize": "7vw"
            }} className='text-3xl lg:text-3xl xl:text-5xl basis-full text-right  text-nowrap md:basis-1/3 text-black font-bold xl:-webkit-text-stroke-4px'>
              NO
            </h2>
          </div>
          <div className='flex justify-between items-center flex-wrap md:flex-nowrap gap-2 md:gap-8'>
            <h2 style={{
              "-webkit-text-stroke": "2px red",
              "fontWeight": '800',
            //    "fontSize": "7vw"
            }} className='text-3xl lg:text-3xl xl:text-5xl basis-full  text-nowrap text-white font-bold xl:-webkit-text-stroke-4px'>
             GUARANTEE
            </h2>
         
            <h2 style={{
              "-webkit-text-stroke": "2px white",
              "fontWeight": '800',
            //   "fontSize": "7vw"
            }} className='text-3xl lg:text-3xl xl:text-5xl basis-full  text-nowrap  text-black font-bold xl:-webkit-text-stroke-4px'>
HIDDEN COST
            </h2>
          </div>
        </div> */}
        <Image src={img} alt='promises' className='mx-auto' />
      </Wrapper>
    </div>
  )
}

export default Promises