import ContentView from "@/components/ContentView";
import Comments from "@/components/Comments";
import MoreArticles from "@/components/MoreArticles";
import { fetchPost } from "@/sanity/queries/fetchPost";

export default function Blog({ post }) {
  return (
    <div>
      <ContentView post={post} />
      <Comments />
      <MoreArticles />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const post = await fetchPost(query.slug);
  return { props: { post } };
}
