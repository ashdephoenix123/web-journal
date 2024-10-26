import React from "react";
import { PortableTextRenderer } from "@/utils/PortableTextRenderer";
import Image from "next/image";
import Link from "next/link";
import ShareAnArticle from "./ShareAnArticle";
import { libre } from "@/pages/fonts/fonts";
import { formatDate } from "@/utils/helpers";

const ContentView = ({ post }) => {
  return (
    <div className={`max-w-screen-md mx-auto`}>
      <h1
        className={`text-4xl mb-12 leading-normal tracking-tight ${libre.className}`}
      >
        {post.title}
      </h1>
      <Image
        src={post.mainImage}
        alt=""
        width={2560}
        height={1440}
        sizes="100vw"
        className="object-cover rounded-lg mb-12"
      />
      <div className="flex gap-2 items-center mb-12">
        <Image
          src={post.author.image}
          alt=""
          width={100}
          height={100}
          className="object-cover rounded-full size-10"
        />
        <p className="text-sm">
          posted by &nbsp;
          <Link href="/" className="font-semibold italic underline">
            {post.author.name}
          </Link>
          &nbsp; on &nbsp;
          <span className="font-semibold">{formatDate(post.publishedAt)}</span>
        </p>
      </div>
      <section>
        <PortableTextRenderer value={post.body} />
      </section>
      <ShareAnArticle />
    </div>
  );
};

export default ContentView;
