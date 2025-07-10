import React from "react";
import MainButton from "./MainButton";
import Carousel from "./Carousel";
import AnimatedImage from "./AnimatedImage";

function Testimonials() {
  return (
    <section className="container relative">
      <AnimatedImage
        className="-z-10 absolute w-full object-cover"
        style={{ height: "636px" }}
        src="src/assets/images/servicesBg.jpg"
        alt="servicesBg"
        animationType="fadeIn"
        delay={100}
        duration={1500}
      />

      <div className="p-3 md:p-0">
        <h3 className="text-[20px] text-main">Our successful clients</h3>
        <h2 className="font-medium">Patient Testimonials </h2>

        <Carousel />
      </div>
    </section>
  );
}

export default Testimonials;
