import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/article";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts("learning").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug, "learning");
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/learning/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary, publishedTime: post.date },
  };
}

export default function LearningNotePage({ params }: Props) {
  const post = getPost(params.slug, "learning");
  if (!post) notFound();
  return <Article post={post} backHref="/learning" backLabel="Back to Learning" learning />;
}
