import React from "react";
import Navbar2 from "./SharedNav/Navbar2";
import { Avatar } from "@nextui-org/react";
import { FaFileAlt, FaLocationArrow, FaMicrophoneAlt } from "react-icons/fa";

const ChatArea = ({ chat }) => {
  if (!chat) {
    return <div className="flex text-2xl font-semibold text-gray-600 text-opacity-60 flex-col justify-center items-center text-center h-screen">Select a conversation to view messages.</div>;
  }
  
  return (
    <div className="border-r-1 relative w-full">
      <nav className="">
        <Navbar2 chat={chat} />
      </nav>
      <div className="flex-1 bg-white space-y-2 w-full min-h-screen flex flex-col bg-gradient-to-b from-[#FDE0D9] via-[#FAD4E5] to-[#dfeef6]">
        {chat.texts.map((text, index) => (
          <p key={index} className="py-3 w-[200px] pl-3 mt-6 rounded-lg bg-white ml-7">{text}</p>
        ))}
      </div>
      <div className="flex absolute w-full bottom-0 items-center px-5 gap-2 py-3 ">
         <div className="w-6 h-6">
         <Avatar className="w-6 h-6" isBordered src={chat.avatar} />
         </div>
         <div className="relative w-full">
         <input
            className="py-1 w-full pl-4 rounded-lg bg-white"
            placeholder="type something"
            type="text"
          />
         </div>

        <div className="flex items-center gap-3 absolute bottom-5 right-8">
        <FaFileAlt className="text-[#3DA0E1]" />
        <p className="text-[9px]">2 File</p>
        <p className="w-2 h-2 rounded-full bg-[#3DA0E1]"></p>
        <FaMicrophoneAlt className=" text-[#3DA0E1]" />
        <FaLocationArrow className=" text-[#3DA0E1]" />
        </div>
        </div>
    </div>
  );
};

export default ChatArea;
