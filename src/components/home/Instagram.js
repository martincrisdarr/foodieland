import React from "react";
import { BsInstagram } from "react-icons/bs";

import saladPhoto from "../../assets/images/homePage/instagram/saladPhoto.png";
import hotcakesPhoto from "../../assets/images/homePage/instagram/hotcakesPhoto.png";
import onionPhoto from "../../assets/images/homePage/instagram/onionPhoto.png";
import bistecPhoto from "../../assets/images/homePage/instagram/bistecPhoto.png";
import InstagramCards from "./InstagramCards";
function Instagram() {
  return (
    <>
      <div className="lightblueBackgrounds mx-auto px-12 md:py-16 py-16 flex flex-col mt-16 w-full flex flex-col items-center gap-16 ">
        {/* TEXT */}
        <div className="text-center inter w-full flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">
            Check out @foodieland on Instagram
          </h1>
          <p className="text-[#00000099] px-0 md:px-48 ">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        {/* INSTAGRAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
          <InstagramCards
            photo={saladPhoto}
            title=" The vegetables dishes need to have certain vitamin for people"
          />
          <InstagramCards
            photo={hotcakesPhoto}
            title=" Sweet food can bring someone into happiness as long as they don´t eat too much"
          />
          <InstagramCards
            photo={onionPhoto}
            title=" What are you doing before start cooking? prepare the tools or ingredients?"
          />
          <InstagramCards
            photo={bistecPhoto}
            title=" Steak never be wrong. It´s suitable for you who want a romantic dinner"
          />
        </div>
        <div className="flex inter items-center font-semibold cursor-pointer bg-black text-white rounded-3xl gap-4 p-6 hover:bg-zinc-900">
          <p>Visit Our Instagram</p>
          <BsInstagram />
        </div>
      </div>
    </>
  );
}

export default Instagram;
