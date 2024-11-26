import React from "react";

const AboutUsPage = () => {
  return (
    <div className="relative w-full">
      <div className="w-full h-[50vh] relative">
        <img
          src="assets/images/housemain.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      <div className="bg-white p-10">
        <div className="mx-5 lg:mx-20"> 
          <h1 className="text-4xl font-semibold text-black mb-4 animate-slide-left">
            Welcome to House Banao: Dedicated to Building Your Dream
          </h1>
          <p className="text-lg text-[#646063] mb-6 animate-slide-left delay-200">
            At House Banao, we are passionate about making your dream a reality. In our construction and interior designing firm, our team is committed to crafting extraordinary living spaces that reflect your style and essence.
          </p>

          <h2 className="text-2xl font-semibold text-[#646063] mb-2 animate-slide-left">
            Our Story
          </h2>
          <p className="text-lg text-[#646063] mb-6 animate-slide-left delay-400">
            House Banao was founded on one belief that everyone deserves a beautiful and well-maintained home. With many years of experience, our passionate team of designers, architects, and builders work tirelessly to provide the best services beyond our client's expectations. We believe that every house tells a story, so here we are committed to assisting our clients in creating their own. One of the main things that sets us apart from others is that we take pride in working one-on-one with our clients to bring their unique vision to life.
          </p>

          <h2 className="text-2xl font-semibold text-[#646063] mb-2 animate-slide-left delay-600">
            Our Expertise
          </h2>
          <ul className="list-disc pl-6 mb-6 text-[#646063] animate-slide-left delay-800">
            <li>Home Interior Design – Our experienced designers will work closely with you to develop a functional and practical living area that suits your lifestyle.</li>
            <li>Home Construction – From the foundation to the finishing touches, our skilled and experienced team undertakes every task of building your ideal home.</li>
            <li>Office Interior Design – We are here to provide the design and construction of efficient workspaces to enhance your brand and foster its success.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#646063] mb-2 animate-slide-left delay-1000">
            Our Approach
          </h2>
          <ul className="list-disc pl-6 text-[#646061] animate-slide-left delay-1200">
            <li>Personalized Services – We take time to know your needs and preferences.</li>
            <li>Quality Craftmanship – Attention to detail, high-quality results in each project.</li>
            <li>Timely Delivery –Completing projects within budget and on time.</li>
          </ul>
          <br />

          <h2 className="text-2xl font-semibold text-[#646063] mb-2 animate-slide-left delay-1400">
            Why Choose House Banao?
          </h2>
          <ul className="list-disc pl-6 text-[#646063] animate-slide-left delay-1600">
            <li>One-Stop Solution – We provide construction and interior design services under one roof to make your project’s management easy and effective.</li>
            <li>Experienced Team – We have a skilled professional team with years of experience in constructing and designing exceptional spaces.</li>
            <li>Quality Craftmanship – Meticulous attention to detail and high quality are our top priorities in every project.</li>
            <li>Client-Centric – Our top priority is client satisfaction and we never fail to perform beyond your expectations.</li>
            <li>Innovative Designs – Our expert designers keep themselves updated on the latest design trends and technologies.</li>
            <li>Budget-Friendly – We offer cost-effectiveness compared to other companies without compromising quality.</li>
            <li>Reliability – We are reliable and trustworthy partners for your home construction and interior design needs.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
