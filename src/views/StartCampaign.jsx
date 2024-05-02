import React from "react";
import Navbar from "../components/Navbar";
import { BsArrowLeft, BsArrowRight, BsImage } from "react-icons/bs";

const StartCampaign = () => {
  return (
    <>
      <Navbar />
      <div className="w-[min(560px,96%)] mx-auto">
        <div className="text-xl font-medium py-4">
          Start a new volunteering session
        </div>
        <div>
          <div className="border-b pb-3 text-sm">
            Pick an image for this campaign
          </div>
          <label htmlFor="img">
            <div className="cursor-pointer text-sm mt-4 flex items-center gap-3 p-3 bg-gray-100 text-gray-600 rounded border-gray-300 border">
              <BsImage /> Pick an image
            </div>
            <input
              hidden
              type="file"
              name=""
              id="img"
              className="text-sm mt-3"
            />
          </label>
          <div className="border-b pb-3 text-sm mt-6">
            Fill in the campaign specific details
          </div>
          <div className="mt-4 grid gap-y-4">
            <input
              type="text"
              className="p-2 border w-full text-sm"
              placeholder="Campaign title"
            />
            <input
              type="text"
              className="p-2 border w-full text-sm"
              placeholder="Campaign category"
            />
            <div>
              <label htmlFor="" className="text-xs">
                Campaign date
              </label>
              <input
                type="date"
                className="p-2 border w-full text-sm"
                placeholder="Campaign category"
              />
            </div>
            <input
              type="text"
              className="p-2 border w-full text-sm"
              placeholder="Campaign venue"
            />
            <input
              type="number"
              className="p-2 border w-full text-sm"
              placeholder="People required"
            />
            <textarea
              className="p-2 border w-full text-sm"
              cols="30"
              rows="10"
              placeholder="Campaign story"
            ></textarea>
            <button className="bg-teal-800 text-white text-sm p-2.5 flex items-center justify-center gap-3">
              Create campaign <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default StartCampaign;
