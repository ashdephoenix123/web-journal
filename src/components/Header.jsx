import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { headerContent2 } from "@/database/content";
import CustomDropDown from "./CustomDropDown";
import { capitalize, textToUrl } from "@/utils/helpers";
import MobileNavigation from "./MobileNavigation";

const Header = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`md:px-8 absolute text-sm lg:flex hidden z-50 w-full text-white header -translate-x-1/2 ${className}`}
      >
        <Link href="/" className="h-20 relative min-w-[10rem]">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            fill
            src={"/images/company-logo-transparent.png"}
            alt="alt"
          />
        </Link>
        <div className="flex-grow flex-wrap pr-16 text-grey-light flex justify-center items-center gap-12">
          {headerContent2.map((item, index) => (
            <React.Fragment key={index}>
              {item.subLinks === null ? (
                <Link href={`/${textToUrl(item.title)}`} className="z-50">
                  {capitalize(item.title)}
                </Link>
              ) : (
                <CustomDropDown item={item} />
              )}
            </React.Fragment>
          ))}
        </div>
        <Link href="/contact-us" className="text-grey-light self-center ms-6">
          Contact us
        </Link>{" "}
      </motion.div>
      <div className="flex justify-between lg:hidden absolute top-0 left-0 z-10 w-full px-5 py-2">
        <Link href="/" className="h-[80px] relative min-w-[4rem]">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            fill
            src={"/images/main-logo-transparent.png"}
            alt="alt"
          />
        </Link>
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain self-center"
          width={32}
          height={32}
          src={"/images/hamburger-icon.png"}
          alt="alt"
          onClick={() => setShowMobileNav((prev) => !prev)}
        />
      </div>
      <MobileNavigation
        className={showMobileNav ? "block" : "hidden"}
        closeNav={() => setShowMobileNav((prev) => !prev)}
      />
    </>
  );
};

export default Header;
