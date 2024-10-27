import ContentView from "@/components/ContentView";
import Comments from "@/components/Comments";
import MoreArticles from "@/components/MoreArticles";
import { fetchAllPost, fetchPost } from "@/sanity/queries/fetchPost";

export default function Blog({ post, allPosts }) {
  console.log(post);
  return (
    <div>
      <ContentView post={post} />
      <Comments postId={post._id} />
      <MoreArticles articles={allPosts} />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const [allPosts, post] = await Promise.all([
    fetchAllPost(0, 3, query.slug),
    fetchPost(query.slug),
  ]);
  return { props: { post, allPosts } };
}
