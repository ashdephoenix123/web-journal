import { headerContent2 } from "@/database/content";
import { capitalize, urlToText } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DropDownMob from "./DropDownMob";

const MobileNavigation = ({ className, closeNav }) => {
  return (
    <div
      className={`mobile-nav-bottom fixed overflow-y-scroll inset-0 bg-black z-[9999999] transition-all ${className}`}
    >
      <div className="h-[80px] mb-6 relative flex justify-between items-center px-5">
        <Link
          href="/"
          onClick={closeNav}
          className="h-16 relative w-[4rem] block"
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            fill
            src={"/images/main-logo.png"}
            alt="alt"
          />
        </Link>
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={"/images/close.png"}
          alt="close-button"
          width={24}
          height={24}
          className=" cursor-pointer z-50 closeBtn"
          onClick={closeNav}
        />
      </div>
      <ul>
        {headerContent2.map((list) => (
          <li
            key={list.title}
            className="mobile-nav-bottom-link text-grey-light text-lg font-medium py-4 mx-6"
          >
            {list.subLinks ? (
              <DropDownMob list={list} closeNav={closeNav} />
            ) : (
              <Link href={`/${list.title}`} onClick={closeNav}>
                <span className="">{capitalize(urlToText(list.title))}</span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavigation;
