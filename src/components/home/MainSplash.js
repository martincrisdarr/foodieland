import React from "react";
import chickenSplash from "../../assets/images/homePage/splashMainPage/chickenSplash.png";
import hotRecipesLeft from "../../assets/images/homePage/splashMainPage/hotRecipesLeft.png";
import footerSplashName from "../../assets/images/homePage/splashMainPage/footerSplashName.png";
import { BsClockFill, BsFillPlayCircleFill } from "react-icons/bs";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";
function MainSplash() {
  return (
    <>
      <div className=" w-full h-screen px-4 lg:p-0 flex justify-between items-center gap-24">
        {/* LEFT LIGHTBLUE BAR */}
        <div className="hidden lg:flex w-12 h-[70%] rounded-br-3xl rounded-tr-3xl mt-24 bg-[#E7FAFE] "></div>
        {/* SPLASH CONTAINER */}
        <div className="flex flex-col lg:flex-row w-full h-screen py-16  mt-28  ">
          {/* LEFT SIDE SPLASH */}
          <div className="flex flex-col gap-4  justify-between w-full lg:w-[50%] h-full bg-[#E7FAFE] p-8 lg:rounded-bl-3xl lg:rounded-tr-none rounded-tl-3xl rounded-tr-3xl">
            <div className="flex justify-center items-center bg-white rounded-xl gap-4 shadow-md w-40 py-2 ">
              <img src={hotRecipesLeft} alt="" />{" "}
              <p className="inter font-semibold">Hot Recipes</p>
            </div>
            <h1 className="inter font-semibold text-4xl sm:text-5xl ">
              Spicy delicious chicken wings
            </h1>
            <p className="inter font-normal text-[#00000099]  ">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{" "}
            </p>
            <div className="flex  gap-8 inter font-medium">
              <div className="flex items-center gap-2 bg-[#0000000D] px-4 py-2 shadow-md text-sm rounded-xl">
                <BsClockFill /> <p>30 Minutes</p>
              </div>
              <div className="flex items-center gap-2 bg-[#0000000D] px-4 py-2 rounded-xl shadow-md text-sm ">
                <GiKnifeFork /> <p>Chicken</p>
              </div>
            </div>
            <div className="hidden lg:flex justify-between mt-4 max-h-12">
              <div className="flex gap-2">
                <img src={footerSplashName} alt="" />
                <div className="w-32 ">
                  <p className="inter font-semibold">Jonh Smith</p>
                  <p className="inter font-medium text-[#00000099] text-sm ">
                    15 March 2022
                  </p>
                </div>
              </div>
              <Link to="/recipes">
                <div className="flex items-center lg:gap-4 bg-black text-white p-4 rounded-xl inter font-semibold text-sm lg:text-md hover:bg-zinc-900 cursor-pointer">
                  <p>View Recipes</p>
                  <BsFillPlayCircleFill />
                </div>
              </Link>
            </div>
          </div>
          {/* RIGHT SIDE SPLASH */}
          <div className="w-full lg:w-[50%] h-[50%] lg:h-full ">
            <img
              src={chickenSplash}
              className="h-full w-full object-cover rounded-br-3xl rounded-bl-3xl lg:rounded-bl-none lg:rounded-tr-3xl bg-cover"
              alt=""
            />
          </div>
        </div>
        {/* RIGHT LIGHTBLUE BAR */}
        <div className="hidden lg:flex w-12 h-[70%] rounded-bl-3xl rounded-tl-3xl mt-24 bg-[#E7FAFE] "></div>
      </div>
    </>
  );
}

export default MainSplash;
