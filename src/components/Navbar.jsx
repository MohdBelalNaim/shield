import React from "react";
import { PiHandHeartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <Link to="/">
        <div className="font-medium">SHIELD</div>
      </Link>
      <div className="flex items-center text-xs gap-8">
        <Link to="/volunteer">
          <div className="font-medium cursor-pointer">Volunteer</div>
        </Link>
        <Link to="/login">
          <div className="font-medium cursor-pointer">Login</div>
        </Link>
        <Link to="/profile">
          <div className="font-medium cursor-pointer">My profile</div>
        </Link>
        <div className="font-medium cursor-pointer">Support a cause</div>
        <Link to="/ngo">
          <div className="font-medium cursor-pointer">Support an NGO</div>
        </Link>
        <Link to="/donate">
          <div className="flex gap-2 cursor-pointer bg-teal-100 items-center p-2  text-xs rounded-full border">
            Donate an item <PiHandHeartLight size={22} />{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
