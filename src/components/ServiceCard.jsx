import React from "react";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";
import { services } from "../data/servicesData";

function ServiceCard() {
  return (
    <section className="container bg-white my-15 p-4 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-main text-white relative shadow-lg shadow-main/40 mb-10 p-8
              rounded-3xl w-full h-full hover:scale-101 group 
              hover:bg-white hover:text-black transition-all duration-300"
          >
            <div className="flex lg:flex-row flex-col gap-4 items-center justify-between mb-10">
              <p>{service.title}</p>
              <AnimatedImage
                src={service.icon}
                className="bg-main p-2 rounded-3xl"
                alt="Mouth Dental Icon"
                animationType="bounceIn"
                delay={300}
                duration={800}
              />
            </div>

            <p className="text-center xl:text-start">{service.desc}</p>

            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full px-5">
              <MainButton
                href={`/SingleService/${service.id}`}
                className="w-full bg-white text-main text-nowrap shadow-2xs
                  shadow-main group-hover:bg-main group-hover:text-white"
              >
                Book now
              </MainButton>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceCard;
