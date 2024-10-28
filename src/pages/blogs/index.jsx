import React from "react";
import { libre } from "../../app/fonts/fonts";
import ArticleCard from "@/components/ArticleCard";
import { fetchAllPost, fetchPostsLength } from "@/sanity/queries/fetchPost";
import AutoComplete from "@/components/AutoComplete";
import { categoryOptions } from "@/database/content";

const Blogs = ({ posts }) => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex gap-4 items-center">
        <h1 className={`text-4xl ${libre.className}`}>Blogs</h1>
        <AutoComplete options={categoryOptions} />
      </div>
      <div className="mx-auto flex flex-col lg:grid grid-cols-3 gap-4 my-12">
        {posts.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            description={article.subTitle}
            img={{ src: article.mainImage, alt: article.title + " image" }}
            href={`/blogs/${article.slug}`}
            categories={article.categories}
            author={{ name: article.author.name, image: article.author.image }}
            publishedDate={article.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const [posts, numOfPosts] = await Promise.all([
    fetchAllPost(),
    fetchPostsLength(),
  ]);
  return { props: { posts } };
}

export default Blogs;
