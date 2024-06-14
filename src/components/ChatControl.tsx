import React, { useState } from "react";
import { FaImage, FaMicrophone, FaSmile } from "react-icons/fa";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
const ChatControl = () => {
  const chatRef = React.useRef<HTMLTextAreaElement | null>(null);
  const [isEmojiOpen, setEmojiOpen] = useState<boolean>(false);
  const [chatValue, setChatValue] = useState<string>("");
  const handleOpenEmoji = (): void => {
    if (isEmojiOpen) {
      setEmojiOpen(false);
    } else {
      setEmojiOpen(true);
    }
  };
  const handleChat = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setChatValue(e.target.value);
    resizeChat();
  };
  const resizeChat = (): void => {
    if (chatRef.current != null) {
      if (chatRef.current.scrollHeight > 115) {
        chatRef.current.style.height = `115px`;
      } else {
        chatRef.current.style.height = "auto";

        chatRef.current.style.height = `${chatRef.current.scrollHeight}px`;
      }
    }
  };
  const handleEmojiClick = (
    emojiData: EmojiClickData,
    event: MouseEvent,
  ): void => {
    const curStart: number = chatRef.current?.selectionStart || 0;

    setChatValue((pre: string): string => {
      return pre.slice(0, curStart) + emojiData.emoji + pre.slice(curStart);
    });
    setTimeout(() => {
      chatRef.current?.setSelectionRange(
        curStart + emojiData.emoji.length,
        curStart + emojiData.emoji.length,
      );
      resizeChat();
    }, 10);
  };
  return (
    <div className="flex items-center gap-2 p-1 text-black">
      <FaImage className="cursor-pointer text-lg hover:text-opacity-60" />
      <FaMicrophone className="cursor-pointer text-lg hover:text-opacity-60" />
      <textarea
        value={chatValue}
        onInput={handleChat}
        ref={chatRef}
        rows={1}
        className="grow resize-none rounded-lg p-1 outline-none"
      ></textarea>
      <div className="relative">
        <FaSmile
          onClick={handleOpenEmoji}
          className="cursor-pointer text-lg hover:text-opacity-60"
        />
        {isEmojiOpen && (
          <div className="absolute bottom-8 right-0">
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              searchDisabled={true}
            />
          </div>
        )}
      </div>
      <button className="rounded-sm bg-blue-800 p-2 text-white">SEND</button>
    </div>
  );
};

export default ChatControl;
