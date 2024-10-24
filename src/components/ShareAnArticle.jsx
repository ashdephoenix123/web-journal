import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cta } from "@/utils/helpers";

const ShareAnArticle = () => {
  return (
    <div className="flex justify-between border-t border-opacity-30 border-white py-8 mt-12 text-sm text-text-grey-text">
      <span>Share this article</span>
      <div className="flex gap-4 md:ms-auto items-center">
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
    </div>
  );
};

export default ShareAnArticle;

const socials = [
  { id: "facebook", src: "/images/Facebook.svg", alt: "facebook-icon" },
  { id: "instagram", src: "/images/instagram.svg", alt: "linkedin-icon" },
];
