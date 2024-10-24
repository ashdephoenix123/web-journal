import React from "react";
import { PortableTextRenderer } from "@/utils/PortableTextRenderer";
import Image from "next/image";
import Link from "next/link";
import ShareAnArticle from "./ShareAnArticle";

const ContentView = ({ post }) => {
  return (
    <div className={`max-w-screen-md mx-auto my-12`}>
      <h1 className={`text-5xl mb-12 font-semibold`}>
        Lorem Ipsum is simply dummy text of the printing
      </h1>
      <div className="relative w-full min-h-96 rounded-lg overflow-hidden mb-12">
        <Image src={post.mainImage} alt="" fill className="object-cover" />
      </div>
      <div className="flex gap-2 items-center mb-12">
        <Image
          src="/images/user.jpeg"
          alt=""
          width={100}
          height={100}
          className="object-cover rounded-full size-10"
        />
        <p className="text-sm">
          posted by &nbsp;
          <Link href="/" className="font-semibold italic underline">
            Akash Sarki
          </Link>
          &nbsp; on &nbsp;
          <span className="font-semibold">24 October 2024</span>
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
