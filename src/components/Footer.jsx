import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerSections } from "@/database/content";

const Footer = () => {
  return (
    <>
      <div
        className={`bg-[#0F0E0E]  flex justify-center flex-col px-5  md:px-[10%] items-center`}
      >
        <div className="grid grid-cols-4 gap-5 md:gap-12 md:grid-cols-9 w-[100%]  border-t border-b py-24 border-[#878A944D] border-opacity-30">
          <div className="md:col-span-3 col-span-4">
            <div className="h-[32px] relative w-[168px]">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                alt="kd"
                src={"/images/main-logo.png"}
              />
            </div>
            <p className="pt-5 font-normal md:text-[1rem] pr-3 text-grey-xLight">
              Deepspatial is an outcome based artificial intelligence company,
              enabling organizations to enhance their decision-making
              capabilities by leveraging the power of data and AI.
            </p>
            <div className="w-max md:gap-3 gap-2 text-3xl md:text-[2rem]   mt-6 flex relative justify-between">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/company/deepspatial/"}
              >
                <i class="inline-block   bx bxl-linkedin-square "></i>
              </Link>
              <Link target="_blank" href={"https://x.com/deepspatialai"}>
                <i class="inline-block  bx bxl-twitter"></i>
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.instagram.com/deepspatial/?igshid=YmMyMTA2M2Y%3D"
                }
              >
                <i class="inline-block   bx bxl-instagram"></i>
              </Link>
              <Link
                target="_blank"
                href={"https://www.facebook.com/Deepspatial"}
              >
                <i class="inline-block  bx bxl-facebook-square"></i>
              </Link>
            </div>
          </div>
          <div className="col-span-2 flex flex-col  items-start md:pl-3">
            <div className="flex flex-col text-start">
              <h4 className="pb-3 font-medium text-[1.4rem]">
                {footerSections[0].label}
              </h4>
              {footerSections[0].links.map((link) => (
                <Link
                  className="pb-3 font-normal text-[1rem] text-grey-xLight"
                  href={link.href}
                  key={link.id}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mt-5">
              <h4 className="pb-3 font-medium text-[18px]">
                {footerSections[3].label}
              </h4>
              {footerSections[3].links.map((link) => (
                <Link
                  className="pb-3 font-normal text-[16px] text-grey-xLight"
                  href={link.href}
                  key={link.id}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2  flex flex-col items-start md:pl-4">
            <div className="flex flex-col">
              <h4 className="pb-3 font-medium text-[18px]">
                {footerSections[1].label}
              </h4>
              {footerSections[1].links.map((link) => (
                <Link
                  className="pb-3 font-normal text-[16px] text-grey-xLight"
                  href={link.href}
                  key={link.id}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mt-5">
              <h4 className="pb-3 font-medium text-[18px]">
                {footerSections[4].label}
              </h4>
              {footerSections[4].links.map((link) => (
                <Link
                  className="pb-3 font-normal text-[16px] text-grey-xLight"
                  href={link.href}
                  key={link.id}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mt-5">
              <h4 className="pb-3 font-medium text-[18px]">
                {footerSections[5].label}
              </h4>
              {footerSections[5].links.map((link) => (
                <Link
                  className="pb-3 font-normal text-[16px] text-grey-xLight"
                  href={link.href}
                  key={link.id}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2   flex flex-col items-start">
            <div className="flex flex-col">
              <h4 className="pb-3 font-medium text-[18px]">
                {footerSections[2].label}
              </h4>
              {footerSections[2].links.map((link) => (
                <Link
                  className="pb-3 font-normal text-[16px] text-grey-xLight"
                  href={link.href}
                  key={link.id}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col xl:pr-10 max-w-[100%]  mt-5">
              <h4 className="pb-3 font-medium text-[18px]">
                {footerSections[6].label}
              </h4>
              {footerSections[6].links.map((link) => (
                <Link
                  className="pb-3 font-normal text-[16px] text-grey-xLight"
                  key={link.id}
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="text-white mt-5 text-[14px] pt-3 pb-20  md:items-center flex flex-col md:flex-row w-[100%] ">
          <div className="flex  md:justify-center">
            <div className="relative  size-4">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="z-50"
                alt="alt"
                src={"/images/indianFlag.png"}
                fill
              />
            </div>
            <h3 className="text-grey-xLight pl-3">India</h3>
          </div>
          <h3 className="text-grey-xLight  md:my-0 my-5 md:ml-auto">
            Copyright © 2024 Deepspatial. All Rights Reserved
          </h3>
        </div>
      </div>
    </>
  );
};
export default Footer;
