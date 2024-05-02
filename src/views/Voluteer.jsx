import React from "react";
import Navbar from "../components/Navbar";
import {
  BsArrowRight,
  BsCalendar,
  BsEye,
  BsPeople,
  BsPerson,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Voluteer = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-teal-100">
        <div className="container mx-auto py-12">
          <div className="text-2xl font-medium">
            Start a new volunteering session
          </div>
          <div className="w-[min(60%,96%)] text-sm mt-2">
            Volunteering for a cause is a wonderful way to make a positive
            impact on the world around you. Whether you're passionate about
            environmental conservation, animal welfare, social justice,
            education, or any other cause, there are countless organizations and
            initiatives that could use your support. <br />
            <br /> If you're not sure where to start, consider thinking about
            what issues are important to you and what skills or interests you
            have that you could contribute. You can look for local volunteer
            opportunities through community centers, nonprofits, or online
            platforms. Volunteering can be incredibly rewarding, both for the
            people or causes you're helping and for yourself. It's a great way
            to meet new people, learn new skills, and make a difference in the
            world.
          </div>
          <Link to="/start-volunteer">
            <button className="flex items-center gap-3 bg-teal-800 text-white px-3 py-2 rounded-full text-sm mt-6">
              Start a volunteering session <BsArrowRight />
            </button>
          </Link>
        </div>
      </div>

      <div className="">
        <div className="container mx-auto">
          <div className="text-xl font-medium py-4">
            Volunteer in a campaign
          </div>
          <div className="grid grid-cols-3 gap-5">
            {"abcdefg".split("").map((item, index) => {
              return (
                <div className="border rounded-md overflow-hidden">
                  <div className="h-[200px]">
                    <img
                      src={`https://picsum.photos/400?${index}`}
                      className="object-cover h-full w-full"
                      alt=""
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-sm font-medium">
                      This is a test volunteering campaign, you cannot enroll in
                      this, This is just for testing
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voluteer;
