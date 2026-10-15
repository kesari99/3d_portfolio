import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Article } from "@/components/article";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/articles/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary, publishedTime: post.date },
  };
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  return <Article post={post} backHref="/articles" backLabel="Back to Articles" />;
}
