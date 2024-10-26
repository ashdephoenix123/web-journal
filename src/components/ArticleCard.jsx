import { libre } from "@/pages/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ title, description, img, href, categories }) => {
  return (
    <Link href={href} className="w-full bg-black bg-opacity-90 group">
      <div className="relative w-full h-52  overflow-hidden">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="p-6 min-h-72 bg-black bg-opacity-80">
        {categories && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <span
                key={category.title}
                style={{ backgroundColor: category.color }}
                className="px-2 py-1 rounded-sm inline-block text-xs font-semibold tracking-wide"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}
        <h4
          className={`font-bold text-lg leading-wide mb-4 ${libre.className}`}
        >
          {title}
        </h4>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ArticleCard;
