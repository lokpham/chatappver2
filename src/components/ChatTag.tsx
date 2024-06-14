import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ChatTag = () => {
  const chatRef = React.useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className="flex select-none items-center gap-2 p-2 hover:bg-fuchsia-600">
      <LazyLoadImage
        className="size-[50px] shrink-0 rounded-full object-cover"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtwe4glQ1pivIIdVNAKMaM_VqeZdNdidHwA&s"
      />

      <div className="grow overflow-hidden text-white">
        <p className="font-semibold">user</p>
        <p className="truncate">
          xin chao ban sa dasd asd asd asd asdsd asd asd sd{" "}
        </p>
      </div>
    </div>
  );
};

export default ChatTag;
