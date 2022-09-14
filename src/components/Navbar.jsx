import React, { useState } from "react";
import googleWS from "../assets/google-workspace-logo.png";
import close from "../assets/cancel.png";
import menu from "../assets/menu.png";
import Button from "./Button";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 navbar shadow-md mb-10 z-auto">
      <div className="box-shadow hidden sm:flex md:flex-row justify-between">
        <div className="flex flex-row flex-wrap ">
          <div className=" m-0 sm:m-5 cursor-pointer ">
            <img className="w-[190px] h-[25px]" src={googleWS} alt="google" />
          </div>
          <div className="lg:mt-5 mt-0">
            <ul className="list-none font-inter font-normal flex flex-row justify-between">
              <li className="text-[14px] mx-5 text-gray-400 active:text-black">
                Solusi
              </li>
              <li className="text-[14px] mx-5 text-gray-400 active:text-black">
                Produk
              </li>
              <li className="text-[14px] mx-5 text-gray-400 active:text-black">
                Harga
              </li>
              <li className="text-[14px] mx-5 text-gray-400 active:text-black">
                Referensi
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center flex-wrap sm:justify-end">
          <p className="font-inter text-blue-500 text-[14px] font-semibold mx-3">
            Konsol Admin
          </p>
          <Button title="Hubungi penjualan" border={"border rounded"} />
          <Button
            title="Mulai Uji Coba gratis"
            bg={"bg-blue-500 rounded text-white"}
          />
        </div>
      </div>

      <div className="sm:hidden box-shadow flex flex-col justify-start">
        <div className="my-4 mx-4 w-[190px] flex flex-row ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[19px] h-[19px] mr-5 object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <img
            src={googleWS}
            alt="google"
            className="max-w-[100%] max-h-[100%]"
          />
        </div>

        <div className={`${!toggle ? "hidden" : "flex"} w-full flex-col `}>
          <div className="mt-0">
            <ul className="list-none font-inter font-normal flex flex-col justify-between">
              <li className="text-[14px] mx-5  py-4  active:text-black">
                Solusi
              </li>
              <li className="text-[14px] mx-5  py-4  active:text-black">
                Produk
              </li>
              <li className="text-[14px] mx-5  py-4  active:text-black">
                Harga
              </li>
              <li className="text-[14px] mx-5  py-4  active:text-black">
                Referesi
              </li>
              <li className="text-[14px] mx-5  py-4 text-blue-500 active:text-black">
                Konsol Admin
              </li>
            </ul>
          </div>
          <div className="flex sm:flex-row flex-col shadow-xl flex-wrap sm:justify-end">
            <Button
              title="Hubungi penjualan"
              border={"border rounded"}
              hidden
            />
            <Button
              title="Mulai Uji Coba gratis"
              bg={"bg-blue-700 rounded text-white"}
              hidden
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
