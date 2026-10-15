import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

const components = {
  Callout: ({ children }: { children: React.ReactNode }) => <aside className="callout">{children}</aside>,
  a: ({ href = "", ...props }: React.ComponentProps<"a">) =>
    /^https?:/.test(href) ? (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    ) : href.startsWith("/") ? (
      <Link href={href} {...props} />
    ) : (
      <a href={href} {...props} />
    ),
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            [rehypePrettyCode, { theme: "github-light", keepBackground: false }],
          ],
        },
      }}
    />
  );
}
