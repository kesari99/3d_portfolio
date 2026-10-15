# Kesari Devaraya — portfolio & articles

Minimal, content-driven site built with Next.js (App Router), TypeScript, Tailwind and MDX.

## Develop

```bash
npm install
npm run dev
```

## Add a post

Create `content/posts/my-post.mdx`:

```mdx
---
title: "My post"
date: "2026-10-15"
summary: "One line shown in lists and link previews."
tags: ["ai"]
draft: false
---

Body in Markdown. `<Callout>` is available as a component.
```

`draft: true` posts show in dev only. Commit and push to publish.

## Edit site content

Bio, past roles, projects, skills and socials live in `content/site.ts`.
Set `NEXT_PUBLIC_SITE_URL` in Vercel for correct canonical/RSS/sitemap URLs.
