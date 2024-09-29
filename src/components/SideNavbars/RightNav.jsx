import React from "react";
import Navbar3 from "../SharedNav/Navbar3";
import logoPhoto from "../../../public/assests/images.jpeg";
import Image from "next/image";
import {
  FaBell,
  FaRegTrashAlt,
  FaStickyNote,
  FaToggleOn,
  FaUser,
} from "react-icons/fa";
import { Avatar } from "@nextui-org/react";
import img1 from "../../../public/assests/img1.jpg";
import img2 from "../../../public/assests/img4.jpeg";
import img3 from "../../../public/assests/img6.jpg";

const RightNav = () => {
  return (
    <div className="border-l-1 w-full h-full relative ">
      <div>
        <div className="px-5 py-[24px] border-b-1">
          <Navbar3 />
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mt-6">
            <div className="pr-3">
              <div className="w-16 h-16 overflow-hidden">
                <Image
                  width={40}
                  height={40}
                  src={logoPhoto}
                  alt="logo of leftInfoNav"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <h1 className="font-semibold">Duxica Team</h1>
              <p className="text-[14px] text-gray-400 font-medium">
                22 members
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2 px-5 mb-6">
            <h1 className="text-sm font-bold">Description</h1>
            <p className="text-[12px] text-gray-500 text-opacity-60">
              We are a digital design agency based in vancouvar, Canada with{" "}
              <span className="font-semibold text-black opacity-65">
                10+ years
              </span>{" "}
              of experience designing products{" "}
            </p>
          </div>

          <div className="px-5 mb-8 flex justify-between items-center">
            <h1 className="text-[#2695CF] text-[12px] font-bold">
              @Duxica_Team
            </h1>
            <FaStickyNote className="text-[#2695CF]" />
          </div>

          <div className="px-5 mb-8 flex items-center justify-between">
            <div className="flex gap-4">
              <FaBell className="text-[#2695CF]" />
              <p className="text-[12px] text-gray-400">Notifications</p>
            </div>
            <FaToggleOn className="text-[#2695CF]" />
          </div>
          <div className="px-5 mb-4 flex items-center justify-between">
            <div className="flex gap-4">
              <div className="flex gap-1">
                <div className="w-[6px] h-[6px] mt-[9px] ml-[3px] rounded-full bg-gray-500"></div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-[9px] h-[9px] rounded-full bg-gray-500"></div>
                  <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                </div>
              </div>
              <p className="text-[13px] font-bold text-gray-600">
                Shared Media
              </p>
            </div>
            <p className="text-[13px] text-[#2695CF]">(3475 items)</p>
          </div>

          <div className="flex px-5 items-center gap-3">
            <button className="py-[3px] px-[10px] text-white text-[12px] bg-[#2695CF] rounded-2xl">
              Photos
            </button>
            <p className="text-[11px] text-gray-500 text-opacity-80">File</p>
            <p className="text-[11px] text-gray-500 text-opacity-80">Video</p>
            <p className="text-[11px] text-gray-500 text-opacity-80">Link</p>
          </div>

          <div className=" flex gap-2 px-5 mt-4">
            <div className="w-[110px] h-[80px]">
              <Image
                src={img3}
                alt="photo"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="w-[80px] h-[80px]">
              <Image
                src={img2}
                alt="photo"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="w-[55px]  h-[80px]">
              <Image
                src={img1}
                alt="photo"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>

          <div className="px-5 mt-4 pb-2 flex items-center justify-between">
            <div className="flex gap-4">
              <FaUser className="text-gray-400" />
              <p className="text-[12px] text-gray-400 font-semibold">
                Members <span className="text-[#2695CF]">(22)</span>
              </p>
            </div>
            <div>
              <p className="w-3 h-3 bg-[#3DA0E1] right-[34px] top-10 text-white  flex items-center justify-center rounded-full">
                <span className="text-[10px]">+</span>
              </p>
            </div>
          </div>


          <div className="px-5 mt-6 flex items-center justify-between">
          <div className="flex gap-3 items-center text-[12px] font-bold">
          <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <h1>Joe Smith</h1>
          </div>
          <h1 className="text-[12px] font-semibold text-gray-400 text-opacity-80">Developer</h1>
          </div>
          
          <div className="px-5 mt-6 flex items-center justify-between">
          <div className="flex gap-3 items-center text-[12px] font-bold">
          <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <h1>Joe Smith</h1>
          </div>
          <h1 className="text-[12px] font-semibold text-gray-400 text-opacity-80">Developer</h1>
          </div>



          <div className="px-10 mt-6 text-center absolute -bottom-[62px] justify-center flex items-center gap-4 text-red-500">
          <FaRegTrashAlt className="" />
          <p>Delete and leave</p>
        </div> 


        </div>

      </div>
    </div>
  );
};

export default RightNav;
