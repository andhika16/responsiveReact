import React from "react";
import {
  addOns,
  incApps,
  learnAndSup,
  moreGoogle,
  resources,
  secAndManage,
  solutions,
} from "./footerData";
const SecondFooter = () => {
  return (
    <div>
      <div className="p-8 flex flex-col sm:flex-row flex-wrap">
        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">
            Include applications
          </h2>
          {incApps.map((e) => (
            <li key={e.id}>
              <p className="font-inter text-xs text-gray-500 leading-8">
                {e.name}
              </p>
            </li>
          ))}
        </ul>

        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">
            Security and Management
          </h2>
          {secAndManage.map((e) => (
            <li key={e.id}>
              <p className="font-inter text-xs text-gray-500 leading-8">
                {e.name}
              </p>
            </li>
          ))}
        </ul>
        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">Solutions</h2>

          {solutions.map((e) => (
            <li key={e.id}>
              <p className="font-inter text-xs text-gray-500 leading-8">
                {e.name}
              </p>
            </li>
          ))}
        </ul>
        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">Price</h2>
          <li>
            {" "}
            <p className="font-inter text-xs text-gray-500 leading-8">
              {" "}
              Compare pricing plans
            </p>{" "}
          </li>
        </ul>
        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">Add Ons</h2>

          {addOns.map((e) => (
            <li key={e.id}>
              <p className="font-inter text-xs text-gray-500 leading-8">
                {e.name}
              </p>
            </li>
          ))}
        </ul>
        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">Resources</h2>

          {resources.map((e) => (
            <li key={e.id}>
              <p className="font-inter text-xs text-gray-500 leading-8">
                {e.name}
              </p>
            </li>
          ))}
        </ul>
        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">
            Learning and support
          </h2>

          {learnAndSup.map((e) => (
            <li key={e.id}>
              <p className="font-inter text-xs text-gray-500 leading-8">
                {e.name}
              </p>
            </li>
          ))}
        </ul>
        <ul className="m-5">
          <h2 className="font-inter font-semibold text-gray-600">
            More from Google
          </h2>

          {moreGoogle.map((e) => (
            <li key={e.id}>
              <p className="font-inter text-xs text-gray-500 leading-8">
                {e.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondFooter;
