import React from "react";
import { Link } from "react-router-dom";

function MainButton({ href, children, className = "", type, disabled, ...props }) {
  // If type is provided submit render as button
  if (type) {
    return (
      <button
        type={type}
        disabled={disabled}
        className={`font-medium bg-main hover:bg-gradient-to-r hover:from-main hover:to-sec rounded-2xl py-4 px-8 cursor-pointer
          inline-block text-center relative overflow-hidden transition-all duration-500 ease-in-out 
          hover:shadow-xl active:scale-95 active:shadow-inner transform group disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        {...props}
      >
        <span className="inline-flex items-center gap-2">{children}</span>
      </button>
    );
  }

  // If not render as Link
  return (
    <Link
      to={href}
      className={`font-medium bg-main hover:bg-gradient-to-r hover:from-main hover:to-sec rounded-2xl py-4 px-8 cursor-pointer
        inline-block text-center relative overflow-hidden transition-all duration-500 ease-in-out 
        hover:shadow-xl active:scale-95 active:shadow-inner transform group ${className}`}
      {...props}
    >
      <span className="inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}

export default MainButton;
