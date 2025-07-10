import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";

function Hero() {
  return (
    <section className="bg-white">
      <div className="hidden md:block relative">
        <AnimatedImage
          className="bgbanner w-full h-full object-cover"
          src="src/assets/images/hero.png"
          alt="heroImg"
          animationType="fadeIn"
          delay={200}
          duration={1200}
        />
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>
    </section>
  );
}

export default Hero;
