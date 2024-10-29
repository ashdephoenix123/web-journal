import { fetchAllPost } from "@/sanity/queries/fetchPost";

export default async function handler(req, res) {
  const posts = await fetchAllPost();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://web-journal-theta.vercel.app/schemas/sitemap/0.9">
    <!-- Homepage -->
    <url>
      <loc>https://web-journal-theta.vercel.app/</loc>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>

    <!-- Blog Listing Page -->
    <url>
      <loc>https://web-journal-theta.vercel.app/blogs</loc>
      <changefreq>daily</changefreq>
      <priority>0.8</priority>
    </url>

    ${posts
      .map(
        (post) => `
        <url>
          <loc>https://web-journal-theta.vercel.app/blogs/${post.slug}</loc>
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
