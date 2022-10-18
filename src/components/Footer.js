import React from "react";
import Inbox from "./Inbox";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="p-4 md:px-16">
        <Inbox />
        <div className="inter flex flex-col mt-32  ">
          <div className="hidden lg:flex justify-between items-center border-b border-slate-200 pb-16">
            <p className="text-[#00000099]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
            <ul className="flex gap-8 font-semibold">
              <li>Recipes</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex gap-2 md:gap-0 justify-between items-center py-8">
            <h1 className="lobster text-3xl hidden md:flex">Foodieland.</h1>
            <p className="text-[#00000099] text-sm ">
              © 2020 Flowbase. Powered by Webflow
            </p>
            <div className="flex gap-6 text-xl">
              <FaFacebookF className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
