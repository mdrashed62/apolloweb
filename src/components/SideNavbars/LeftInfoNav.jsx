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
    <div className="border-r-1 relative h-[100vh]">
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

      <div className="">
        <div className="flex flex-col items-center justify-center gap-5">
          <FaCommentDots className="text-[#3DA0E1]" />
          <FaBookmark className="text-gray-400" />
        </div>
        <div className="flex flex-col mt-14 items-center justify-center gap-5">
          <FaVolumeDown className="text-gray-400" />
          <FaUserFriends className="text-gray-400" />
        </div>
        <div className="flex mt-[50px] flex-col items-center relative justify-center gap-5">
          <FaPhoneAlt className="text-gray-400" />
          <div className="absolute w-2 h-2 rounded-full bg-red-500 -top-[4px] right-11"></div>
        </div>
      </div>

      <div class="flex items-center justify-center absolute -bottom-[60px] right-11">
        
        <label class="flex items-center cursor-pointer">
            <div class="relative">
                <input type="checkbox" class="hidden" />
                <div class="block bg-[#3DA0E1] w-6 h-14 rounded-full"></div>
                <div class="dot absolute left-[2px] top-1 bg-white w-5 h-6 rounded-full transition"></div>
            </div>
        </label>
    </div>

    </div>
  );
};
export default LeftInfoNav;
