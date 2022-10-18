import React from "react";
import Cardblogs from "./CardBlogs";

function BlogRecipes() {
  return (
    <>
      <Cardblogs />
      <div className="w-full flex flex-col items-center md:items-start justify-center  px-6 md:px-16">
        <div className="w-full lg:w-[70%] "></div>
        <div className="w-full lg:w-[30%] "></div>
      </div>
    </>
  );
}

export default BlogRecipes;
