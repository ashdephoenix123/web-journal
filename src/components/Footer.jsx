import React from "react";
import Image from "next/image";
import Socials from "./Socials";
import { libre } from "@/app/fonts/fonts";

const Footer = ({ className }) => {
  return (
    <>
      <div
        className={`bg-[#0F0E0E]  flex justify-center flex-col px-5  md:px-[10%] items-center ${className}`}
      >
        <div className="lg:grid grid-cols-4 gap-5 md:gap-12 md:grid-cols-9 w-[100%]  border-t border-b py-24 border-[#878A944D] border-opacity-30">
          <div className="md:col-span-3 col-span-4">
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              width={64}
              height={64}
              alt="footer company logo"
              src={"/images/main-logo-transparent.png"}
            />
            <p className="pt-5 font-normal md:text-[1rem] pr-3 text-grey-xLight">
              Stay informed with{" "}
              <span className="font-bold tracking-wide">Web Journal</span> -
              Delivering fresh, reliable news and insights on the topics that
              matter most, all in one place.
            </p>
            <Socials className="mt-6" />
          </div>
          <div className="col-start-7 col-span-4 items-end mt-12 lg:mt-auto">
            <h4
              className={`text-xl tracking-wide text-center lg:text-right mb-3 ${libre.className}`}
            >
              Subscribe to our NewsLetter
            </h4>
            <form
              action="#"
              className="inline-flex gap-2 bg-white bg-opacity-15 px-4 py-4 justify-center w-full"
            >
              <input
                type="text"
                name=""
                id=""
                className="outline-none bg-transparent text-sm tracking-wide flex-1"
              />
              <button className="">
                <Image
                  src="/images/send-icon.svg"
                  alt="send icon"
                  width={20}
                  height={20}
                  className=""
                />
              </button>
            </form>
            <div className="mt-12 lg:text-right text-sm text-center">
              <p className="italic font-semibold mb-3">Contact Address :</p>
              <p className="text-xs">
                Checkpost, Siliguri <br />
                West Bengal - 734003 <br />
                9883475729 <br />
                akashsarki12345@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="text-white mt-5 text-[14px] pt-3 pb-20  lg:items-center flex flex-col lg:flex-row w-[100%] text-xs text-center">
          {/* Will add localization */}
          {/* <p>ss</p> */}
          <h3 className="text-grey-xLight lg:my-0 my-5 lg:ml-auto">
            Copyright © {new Date().getFullYear()} Web Journal. All Rights
            Reserved
          </h3>
        </div>
      </div>
    </>
  );
};
export default Footer;
