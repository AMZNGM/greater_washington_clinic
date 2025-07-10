import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";

export const consulation = [
  {
    id: 1,
    title: "PROVEN RESULTS",
    desc: "Our board-certified oral and maxillofacial surgeons represent the highest level of specialization in the field so you know you will be given the absolute best care.",
    icon: "src/assets/images/icons/list.png",
  },
  {
    id: 2,
    title: "LOWER FEES",
    desc: "We charge $5,000 less than most centers and perform this procedure much faster due to our advanced digital workflows.",
    icon: "src/assets/images/icons/LOWER FEES.png",
  },
  {
    id: 3,
    title: "FASTER TURNAROUND",
    desc: "Due to advanced technology, our procedures offer faster surgery, quicker recovery times, fewer errors, and more accurate implant placements, reducing the need for follow-up appointments.",
    icon: "src/assets/images/icons/FASTER TURNAROUND.png",
  },
  {
    id: 4,
    title: "SUPERIOR MATERIALS",
    desc: "We use implants from the #1 implant manufacturer in the world. This gives us the confidence our patient's investment will last as long as it's taken care of.",
    icon: "src/assets/images/icons/SUPERIOR MATERIALS.png",
  },
];

function Consulation() {
  return (
    <section className="bg-light mb-20 md:py-15">
      <div className="container md:grid grid-flow-col lg:grid-rows-1 grid-rows-2 gap-4 p-3 md:p-0">
        <div className="grid grid-flow-col md:grid-rows-2 grid-rows-4 gap-4">
          {consulation.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-[20px] w-full shadow-2xs shadow-main/50
              hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <AnimatedImage
                src={item.icon}
                alt={item.title}
                animationType="bounceIn"
                delay={200 + index * 100}
                duration={600}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <h6 className="my-4 uppercase font-semibold text-main group-hover:text-secondary transition-colors duration-300">
                {item.title}
              </h6>
              <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="md:grid">
          <div className="flex flex-col justify-between items-center md:items-start gap-4">
            <div className="flex flex-col gap-4 py-8">
              <h2 className="text-center lg:text-start ">
                Why Choose Greater Washington Oral and Maxillofacial Surgery For Dental
                Implants?
              </h2>

              <div className="flex gap-4 justify-center lg:justify-start">
                <MainButton href={`/Contact`} className="text-white">
                  Book now
                </MainButton>
                <MainButton
                  href={`/Consultation`}
                  className="text-main hover:text-white bg-white"
                >
                  Online consulation
                </MainButton>
              </div>
            </div>

            <AnimatedImage
              className="w-full rounded-3xl"
              src="src/assets/images/consulation.jpg"
              alt="consulation img"
              animationType="slideInRight"
              delay={500}
              duration={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consulation;
