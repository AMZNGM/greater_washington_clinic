import React from "react";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";
import { services } from "../data/servicesData";

function Services() {
  const displayedServices = services.slice(0, 4);

  return (
    <section className="flex items-center mb-10 md:mb-40">
      <img
        className="-z-10 absolute w-full object-cover"
        style={{ height: "636px" }}
        src="src/assets/images/servicesBg.jpg"
        alt="servicesBg"
      />

      <div className="container relative flex xl:flex-row flex-col justify-center items-center">
        <div className="bg-white p-8 xl:p-0 rounded-3xl xl:absolute start-0 w-full text-center xl:text-start xl:w-1/4 xl:me-5">
          <h2 className="text-black font-medium">What services we are offering</h2>
          <p className="text-black mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
        </div>

        <div className="xl:ms-120 w-full h-full">
          <div className="bg-main absolute -top-10 mb-20 -z-10 w-[1427px] h-[271px] rounded-3xl xl:block hidden"></div>

          <div className="mt-10 px-10 gap-4 flex xl:flex-row flex-col justify-between items-start">
            {displayedServices.map((service, idx) => (
              <div
                key={service.id || idx}
                className="bg-white relative shadow-lg shadow-main/40 mb-10 p-8 rounded-3xl w-full h-[271px] xl:w-[230px] hov"
              >
                <div className="flex lg:flex-row flex-col gap-4 items-center justify-between mb-10">
                  <p>{service.title}</p>
                  <AnimatedImage
                    src={service.blueIcon}
                    alt={service.title}
                    animationType="bounceIn"
                    delay={300 + idx * 200}
                    duration={800}
                  />
                </div>
                <p className="text-center xl:text-start">{service.desc}</p>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                  <MainButton
                    href={`/SingleService/${service.id}`}
                    className="w-full text-white text-nowrap"
                  >
                    Book now
                  </MainButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
