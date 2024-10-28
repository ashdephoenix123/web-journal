import Image from "next/image";
import React from "react";
import lady from "../../../public/images/lady.jpeg";
import street from "../../../public/images/street.jpeg";
import personal from "../../../public/images/personal.jpeg";
import { libre } from "@/app/fonts/fonts";

const Hero = () => {
  return (
    <section className="mb-24">
      <h1
        className={`text-center lg:text-left text-5xl lg:text-6xl lg:w-1/2 mb-4 !leading-snug ${libre.className}`}
      >
        Transform <span className="bg-white text-black px-4">Ideas</span> into
        Impact
      </h1>
      <p className="text-lg text-center lg:text-left font-medium tracking-wide lg:w-1/2 mb-12">
        Empower your words and ignite change with expert blogging strategies -
        transform your passion into palpable influence today!
      </p>
      <div className="grid grid-col-2 lg:grid-col-3 gap-4 lg:gap-6">
        <div className="col-start-1 col-end-2">
          <Image src={lady} alt="home image" className="" />
        </div>
        <div className="col-start-2 col-end-3">
          <Image src={street} alt="home image" className="" />
        </div>
        <div className="hidden lg:block col-start-3 col-end-4">
          <Image src={personal} alt="home image" className="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
