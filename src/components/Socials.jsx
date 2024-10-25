import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cta } from "@/utils/helpers";

const Socials = ({ className = "" }) => {
  return (
    <div className={`flex gap-4 md:ms-auto items-center ${className}`}>
      {socials.map((social) => (
        <Link
          href={cta(social.id, "title", "url")}
          key={social.id}
          target="_blank"
        >
          <Image
            className="cursor-pointer"
            key={social.id}
            src={social.src}
            alt={social.alt}
            width={24}
            height={24}
          />
        </Link>
      ))}
    </div>
  );
};

export default Socials;

const socials = [
  { id: "facebook", src: "/images/Facebook.svg", alt: "facebook-icon" },
  { id: "instagram", src: "/images/instagram.svg", alt: "linkedin-icon" },
];
