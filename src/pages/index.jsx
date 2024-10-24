import { client } from "@/sanity/lib/client";
import ContentView from "@/components/ContentView";
import Comments from "@/components/Comments";
import MoreArticles from "@/components/MoreArticles";

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
  const posts = await client.fetch(
    `*[_type == "post"] {_id, body, "mainImage": mainImage.asset->url}`
  );
  return { props: { posts } };
}
