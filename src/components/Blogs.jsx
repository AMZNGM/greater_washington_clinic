import React from "react";
import { Link } from "react-router-dom";
import MainButton from "./MainButton";
import AnimatedImage from "./AnimatedImage";
import blogsData from "../data/blogsData.js";

function Blogs({ limit }) {
  const displayedBlogs = limit ? blogsData.slice(0, limit) : blogsData;
  return (
    <section className="bg-white py-20 px-3 md:px-0">
      <div className="container">
        <div>
          <p className="text-main font-bold">Our Blog</p>
          <h2 className="text-black font-semibold mb-8">Read Our Latest Articles</h2>
        </div>

        <div className="grid grid-col-1 lg:grid-cols-3 gap-4">
          {displayedBlogs.map((blog, idx) => (
            <div key={idx} className="relative flex justify-center items-center">
              <div className="w-full h-100 flex items-center justify-center">
                <AnimatedImage
                  className="rounded-3xl w-full h-full object-cover"
                  src={blog.image}
                  alt={blog.title}
                  animationType="fadeIn"
                  delay={200 + idx * 200}
                  duration={1000}
                />
              </div>

              <div
                className=" text-black z-10 rounded-3xl absolute inset-0 flex flex-col justify-end items-start p-4 bg-opacity-80"
                style={{ pointerEvents: "none" }}
              >
                <div
                  className="bg-white/80 hover:bg-white p-4 rounded-3xl flex flex-col justify-end items-start"
                  style={{ pointerEvents: "auto" }}
                >
                  <h6 className="mb-2 text-lg font-semibold drop-shadow">{blog.title}</h6>

                  <div className="mb-2 flex justify-center items-start gap-4">
                    <p>{blog.description}</p>
                    <MainButton href={`/SingleBlog/${blog.id}`}>
                      <AnimatedImage
                        className="w-10"
                        src="src/assets/images/icons/Arrow Up.png"
                        alt="Arrow Up"
                        animationType="bounceIn"
                        delay={300}
                        duration={600}
                      />
                    </MainButton>
                  </div>

                  <span className="mt-2 drop-shadow">{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
