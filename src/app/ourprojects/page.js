import React from 'react';
import Head from 'next/head'; // Import Next.js Head component
import BlogPart from '../component/MainSection/BlogPart/BlogPart';
import House from '../component/MainSection/House/House1'; 
import Projects from '../component/MainSection/Projects/Projects';
import Projects1 from '../component/MainSection/Projects/Projects1';

const HowItWork = () => {
    return (
        <>
            <Head>
                <title>Explore House Banao Successful Projects in Gurgaon & Delhi NCR</title>

                <meta 
                    name="description" 
                    content="Take a look at House Banao's successful projects in Gurgaon! Our fantastic team shows how different ideas can come to life with great craftsmanship & attention to detail. See our completed projects and get inspired for your next build or makeover." 
                />

                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Explore House Banao Successful Projects in Gurgaon & Delhi NCR" />
                <meta property="og:description" content="Take a look at House Banao's successful projects in Gurgaon! Our fantastic team shows how different ideas can come to life with great craftsmanship & attention to detail. See our completed projects and get inspired for your next build or makeover." />
                <meta property="og:url" content="https://www.housebanao.com/ourprojects" />
                <meta property="og:type" content="website" />
            </Head>

            <div className="bg-white">
                <House />
                <div className="mt-6">
                    <Projects />
                </div>
            </div>
        </>
    );
}

export default HowItWork;
