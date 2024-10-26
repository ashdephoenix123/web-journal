import ContentView from "@/components/ContentView";
import Comments from "@/components/Comments";
import MoreArticles from "@/components/MoreArticles";
import { fetchAllPost, fetchPost } from "@/sanity/queries/fetchPost";

export default function Blog({ post, allPosts }) {
  return (
    <div>
      <ContentView post={post} />
      <Comments />
      <MoreArticles articles={allPosts} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const [allPosts, post] = await Promise.all([
    fetchAllPost(3),
    fetchPost(query.slug),
  ]);
  return { props: { post, allPosts } };
}
