import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";

function Offer() {
  return (
    <section className="container overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:ps-0 items-start">
        <div className="flex justify-between items-center md:ps-40 lg:ps-0 md:mb-20 mb-10 lg:h-[700px]">
          <div
            className="bg-main rounded-3xl relative p-8 w-[367px] lg:h-full h-150
                        flex flex-col justify-between md:ms-0 ms-3"
          >
            <h2 className="text-white">
              For $5,000 <br />
              LESS than other centers!
            </h2>

            <div className="absolute -right-10 translate-x-1/5 top-1/2 -translate-y-1/2">
              <AnimatedImage
                src="src/assets/images/teeth in a day1.png"
                alt="teeth in a day"
                animationType="scaleIn"
                delay={400}
                duration={1000}
              />
            </div>
            <div className="absolute -right-10 translate-x-1/5 top-1/2 -translate-y-1/2">
              <AnimatedImage
                src="src/assets/images/teeth in a day2.png"
                alt="teeth in a day"
                animationType="scaleIn"
                delay={600}
                duration={1000}
              />
            </div>
            <div className="absolute -right-10 translate-x-1/5 top-1/2 -translate-y-1/2">
              <AnimatedImage
                src="src/assets/images/teeth in a day.png"
                alt="teeth in a day"
                animationType="scaleIn"
                delay={800}
                duration={1000}
              />
            </div>

            <div className="p-5">
              <MainButton
                href={`/SingleService/9`}
                className="w-full bg-white text-black hover:text-white hover:shadow-2xl"
              >
                Book now
              </MainButton>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-center md:items-start lg:px-20 px-3">
          <div className="mb-10 duration-300 md:text-start text-center">
            <h2 className="mb-3">All on four</h2>
            <p>
              Restore Your Smile to Perfection with Premium <br />
              “Teeth In a Day” Dental Implants!
            </p>
          </div>

          <div className="bg-bright p-8 mb-10 rounded-2xl w-full hov hover:shadow-2xl shadow-2xs">
            <ol className="list-disc">
              <div className="flex items-center gap-2 mb-5">
                <AnimatedImage
                  width={35}
                  src="src/assets/images/icons/Results.png"
                  alt="Results Icon"
                  animationType="bounceIn"
                  delay={200}
                  duration={600}
                />
                <p className="text-black">Proven Results All-On-4 Dental Implants!</p>
              </div>

              <div className="flex flex-col gap-5 md:ps-28 text-black">
                <li>
                  We have a track record of delivering exceptional results. Our focus on
                  precision and quality ensures that our dental implants and restorations
                  are built to last!
                </li>
                <li>
                  We specialize in handling some of the most intricate and challenging
                  cases, even those that other doctors may decline.
                </li>
              </div>
            </ol>
          </div>

          <div className="bg-bright p-8 mb-10 rounded-2xl w-full hov hover:shadow-2xl shadow-2xs">
            <div className="flex items-center gap-2">
              <AnimatedImage
                width={35}
                src="src/assets/images/icons/expertise.png"
                alt="Results Icon"
                animationType="bounceIn"
                delay={400}
                duration={600}
              />
              <p className="text-black">Highest Level of Expertise and Specialization</p>
            </div>
          </div>

          <div className="bg-bright p-8 mb-10 rounded-2xl w-full hov hover:shadow-2xl shadow-2xs">
            <div className="flex items-center gap-2">
              <AnimatedImage
                width={35}
                src="src/assets/images/icons/technology.png"
                alt="Results Icon"
                animationType="bounceIn"
                delay={600}
                duration={600}
              />
              <p className="text-black">Cutting-Edge Technology:</p>
            </div>
          </div>

          <div className="bg-bright p-8 mb-10 rounded-2xl w-full hov hover:shadow-2xl shadow-2xs">
            <div className="flex items-center gap-2">
              <AnimatedImage
                width={35}
                src="src/assets/images/icons/care.png"
                alt="Results Icon"
                animationType="bounceIn"
                delay={800}
                duration={600}
              />
              <p className="text-black">Patient-Centered Care:</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
