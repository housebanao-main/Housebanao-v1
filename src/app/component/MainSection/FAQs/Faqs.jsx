// src/app/components/MainSection/FAQs/Faqs.jsx

import React from 'react';
import { CommonHeading } from '../../Heading/CommonHeading';
import { Accordion } from '../../Utils/Accordion/Accordion';

export const Faqs = () => {
    const data = [
        {
            question: 'What services do you offer?',
            answer: 'At House Banao, we specialize in comprehensive house construction, residential design, and office interior design. Whether you’re building a new home, renovating your space, or designing a stylish office, we handle it all with precision and creativity. Our services include architectural planning, interior design, space optimization, and project management.',
        },
        {
            question: 'How much experience does your team have?',
            answer: 'Our team boasts over 10 years of experience in the construction and design industry. We bring a wealth of knowledge and a track record of successful projects to ensure your vision is brought to life with expertise and care.',
        },
        {
            question: 'Can I see examples of your past work?',
            answer: 'Absolutely! We’re proud of our portfolio and would love to show you examples of our completed projects. You can explore our gallery on the website or request a personalized showcase during a consultation.',
        },
        {
            question: 'Do you offer consultations?',
            answer: 'Yes, we offer free initial consultations to discuss your ideas and project needs. This helps us understand your vision and provide you with expert advice and a tailored plan.',
        },
        {
            question: 'What is your process for project development?',
            answer: 'Our process starts with understanding your goals through detailed consultations. We then move to architectural and interior designs, providing you with detailed drawings, front evaluation, 2D and 3D with comprehensive layouts. After this, we proceed to construction and execution. Throughout the project, we ensure constant communication and quality control to deliver exceptional results.',
        },
        {
            question: 'How long does a typical project take?',
            answer: 'The timeline of a typical project depends on its scope and complexity. On average, residential projects take 10-12 months from start to finish, while larger commercial projects might require additional time. Interior designing projects generally take about 2-4 months (Office/Residential Interior). We’ll provide a clear timeline after assessing your specific needs.',
        },
        {
            question: 'What makes your company special?',
            answer: 'At House Banao, our entire team is committed to excellence, enabling us to offer end-to-end solutions to provide seamless, hassle-free experiences for our clients. We blend innovative design with practical solutions, ensuring that every project is unique and personalized as per your needs. Our dedication to quality and client satisfaction is evident in our thorough approach, including over 300 quality checks throughout each project.',
        },
    ];

    return (
        <section className='w-full h-auto bg-[#FAF7F6] p-[30px]' id='faqs'>
            <CommonHeading className={'text-center'}>Frequently Asked Questions</CommonHeading>
            <Accordion data={data} />
        </section>
    );
};

export default Faqs;
