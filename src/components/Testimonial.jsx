import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img5 } from "../assets/images";

const testimonials = [
  {
    id: 1,
    title: "What is this",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: img5,
  },
  {
    id: 2,
    title: "What is this",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: img5,
  },
  {
    id: 3,
    title: "What is this",
    details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    img: img5,
  },
];

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplayspeed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="lg:px-40 my-20 px-[20px]">
      <div className="flex justify-center">
        <h2 className="text-3xl title mb-20">Testimonials</h2>
      </div>
      <div>
        <Slider {...settings}>
          {testimonials.map((testimonial) => {
            return (
              <div key={testimonial.id}>
                <div className="flex flex-col justify-center items-center gap-6 -z-10">
                  <h2 className="">{testimonial.title}</h2>
                  <p className="text-center">{testimonial.details}</p>
                  <img
                    src={testimonial.img}
                    alt=""
                    className="w-20 h-20 rounded-full p-[2px] border border-yellow-600"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
