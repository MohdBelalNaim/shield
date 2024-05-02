import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { BsBox, BsPencil, BsPerson, BsPersonCircle, BsX } from "react-icons/bs";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const menu = ["My Donations", "Campaigns", "Volunteering"];
  const [current, setCurrent] = useState("My Donations");
  return (
    <>
      {edit && (
        <div className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="w-[min(440px,96%)] bg-white rounded">
            <div className="p-3 text-center border-b relative">
              <BsX
                onClick={() => setEdit(false)}
                className="absolute text-xl cursor-pointer"
              />{" "}
              Edit profile details
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
                placeholder="City"
              />
              <input
                type="text"
                className="w-full border p-2 text-sm"
                placeholder="State"
              />

              <input
                type="text"
                className="w-full border p-2 text-sm"
                placeholder="Country"
              />
              <button className="bg-teal-800 text-white text-sm w-full p-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <Navbar />
      <div className="p-12">
        <div className="flex flex-col items-center pb-12">
          <BsPersonCircle className="mb-3" size={40} />
          <div className="mt-3">
            <div className="text-2xl text-teal-800 text-center">
              Syed haider abbas
            </div>
            <div className="mt-1 text-teal-800 text-center">
              Lucknow, Uttar Pradesh, India
            </div>
            <div className="flex justify-center mt-5">
              <button
                onClick={() => setEdit(true)}
                className="text-sm text-white bg-teal-700 flex gap-3 items-center px-3 py-2 rounded-full"
              >
                <BsPencil /> Edit details
              </button>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="w-[min(560px,96%)] flex justify-between mx-auto">
            {menu.map((item) => {
              return (
                <div
                  onClick={() => setCurrent(item)}
                  className={`${
                    current == item && "border-b-4 font-bold"
                  } p-4 text-sm border-teal-800 cursor-pointer`}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="w-[min(560px,96%)] mx-auto">
            {"abcdef".split("").map((item, index) => {
              return (
                <div className="w-full border rounded p-3 flex gap-4 mt-4">
                  <img
                    src="https://picsum.photos/400"
                    className="size-32 rounded-md"
                    alt=""
                  />
                  <div>
                    <div className="font-medium">
                      Timex automatic watch, Silver case, 44mm
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BsPerson /> Insha hasan
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BsBox /> 2 units
                    </div>
                    <button className="text-xs px-3 py-2 rounded-full bg-red-500 text-white mt-5">
                      Delete this drive
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
