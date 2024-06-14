import React, { useContext, useEffect } from "react";
import SlideBar from "../components/SlideBar";
import ChatWrapper from "../components/ChatWrapper";
import { Context } from "../config/AuthProvider";
import { contextType } from "../config/AuthProvider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const context = useContext<contextType | null>(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!context?.user) {
      console.log("chua dang nhap");
      navigate("/login");
    }
  }, [context, navigate]);
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-mybackground bg-cover bg-no-repeat">
      <div className="flex h-[600px] w-[70%] bg-blue-600 bg-opacity-55 p-2 shadow-md">
        <SlideBar />
        <ChatWrapper />
      </div>
    </div>
  );
};

export default Home;
