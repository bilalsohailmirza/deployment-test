import Link from "next/link";
import React from "react";

const Request = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between space-x-[10%] p-[5%] my-[5%] bg-[#262626] text-white">
      <div className="text-[30px] md:text-[50px] font-bold">
        <h1>Unlock the Future of Intelligent Knowledge Management</h1>
      </div>
      <div className="flex-col space-y-[15%] md:space-y-[5%] my-[5%]">
        <p className="text-lg md:text-2xl font-medium p-0 m-0">
          Stop leaving valuable insights untapped. Let Luminary AI Consulting
          build a custom RAG solution that empowers your organization to make
          smarter decisions, drive innovation, and achieve more.
        </p>
        <Link href="#contact">
        <button className="text-sm md:text-lg text-white font-bold bg-transparent border-2 border-[#E6C773] px-2 md:px-8 py-4 rounded-lg hover:bg-[#E6C773] hover:transition duration-300 ease-in my-[5%]">
          Request a Personalized Consultation
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Request;
