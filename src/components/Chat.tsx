import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Image } from "antd";
type chatpros = {
  id: number;
  text: string;
  image: string;
  time: number;
};
const Chat = ({ id, image, text, time }: chatpros) => {
  return (
    <>
      {id == 1 ? (
        <div className="flex max-w-[60%] gap-2 self-end p-1">
          <div className="rounded-bl-md rounded-br-md rounded-tl-md bg-blue-300 p-1 text-black">
            {image && <LazyLoadImage className="object-cover" src={image} />}
            {text}
          </div>
        </div>
      ) : (
        <div className="flex max-w-[60%] items-start gap-2 p-1">
          <LazyLoadImage
            className="size-[30px] shrink-0 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtwe4glQ1pivIIdVNAKMaM_VqeZdNdidHwA&s"
          />
          <div className="rounded-bl-md rounded-br-md rounded-tr-md bg-pink-300 p-1 text-black">
            {image && <Image src={image} />}
            {text}
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
