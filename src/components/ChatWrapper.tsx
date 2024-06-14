import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ChatControl from "./ChatControl";
import ChatBox from "./ChatBox";

const ChatWrapper = () => {
  return (
    <div className="flex grow flex-col bg-white bg-opacity-60 text-white">
      <div className="flex items-center gap-2 bg-blue-900 p-2">
        <LazyLoadImage
          className="size-[50px] shrink-0 rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtwe4glQ1pivIIdVNAKMaM_VqeZdNdidHwA&s"
        />
        <p className="text-2xl">User</p>
      </div>
      <div className="grow overflow-y-auto">
        <ChatBox />
      </div>
      <ChatControl />
    </div>
  );
};

export default ChatWrapper;
