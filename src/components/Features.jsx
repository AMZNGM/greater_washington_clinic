import React from "react";
import AnimatedImage from "./AnimatedImage";

function Features() {
  return (
    <section className="bg-main bg-[url('src/assets/images/FeaturesBG.png')] bg-cover bg-no-repeat relative">
      <div className="container py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
          <div className="flex flex-col items-center !text-white text-center p-4 gap-2 hov">
            <AnimatedImage
              className="bg-white p-6 rounded-full w-[140px] hover:shadow-2xl"
              src="src/assets/images/icons/24:7.png"
              alt="24:7"
              animationType="scaleIn"
              delay={100}
              duration={800}
            />
            <h2 className="font-bold !text-[24px]">Availability</h2>
            <p>24/7 availability for dental emergencies</p>
          </div>

          <div className="flex flex-col items-center !text-white text-center p-4 gap-2 hov">
            <AnimatedImage
              className="bg-white p-6 rounded-full w-[140px] hover:shadow-2xl"
              src="src/assets/images/icons/careicon.png"
              alt="careicon"
              animationType="scaleIn"
              delay={100}
              duration={800}
            />
            <h2 className="font-bold !text-[24px]">care</h2>
            <p>Individualized patient care</p>
          </div>

          <div className="flex flex-col items-center !text-white text-center p-4 gap-2 hov">
            <AnimatedImage
              className="bg-white p-6 rounded-full w-[140px] hover:shadow-2xl"
              src="src/assets/images/icons/lab.png"
              alt="lab"
              animationType="scaleIn"
              delay={100}
              duration={800}
            />
            <h2 className="font-bold !text-[24px]">Lab</h2>
            <p>Advanced equipment and on-site lab</p>
          </div>

          <div className="flex flex-col items-center !text-white text-center p-4 gap-2 hov">
            <AnimatedImage
              className="bg-white p-6 rounded-full w-[140px] hover:shadow-2xl"
              src="src/assets/images/icons/Clinic.png"
              alt="Clinic"
              animationType="scaleIn"
              delay={100}
              duration={800}
            />
            <h2 className="font-bold !text-[24px]">Clinic</h2>
            <p>Modern, hygienic facility</p>
          </div>

          <div className="flex flex-col items-center !text-white text-center p-4 gap-2 hov">
            <AnimatedImage
              className="bg-white p-6 rounded-full w-[140px] hover:shadow-2xl"
              src="src/assets/images/icons/Team.png"
              alt="Team"
              animationType="scaleIn"
              delay={100}
              duration={800}
            />
            <h2 className="font-bold !text-[24px]">Team</h2>
            <p>Compassionate and empathetic team</p>
          </div>

          <div className="flex flex-col items-center !text-white text-center p-4 gap-2 hov">
            <AnimatedImage
              className="bg-white p-6 rounded-full w-[140px] hover:shadow-2xl"
              src="src/assets/images/icons/Experience.png"
              alt="Experience"
              animationType="scaleIn"
              delay={100}
              duration={800}
            />
            <h2 className="font-bold !text-[24px]">Experience</h2>
            <p>Vast experience in dental implantology</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
