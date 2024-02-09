import React from "react";
import { img1, img2, img3 } from "../assets/images";

const About = () => {
  return (
    <div id="about"  className="lg:flex gap-20 items-center lg:mx-40 my-20 m-[20px]">
      <div className="flex gap-4">
        <div>
          <img src={img1} className="h-[300px] w-56 rounded-2xl" alt="" />
        </div>
        <div>
          <img src={img3} className="h-[300px] w-56 rounded-2xl" alt="" />
        </div>
      </div>
      <div className="lg:flex-1 w-full mx-auto justify-center">
        <h2 className="title my-[20px]">About Us</h2>
        <p className="mb-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
          beatae?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
          beatae?
        </p>
        <button>About Us</button>
      </div>
    </div>
  );
};

export default About;
