import localFont from "next/font/local";
import { client } from "@/sanity/lib/client";
import { PortableTextRenderer } from "@/utils/PortableTextRenderer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home({ posts }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <h1>Web Journal</h1>
      <img src={posts[0].mainImage} alt="" width={620} height={380} />
      <PortableTextRenderer value={posts[0].body} />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = await client.fetch(
    `*[_type == "post"] {_id, body, "mainImage": mainImage.asset->url}`
  );
  return { props: { posts } };
}
