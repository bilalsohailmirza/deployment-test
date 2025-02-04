import React from "react";

const Contact = () => {
  const actionURL = process.env.FORMSPREE_URL;

  return (
    <div
      className="text-white bg-center md:bg-contain md:bg-no-repeat py-[2%] my-[5%]"
      id="contact"
      style={{
        backgroundImage: `url('/contact-bg.svg')`,
      }}
    >
      <div className="">
        <h1 className="text-[2rem] md:text-[3rem] font-bold text-center">
          Let's Get in Touch
        </h1>
      </div>
      <form action={actionURL} method="POST">
        <div className="grid grid-cols-1 md:grid-cols-3 md:space-x-5 space-y-[2%] p-[5%]">
          <input
            type="text"
            name="Name"
            placeholder="YOUR NAME"
            className="bg-white bg-opacity-15 p-4 rounded-2xl"
          />
          <input
            type="email"
            name="Email"
            placeholder="YOUR EMAIL"
            className="bg-white bg-opacity-15 p-4 rounded-2xl"
          />
          <input
            type="text"
            name="Industry"
            placeholder="YOUR INDUSTRY"
            className="bg-white bg-opacity-15 p-4 rounded-2xl"
          />
        </div>
        <div className="flex justify-center px-[5%]">
          <textarea
            id=""
            cols={120}
            rows={4}
            name="Description"
            placeholder="BRIEFLY DESCRIBE YOUR PROJECT"
            className="p-5 bg-white bg-opacity-15 mx-auto rounded-2xl"
          ></textarea>
        </div>
        <div className="flex justify-center mt-[2%]">
          <button
            type="submit"
            className="text-sm md:text-lg text-white font-bold bg-transparent border-2 border-[#E6C773] px-[5%] py-4 rounded-lg hover:bg-[#E6C773] hover:transition duration-300 ease-in"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
