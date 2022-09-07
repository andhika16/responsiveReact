import React from "react";
import { listApp } from "./listapp";
import { secAndManage } from "./listapp";
const Applications = () => {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex flex-col">
        <p className="font-inter font-normal">Included Applications</p>
        <ol className="flex sm:flex-row flex-wrap  justify-start">
          {listApp.map((app) => (
            <li
              key={app.id}
              className="w-[15%] m-7 flex flex-col sm:flex-row items-center"
            >
              {" "}
              <img
                className="w-[50px] h-[50px]"
                src={app.img}
                alt={app.name}
              />{" "}
              <p className="font-inter font-normal capitalize mx-2">
                {app.name}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <div className="">
        <p className="font-inter font-normal">Security and Management</p>
        <ol className="flex sm:flex-row flex-wrap  justify-start">
          {secAndManage.map((app) => (
            <li
              key={app.id}
              className="sm:w-[17%] m-7 flex flex-col sm:flex-row items-center"
            >
              {" "}
              <img
                className="w-[50px] h-[50px]"
                src={app.img}
                alt={app.name}
              />{" "}
              <p className="font-inter font-normal capitalize">{app.name}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Applications;
