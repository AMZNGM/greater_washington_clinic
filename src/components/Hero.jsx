import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";

function Hero() {
  return (
    <section className="bg-white">
      <div className="lg:mt-25 relative flex flex-col md:flex-row">
        <div className="container md:my-20">
          <div className="container bg-light p-10 md:rounded-2xl hover:shadow-2xl">
            <div className="w-full md:w-1/2 text-center xl:text-start">
              <h2
                className="text-main !text-3xl md:!text-[35px] font-bold md:font-[500]
                bg-sec/20 md:bg-transparent py-4 md:py-0 rounded-3xl shadow-2xl md:shadow-none
                hover:scale-110 md:hover:scale-100"
              >
                Expect Only the Best
              </h2>

              <p className="mt-8 text-black">
                Choosing the right oral surgeon is vital, and understanding their
                credentials and expertise is key. In Fairfax, VA, Dr. Ibrahim Haron, a
                board-certified oral and maxillofacial surgeon, is recognized for his
                exceptional skills and qualifications. As a member of major oral and
                maxillofacial organizations, he is adept at addressing complex dental
                issues and holds privileges at Inova Fairfax Hospital for specialized
                treatments.
              </p>

              <div className="w-full mt-8">
                <MainButton href={`/Services`} className="text-white">
                  Our services
                </MainButton>
              </div>
            </div>
          </div>

          <div
            className="w-full md:w-1/2 flex justify-center
                      md:absolute bottom-30 end-0"
          >
            <AnimatedImage
              className="md:w-120 w-full h-full object-cover md:rounded-2xl"
              src="src/assets/images/hero2.jpg"
              alt="heroImg"
              animationType="slideInRight"
              delay={600}
              duration={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
