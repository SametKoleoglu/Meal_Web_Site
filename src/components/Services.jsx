import React from "react";
import SingleService from "./SingleService";
import { img4 } from "../assets/images";

const services = [
  {
    id: 1,
    title: "food1",
    details: "food1",
    img: img4,
  },
  {
    id: 2,
    title: "food1",
    details: "food1",
    img: img4,
  },
  {
    id: 3,
    title: "food1",
    details: "food1",
    img: img4,
  },
];

const Services = () => {
  return (
    <div
      id="services"
      className="flex lg:mx-40 m-[20px] flex-col items-center py-20 "
    >
      <h2 className="text-4xl title mb-20">Our Services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] ">
        {services.map((data) => (
          <SingleService key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Services;
