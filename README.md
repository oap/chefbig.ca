# Chef Big Blog (加拿大大厨师)

Welcome to the Chef Big Blog project! This project is built using [AstroPaper](https://github.com/satnaing/astro-paper), a minimal, responsive, and SEO-friendly Astro blog theme.

## 🚀 Usage

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321/`.

### Build

Build the production bundle:

```bash
npm run build
```

The output will be in the `dist/` directory.

## � Project Structure

- `src/data/blog`: Contains all blog post content (Markdown files).
- `src/pages`: Contains the site pages (Astro components and Markdown files).
- `src/config.ts`: Main configuration file for the site (title, author, social links, etc.).
- `src/styles`: Global styles and Tailwind configuration.
- `public`: Static assets.

## � Adding Content

### Adding a New Blog Post

1. Navigate to `src/data/blog`.
2. Create a new Markdown file (e.g., `my-new-post.md`) or a folder with `index.md` (e.g., `my-new-post/index.md`) if you want to keep images alongside the post.
3. Add the following frontmatter to the top of the file:

```markdown
---
title: "Your Post Title"
author: "加拿大大厨师"
pubDatetime: 2025-12-17T12:00:00Z
slug: your-custom-slug # Optional: Overrides the default slug generated from filename
featured: false # Set to true to pin to the top
draft: false # Set to true to hide from production
tags:
  - tag1
  - tag2
description: "A short description of your post for SEO and previews."
---

Your blog post content goes here...
```

**Note on Images:**
If you place your markdown file in a subdirectory (e.g., `src/data/blog/my-trip/index.md`), you can place images in the same folder and reference them relatively:
`![My Image](./image.jpg)`

### Adding a New Page

To add a standalone page (like "About" or "Contact"):

1. Navigate to `src/pages`.
2. Create a new file, e.g., `contact.md` or `contact.astro`.
3. For Markdown pages, use the layout component if needed, or just standard markdown if the theme handles it (check `about.md` for reference).

Example `src/pages/new-page.md`:

```markdown
---
layout: ../layouts/AboutLayout.astro
title: "New Page"
---

Page content here.
```

## ⚙️ Configuration

You can customize the site settings in `src/config.ts`.

```typescript
export const SITE = {
  website: "https://chefbig.ca/",
  author: "加拿大大厨师",
  desc: "与你分享生活的点滴。",
  title: "加拿大大厨师的博客",
  // ...
};
```

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
