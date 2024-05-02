import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  BsCalendar,
  BsEye,
  BsForward,
  BsPeople,
  BsPerson,
  BsPersonAdd,
  BsX,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const CampaignDetails = () => {
  const [form, setForm] = useState(false);
  return (
    <div>
      {form && (
        <div className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="w-[min(440px,96%)] bg-white rounded">
            <div className="p-3 text-center border-b relative">
              <BsX
                onClick={() => setForm(false)}
                className="absolute text-xl cursor-pointer"
              />{" "}
              Volunteer in this campaign
            </div>
            <div className="p-3 grid gap-y-4">
              <input
                type="text"
                className="w-full border p-2 text-sm"
                placeholder="Full name"
              />
              <input
                type="text"
                className="w-full border p-2 text-sm"
                placeholder="Email address"
              />
              <input
                type="text"
                className="w-full border p-2 text-sm"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="w-full border p-2 text-sm"
                placeholder="Alternate number"
              />
              <button className="bg-teal-800 text-white text-sm w-full p-2">
                Submit
              </button>
            </div>
            <div className="text-xs p-3 text-gray-600">
              Details regarding the venue and timigns will be shared via email,
              on your registered email address
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <div className="w-[min(760px,96%)] mx-auto">
        <div className="text-xl font-bold py-4">
          This is the title for this volunteering session, it can be added from
          start new
        </div>
        <img
          src="https://picsum.photos/400/200"
          className="w-full h-full"
          alt=""
        />
        <div className="flex text-sm items-center gap-2 py-4 border-b text-gray-600">
          <BsPerson size={18} /> Insha hasan has started this session
        </div>
        <div>
          <div className="font-medium mt-2">Reason for this campaign</div>
          <p className="text-sm mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            vero tempora unde praesentium! Cumque asperiores, nulla veritatis
            rerum a consectetur sit voluptatum recusandae soluta alias id nihil
            expedita velit dolore! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolore vero tempora unde praesentium! Cumque
            asperiores, nulla veritatis rerum a consectetur sit voluptatum
            recusandae soluta alias id nihil expedita velit dolore! Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dolore vero tempora
            unde praesentium! Cumque asperiores, nulla veritatis rerum a
            consectetur sit voluptatum recusandae soluta alias id nihil expedita
            velit dolore! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Dolore vero tempora unde praesentium! Cumque asperiores, nulla
            veritatis rerum a consectetur sit voluptatum recusandae soluta alias
            id nihil expedita velit dolore! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolore vero tempora unde praesentium!
            Cumque asperiores, nulla veritatis rerum a consectetur sit
            voluptatum recusandae soluta alias id nihil expedita velit dolore!
          </p>
        </div>
        <div className="flex gap-2 mt-4 border-b pb-4">
          <button
            onClick={() => setForm(true)}
            className="bg-teal-800 text-white px-3 py-2 rounded-full text-sm flex items-center gap-2"
          >
            <BsPersonAdd size={22} />
            Join this session
          </button>
          <button className="bg-teal-800 text-white px-3 py-2 rounded-full text-sm flex items-center gap-2">
            <BsForward size={22} />
            Share it with somenelse
          </button>
        </div>
        <div className="grid grid-cols-2 py-5 gap-3 border-b">
          <div className="flex gap-4 items-center  border-teal-800 rounded bg-teal-100 justify-center py-6 font-medium">
            <BsPeople size={24} /> 4 People requierd
          </div>
          <div className="flex gap-4 items-center  border-teal-800 rounded bg-teal-100 justify-center py-6 font-medium">
            <BsCalendar size={24} /> 4 People requierd
          </div>
        </div>
        <div className="text-lg font-medium py-3">Similiar campaigns</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="border rounded-md overflow-hidden">
            <div className="h-[200px]">
              <img
                src={`https://picsum.photos/400?1`}
                className="object-cover h-full w-full"
                alt=""
              />
            </div>
            <div className="p-3">
              <div className="text-sm font-medium">
                This is a test volunteering campaign, you cannot enroll in this,
                This is just for testing
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <BsPerson size={16} /> Insha hasan is leading this session
              </div>
              <div className="flex items-center gap-5 text-sm mt-2 pt-3 border-t">
                <div className="flex items-center gap-2">
                  <BsPeople size={18} /> 4 People required
                </div>
                <div className="flex items-center gap-2">
                  <BsCalendar /> Starts on 1-11-2024
                </div>
              </div>
              <div className="border-t pt-3 mt-2">
                <Link to="/campaign">
                  <button className="flex items-center gap-2 bg-teal-800 text-white text-xs px-3 py-2 rounded-full">
                    See details <BsEye />{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="border rounded-md overflow-hidden">
            <div className="h-[200px]">
              <img
                src={`https://picsum.photos/400?1`}
                className="object-cover h-full w-full"
                alt=""
              />
            </div>
            <div className="p-3">
              <div className="text-sm font-medium">
                This is a test volunteering campaign, you cannot enroll in this,
                This is just for testing
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <BsPerson size={16} /> Insha hasan is leading this session
              </div>
              <div className="flex items-center gap-5 text-sm mt-2 pt-3 border-t">
                <div className="flex items-center gap-2">
                  <BsPeople size={18} /> 4 People required
                </div>
                <div className="flex items-center gap-2">
                  <BsCalendar /> Starts on 1-11-2024
                </div>
              </div>
              <div className="border-t pt-3 mt-2">
                <Link to="/campaign">
                  <button className="flex items-center gap-2 bg-teal-800 text-white text-xs px-3 py-2 rounded-full">
                    See details <BsEye />{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
