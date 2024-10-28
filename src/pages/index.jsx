import ExploreBlogs from "@/components/Home/ExploreBlogs";
import Hero from "@/components/Home/Hero";
import { fetchAllPost } from "@/sanity/queries/fetchPost";

export default function Home({ posts }) {
  return (
    <div className="text-4xl text-center mx-auto max-w-screen-xl">
      <Hero />
      <ExploreBlogs articles={posts} />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await fetchAllPost();
  return { props: { posts } };
}
