import Image from "next/image";
import React from "react";
import ArticleCard from "./ArticleCard";
import { libre } from "@/pages/fonts/fonts";

const MoreArticles = () => {
  return (
    <div className="py-24 relative">
      <Image
        src="/images/background-1.jpg"
        alt=""
        fill
        className="-z-10 object-cover"
      />
      <h4 className={`text-4xl text-center mb-12 ${libre.className}`}>
        Read More Articles
      </h4>
      <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-4">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.content}
            img={article.image}
          />
        ))}
      </div>
      <button className="bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-4 flex mx-auto mt-12 py-2 rounded-lg font-bold transition-all duration-200">
        View all articles
      </button>
    </div>
  );
};

export default MoreArticles;

const articles = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, unde!",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo exercitationem incidunt delectus sapiente animi minus aspernatur similique necessitatibus quibusdam laudantium. ",
    image: {
      src: "/images/user.jpeg",
      alt: "news 1",
    },
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    image: {
      src: "/images/background-1.jpg",
      alt: "news 1",
    },
  },
  {
    id: 3,
    title: "Lorem ipsum dolor dolor dolor dolor dolor sit",
    content:
      "Lorem ipsum dolor sit amet, cotur dolor sit amet, consectetur dolor sit amet, consr adipisicing elit.",
    image: {
      src: "/images/background-1.jpg",
      alt: "news 1",
    },
  },
];
