import React from "react";
import Button from "./Button";
import communicate from "../assets/communicate.png";

import { reviewList } from "./ReviewData";

const Review = () => {
  return (
    <div className="">
      <div className="flex flex-col px-5 mt-10">
        {reviewList.map((review) => (
          <div key={review.id} className="flex flex-col sm:flex-row ">
            <div className="">
              <h1 className="font-inter font-normal text-[2.5em] ">
                {review.title}
              </h1>
              <span className="font-inter font-normal font-light leading-[30.8px]">
                <div dangerouslySetInnerHTML={{ __html: review.body }} />
              </span>
            </div>
            <div className="items-center my-8">
              <img src={review.img} alt="image" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center  bg-gray-200 h-80">
        <div className="flex flex-col text-center">
          <span className="font-inter font-normal text-4xl ">
            Try Google Works space for free
          </span>
          <div className="my-8 ">
            <Button title="Get started" bg={"bg-blue-600 text-white rounded"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row px-5 ">
        <div className="sm:order-1">
          <h1 className="font-inter font-normal text-[2.5em] ">
            Communicate more effectively with Voice.
          </h1>
          <span className="font-inter font-normal font-light ">
            <p>Let Voice take the extra work out of business communications.</p>
            <p className="leading-[30.8px] my-5 sm:my-10">
              Send and receive phone calls using a work number on any device,
              from any location.
            </p>
            <p className="leading-[30.8px] my-5 sm:my-10">
              Get accurate voicemail transcriptions and smart spam filtering
              from Googles AI.
            </p>
            <p className="leading-[30.8px] my-5 sm:my-10">
              Assign numbers and manage service and billing through one
              platform.
            </p>
            <p className="leading-[30.8px] my-5 sm:my-10">
              <small className="font-small">
                Voice is sold separately as an add-on to Google Workspace.
              </small>
            </p>
          </span>
        </div>
        <div className="items-center m-10">
          <img src={communicate} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Review;
