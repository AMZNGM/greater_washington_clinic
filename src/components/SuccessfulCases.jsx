import React from "react";
import AnimatedImage from "./AnimatedImage";

function SuccessfulCases() {
  return (
    <section className="container bg-white md:my-15 p-4 md:p-0 mb-5">
      <h2 className="text-main font-semibold">Before and after cases</h2>
      <h3 className="text-[32px] text-black font-semibold mb-4">Our successful cases</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <AnimatedImage
          src="src/assets/images/cases.png"
          alt="Service Icon"
          animationType="fadeIn"
          delay={200}
          duration={1200}
          className="w-full h-full rounded-3xl"
        />

        <AnimatedImage
          src="src/assets/images/cases.png"
          alt="Service Icon"
          animationType="fadeIn"
          delay={200}
          duration={1200}
          className="w-full h-full rounded-3xl"
        />

        <AnimatedImage
          src="src/assets/images/cases.png"
          alt="Service Icon"
          animationType="fadeIn"
          delay={200}
          duration={1200}
          className="w-full h-full rounded-3xl"
        />
      </div>
    </section>
  );
}

export default SuccessfulCases;
