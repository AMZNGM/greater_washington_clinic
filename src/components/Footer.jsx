import React from "react";
import { Link } from "react-router-dom";
import AnimatedImage from "./AnimatedImage";

function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container px-3 md:px-0 py-6 lg:pt-15">
        <div className="grid grid-cols-1 text-center md:text-start gap-8 mb-10 md:grid-cols-4">
          <div className="flex flex-col justify-center items-center md:items-start">
            <a href="index.html" className="pb-2 hover:scale-105">
              <AnimatedImage
                src="src/assets/images/logo White.png"
                href="index.html"
                animationType="fadeIn"
                delay={100}
                duration={1000}
              />
            </a>
            <h3 className="text-white text-[14px] font-light">
              Greater Washington Oral & Maxillofacial Surgery is a premier oral surgical
              practice in the heart of Virginia, offering top-tier care across Fairfax.
            </h3>
          </div>

          <div>
            <h3 className="mb-6 text-[16px] text-sec uppercase text-sm">Pages</h3>
            <ul className="text-white font-light">
              <li className="mb-4">
                <Link to={`/about`} className="hov text-[14px]">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/Services`} className="hov text-[14px]">
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/Team`} className="hov text-[14px]">
                  Team
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/Blog`} className="hov text-[14px]">
                  Blog
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/Contact`} className="hov text-[14px]">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[16px] text-sec uppercase text-sm">Services</h3>
            <ul className="text-white font-light">
              <li className="mb-4">
                <Link to={`/SingleService/1`} className="hov text-[14px]">
                  Full Mouth Dental Implants
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/SingleService/2`} className="hov text-[14px]">
                  Implant Supported Dentures
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/SingleService/3`} className="hov text-[14px]">
                  Emergency and trauma
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/SingleService/4`} className="hov text-[14px]">
                  Tmj treatment
                </Link>
              </li>
              <li className="mb-4">
                <Link to={`/SingleService/5`} className="hov text-[14px]">
                  Zygomatic Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-[16px] text-sec uppercase text-sm">Contact us</h3>
            <ul className="text-white font-light">
              <li className="mb-4">
                <a href="tel:(540) 225-2259" className="hov text-[14px]">
                  <div className="flex justify-center md:justify-start items-center gap-3">
                    <AnimatedImage
                      src="src/assets/images/icons/Phone Icon.png"
                      alt="Phone Icon"
                      animationType="bounceIn"
                      delay={200}
                      duration={600}
                    />
                    <span>(540) 225-2259</span>
                  </div>
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="https://www.facebook.com/"
                  target="blank"
                  className="hov text-[14px]"
                >
                  <div className="flex justify-center md:justify-start items-center gap-3">
                    <AnimatedImage
                      src="src/assets/images/icons/Facebook Icon.png"
                      alt="Phone Icon"
                      animationType="bounceIn"
                      delay={400}
                      duration={600}
                    />
                    <span>Greater Washington</span>
                  </div>
                </a>
              </li>

              <li className="mb-4">
                <a
                  href="https://www.instagram.com/"
                  target="blank"
                  className="hov text-[14px]"
                >
                  <div className="flex justify-center md:justify-start items-center gap-3">
                    <AnimatedImage
                      src="src/assets/images/icons/Instagram Icon.png"
                      alt="Phone Icon"
                      animationType="bounceIn"
                      delay={600}
                      duration={600}
                    />
                    <span>Greater Washington</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex justify-between items-center text-white
              font-light text-[14px] pt-10 border-t border-white/90"
        >
          <h3>Copyright © 2020 Laaqiq. All Rights Reserved.</h3>
          <span>Developed by Ebakr</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
