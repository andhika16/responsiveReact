import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gray-200 h-96">
      <div>
        <h1 className="font-inter font-semibold text-gray-700 text-2xl">
          Sign Up for the Google Workspace newsletter
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <form>
          <div className="flex flex-col md:flex-row">
            <input
              className="m-2 p-2 border-2 rounded"
              type="text"
              placeholder="Enter your email"
            />

            <select className="m-2 p-2 border-2 rounded" name="cars" id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="">
            <input type="checkbox" className="mx-3" name="term" id="" />
            <label
              htmlFor="term"
              className="font-inter font-normal text-xs font-thin"
            >
              Also sign me up for Google Cloud emails with news, product
              updates, event information, special offers, and more. (Optional
              and you can unsubscribe at a later time).
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
