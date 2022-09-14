import React from "react";
import laptop from "../assets/laptop.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row px-5">
      <div className="mb-5">
        <h1 className="font-inter text-[2.9em] leading-[60px] text-gray-800">
          Do your best work, all in one place.
        </h1>
        <div className="my-7 sm:my-5">
          <Button
            title="Get started"
            bg={"w-[150px] bg-blue-500 rounded text-white m-0"}
          />
        </div>
      </div>
      <div className="items-center ">
        <img src={laptop} alt="laptop" />
      </div>
    </div>
  );
};

export default Hero;
