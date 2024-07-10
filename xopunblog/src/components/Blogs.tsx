"use client";
import React from "react";
import BlogCard from "./BlogCard";

const Blogs = ({ blogs }: any) => {
// console.log(blogs)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-evenly items-start h-full">

 {blogs.map((blog: any) => (
      <div key={blog.id} className="flex flex-col items-center justify-evenly h-full">
      <BlogCard blog={blog} />
      </div> 
            ))}

    </div>
  );
};

export default Blogs;
