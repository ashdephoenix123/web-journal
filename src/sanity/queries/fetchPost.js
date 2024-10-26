import { client } from "../lib/client";

export const fetchAllPost = async (start = 0, end, slug) => {
  const range = end ? `[${start}...${end}]` : ``;
  const query = `*[_type == "post"  ${slug ? `&& slug.current != $slug` : ""}] | order(_createdAt desc) ${range} {_id, body, title, subTitle, "slug": slug.current,"mainImage": mainImage.asset->url, 'author' : {'name' : author->name, 'image' : author->image.asset->url} , 'publishedAt': _createdAt, 'categories': categories[]->{title, "color": categoryColor.hex}}`;
  const params = slug ? { slug } : {};

  const posts = await client.fetch(query, params);
  return posts;
};

export const fetchPost = async (slug) => {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug] {_id, body, title, subTitle, "mainImage": mainImage.asset->url, 'author' : {'name' : author->name, 'image' : author->image.asset->url} , 'publishedAt': _createdAt}`,

    { slug }
  );
  return post.length ? post[0] : {};
};
