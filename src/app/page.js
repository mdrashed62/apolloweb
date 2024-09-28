"use client";

import ChatArea from "@/components/ChatArea";
import ChatList from "@/components/SideNavbars/ChatList";
import LeftInfoNav from "@/components/SideNavbars/LeftInfoNav";
import RightNav from "@/components/SideNavbars/RightNav";
import { useState } from "react";
import chatData from "../../data.json";

export default function Home() {
  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex container mx-auto]">
      <div className="w-[35%] flex">
        <div className="w-1/4">
          <LeftInfoNav />
        </div>

        <div className="w-3/4">
          <ChatList chats={chatData.chats} onChatClick={handleChatClick} />
        </div>
      </div>

      <div className="w-[45%]">
      <ChatArea chat={selectedChat} />
      </div>

      <div className="w-[20%]">
        <RightNav />
      </div>
    </div>
  );
}
