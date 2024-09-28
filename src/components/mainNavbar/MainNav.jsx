import React from "react";

const MainNav = () => {
  return (
    <div className="py-4 border-b-[2px] sticky top-0 bg-white z-10">
      <div className="flex items-center ml-5 gap-2">
        <div className="w-3 h-3 rounded-full bg-[#ED685D]"></div>
        <div className="w-3 h-3 rounded-full bg-[#F9BC4E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#61C156]"></div>
      </div>
    </div>
  );
};

export default MainNav;
