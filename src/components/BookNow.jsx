import React from "react";
import MainButton from "./MainButton";
import { Link } from "react-router-dom";

function BookNow() {
  return (
    <section className="bg-main relative text-center mb-10">
      <div
        className="bg-[url('src/assets/images/BookNowBG.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ transform: "scaleX(-1)" }}
      >
        <div className="bg-main/50 w-full h-full absolute"></div>
        <div
          className="container flex flex-col justify-center items-center gap-6 my-2 md:my-20 p-8 md:p-0 h-[463px]"
          style={{ transform: "scaleX(-1)" }}
        >
          <h2 className="text-white font-bold !text-[50px]">
            Book now your free consultation
          </h2>

          <MainButton to={`/Contact`} className="bg-white">
            Book now
          </MainButton>
        </div>
      </div>
    </section>
  );
}

export default BookNow;
