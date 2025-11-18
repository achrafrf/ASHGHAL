"use client";

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <a
      href="#top"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 md:bottom-8 md:right-8
        w-12 h-12 md:w-14 md:h-14
        bg-[#ff0000] rounded-full
        flex items-center justify-center
        shadow-[0_4px_12px_rgba(0,0,0,0.3)]
        z-[1000]
        transition-all duration-300 ease-in-out
        hover:bg-[#cc0000] hover:scale-110
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff0000] focus:ring-offset-black
        ${isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'}
      `}
    >
      <ChevronUp className="h-6 w-6 text-white md:h-7 md:w-7" />
    </a>
  );
};

export default BackToTopButton;