import React from "react";
import ragImage from "@/public/RAG.png";
import Image from "next/image";
import Link from "next/link";
const Explore = () => {
  return (
    <div className="xs:flex-col lg:flex justify-center gap-24 m-[5%]">
      <div className="lg:w-[50%]">
        <iframe src="https://www.youtube.com/embed/QOHUGrOy55I" allowFullScreen className="w-full aspect-video"></iframe>
      </div>

      <div className="lg:w-[60%] flex-col space-y-[3rem] my-[10%] md:my-0 text-white">
        <h1 className="text-3xl md:text-6xl font-bold">
          Experience the Future of Knowledge Retrieval
        </h1>
        <p className=" text-lg md:text-[25px]">
          Don't just take our word for it. Explore our interactive demo and
          witness firsthand how Luminary AI Consulting transforms raw data into
          actionable intelligence across various industries. See how easily you
          can ask complex questions and receive insightful, data-driven answers.
        </p>
        <Link href="/chat">
        <button className="text-lg text-[#E6C773] font-bold bg-transparent border-2 border-[#E6C773] px-[10%] my-[5%] py-4 rounded-lg hover:bg-[#E6C773] hover:text-white hover:transition duration-300 ease-in">
          Explore
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Explore;
