import React from "react";

function WhyUs() {
  return (
    <section className="bg-white">
      <div className="container my-2 md:my-20 p-8 md:p-0">
        <div className="md:w-1/2 text-center md:text-start leading-6 mb-10">
          <h3 className="text-[20px] text-main mb-3">Why Choose Our Fairfax Office?</h3>
          <p className="font-bold">
            Our dedication to excellence is apparent in all aspects of our service. Here
            are the highlights of our Fairfax office:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="bg-[#5EBBF7] !text-white leading-[26px] rounded-3xl p-6 gap-2 hov">
            <div className="relative ms-1">
              <h2 className="font-bold !text-[24px] mb-4 pt-4 ps-4">
                Compassionate Care
              </h2>
              <span
                className="absolute -top-2 -left-2 border-2 p-2 border-[#209DEE] rounded-full
                text-white flex items-center justify-center w-8 h-8 text-sm font-bold"
              >
                1
              </span>
            </div>
            <p>
              Dr. Haron pairs his professional skills with a deeply caring attitude. He
              ensures that every patient fully understands their treatment plan and feels
              at ease throughout the process. Our Fairfax team reflects this commitment,
              focusing on transparent communication and a welcoming environment.
            </p>
          </div>

          <div className="bg-[#209DEE] !text-white leading-[26px] rounded-3xl p-6 gap-2 hov">
            <div className="relative ms-1">
              <h2 className="font-bold !text-[24px] mb-4 pt-4 ps-4">
                Advanced Technology
              </h2>
              <span
                className="absolute -top-2 -left-2 border-2 p-2 border-[#0A78BF] rounded-full
                text-white flex items-center justify-center w-8 h-8 text-sm font-bold"
              >
                2
              </span>
            </div>
            <p>
              Employing guided technology for accurate treatments like dental implants,
              tumor extractions, and jaw surgery, Dr. Haron delivers reliable, successful
              results. Our Fairfax office also provides IV sedation for a relaxed,
              worry-free experience.
            </p>
          </div>

          <div className="bg-[#0A78BF] !text-white leading-[26px] rounded-3xl p-6 gap-2 hov">
            <div className="relative ms-1">
              <h2 className="font-bold !text-[24px] mb-4 pt-4 ps-4">
                Accessibility and Affordability
              </h2>
              <span
                className="absolute -top-2 -left-2 border-2 p-2 border-[#209DEE] rounded-full
                text-white flex items-center justify-center w-8 h-8 text-sm font-bold"
              >
                3
              </span>
            </div>
            <p>
              In Fairfax, we believe that exceptional care should be accessible to all.
              Dr. Haron is among the few oral surgeons in the region who accept a broad
              spectrum of insurance plans, including Medicaid, ensuring high-quality oral
              care is more affordable for our community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
