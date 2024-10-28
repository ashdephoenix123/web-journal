import { libre } from "@/app/fonts/fonts";
import React from "react";
import ArticleCard from "../ArticleCard";
import Link from "next/link";

const ExploreBlogs = ({ articles }) => {
  return (
    <div className="mb-24">
      <h2
        className={`text-left text-3xl lg:text-4xl lg:w-1/2 mb-12 leading-snug ${libre.className}`}
      >
        Discover Handpicked Insights
      </h2>
      <div className="mx-auto flex flex-col lg:grid grid-cols-3 gap-6 text-start">
        {articles?.slice(0, 3).map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.subTitle}
            img={{ src: article.mainImage, alt: article.title + " img" }}
            href={`/blogs/${article.slug}`}
            categories={article.categories}
            author={{ name: article.author.name, image: article.author.image }}
            publishedDate={article.publishedAt}
          />
        ))}
      </div>
      <Link
        href="/blogs"
        className="max-w-max bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-4 flex mx-auto mt-12 py-2 rounded-lg font-bold transition-all duration-200 text-sm tracking-wide"
      >
        Explore Blogs
      </Link>
    </div>
  );
};

export default ExploreBlogs;
