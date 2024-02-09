import React from "react";

const SingleService = (data) => {
  const { title, img, details } = data.data;

  return (
    <div className="hover:shadow-lg transition-all duration-700 lg:p-5 p-[20px] w-[100%] rounded-3xl">
      <div className="overflow-hidden rounded-3xl">
        <img
          className="md:h-full lg:h-64 hover:scale-125 hover:opacity-75 transition-all duration-700"
          src={img}
          alt=""
        />
      </div>
      <h2 className="text-xl font-semibold my-4 ">{title}</h2>
      <p>{details}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default SingleService;
