import { capitalize, textToUrl, urlToText } from "@/utils/helpers";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DropDownMob = ({ list, closeNav }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={`mob-dropDown`}>
      <div className="flex justify-between items-center" onClick={toggle}>
        <span className="">{capitalize(urlToText(list.title))}</span>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: open ? "180deg" : "0deg" }}
        >
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={"/images/chevron.svg"}
            alt="chevron"
            width={14}
            height={8}
          />
        </motion.div>
      </div>
      <ul
        className={`sub-options relative flex flex-col gap-8 transition-all
            ${open ? "h-full my-8" : "h-0 hidden"}
        `}
      >
        {list.subLinks.map((subLink) => (
          <li
            key={subLink}
            onClick={closeNav}
            className="ps-4 sub-option text-base"
          >
            <Link href={`/${textToUrl(subLink)}`}>
              {capitalize(urlToText(subLink))}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMob;
