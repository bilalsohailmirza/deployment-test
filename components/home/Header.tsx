import Image from "next/image";
import headerBg from "@/public/header-background.png";
import Link from "next/link";
const Header = () => {
  return (
    <div
      className="bg-none md:bg-cover h-full flex-col justify-between py-8 additional"
      style={{
        backgroundImage: `url('/header-background.png')`,

        // maxWidth: '2160px',
      }}
    >
      <nav className="flex flex-col items-center lg:flex-row lg:justify-between mx-[5%]">
        <div className="flex lg:w-full">
          <Image
            src="/Logo.svg"
            width={1}
            height={1}
            alt="Luminary AI Logo"
            className="w-[40%] md:w-[60px]"
          />
          <div className="flex-col">
            <h1 className="uppercase text-4xl font-semibold text-white">
              Luminary
            </h1>
            <p className="text-xs text-transparent text-center tracking-[8px] uppercase bg-clip-text bg-gradient-to-r from-[#906226] to-[#F4EEB1]">
              AI Solutions
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-[45%] md:gap-[5%] my-[10%] md:my-[5%] lg:my-0">
          <Link href="/blog">
            <button className="text-lg text-white bg-[#E6C773] px-[45%] py-[10%] md:px-[5rem] md:py-[2%] rounded-md">
              Blog
            </button>
          </Link>
          <Link href="/chat">
            <button className="text-lg text-white bg-[#E6C773] px-[25%] py-[8%] md:px-[5rem] md:py-[2%] rounded-md">
              Demo
            </button>
          </Link>
        </div>
      </nav>
      <hr className="border-t-2 border-[#403F3F] my-[2%]" />
      <div className="flex flex-col justify-center items-center md:block md:my-[7rem] mx-auto md:mx-[5rem] w-full md:w-[70%] lg:w-[50%]">
        <div className="py-4">
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-white font-bold">
            Transform Your Data
            <br />
            into Intelligent Action
          </h1>
        </div>
        <div className="py-4 px-4 md:px-0 text-center md:text-left">
          <p className="text-lg md:text-2xl text-white">
            Unlock the hidden potential within your enterprise knowledge.
            Luminary AI Consulting builds custom Retrieval Augmented Generation
            (RAG) solutions, empowering your organisation to ask smarter
            questions and gain deeper insights, faster. Stop wasting valuable
            time searching – start acting on what you know.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <Link href="/chat" className="flex justify-center">
          <button className="text-sm md:text-lg text-white font-bold bg-[#E6C773] px-[5%] md:px-12 py-4 rounded-lg">
            RAG in Action
          </button>
          </Link>
          <Link href="#contact" className="flex justify-center">
          <button className="text-sm md:text-lg text-white font-bold bg-transparent border-2 border-[#E6C773] px-[5%] md:px-12 py-4 rounded-lg hover:bg-[#E6C773] hover:transition duration-300 ease-in scroll-smooth">
            Request <span className="hidden md:inline"> a Personalized </span>{" "}
            Consultation
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
