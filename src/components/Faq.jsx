import React from "react";
import Question from "./Question";
import { img6 } from "../assets/images";

const FAQ = [
  {
    id: 1,
    title: "What is This ?",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente optio nulla dignissimos!",
  },
  {
    id: 1,
    title: "What is This ?",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente optio nulla dignissimos!",
  },
  {
    id: 1,
    title: "What is This ?",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente optio nulla dignissimos!",
  },
  {
    id: 1,
    title: "What is This ?",
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente optio nulla dignissimos!",
  },
];

const Faq = () => {
  return (
    <div id="Faq" className="flex flex-col items-center py-20 lg:mx-40 m-[20px]">
      <h2 className="title text-3xl mb-20">
        {"frequently asked questions".toUpperCase()}
      </h2>
      <div className="flex lg:flex-row flex-col gap-20 justify-center items-center">
        <div className="flex-1">
          <img src={img6} alt="" className="rounded-3xl" />
        </div>
        <div className="flex-1">
          {FAQ.map((data) => (
            <Question key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
