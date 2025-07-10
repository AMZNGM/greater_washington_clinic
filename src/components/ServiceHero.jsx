import React from "react";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";

function ServiceHero({ service }) {
  const title = service?.title || "Expert Dental Implant Surgery for Lasting Results";
  const fullDesc =
    service?.fullDesc ||
    "Our experienced team provides comprehensive dental implant solutions using the latest technology and techniques. We specialize in full mouth reconstruction, single tooth replacement, and complex cases requiring advanced surgical skills. Our commitment to excellence ensures optimal results and patient satisfaction.";
  const serviceBG = service?.icon || "src/components/ServiceCard.jsx";

  return (
    <section className="container bg-white md:my-15 p-4 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-5">
        <div className="w-full h-[550px] overflow-hidden">
          <AnimatedImage
            src={serviceBG}
            alt="Service Icon"
            animationType="fadeIn"
            delay={200}
            duration={1200}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="flex flex-col justify-between items-start">
          <h2 className="text-main font-semibold mb-3">{title}</h2>

          <p className="leading-8 mb-4 text-gray-700">{fullDesc}</p>

          <MainButton href={`/contact`} className="text-white w-full md:w-fit">
            Book now
          </MainButton>
        </div>
      </div>
    </section>
  );
}

export default ServiceHero;
