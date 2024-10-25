import ContentView from "@/components/ContentView";
import Comments from "@/components/Comments";
import MoreArticles from "@/components/MoreArticles";
import { fetchPost } from "@/sanity/queries/fetchPost";

export default function Blog({ posts }) {
  return (
    <div>
      <ContentView post={posts[0]} />
      <Comments />
      <MoreArticles />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const posts = await fetchPost(query.slug);
  return { props: { posts } };
}
