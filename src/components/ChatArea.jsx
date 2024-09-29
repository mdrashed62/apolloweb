import React from "react";
import Navbar2 from "./SharedNav/Navbar2";
import { Avatar } from "@nextui-org/react";
import {
  FaFileAlt,
  FaLocationArrow,
  FaMicrophoneAlt,
  FaPlay,
  FaPlusCircle,
  FaReply,
} from "react-icons/fa";

import img2 from "../../public/assests/img2.jpg";
import img3 from "../../public/assests/img3.jpg";
import img5 from "../../public/assests/img5.jpg";
import Image from "next/image";
import img7 from "../../public/assests/img7.jpg";

const ChatArea = () => {
  return (
    <div className="border-r-1 relative w-full h-full">
      <nav className="">
        <Navbar2 />
      </nav>
      <div className="flex-1 bg-white space-y-2 w-full flex  h-full flex-col bg-gradient-to-b from-[#FDE0D9] via-[#FAD4E5] to-[#dfeef6]">
        <div className="flex gap-2 items-center ml-3">
          <div className="w-9 h-9">
            <Avatar
              className="w-9 h-9"
              isBordered
              color="danger"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-[12px] pt-5">Unarshia</h1>
              <p className="text-[8px] mr-3 pt-5">04:41</p>
            </div>
            <p
              style={{ borderRadius: "0px 150px 150px 150px" }}
              className="relative py-3 px-3 rounded-lg bg-white text-[13px]"
            >
              I saw two creative ui design and i want to share with you guys.
            </p>
          </div>
          <div className="bg-white rounded-xl px-2 left-20 top-[145px] text-[12px] absolute">
            🔥2
          </div>
        </div>

        <div className="flex gap-2 items-center ml-3">
          <div className="w-9 h-9">
            <Avatar
              className="w-9 h-9"
              isBordered
              color="danger"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-[12px] pt-5">Mailad Ghanbari</h1>
              <p className="text-[8px] mr-3 pt-5">04:50</p>
            </div>

            <div className="relative ">
              <p
                style={{ borderRadius: "0px 150px 150px 150px" }}
                className="py-3 px-3 rounded-lg bg-white text-[13px]"
              >
                <span className="text-[#3DA0E1]">@everyone</span> Hello
                Everyone! GOOD NEWS!!!
              </p>
              <div className="bg-[#3DA0E1] rounded-xl px-2 text-white left-[26px] top-9 text-[12px] absolute">
                😍8
              </div>
              <div className="bg-white rounded-xl px-2 left-[70px] top-9 text-[12px] absolute">
                😆4
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center ml-3">
          <div className="w-9 h-9">
            <Avatar
              className="w-9 h-9"
              isBordered
              color="danger"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h1 className="font-medium text-[12px] pt-5">Hooman Abasi</h1>
              <p className="text-[8px] mr-3 pt-5">07:23</p>
            </div>

            <div className=" ">
              <div
                style={{ borderRadius: "0px 150px 150px 150px" }}
                className="py-[10px] px-3 flex items-center gap-5 rounded-lg bg-white text-[13px]"
              >
                <div>
                  <FaPlay className="text-[#3DA0E1]" />
                </div>
                <div className="flex space-x-[2px] mt-1 ">
                  <div className="w-[1px] bg-[#3DA0E1]  h-4 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-3 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-2"></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-4 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-5 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-5 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-2 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-1 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-3"></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-4 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-5 "></div>
                  <div className="w-[1px] bg-[#3DA0E1]  h-2 "></div>
                </div>
                <p className="text-[#3DA0E1]">12 Minutes</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[260px] p-2 relative gap-2 grid grid-cols-7 ml-14 bg-white rounded-r-xl rounded-b-xl">
          <div className="h-[80px] col-span-2">
            <Image
              src={img2}
              alt="photo"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="h-[80px] col-span-5">
            <Image
              src={img5}
              alt="photo"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="h-[80px] col-span-4">
            <Image
              src={img3}
              alt="photo"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="h-[80px] col-span-3">
            <Image
              src={img7}
              alt="photo"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <p className="absolute bg-white rounded-xl px-2 text-[12px] left-4 -bottom-2">
            ❤️9
          </p>
          <p className="absolute bg-white rounded-xl px-2 text-[12px] left-14 -bottom-2">
            {" "}
            👍7{" "}
          </p>
          <p className="absolute bg-white rounded-xl px-2 text-[12px] left-24 -bottom-2">
            {" "}
            😴12{" "}
          </p>

          <div className="absolute flex flex-col justify-between items-center pt-2 w-6 h-32 -right-10 -bottom-0 bg-white rounded-xl">
            <div>
              <div>
                {" "}
                <FaPlusCircle className="text-gray-400 ml-[3px] " />{" "}
              </div>
              <div>😢 </div>
              <div>😢 </div>
              <div>😢 </div>
              <div>😢 </div>
            </div>
          </div>
          <div className="absolute -right-10 top-4 p-1 text-white bg-[#3DA0E1] rounded-full">
            <FaReply />
          </div>
        </div>

       
        <div className=" mr-5 space-y-1">
          <div className="flex items-center gap-2 justify-end">
            <p className="text-[14px] font-medium">
              You <span className="text-[10px]">6:45</span>
            </p>
            <div className="w-6 h-6">
              <Avatar
                className="w-6 h-6"
                isBordered
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              />
            </div>
          </div>
         <div className="flex justify-end">
         <p
            style={{ borderRadius: "150px 0px 150px 150px" }}
            className="bg-gradient-to-r from-[#18889F] to-[#3A93CB] px-3 py-1 text-white"
          >
            Hey guys! what you doing?👏🫡 <br />i just finished duxica ui design
            project.
          </p>
         </div>
       </div>
      </div>

      <div className="flex w-full absolute items-center -bottom-20 px-5 gap-2 py-3 ">
        <div className="w-6 h-6">
          <Avatar
            className="w-6 h-6"
            isBordered
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
        </div>
        <div className="w-full">
          <input
            className="py-1 relative w-full pl-4 rounded-lg bg-white"
            placeholder="type something"
            type="text"
          />
        <div className="flex items-center gap-3 absolute bottom-5 right-8">
          <FaFileAlt className="text-[#3DA0E1]" />
          <p className="text-[9px]">2 File</p>
          <p className="w-2 h-2 rounded-full bg-[#3DA0E1]"></p>
          <FaMicrophoneAlt className=" text-[#3DA0E1]" />
          <FaLocationArrow className=" text-[#3DA0E1]" />
        </div>
        </div>
       </div>
    
    </div>
  );
};

export default ChatArea;
