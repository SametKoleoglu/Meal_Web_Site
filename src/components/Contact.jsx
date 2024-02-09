import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="h-[1000px]">
      <div className="lg:bg-banner bg-cover bg-center bg-fixed lg:h-[490px] h-[650px] lg:px-16 p-5">
        <div className="lg:mx-40 lg:my-40 flex flex-col items-center justify-center bg-white rounded-[50px] py-2">
          <h2 className="title text-2xl mt-5 mb-14">Contact Us</h2>
          <form
            action=""
            className="flex flex-col gap-2 lg:w-full lg:px-40 px-[20px]"
          >
            <div className="lg:flex gap-4">
              <input type="text" placeholder="Enter u name" />
              <input type="email" placeholder="Enter u email" />
            </div>
            <div className="lg:flex gap-4">
              <input type="number" placeholder="Enter u number" />
              <input type="text" placeholder="Enter u address" />
            </div>
            <textarea
              className="w-full my-2 rounded-lg p-4 border-2 border-gray-200 text-xl text-slate-400 "
              id=""
              placeholder="Write U Message..."
              cols="30"
              rows="10"
            ></textarea>
            <div className="flex justify-center">
              <button className="bg-yellow-600 lg:w-1/3 m-0">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
