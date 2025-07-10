import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AnimatedImage from "./AnimatedImage";
import { MdPhone } from "react-icons/md";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Team", to: "/team" },
  { label: "Blog", to: "/blog" },
  { label: "Contact us", to: "/contact" },
  { label: "Online consultation", to: "/consultation" },
];

function NavBar({ liTextColor = "" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="md:absolute relative top-0 left-0 w-full group
      z-50 pb-3 md:bg-transparent bg-dark hover:bg-dark duration-300"
    >
      <div className="container flex justify-between items-center w-full px-8 pt-2">
        <Link to="/" className="py-2 md:p-0 hover:scale-105">
          <AnimatedImage
            className="w-39"
            src="src/assets/images/logo.png"
            alt="Logo"
            animationType="slideInLeft"
            delay={100}
            duration={800}
          />
        </Link>

        <div className="flex-1 flex justify-end md:justify-center">
          <button
            className="md:hidden p-3 cursor-pointer text-2xl text-main hover:text-sec transition-all duration-300 transform hover:scale-110 z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <div
              className={`transition-all duration-300 ${menuOpen ? "rotate-180" : ""}`}
            >
              {menuOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </div>
          </button>

          <ul
            className={`${liTextColor} group-hover:text-white hidden md:flex items-center gap-5`}
          >
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.to;
              return (
                <li
                  key={index}
                  className="cursor-pointer hov lg:text-[16px] md:text-[13px]"
                >
                  <Link
                    to={item.to}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-sec font-bold" : "hover:text-sec"
                    }`}
                    aria-label={item.label}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          ref={menuRef}
          className={`md:hidden absolute top-full right-2 z-50 transition-all duration-500 transform
            ${
              menuOpen
                ? "translate-x-0 opacity-100 pointer-events-auto"
                : "translate-x-full opacity-0 pointer-events-none"
            }
          `}
        >
          <div className="bg-gradient-to-b from-main to-dark rounded-3xl -mt-8 shadow-2xl">
            <ul className="py-6 px-8 space-y-4">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={index} className="group">
                    <Link
                      to={item.to}
                      className={`block py-3 px-4 rounded-lg duration-300 hover:scale-105 ${
                        isActive
                          ? `text-sec bg-sec/10 shadow-2xs border-l-4 border-sec font-bold`
                          : `text-white hover:text-sec hover:bg-white/10 border-l-4 border-transparent`
                      }`}
                      aria-label={item.label}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="px-8 pb-4">
              <div className="border-t border-white/20 pt-4">
                <div className="flex items-center justify-center space-x-1 text-white/80 text-sm">
                  <MdPhone />
                  <a
                    href="tel:+15551234567"
                    className="ml-2 hover:text-sec transition-colors duration-300 cursor-pointer font-bold"
                  >
                    Call us: +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
