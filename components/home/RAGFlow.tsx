import Image from "next/image";
import React from "react";
import ragImage from "@/public/rag-flow.png";

const RAGFlow = () => {
  return (
    <div className="flex flex-col justify-center space-y-[5%] md:space-y-[2%]">
      <div className="text-white text-center space-y-[5%]">
        <h1 className="text-2xl md:text-[2rem] font-bold">
          Powering Intelligent Insights: Our RAG Flow
        </h1>
      </div>
      <div className="text-white text-center md:mx-[15%]">
        <p className="text-md md:text-xl">
          Our custom RAG solutions seamlessly integrate your data with powerful
          LLMs through a carefully orchestrated process:
        </p>
      </div>

      <div className="flex justify-center w-full">
        <Image
          src={ragImage}
          width={1}
          height={1}
          alt="RAG Flow"
          className="w-[90%] md:w-[70%]"
        />
      </div>
    </div>
  );
};

export default RAGFlow;
