import React from "react";
import Navbar from "../components/Navbar";
import { BiCloset, BiFork } from "react-icons/bi";
import { BsBox, BsCoin } from "react-icons/bs";

const DonateForm = () => {
  return (
    <div>
      <Navbar />
      <div className="w-[min(560px,96%)] mx-auto">
        <div className="text-2xl font-medium mt-4">
          Let's make someone's life better!
        </div>
        <div>
          <div className="mt-3 py-2 border-b">What will you donate today?</div>
          <div className="flex  justify-evenly py-4">
            <div className="hover:bg-teal-800 hover:text-white cursor-pointer border flex items-center gap-3 border-teal-800 px-3 py-2 rounded-full text-sm">
              <BiFork size={18} /> Food
            </div>
            <div className="hover:bg-teal-800 hover:text-white cursor-pointer border flex items-center gap-3 border-teal-800 px-3 py-2 rounded-full text-sm">
              <BiCloset size={18} /> Clothes
            </div>
            <div className="hover:bg-teal-800 hover:text-white cursor-pointer border flex items-center gap-3 border-teal-800 px-3 py-2 rounded-full text-sm">
              <BsCoin size={18} /> Money
            </div>
            <div className="hover:bg-teal-800 hover:text-white cursor-pointer border flex items-center gap-3 border-teal-800 px-3 py-2 rounded-full text-sm">
              <BsBox /> Others
            </div>
          </div>
          <div className="mt-3 py-2 border-b">Fill in your basic details</div>
          <div className="grid gap-y-4 mt-3">
            <input
              type="text"
              placeholder="Full name"
              className="border w-full p-2.5 text-sm"
            />
            <div>
              <input
                type="text"
                placeholder="Email address"
                className="border w-full p-2.5 text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Phone number"
              className="border w-full p-2.5 text-sm"
            />
          </div>
          <div className="mt-3 py-2 border-b">
            Complete the drive formalities
          </div>
          <div className="grid gap-y-4 mt-3">
            <input
              type="text"
              placeholder="Drive title"
              className="border w-full p-2.5 text-sm"
            />
            <div>
              <label htmlFor="" className="text-xs">
                Select a cover photo
              </label>
              <input type="file" className="border w-full p-2.5 text-sm" />
            </div>

            <input
              type="number"
              placeholder="Total units to be donated"
              className="border w-full p-2.5 text-sm"
            />
          </div>
          <button className="w-full p-2.5 bg-teal-800 mt-4 text-white text-sm">
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonateForm;
