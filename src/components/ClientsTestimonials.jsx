import React, { useState } from "react";
import AnimatedImage from "./AnimatedImage";

function ClientsTestimonials() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("right");

  const quotes = [
    {
      text: "I have never had a more positive experience at any doctor's office. From the front desk staff to the nurses to the doctor (Dr. Roe), everyone is so kind, professional, and full of exuberance. They all seem to truly enjoy their jobs and care deeply for the patients. They are tremendously thorough, as well. I couldn't more highly recommend this office. It's actually a joy to be there.",
      author: "Erika Marks",
    },
    {
      text: "The staff here is absolutely amazing! Dr. Smith and his team made me feel comfortable throughout my entire treatment. The facility is modern and clean, and the results exceeded my expectations. I would definitely recommend this clinic to anyone looking for quality dental care.",
      author: "Sarah Johnson",
    },
    {
      text: "Outstanding service and professional care. The team is very knowledgeable and takes the time to explain everything clearly. The treatment was painless and the results are fantastic. Highly recommended!",
      author: "Michael Chen",
    },
    {
      text: "I was nervous about my dental procedure, but the staff made me feel so comfortable and reassured. The doctor was very gentle and professional. The whole experience was much better than I expected.",
      author: "Lisa Rodriguez",
    },
  ];

  const handleChangeQuote = (direction) => {
    if (isAnimating) return;
    setAnimationDirection(direction);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentQuoteIndex((prevIndex) => {
        if (direction === "right") {
          return prevIndex === quotes.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === 0 ? quotes.length - 1 : prevIndex - 1;
        }
      });
      setIsAnimating(false);
    }, 350);
  };

  return (
    <section className="container p-8 md:p-0 mb-10 md:mb-20 relative">
      <div className="grid grid-flow-col grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col lg:justify-between items-start gap-4">
          <div className="lg:mb-4">
            <h3 className="text-[20px] text-main md:mb-2">Clients testimonials</h3>
            <h2 className="font-medium">We have 284 Reviews!</h2>
          </div>

          <div className="bg-bright p-10 rounded-3xl relative">
            <AnimatedImage
              src="src/assets/images/icons/quote.png"
              alt="quote"
              animationType="slideInLeft"
              delay={100}
              duration={800}
            />

            <div className="md:mx-10">
              <blockquote
                className={`my-10 leading-6 transition-all duration-300 ease-in-out overflow-scroll h-50
              ${
                isAnimating
                  ? animationDirection === "right"
                    ? "animate-slideOutLeft"
                    : "animate-slideOutRight"
                  : "animate-slideIn"
              }
            `}
                key={currentQuoteIndex}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {quotes[currentQuoteIndex].text}
              </blockquote>

              <div className="flex justify-between items-center">
                <span className="font-simibold">
                  - {quotes[currentQuoteIndex].author}
                </span>

                <div className="flex justify-center items-center gap-4">
                  <button
                    className="bg-white rounded-full p-2 hover:bg-gray-50 duration-200 hover:scale-110 hover:shadow-2xl cursor-pointer"
                    onClick={() => handleChangeQuote("left")}
                    aria-label="Previous quote"
                    disabled={isAnimating}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    className="bg-white rounded-full p-2 hover:bg-gray-50 duration-200 hover:scale-110 hover:shadow-2xl cursor-pointer"
                    onClick={() => handleChangeQuote("right")}
                    aria-label="Next quote"
                    disabled={isAnimating}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18L15 12L9 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-col grid-rows-1 grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <AnimatedImage
              className="rounded-3xl"
              src="src/assets/images/ClientsTestimonials 1.jpg"
              alt="ClientsTestimonials"
              animationType="slideInLeft"
              delay={100}
              duration={800}
            />

            <div className="bg-main w-full h-full rounded-3xl p-5">
              <AnimatedImage
                className="rounded-3xl mb-2 -ms-1"
                src="src/assets/images/icons/smileFace.png"
                alt="ClientsTestimonials"
                animationType="slideInLeft"
                delay={100}
                duration={800}
              />

              <div className="flex justify-between items-start gap-4 text-white">
                <div>
                  <span>300+</span>
                  <p>Happy client</p>
                </div>

                <div>
                  <span>1k+</span>
                  <p>Implant</p>
                </div>

                <div>
                  <span>200+</span>
                  <p>Surgey</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-[#5EBBF7] flex justify-center items-center w-full h-full rounded-3xl p-5">
              <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-10 text-white">
                <AnimatedImage
                  className="rounded-3xl mb-2 -ms-1"
                  src="src/assets/images/icons/googleLogo.png"
                  alt="ClientsTestimonials"
                  animationType="slideInLeft"
                  delay={100}
                  duration={800}
                />

                <p>with 4.9 stars</p>
              </div>
            </div>

            <AnimatedImage
              className="rounded-3xl"
              src="src/assets/images/ClientsTestimonials 2.jpg"
              alt="ClientsTestimonials"
              animationType="slideInRight"
              delay={100}
              duration={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientsTestimonials;
