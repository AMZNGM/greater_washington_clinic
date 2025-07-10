import React from "react";
import AnimatedImage from "./AnimatedImage";
import doctors from "../data/doctorsData";
import { useNavigate } from "react-router-dom";

function TeamMembers() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <section className="bg-white">
      <div className="container my-2 md:my-20 p-8 md:p-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="relative w-full h-full rounded-sm bg-white group overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleClick(doctor.id)}
            >
              <AnimatedImage
                className="w-full h-full object-cover"
                src={doctor.image}
                alt={doctor.name}
                animationType="fadeIn"
                delay={200}
                duration={1200}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <span className="text-white text-xl font-bold mb-10">{doctor.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
