import { fetchAllPost } from "@/sanity/queries/fetchPost";
import { fetchAllCategories } from "@/sanity/queries/fetchCategories";
import { textToUrl } from "@/utils/helpers";

export default async function handler(req, res) {
  const [posts, categories] = await Promise.all([
    fetchAllPost(),
    fetchAllCategories(),
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Homepage -->
    <url>
      <loc>https://blogs.akashsarki.com/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>

    <!-- Blog Listing Page -->
    <url>
      <loc>https://blogs.akashsarki.com/blogs</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>

     ${categories
       .map(
         (category) => `
        <url>
          <loc>https://blogs.akashsarki.com/blogs/${category.slug}</loc>
          <lastmod>${category._updatedAt}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `
       )
       .join("")}

    ${posts
      .map(
        (post) => `
        <url>
          <loc>https://blogs.akashsarki.com/blogs/${textToUrl(post.categories[0].title)}/${post.slug}</loc>
          <lastmod>${post.updatedAt}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.7</priority>
        </url>
      `
      )
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).end(sitemap);
}
