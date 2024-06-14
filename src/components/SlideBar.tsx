import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaSearch } from "react-icons/fa";
import ListChatTag from "./ListChatTag";
const SlideBar = () => {
  return (
    <div className="flex h-full w-[300px] flex-col pr-2">
      <div className="w-full py-2">
        <div className="mx-auto size-[60px]">
          <LazyLoadImage
            className="h-full w-full rounded-full text-center"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUem1ykMgZrm7P2GNRhID1fnipTWf1kQ1dA&s"
            }
            effect="black-and-white"
            alt={"avatar"} // use normal <img> attributes as props
          />
        </div>

        <p className="my-2 text-center text-2xl text-white">PhamThanhLoc</p>
        <div className="flex items-center gap-2 bg-white p-1 text-[1rem]">
          <input
            placeholder="Nhập tên người bạn..."
            className="grow rounded-md bg-transparent outline-none"
            type="text"
          />
          <FaSearch className="text-[1.6rem] text-blue-900" />
        </div>
      </div>

      <ListChatTag />
    </div>
  );
};

export default SlideBar;
