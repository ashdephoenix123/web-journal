import React, { useState } from "react";
import { libre } from "@/app/fonts/fonts";
import ArticleCard from "@/components/ArticleCard";
import {
  fetchCategoryPost,
  fetchPostsLength,
} from "@/sanity/queries/fetchPost";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";
import Head from "next/head";
import { capitalize, textToUrl } from "@/utils/helpers";
import { useRouter } from "next/router";

let numOfBlogsToLoad = 6;

const CategoryBlog = ({ posts, numOfBlogs }) => {
  const { query } = useRouter();
  const [allBlogs, setAllBlogs] = useState(posts);
  const [loadMore, setLoadMore] = useState(false);
  const [startBlogIndex, setStartBlogIndex] = useState(numOfBlogsToLoad);

  const fetchMoreBlogs = async () => {
    try {
      setLoadMore(true);
      const data = await fetchCategoryPost(
        query.category,
        startBlogIndex,
        startBlogIndex + numOfBlogsToLoad
      );
      setStartBlogIndex((prev) => prev + numOfBlogsToLoad);
      setAllBlogs((prev) => [...prev, ...data]);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, Please try later!");
    } finally {
      setLoadMore(false);
    }
  };

  return (
    <>
      <Head>
        <title>Blogs - Web Journal</title>
        <meta
          name="description"
          content="Explore the blogs section of Web Journal. Read from the latest technology to latest inventions, from thrilling sports to serene and quiet nature, you will find all."
        />
      </Head>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex gap-4 items-center">
          <h1 className={`text-4xl ${libre.className}`}>
            What&#39;s new in{" "}
            <span className="bg-white text-black px-4">
              {capitalize(query.category)}
            </span>
          </h1>
        </div>
        <div className="mx-auto flex flex-col lg:grid grid-cols-3 gap-4 my-12">
          {allBlogs.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.subTitle}
              img={{ src: article.mainImage, alt: article.title + " image" }}
              href={`/blogs/${textToUrl(article.categories[0].title)}/${article.slug}`}
              categories={article.categories}
              author={{
                name: article.author.name,
                image: article.author.image,
              }}
              publishedDate={article.publishedAt}
            />
          ))}
        </div>
        {loadMore && <Loader />}
        <button
          disabled={allBlogs.length == numOfBlogs}
          onClick={fetchMoreBlogs}
          className="disabled:bg-opacity-30 disabled:cursor-not-allowed max-w-max my-24 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-4 flex mx-auto mt-12 py-2 rounded-lg font-bold transition-all duration-200"
        >
          Load more
        </button>
      </div>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const { category } = query;
  const [posts, numOfBlogs] = await Promise.all([
    fetchCategoryPost(category, 0, numOfBlogsToLoad),
    fetchPostsLength(category),
  ]);
  return { props: { posts, numOfBlogs } };
}

export default CategoryBlog;
