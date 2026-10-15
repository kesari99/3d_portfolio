import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import GithubSlugger from "github-slugger";

export type Collection = "posts" | "learning";

const DIRS: Record<Collection, string> = {
  posts: path.join(process.cwd(), "content", "posts"),
  learning: path.join(process.cwd(), "content", "learning"),
};

export type Source = { label: string; href: string };

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
  // learning notes
  topic?: string;
  updated?: string;
  status?: "learning" | "done";
  project?: string;
  sources: Source[];
};

export type Post = PostMeta & { content: string };

const toDate = (v: unknown) =>
  v instanceof Date ? v.toISOString().slice(0, 10) : v ? String(v) : "";

function readPost(collection: Collection, file: string): Post {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(DIRS[collection], file), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: toDate(data.date),
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    draft: Boolean(data.draft),
    readingTime: readingTime(content).text,
    topic: data.topic,
    updated: data.updated ? toDate(data.updated) : undefined,
    status: data.status,
    project: data.project,
    sources: data.sources ?? [],
    content,
  };
}

export function getAllPosts(collection: Collection = "posts"): Post[] {
  const dir = DIRS[collection];
  if (!fs.existsSync(dir)) return [];
  const showDrafts = process.env.NODE_ENV !== "production";
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => readPost(collection, f))
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string, collection: Collection = "posts"): Post | undefined {
  return getAllPosts(collection).find((p) => p.slug === slug);
}

/** Level-2 headings, with the same ids rehype-slug gives them, for a contents list. */
export function getHeadings(content: string): { id: string; text: string }[] {
  const slugger = new GithubSlugger();
  let inFence = false;
  const out: { id: string; text: string }[] = [];
  for (const line of content.split("\n")) {
    if (line.trim().startsWith("```")) inFence = !inFence;
    if (inFence) continue;
    const m = /^## (.+)$/.exec(line);
    if (m) {
      const text = m[1].replace(/[`*_]/g, "").trim();
      out.push({ id: slugger.slug(text), text });
    }
  }
  return out;
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
