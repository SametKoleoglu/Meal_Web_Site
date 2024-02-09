import React, { useState } from "react";
import { Link } from "react-scroll";

const navData = [
  [1, "About", "about"],
  [2, "Services", "services"],
  [3, "Testimonials", "testimonials"],
  [4, "Choose Us", "chooseUs"],
  [5, "FAQ", "Faq"],
  [6, "Contact", "contact"],
];

const Header = () => {
  const [click, setClick] = useState(false);

  const link = navData.map(([id, title, url]) => (
    <li className="navlink" key={id}>
      <Link spy={true} smooth={true} to={url}>
        {title}
      </Link>
    </li>
  ));

  return (
    <div className="bg-banner bg-cover bg-center lg:h-[490px] px-16 py-5 text-white">
      <nav className="flex justify-between text-white pb-8">
        <h2 className="text-2xl">HEADER</h2>
        <ul className="lg:flex gap-6 text-[18px] hidden">{link}</ul>

        {/* mobile */}

        <div onClick={() => setClick(!click)} className="lg:hidden">
          <div className="flex flex-col gap-2 absolute top-5 z-50">
            <div
              className={`${click && "absolute top-1 rotate-45 "} menubar w-6`}
            ></div>
            <div className={`${click && "hidden"} menubar w-5`}></div>
            <div
              className={`${click && "absolute top-1 -rotate-45 "} menubar w-6`}
            ></div>
          </div>
          <div className={`${click ? "w-70% visible" : "invisible"}`}>
            <ul
              className={`flex flex-col gap-6 text-[18px] bg-primary transition-all h-[100vh] ${
                click ? "w-[80%] translate-x-0" : "translate-x-full"
              }  duration-700 top-0 bottom-0 right-0 z-20 fixed p-20`}
            >
              {link}
            </ul>
          </div>
        </div>
      </nav>

      <div className="flex flex-col text-white items-center h-full">
        <h2 className="text-4xl mb-10">Welcome to our website</h2>
        <p className="text-center text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          cumque!
        </p>
        <button>Explore</button>
      </div>
    </div>
  );
};

export default Header;
