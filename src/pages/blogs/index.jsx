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
import Image from "next/image";

const Blogs = ({ posts, allCategories }) => {
  const [allBlogs, setAllBlogs] = useState(posts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCategoryBlog = async (slug) => {
    try {
      setLoading(true);
      const data = await fetchCategoryPost(slug ? slug : null);
      setAllBlogs(data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, Please try later!");
    } finally {
      setLoading(false);
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
          <div className="col-span-3 mx-auto min-h-screen">
            <Image
              src="/images/loading-gif.svg"
              alt="loading icon"
              width={64}
              height={64}
            />
          </div>
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
    </div>
  );
};

export async function getServerSideProps() {
  const [posts, numOfPosts, allCategories] = await Promise.all([
    fetchAllPost(),
    fetchPostsLength(),
    fetchAllCategories(),
  ]);
  return { props: { posts, allCategories } };
}

export default Blogs;
