import React from 'react';
import Head from 'next/head'; // Import Next.js Head component
import House from '../component/MainSection/House/House2'; 
import Steps from '../component/MainSection/Steps/Steps'; 
import ShowCase from '../component/MainSection/ShowCase/ShowCase'; 
import { Faqs } from '../component/MainSection/FAQs/Faqs';
import { HeroSection } from '../component/MainSection/HeroSection';

const HowItWork = () => {
    return (
        <>
            <Head>
                <title>House Banao | How It Works</title>

                <meta 
                    name="description" 
                    content="Want to know how House Banao makes construction & design easy? We have a step-by-step way that ensures clear talks & amazing results from start to finish. Find out how we deal with everything to make your vision real without any hassle!" 
                />

                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="House Banao | How It Works" />
                <meta property="og:description" content="Want to know how House Banao makes construction & design easy? We have a step-by-step way that ensures clear talks & amazing results from start to finish. Find out how we deal with everything to make your vision real without any hassle!" />
                <meta property="og:url" content="https://www.housebanao.com/howitwork" />
                <meta property="og:type" content="website" />
            </Head>

            <div>
                <House />
                <Steps />
                <ShowCase />
            </div>
        </>
    );
}

export default HowItWork;
