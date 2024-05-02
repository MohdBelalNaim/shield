import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { BsHeart, BsPerson, BsPhone } from "react-icons/bs";

const AllDonations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="text-xl font-bold mb-4">
          All goods available for free
        </div>
        <div className="grid grid-cols-3 gap-4">
          {"abcdef".split("").map((item, index) => {
            return (
              <div className="rounded-md border overflow-hidden bg-white">
                <div className="h-[200px]">
                  <img
                    src={`https://picsum.photos/400?${index}`}
                    className="object-cover h-full w-full"
                    alt=""
                  />
                </div>
                <div className="px-3.5 py-6">
                  <div className="font-medium">
                    Timex automatic watch 44 mm, Silver case, With chronograph
                    for free
                  </div>
                  <div className="flex items-center mt-3 bg-teal-100 px-4 text-xs gap-3 w-max border rounded-full p-1.5">
                    <BsPerson size={16} /> Insha hasan is donating this product
                  </div>
                </div>
                <div className="border-t px-3 py-4 flex gap-3">
                  <div
                    onClick={() => setAcquire(true)}
                    className="cursor-pointer flex items-center gap-2 text-xs bg-teal-800 w-max text-white px-3 py-2 rounded-full"
                  >
                    <BsHeart /> Request to acquire
                  </div>
                  <div className="flex items-center gap-2 text-xs bg-teal-800 w-max text-white px-3 py-2 rounded-full">
                    <BsPhone /> Call the donor
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllDonations;
