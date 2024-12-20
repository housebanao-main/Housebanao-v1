import React, { useEffect, useRef } from 'react';

const SmallText = ({children, className}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add('animate');
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        .animate {
          transform: translateY(0);
          opacity: 1;
          transition: transform 0.5s ease-out, opacity 0.5s ease-out;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <p ref={ref} className={`${className} text-sm transition-transform transform translate-y-10 opacity-0`}>
      {children}
    </p>
  );
}

export default SmallText;