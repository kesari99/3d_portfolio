import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Learning",
  description: "Notes on concepts and tools I'm learning, with the small projects I build to understand them.",
  alternates: { canonical: "/learning" },
};

export default function LearningPage() {
  const notes = getAllPosts("learning"); // newest first
  const topics = [...new Set(notes.map((n) => n.topic ?? "Other"))];

  return (
    <section id="learnings" className="section">
      {notes.length === 0 && <p className="empty">Nothing here yet.</p>}
      {topics.map((topic) => (
        <div className="topic-group" key={topic}>
          <h2 className="section-heading">{topic}</h2>
          {notes
            .filter((n) => (n.topic ?? "Other") === topic)
            .map((n) => (
              <article className="book" key={n.slug}>
                <Link href={`/learning/${n.slug}`} className="learning-link">
                  <header>
                    <h4>{n.title}</h4>
                    <time className="book-date">
                      {n.date}
                      {n.status === "learning" && " · in progress"}
                    </time>
                    {n.summary && <p className="post-summary">{n.summary}</p>}
                  </header>
                </Link>
              </article>
            ))}
        </div>
      ))}
    </section>
  );
}
