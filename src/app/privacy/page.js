import React from 'react';
import Head from 'next/head';
import PrivacyPolicy from '../component/MainSection/PrivacyPolicy/PrivacyPolicy';

const Page = () => {
  return (
    <>
      <Head>
        <title>House Banao | Privacy & Policy</title>
        <meta 
          name="description" 
          content="Your privacy matters to us! Check out House Banao’s privacy policy to see how we collect, use, and protect your personal information. We aim to create a secure & clear experience while handling your data with care." 
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="House Banao | Privacy & Policy" />
        <meta property="og:description" content="Your privacy matters to us! Check out House Banao’s privacy policy to see how we collect, use, and protect your personal information. We aim to create a secure & clear experience while handling your data with care." />
        <meta property="og:url" content="https://www.housebanao.com/privacy" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-white">
        <PrivacyPolicy />
      </div>
    </>
  );
};

export default Page;
