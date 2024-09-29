import { Avatar } from "@nextui-org/react";
import React from "react";
import { FaChevronRight, FaHashtag, FaSearch, FaThumbtack, FaTimes } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

const ChatList = () => {
  return (
    <div className="">
      <nav className="flex items-center justify-center border-b-1 p-[16px] gap-3 bg-white">
          <div className="flex gap-4 items-center">
            <Avatar
              isBordered
              color="default"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <Avatar
              isBordered
              color="primary"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <Avatar
              isBordered
              color="secondary"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <Avatar
              isBordered
              color="success"
              src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
          </div>
          <FaChevronRight className="text-[8px] text-blue-500" />
        </nav>
      <div className="border-r-1 bg-[#FAFAFA] overflow-y-scroll scrollbar-thin max-h-screen">
        <div className="flex items-center justify-between pl-5 pr-7 pt-4">
          <h1 className="text-xl font-bold flex items-center gap-4">
            Messages{" "}
            <span className="text-[15px]  font-bold text-[#2695CF] mt-[4px]">
              48 new
            </span>
          </h1>
          <div className="relative p-1 rounded-md">
            <FaPen className="text-[#2695CF] text-[10px]" />
            <span className="absolute top-0 left-0 bottom-0 rounded-lg w-[2px] bg-[#2695CF]" />
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#2695CF]" />
            <span className="absolute top-0 left-0 right-1/2 h-[2px] bg-[#2695CF]" />
            <span className="absolute bottom-0 right-0 top-1/2 rounded-lg w-[2px] bg-[#2695CF]" />
          </div>
        </div>
        <div className="pl-5 pr-7 pt-4 pb-4 relative ">
          <input
            className="py-3 pl-10 pr-10 outline-none focus:ring-0 relative rounded-xl bg-[#FFFFFF] w-full"
            placeholder="Search"
            type="text"
          />
          <FaTimes className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm cursor-pointer" />
          <FaSearch className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="lg:pb-6">
          <div className="relative">
            <div className="pl-5 pr-7 flex items-center gap-3 ">
              <FaThumbtack className="text-gray-400" />
              <p className="pb-1 text-gray-500 text-opacity-50 text-sm font-medium">
                PIN CHATS
              </p>
            </div>
           <div className="flex gap-2 items-center pl-5 pr-7">
           <Avatar isBordered color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

              <div className="flex items-center">
                <div>
                  <h1 className="font-semibold">Md Rashed Biswas</h1>
                  <p className="text-[14px] text-[#0000007A] text-opacity-10">
                  hey
                  </p>
                </div>
                <div>
                  <span className="w-5 h-5 absolute bg-[#FE1E37] right-[34px] top-9 text-white transform -translate-y-1/2 flex items-center justify-center rounded-full">
                    <span className="text-[10px]">3</span>
                  </span>

                  <p className="text-[14px] absolute right-7 bottom-0">12:52</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mb-6 border-l-4 border-[#3DA0E1] bg-[#E9F1F7] py-2">
          <div className="relative">
            <div className="pl-5 pr-7 flex items-center gap-3 ">
            <div className="bg-gray-500 p-[2px] rounded-md">
            <FaHashtag className="text-white opacity-80" />
            </div>
              <p className="pb-1 text-gray-500 text-opacity-50 text-sm font-medium">
                GROUPS & CHANNELS
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center pl-5 pr-7 relative">
                <div className="flex gap-[1px] items-center">
                  <div>
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                      size="sm"
                    />
                  </div>
                  <div className="flex flex-col gap-[3px] justify-center">
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      className="w-6 h-6 text-tiny"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                      className="w-5 h-5 text-tiny"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <div>
                    <h1 className="font-semibold">Duxica Team</h1>
                    <p className="text-[14px] text-[#3DA0E1] font-medium">
                      22 members
                    </p>
                  </div>
                </div>
              </div>

              <div className=" flex items-center absolute gap-2 right-8">
                <p className="text-[#3DA0E1] ">@</p>
                <p className="w-5 h-5 bg-[#3DA0E1] right-[34px] top-10 text-white  flex items-center justify-center rounded-full">
                  <span className="text-[10px]">5</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pb-4">
          <div className="relative">
            <div className="pl-5 pr-7 flex items-center gap-3 ">
              <p className="pb-1 text-gray-500 text-opacity-50 text-sm font-medium">
               ALL MESSAGES
              </p>
            </div>
            <div className="flex gap-2 items-center lg:mb-6 pl-5 pr-7">
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />

              <div className="flex items-center">
                <div>
                  <h1 className="font-semibold">Md Naimur Rahman</h1>
                  <p className="text-[14px] text-[#0000007A] text-opacity-10">
                    Here will be last text
                  </p>
                </div>
                <div>
                  <span className="w-5 h-5 absolute bg-gray-400 right-[34px] top-[33px] text-white transform -translate-y-1/2 flex items-center justify-center rounded-full">
                    <span className="text-[10px]">2</span>
                  </span>

                  <p className="text-[14px] absolute right-7 bottom-0">12:52</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="lg:pb-4">
          <div className="relative">
            <div className="flex gap-2 items-center lg:mb-6 pl-5 pr-7">
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

              <div className="flex items-center">
                <div>
                  <h1 className="font-semibold">Ayon Biswas</h1>
                  <p className="text-[14px] text-[#0000007A] text-opacity-10">
                    Here will be last text
                  </p>
                </div>
                <div>
                  <span className="w-5 h-5 absolute bg-gray-400 right-[34px] top-3 text-white transform -translate-y-1/2 flex items-center justify-center rounded-full">
                    <span className="text-[10px]">2</span>
                  </span>

                  <p className="text-[14px] absolute right-7 bottom-0">12:52</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pb-4">
          <div className="relative">
            <div className="flex gap-2 items-center lg:mb-6 pl-5 pr-7">
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

              <div className="flex items-center">
                <div>
                  <h1 className="font-semibold">Yea Saleh</h1>
                  <p className="text-[14px] text-[#0000007A] text-opacity-10">
                    Here will be last text
                  </p>
                </div>
                <div>
                  <span className="w-5 h-5 absolute bg-gray-400 right-[34px] top-3 text-white transform -translate-y-1/2 flex items-center justify-center rounded-full">
                    <span className="text-[10px]">2</span>
                  </span>

                  <p className="text-[14px] absolute right-7 bottom-0">12:52</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:pb-4">
          <div className="relative">
            <div className="flex gap-2 items-center lg:mb-6 pl-5 pr-7">
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026702d" />

              <div className="flex items-center">
                <div>
                  <h1 className="font-semibold">Sharlo sein</h1>
                  <p className="text-[14px] text-[#0000007A] text-opacity-10">
                    Here will be last text
                  </p>
                </div>
                <div>
                  <span className="w-5 h-5 absolute bg-gray-400 right-[34px] top-3 text-white transform -translate-y-1/2 flex items-center justify-center rounded-full">
                    <span className="text-[10px]">2</span>
                  </span>

                  <p className="text-[14px] absolute right-7 bottom-0">12:52</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <div className="flex gap-2 items-center lg:mb-6 pl-5 pr-7">
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a04258114e29026708c" />

              <div className="flex items-center">
                <div>
                  <h1 className="font-semibold">Hridoy Mondol</h1>
                  <p className="text-[14px] text-[#0000007A] text-opacity-10">
                    Here will be last text
                  </p>
                </div>
                <div>
                  <span className="w-5 h-5 absolute bg-gray-400 right-[34px] top-3 text-white transform -translate-y-1/2 flex items-center justify-center rounded-full">
                    <span className="text-[10px]">2</span>
                  </span>

                  <p className="text-[14px] absolute right-7 bottom-0">12:52</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ChatList;
