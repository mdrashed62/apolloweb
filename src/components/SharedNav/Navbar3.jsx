import React from "react";
import { FaEllipsisH, FaTimes } from "react-icons/fa";

const Navbar3 = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="bg-blue-400 rounded-full w-6 h-6 relative">
          <FaEllipsisH className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
        </div>
        <p className="font-semibold">Group Info</p>
      </div>
      <FaTimes className="text-gray-400"/>
    </div>
  );
};

export default Navbar3;
