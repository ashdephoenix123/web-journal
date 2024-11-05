import ExploreBlogs from "@/components/Home/ExploreBlogs";
import Hero from "@/components/Home/Hero";
import { fetchAllPost } from "@/sanity/queries/fetchPost";
import Head from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home - Web Journal</title>
        <meta
          name="description"
          content="Explore fresh, reliable news and insights on the topics that matter most, all in one place."
        />
      </Head>
      <div className="text-4xl text-center mx-auto max-w-screen-xl">
        <Hero />
        <ExploreBlogs articles={posts} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await fetchAllPost();
  return { props: { posts } };
}
