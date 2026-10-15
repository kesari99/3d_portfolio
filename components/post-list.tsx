import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostList({ posts }: { posts: PostMeta[] }) {
  return (
    <>
      {posts.map((p) => (
        <article className="book" key={p.slug}>
          <Link href={`/articles/${p.slug}`} className="learning-link">
            <header>
              <h4>{p.title}</h4>
              <time className="book-date">{p.date}</time>
            </header>
          </Link>
        </article>
      ))}
    </>
  );
}
