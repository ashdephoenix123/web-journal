import { fetchAllPost } from "@/sanity/queries/fetchPost";

export default function Home({ posts }) {
  return (
    <div className="text-4xl text-center max-w-screen-md mx-auto min-h-screen">
      Content has been moved to blogs page
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await fetchAllPost();
  return { props: { posts } };
}
