import React from "react";
import Button from "./Button";

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center px-8 md:px-0 bg-gray-200 h-96 ">
      <div>
        <h1 className="font-inter text-center font-semibold text-black text-2xl">
          Sign Up for the Google Workspace newsletter
        </h1>
      </div>
      <div className="flex flex-col md:px-8">
        <form>
          <div className="flex flex-col sm:flex-row font-inter text-gray-400">
            <input
              className="p-3 mx-2 m-2 border-2 border-gray-300 rounded-sm w-full"
              type="text"
              placeholder="Enter your email"
            />

            <select
              className="p-3 mx-2 m-2 border-2 border-gray-300 rounded-sm w-full "
              name="cars"
              id="cars"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="m-2">
            <div className="flex flex-row">
              <input className="" type="checkbox" name="term" />
              <label
                htmlFor="term"
                className="font-inter font-normal text-xs text-gray-600 ml-3 leading-4"
              >
                Also sign me up for Google Cloud emails with news, product
                updates, event information, special offers, and more. (Optional
                and you can unsubscribe at a later time).
              </label>
            </div>
            <div className="my-2">
              <p className="font-inter text-gray-600 text-xs">
                I understand my personal data will be processed in accordance
                with Google’s{" "}
                <span className="text-blue-900">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </form>
        <Button
          title={"Sign up"}
          border={"border-gray-300 text-blue-800 border-2 rounded-lg bg-white"}
        />
      </div>
    </div>
  );
};

export default SignUp;
