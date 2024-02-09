import React from "react";
import { GiHotMeal } from "react-icons/gi";

const chooseUs = [
  {
    id: 1,
    icon: <GiHotMeal />,
    title: "Delicious World Foods",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita.",
  },
  {
    id: 2,
    icon: <GiHotMeal />,
    title: "Delicious World Foods",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita.",
  },
  {
    id: 3,
    icon: <GiHotMeal />,
    title: "Delicious World Foods",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita.",
  },
];

const ChooseUs = () => {
  return (
    <div
      id="chooseUs"
      className="flex flex-col lg:mx-40 items-center gap-5 mx-[20px]"
    >
      <h2 className="title my-16 mb-20">Why Choose Us</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] text-center ">
        {chooseUs.map((data) => (
          <div
            key={data.id}
            className="shadow-lg rounded-3xl p-6 flex flex-col items-center"
          >
            <div className="text-4xl font-semibold p-2 text-white rounded-full bg-yellow-600">
              {data.icon}
            </div>
            <h2 className="my-3">{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
