import React, { useEffect, useRef, useState } from "react";
import { capitalize, textToUrl } from "@/utils/helpers";
import Link from "next/link";
import { motion } from "framer-motion";

const CustomDropDown = ({ item }) => {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const enter = () => setShow(true);

  useEffect(() => {
    document.addEventListener("mouseover", handleHoverOutside);
    return () => {
      document.removeEventListener("mouseleave", handleHoverOutside);
    };
  }, []);

  const handleHoverOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  return (
    <div className="relative">
      <div className="cursor-pointer z-50" onMouseEnter={enter}>
        {capitalize(item.title)}
      </div>
      {show && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween" }}
          id="dropdown"
          ref={ref}
          className={`z-10 pt-8 absolute top-0 -translate-x-1/2 -left-[75%] bg-transparent divide-y divide-gray-100 shadow w-44 bg-opacity-90`}
        >
          <ul
            className="py-3 text-sm text-white rounded-xl bg-black"
            aria-labelledby="dropdownButton"
          >
            {item.subLinks.map((subLink) => (
              <li key={subLink}>
                <Link href={textToUrl(subLink)} className="block px-4 py-2">
                  {capitalize(subLink)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default CustomDropDown;
