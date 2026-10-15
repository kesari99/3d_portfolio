import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const dynamic = "force-static";

export function GET() {
  const items = getAllPosts()
    .map(
      (p) => `<item>
<title>${esc(p.title)}</title>
<link>${site.url}/articles/${p.slug}</link>
<guid>${site.url}/articles/${p.slug}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description>${esc(p.summary)}</description>
</item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${esc(site.name)}</title>
<link>${site.url}</link>
<description>${esc(site.description)}</description>
${items}
</channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
