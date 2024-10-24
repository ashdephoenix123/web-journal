import Image from "next/image";
import React from "react";
import ArticleCard from "./ArticleCard";

const MoreArticles = () => {
  return (
    <div className="py-24 relative">
      <Image
        src="/images/background-1.jpg"
        alt=""
        fill
        className="-z-10 object-cover"
      />
      <h4 className="text-4xl text-center mb-6">Read More Articles</h4>
      <div className="max-w-screen-lg mx-auto flex flex-wrap">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default MoreArticles;

const articles = [
  {
    id: 1,
    title: "",
  },
];
