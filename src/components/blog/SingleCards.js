import React from "react";
import { Link } from "react-router-dom";

function SingleCards({ blog }) {
  return (
    <>
      <Link to={`/blogs/${blog.id}`}>
        <div className="flex flex-col md:flex-row h-full lg:h-48 w-full gap-8 mt-12 inter animate__fadeIn animate__animated">
          <img
            src={blog.img}
            alt="blogPersonal"
            className="rounded-xl object-cover"
          />
          <div className="h-full flex flex-col justify-around gap-6 ">
            <h1 className="font-semibold text-xl  ">{blog.title}</h1>
            <p className="text-[#00000099]">{blog.description}</p>
            <div className="flex items-center ">
              <img src={blog.personImg} alt="" />
              <p className="font-semibold border-r-2 border-slate-200 pr-6 pl-2 h-6">
                {blog.personName}
              </p>
              <p className="text-[#00000099] pl-6">{blog.date} </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default SingleCards;
