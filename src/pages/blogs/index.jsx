import React, { useState } from "react";
import { libre } from "../../app/fonts/fonts";
import ArticleCard from "@/components/ArticleCard";
import {
  fetchAllPost,
  fetchCategoryPost,
  fetchPostsLength,
} from "@/sanity/queries/fetchPost";
import AutoComplete from "@/components/AutoComplete";
import { fetchAllCategories } from "@/sanity/queries/fetchCategories";
import toast from "react-hot-toast";
import Loader from "@/components/Loader";

let numOfBlogsToLoad = 3;

const Blogs = ({ posts, allCategories, numOfBlogs }) => {
  const [allBlogs, setAllBlogs] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [blogsLength, setBlogsLength] = useState(numOfBlogs);
  const [startBlogIndex, setStartBlogIndex] = useState(numOfBlogsToLoad);

  const fetchCategoryBlog = async (slug) => {
    try {
      setLoading(true);
      const [data, allDataLength] = await Promise.all([
        fetchCategoryPost(slug ? slug : null, 0, numOfBlogsToLoad),
        fetchPostsLength(slug),
      ]);
      setAllBlogs(data);
      setBlogsLength(allDataLength);
      setStartBlogIndex(numOfBlogsToLoad);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, Please try later!");
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreBlogs = async () => {
    try {
      setLoadMore(true);
      const data = await fetchCategoryPost(
        typeof selectedCategory === "object" ? selectedCategory.slug : null,
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
    <div className="max-w-screen-xl mx-auto">
      <div className="flex gap-4 items-center">
        <h1 className={`text-4xl ${libre.className}`}>Blogs</h1>
        <AutoComplete
          options={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          callback={fetchCategoryBlog}
        />
      </div>
      <div className="mx-auto flex flex-col lg:grid grid-cols-3 gap-4 my-12">
        {loading ? (
          <Loader />
        ) : (
          allBlogs.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              description={article.subTitle}
              img={{ src: article.mainImage, alt: article.title + " image" }}
              href={`/blogs/${article.slug}`}
              categories={article.categories}
              author={{
                name: article.author.name,
                image: article.author.image,
              }}
              publishedDate={article.publishedAt}
            />
          ))
        )}
      </div>
      {loadMore && <Loader />}
      <button
        disabled={allBlogs.length == blogsLength || loading}
        onClick={fetchMoreBlogs}
        className="disabled:bg-opacity-30 disabled:cursor-not-allowed max-w-max my-24 bg-white bg-opacity-70 hover:bg-opacity-100 text-black px-4 flex mx-auto mt-12 py-2 rounded-lg font-bold transition-all duration-200"
      >
        Load more
      </button>
    </div>
  );
};

export async function getServerSideProps() {
  const [posts, numOfBlogs, allCategories] = await Promise.all([
    fetchAllPost(0, numOfBlogsToLoad),
    fetchPostsLength(null),
    fetchAllCategories(),
  ]);
  return { props: { posts, allCategories, numOfBlogs } };
}

export default Blogs;
