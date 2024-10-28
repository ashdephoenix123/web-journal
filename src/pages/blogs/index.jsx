import React from "react";
import { libre } from "../../app/fonts/fonts";
import ArticleCard from "@/components/ArticleCard";
import { fetchAllPost, fetchPostsLength } from "@/sanity/queries/fetchPost";

const Blogs = ({ posts }) => {
  return (
    <div className="max-w-screen-lg m-auto">
      <h1 className={`text-4xl ${libre.className}`}>Blogs</h1>
      <div className="max-w-screen-lg mx-auto lg:grid grid-cols-3 gap-4 my-12">
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
