import React from "react";
import AnimatedImage from "./AnimatedImage";

function SingleBlogPage({ blog }) {
  if (!blog) {
    return (
      <section className="bg-white">
        <div className="container my-2 md:my-20 p-8 md:p-0 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-main mb-6">Blog not found</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="container my-2 md:my-20 p-8 md:p-0 flex flex-col items-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          <AnimatedImage
            className="w-full object-cover rounded-3xl mb-6 shadow-lg"
            src={blog.image}
            alt={blog.title}
            animationType="fadeIn"
            delay={200}
            duration={1200}
          />

          <div className="col-span-2 text-center sm:text-start">
            <h2 className="text-3xl font-bold text-main mb-6">{blog.title}</h2>
            <p className="mb-4 pt-3 leading-8">{blog.blogText}</p>
            <p className="mb-4 pt-3 text-sec">{blog.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleBlogPage;
