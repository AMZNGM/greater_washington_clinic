import React, { useState, useEffect } from "react";
import { MdArrowUpward } from "react-icons/md";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-main/30 hover:bg-dark text-white p-4 rounded-2xl
                    shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Scroll to top"
        >
          <MdArrowUpward />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
