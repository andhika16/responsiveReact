import React from "react";
import { listApp } from "./listapp";
import { secAndManage } from "./listapp";
const Applications = () => {
  return (
    <div className="flex flex-col mt-5 ">
      <div className="flex flex-col px-5">
        <p className="font-inter font-normal">Included Applications</p>
        <ol className="flex sm:flex-row flex-wrap items-center justify-start">
          {listApp.map((app) => (
            <li
              key={app.id}
              className="w-[15%] m-7 flex flex-col sm:flex-row items-center"
            >
              {" "}
              <img
                className="w-[45px] h-[45px] m-2"
                src={app.img}
                alt={app.name}
              />{" "}
              <p className="font-inter font-normal capitalize ">{app.name}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="px-5">
        <p className="font-inter font-normal">Security and Management</p>
        <ol className="flex sm:flex-row flex-wrap  justify-start">
          {secAndManage.map((app) => (
            <li
              key={app.id}
              className="sm:w-[17%] m-7 flex flex-col sm:flex-row items-center"
            >
              {" "}
              <img
                className="w-[45px] h-[45px] m-2"
                src={app.img}
                alt={app.name}
              />{" "}
              <p className="font-inter font-normal capitalize">{app.name}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex justify-center items-center  bg-blue-600 h-64">
        <div className="flex flex-col text-center">
          <span className="text-[1.0em] text-white font-inter font-normal uppercase leading-[70px]">
            how it works
          </span>
          <span className="font-inter font-normal text-white text-4xl ">
            Google Workspace makes working togheter a whole lot easier
          </span>
        </div>
      </div>
    </div>
  );
};

export default Applications;
