import Image from "next/image";
import shopIcon from "@/public/Shop.svg";
import phoneIcon from "@/public/phone-missed.svg";
import divertIcon from "@/public/diversion.svg";

const OfferSection = () => {
  return (
    <div className="flex-col p-[2rem] lg:p-[5rem] ">
      <div className="md:mx-[5rem] md:my-[2rem]">
        <h2 className="text-white text-xl md:text-4xl 2xl:text-6xl font-bold text-center">
          Drowning in Data, Starving for Insights?
        </h2>
      </div>
      <div className="my-[5%] lg:px-[8rem]">
        <p className="text-white text-md md:text-xl 2xl:text-2xl text-center">
          In today's fast-paced world, vast amounts of data can be overwhelming.
          Your organization possesses a wealth of knowledge, but accessing the
          *right* information at the *right* time can be a significant
          bottleneck. Valuable insights are often buried, leading to:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:m-[3rem] items-center lg:justify-center gap-5">
        <div className="w-full lg:w-[30%] flex-col p-4 border-[2px] border-[#E6C773] rounded-2xl bg-white bg-opacity-15 ">
          <div className="flex justify-center p-5 ">
            <Image
              src={shopIcon}
              width={72}
              height={72}
              alt="Missed opportunities icon"
            />
          </div>
          <div className="text-white text-center text-wrap">
            <h2 className="text-xl lg:text-2xl my-5 font-bold">
              Wasted Analyst Hours
            </h2>
            <p className="text-lg md:text-xl my-5">
              Teams spending countless hours searching for information.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[30%] flex-col p-4 border-[2px] border-[#E6C773] rounded-2xl bg-white bg-opacity-15 ">
          <div className="flex justify-center p-5 ">
            <Image
              src={phoneIcon}
              width={72}
              height={72}
              alt="Missed opportunities icon"
            />
          </div>
          <div className="text-white text-center text-wrap">
            <h2 className="text-xl md:text-2xl my-5 font-bold">
              Missed Opportunities
            </h2>
            <p className="text-lg md:text-xl my-5">
              Failing to identify crucial trends and connections.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[30%] flex-col p-4 border-[2px] border-[#E6C773] rounded-2xl bg-white bg-opacity-15 ">
          <div className="flex justify-center p-5 ">
            <Image
              src={divertIcon}
              width={72}
              height={72}
              alt="Missed opportunities icon"
            />
          </div>
          <div className="text-white text-center text-wrap">
            <h2 className="text-xl md:text-2xl my-5 font-bold">
              Slower Decision-Making
            </h2>
            <p className="text-lg md:text-xl my-5">
              Delays caused by inefficient knowledge retrieval.
            </p>
          </div>
        </div>
      </div>

      <div className="text-white lg:text-center text-wrap text-lg md:text-xl my-[5%] lg:px-16 lg:mx-16">
        <p className="font-semibold">
          Luminary AI Consulting offers a solution.** We specialize in building
          custom RAG systems that connect your Large Language Models (LLMs)
          directly to your knowledge base. This empowers your team to ask
          natural language questions and receive accurate, contextually relevant
          answers, grounded in your own data.
        </p>
      </div>
    </div>
  );
};

export default OfferSection;
