import React from "react";
import AnimatedImage from "./AnimatedImage";

function SectionHero({ title }) {
  return (
    <section className="bg-white">
      <div className="relative">
        <AnimatedImage
          className="w-full h-[500px] object-cover"
          src="src/assets/images/SecionHeroBG.jpg"
          alt="heroImg"
          animationType="fadeIn"
          delay={200}
          duration={1200}
        />
        {/* <div className="absolute inset-0 bg-black/5 pointer-events-none"></div> */}

        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-main !text-[40px] font-bold w-full text-center">
          {title}
        </h1>
      </div>
    </section>
  );
}

export default SectionHero;
