import React from "react";
import { sosmedIcon } from "./listapp";
import loupe from "../assets/loupe.png";
import SecondFooter from "./SecondFooter";
const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-between py-8 px-14">
        <div className="flex flex-row mb-8 sm:mb-0">
          <p className="font-inter text-gray-400">
            Follow our{" "}
            <span className="text-gray-600 underline font-semibold">Blog</span>{" "}
          </p>
          <div className="flex justify-between w-[200px] ml-6">
            {sosmedIcon.map((img) => (
              <div className="w-[22px] h-[22px]" key={img.id}>
                <img
                  className="w-[100%] h-[100%]"
                  src={img.img}
                  alt={img.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center sm:w-[300px] bg-gray-300 p-2 font-inter text-sm">
          <img className="w-[15px] h-[15px]" src={loupe} alt="search" />
          <input
            className="ml-2 bg-gray-300"
            type="search"
            placeholder="Search this site"
          />
        </div>
      </div>
      <hr className="border-1 border-gray-300" />
      <SecondFooter />
    </>
  );
};

export default Footer;
