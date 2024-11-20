import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    imageSrc: '/assets/images/Homeblog1.png',
    date: '01 June, 2024',
    title: 'New Home Construction | Build Your Perfect Home',
    slug: 'new-home-construction-build-your-perfect-home' 
  },
  {
    imageSrc: '/assets/images/Homeblog2.png',
    date: '02 June, 2024',
    title: 'Finding the Best Construction Company in Gurgaon: A Complete Guide',
    slug: 'finding-best-construction-company-gurgaon-complete-guide' 
  },
  {
    imageSrc: '/assets/images/Homeblog3.png',
    date: '03 June, 2024',
    title: 'Home Interior Design, Interior Design Services, House Interior Design',
    slug: 'home-interior-design-services-house-interior-design' 
  }
];


const BlogB = ({ imageSrc, date, title, slug }) => (
  <Link href={`/blog/${slug}`}>
    <div className="flex flex-col mb-6 w-full ml-2 cursor-pointer">
      <Image
        src={imageSrc}
        alt={title}
        width={450}
        height={150}
        className={`object-cover ${imageSrc === '/assets/images/blog6.png' ? 'h-[250px]' : ''}`} // Reduced height for blog6.png
      />
      <div className="bg-white p-4 flex flex-col items-start gap-2 ml-2">
        <p className="text-sm text-[#2F2F2F]">{date}</p>
        <h3 className="text-lg font-semibold text-[#575757] mt-0">{title}</h3>
      </div>
    </div>
  </Link>
);


const BlogPart = () => (
  <div className="relative bg-white p-6 ml-2 mr-2 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
      {blogs.slice(0, 3).map((blog, index) => (
        
        <BlogB key={index} {...blog} />
      ))}
    </div>
    <div className="relative flex justify-center">
      <div className="absolute top-0 left-[calc(100%/3)] transform -translate-x-1/2 w-px h-full bg-black"></div>
      <div className="absolute top-0 left-[calc(200%/3)] transform -translate-x-1/2 w-px h-full bg-black"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 relative">
      {blogs.slice(3).map((blog, index) => (
        <BlogB key={index} {...blog} />
      ))}
    </div>
  </div>
);

export default BlogPart;
