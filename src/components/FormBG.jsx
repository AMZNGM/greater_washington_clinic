import React from "react";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";
import { locations } from "../data/locationsData";
import Form from "../components/Form.jsx";

function FormBG() {
  return (
    <section className="bg-white relative md:py-15 pb-3">
      <div className="absolute inset-0 h-full">
        <div className="bg-main w-full h-1/2"></div>
        <div className="bg-white w-full h-1/2"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="px-4 md:px-6 lg:px-8 lg:ps-0">
            <div className="py-15">
              <h2 className="text-white font-semibold mb-4">
                Restore Your Smile to Perfection with the Highest Quality, Longest Lasting
                Dental Implants!
              </h2>
              <h3 className="text-[22px] text-black mb-4">
                For $5,000 less than other centers!
              </h3>

              <div className="flex gap-2">
                <a className="hov" href="https://www.facebook.com/" target="blank">
                  <AnimatedImage
                    src="src/assets/images/icons/Facebook white.png"
                    alt="Facebook"
                    animationType="fadeIn"
                    delay={200}
                    duration={1200}
                  />
                </a>
                <a className="hov" href="https://www.Instagram.com/" target="blank">
                  <AnimatedImage
                    src="src/assets/images/icons/Instagram.png"
                    alt="Instagram"
                    animationType="fadeIn"
                    delay={200}
                    duration={1200}
                  />
                </a>
                <a className="hov" href="https://www.Snapchat.com/" target="blank">
                  <AnimatedImage
                    src="src/assets/images/icons/Snapchat.png"
                    alt="Snapchat"
                    animationType="fadeIn"
                    delay={200}
                    duration={1200}
                  />
                </a>
                <a className="hov" href="https://www.x.com/" target="blank">
                  <AnimatedImage
                    src="src/assets/images/icons/x.png"
                    alt="X"
                    animationType="fadeIn"
                    delay={200}
                    duration={1200}
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] font-semibold">Our Locations</h3>
              <div>
                {locations.map((loc, idx) => (
                  <div className="mb-1 leading-7" key={loc.name}>
                    <p className="text-main font-semibold">Fredericksburg, VA</p>
                    <p>{loc.address}</p>
                    <span>
                      Call us now :{" "}
                      <a
                        className="md:hover:text-main hover:text-white cursor-pointer"
                        href={`tel:${loc.phone}`}
                      >
                        {loc.phone}
                      </a>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 md:p-0 mt-20 md:mt-0 rounded-lg flex items-center justify-center">
            <Form></Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormBG;
