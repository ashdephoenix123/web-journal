import { client } from "../lib/client";

export const fetchAllPost = async (start = 0, end) => {
  const range = end ? `[${start}...${end}]` : ``;
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc) ${range} {_id, body, "mainImage": mainImage.asset->url}`,
    {}
  );
  return posts;
};

export const fetchPost = async (slug) => {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug] {_id, body, title, subTitle, "mainImage": mainImage.asset->url, 'author' : {'name' : author->name, 'image' : author->image.asset->url} , 'publishedAt': _createdAt}`,

    { slug }
  );
  return post.length ? post[0] : {};
};
