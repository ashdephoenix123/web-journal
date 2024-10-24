import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ title, description, img }) => {
  return (
    <Link href="/" className="w-full bg-black bg-opacity-90 group">
      <div className="relative w-full h-52  overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-6 min-h-72">
        <h4 className="font-bold text-xl leading-tight mb-4">{title}</h4>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
