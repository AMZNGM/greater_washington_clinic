import React from "react";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";

function SingleTeamMembers({ doctor }) {
  if (!doctor) {
    return;
  }

  return (
    <section className="bg-white">
      <div className="container my-2 md:my-20 p-8 md:p-0 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <AnimatedImage
            className="w-full object-cover rounded-3xl mb-6 shadow-lg"
            src={doctor.image}
            alt={doctor.name}
            animationType="fadeIn"
            delay={200}
            duration={1200}
          />

          <div className="col-span-2">
            <h2 className="text-3xl font-bold text-main mb-6">{doctor.name}</h2>

            <div className="relative ms-2">
              <p className="mb-4 pt-3 ps-5">{doctor.desc1}</p>
              <span
                className="absolute -top-2 -left-2 border-2 p-2 border-[#209DEE] rounded-full
                text-black flex items-center justify-center w-8 h-8 text-sm font-bold"
              >
                1
              </span>
            </div>

            <div className="relative ms-2">
              <p className="mb-4 pt-3 ps-5">{doctor.desc2}</p>
              <span
                className="absolute -top-2 -left-2 border-2 p-2 border-[#209DEE] rounded-full
                text-black flex items-center justify-center w-8 h-8 text-sm font-bold"
              >
                2
              </span>
            </div>
            <MainButton href={`/contact`} className="w-full sm:mx-5 mt-2 text-white">
              Book now
            </MainButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleTeamMembers;
