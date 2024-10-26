import { client } from "../lib/client";

export const fetchAllPost = async (end, start = 0) => {
  const range = end ? `[${start}...${end}]` : ``;
  const posts = await client.fetch(
    `*[_type == "post"] | order(_createdAt desc) ${range} {_id, body, title, subTitle, "slug": slug.current,"mainImage": mainImage.asset->url, 'author' : {'name' : author->name, 'image' : author->image.asset->url} , 'publishedAt': _createdAt}`,
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
