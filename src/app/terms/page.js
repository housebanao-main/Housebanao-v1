import React from 'react';
import Head from 'next/head'; // Import Next.js Head component
import Termsconditions from '../component/MainSection/Termsconditions/Termsconditions';

const Page = () => {
  return (
    <>
      <Head>
        <title>House Banao | Terms & Condition</title>

        <meta 
          name="description" 
          content="Read about House Banao’s terms and conditions to get familiar with our rules and processes. This page has important info about our services, agreements, and what customers need to know, ensuring a clear understanding for a smooth partnership." 
        />

        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="House Banao | Terms & Condition" />
        <meta property="og:description" content="Read about House Banao’s terms and conditions to get familiar with our rules and processes. This page has important info about our services, agreements, and what customers need to know, ensuring a clear understanding for a smooth partnership." />
        <meta property="og:url" content="https://www.housebanao.com/terms" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-white">
        <Termsconditions />
      </div>
    </>
  );
};

export default Page;
