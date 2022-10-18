import React from "react";
import chef from "../../assets/images/homePage/chef.png";
import { Link } from "react-router-dom";

function GuySplash() {
  return (
    <>
      <div className="flex gap-12 md:gap-0 flex-col md:flex-row mt-16 w-full h-[80%] p-6 md:p-16 items-center justify-center inter">
        <div className="w-full md:w-[50%] h-[50%] md:h-full flex flex-col px-8 gap-8">
          <h1 className="text-4xl lg:text-5xl font-semibold ">
            Everyone can be a chef in their own kitchen
          </h1>
          <p className="text-[#00000099] ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim
          </p>
          <Link to="/guide">
            <p className=" lg:mt-16 p-6 cursor-pointer w-48 text-center rounded-2xl font-semibold text-lg bg-black text-white hover:bg-zinc-900">
              Learn More
            </p>
          </Link>
        </div>
        <div className="w-full md:w-[50%] h-full lightblueBackgrounds md:rounded-bl-none rounded-br-3xl rounded-bl-3xl  ">
          <img src={chef} alt="chef" className="h-full relative bottom-0" />
        </div>
      </div>
    </>
  );
}

export default GuySplash;
