
import ChatArea from "@/components/ChatArea";
import ChatList from "@/components/SideNavbars/ChatList";
import LeftInfoNav from "@/components/SideNavbars/LeftInfoNav";
import RightNav from "@/components/SideNavbars/RightNav";

export default function Home() {
 
  return (
    <div className="flex">
    
        <div className="w-1/12 h-screen">
          <LeftInfoNav />
        </div>

        <div className="w-3/12 h-screen">
          <ChatList />
        </div>
   

      <div className="w-5/12 flex-grow-1 h-screen">
      <ChatArea />
      </div>

      <div className="w-3/12 h-screen ">
        <RightNav />
      </div>
    </div>
  );
}
