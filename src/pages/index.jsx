import ContentView from "@/components/ContentView";
import Comments from "@/components/Comments";
import MoreArticles from "@/components/MoreArticles";
import { fetchAllPost } from "@/sanity/queries/fetchPost";

export default function Home({ posts }) {
  return (
    <div>
      <ContentView post={posts[0]} />
      <Comments />
      <MoreArticles />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await fetchAllPost();
  return { props: { posts } };
}
