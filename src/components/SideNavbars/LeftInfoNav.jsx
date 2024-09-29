import Image from "next/image";
import React from "react";
import photo from "../../../public/assests/logoProfile.jpg";
import { Avatar } from "@nextui-org/react";
import {
  FaBookmark,
  FaCommentDots,
  FaPhoneAlt,
  FaUserFriends,
  FaVolumeDown,
} from "react-icons/fa";

const LeftInfoNav = () => {
  return (
    <div className="border-r-1 relative w-full h-full flex flex-col justify-between">
      <div className="p-4 overflow-hidden flex items-center justify-center">
        <div className="w-10 h-10 overflow-hidden">
          <Image
            width={40}
            height={40}
            src={photo}
            alt="logo of leftInfoNav"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="pb-6">
        <div className="relative flex justify-center items-center pt-3 pb-4">
          <Avatar
            isBordered
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          />
          <div>
            <p className="w-3 h-3 bg-[#3DA0E1] absolute right-[34px] top-10 text-white  flex items-center justify-center rounded-full">
              <span className="text-[10px]">+</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="">
            <FaCommentDots className="text-[#3DA0E1]" />
            <div className="w-1 h-8 bg-[#3DA0E1] absolute top-[156px] right-0"></div>
          </div>
          <FaBookmark className="text-gray-400" />
        </div>
        <div className="flex flex-col mt-14 items-center justify-center gap-5">
          <FaVolumeDown className="text-gray-400" />
          <FaUserFriends className="text-gray-400" />
        </div>
        <div className="flex mt-[50px] flex-col items-center relative justify-center gap-5">
          <FaPhoneAlt className="text-gray-400" />
          <div className="absolute w-2 h-2 rounded-full bg-red-500 -top-[4px] right-14"></div>
        </div>
      </div>

     
      <div className="flex items-center justify-center mt-10 flex-grow">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input type="checkbox" className="hidden" />
            <div className="block bg-[#3DA0E1] w-6 h-14 rounded-full"></div>
            <div className="dot absolute left-[2px] top-1 bg-white w-5 h-6 rounded-full transition"></div>
          </div>
        </label>
      </div>
    </div>
  );
};
export default LeftInfoNav;
