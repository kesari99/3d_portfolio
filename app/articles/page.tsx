import type { Metadata } from "next";
import { PostList } from "@/components/post-list";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Articles",
  description: "Articles on engineering, AI systems and how I think about them.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const posts = getAllPosts();
  return (
    <section id="learnings" className="section">
      {posts.length === 0 ? <p className="empty">Nothing here yet.</p> : <PostList posts={posts} />}
    </section>
  );
}
