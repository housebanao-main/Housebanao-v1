import React from 'react';
import Head from 'next/head'; // Import Next.js Head component
import { Faqs } from "../component/MainSection/FAQs/Faqs";

const Page = () => {
  return (
    <>
      <Head>
        <title>House Banao FAQ: Your Guide to Our Construction & Design Service</title>

        <meta 
          name="description" 
          content="Got questions? Find answers about House Banao’s construction & design services here! Our FAQs page offers simple information to help you understand our processes, rules, and how we can help with your project needs." 
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="House Banao FAQ: Your Guide to Our Construction & Design Service" />
        <meta property="og:description" content="Got questions? Find answers about House Banao’s construction & design services here! Our FAQs page offers simple information to help you understand our processes, rules, and how we can help with your project needs." />
        <meta property="og:url" content="https://www.housebanao.com/faqss" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-white">
        <Faqs />
      </div>
    </>
  );
};

export default Page;
