import React from "react";
import foodielandLogo from "../../assets/images/homePage/instagram/foodielandLogo.png";
import instaPhoto from "../../assets/images/homePage/instagram/instaPhoto.png";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
function InstagramCards(props) {
  return (
    <>
      <div className="w-[300px] shadow-lg">
        {/* TITLE SPACE */}
        <div className="flex justify-between items-center w-full bg-white p-2">
          <div className="flex gap-4">
            <img
              src={foodielandLogo}
              alt="instagramProfile"
              className="object-cover cursor-pointer w-[40px] h-[40px] "
            />
            <div className="leading-4">
              <p className="flex items-center font-semibold gap-2 cursor-pointer">
                Foodieland <MdVerified className="text-[#3897F0] " />
              </p>
              <p className="text-sm">Tokyo, Japan</p>
            </div>
          </div>
          <BsThreeDots size="1.5rem" className="cursor-pointer" />
        </div>
        <img src={props.photo} alt="saladPhoto" className="w-full" />
        {/* BOTOOM SPACE */}
        <div className="flex flex-col bg-white w-full p-3 justify-between">
          <div className="flex gap-4 ">
            <AiOutlineHeart size="1.7rem" className="cursor-pointer" />
            <FaRegComment size="1.6rem" className="cursor-pointer" />
            <FiSend size="1.6rem" className="cursor-pointer" />
          </div>
          <div>
            <div className="flex mt-4 gap-2 items-center">
              <img
                src={instaPhoto}
                alt="instaPhoto"
                className="h-5 w-5 cursor-pointer"
              />
              <p>
                Liked by{" "}
                <span className="font-semibold cursor-pointer">craig_love</span>{" "}
                and <span className="font-semibold cursor-pointer">44,886</span>
              </p>
            </div>
            <div className="mt-2">
              <p>
                <span className="font-semibold cursor-pointer ">
                  Foodieland.
                </span>
                {props.title}{" "}
              </p>
            </div>
            <p className="text-[#00000066] mt-4 text-sm ">September 19</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default InstagramCards;
