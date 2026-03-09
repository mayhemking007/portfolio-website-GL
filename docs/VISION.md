# Vision.md — Backend Engineer Portfolio (GitHub Repository Style)

## 1. Project Vision

This project is a **minimal, lightweight personal portfolio website** designed to reflect the mindset and aesthetics of a **backend engineer** rather than a traditional designer portfolio.

Instead of flashy animations, complex layouts, or heavy UI frameworks, the site should feel like **browsing a GitHub repository**.

The central idea is that the visitor is **exploring a code repository about the developer**, where each section of the portfolio is represented as a **Markdown file inside a repo**.

The design should emphasize:

* simplicity
* readability
* developer-oriented UI
* documentation-style content
* system thinking

The portfolio should feel like **a developer workspace**, not a marketing page.

---

# 2. Core Concept

The portfolio should mimic the experience of opening a GitHub repository.

Example mental model:

```
sarthak-chaturvedi/portfolio
```

The UI should resemble a repository viewer with:

* repository header
* file tree sidebar
* markdown content viewer

Users should navigate the portfolio by **clicking files**, just like browsing files inside a GitHub repository.

Example structure:

```
sarthak-chaturvedi/
│
├── README.md
├── about.md
├── skills.md
├── experience.md
├── architecture.md
│
├── projects/
│   ├── rag-pipeline.md
│   ├── event-system.md
│   └── log-aggregation.md
│
└── contact.md
```

Each file contains **Markdown content describing the developer**.

---

# 3. Design Principles

The portfolio should follow strict design principles.

## 3.1 Minimal Frontend

The UI must remain extremely lightweight.

Avoid:

* heavy animation libraries
* large UI frameworks
* complex state management
* unnecessary components

Prefer:

* simple layouts
* minimal JavaScript
* static content where possible

Goal:

Fast load times and minimal bundle size.

---

## 3.2 Developer-Focused Aesthetic

The interface should resemble tools backend engineers already use, such as:

* GitHub repository pages
* documentation websites
* developer dashboards
* code editors

Typography should prioritize **readability and clarity**.

Recommended fonts:

```
JetBrains Mono
Inter
```

---

## 3.3 Content-Driven Architecture

All portfolio content should be written in **Markdown files** rather than hardcoded React components.

Benefits:

* easy content editing
* clean separation between content and UI
* scalable structure
* consistent formatting

The website acts primarily as a **Markdown renderer**.

---

## 3.4 GitHub-Inspired Interface

The interface should strongly resemble GitHub repository browsing.

Key visual elements:

* repo header
* file tree sidebar
* markdown file viewer
* breadcrumb navigation
* simple borders and separators

However, it should **not clone GitHub exactly**, only adopt the aesthetic.

---

# 4. Target User Experience

When a visitor opens the site:

1. They immediately see a repository-like interface.
2. The README.md file is open by default.
3. They can navigate the portfolio by clicking files.
4. Content loads instantly in the right panel.
5. The UI feels familiar to anyone who uses GitHub.

The experience should feel like **exploring a developer's repository about themselves**.

---

# 5. Technical Stack

The project should use a **modern but lightweight stack**.

## Core Framework

Next.js (App Router)

Reasons:

* simple routing
* strong performance
* good developer experience
* easy static content support

---

## Language

TypeScript

Reasons:

* type safety
* improved maintainability
* professional engineering practice

---

## Styling

TailwindCSS

Reasons:

* minimal CSS overhead
* fast development
* easy theme support

---

## Markdown Rendering

react-markdown

Purpose:

Render Markdown files dynamically inside the content panel.

---

## Theme System

next-themes

Purpose:

Provide light and dark mode toggle functionality.

---

# 6. Folder Structure

The project should follow a clean and organized architecture.

```
portfolio
│
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components
│   ├── RepoHeader.tsx
│   ├── FileTree.tsx
│   ├── MarkdownViewer.tsx
│   └── ThemeToggle.tsx
│
├── content
│   ├── README.md
│   ├── about.md
│   ├── skills.md
│   ├── experience.md
│   ├── architecture.md
│   │
│   └── projects
│       ├── rag-pipeline.md
│       ├── event-system.md
│       └── log-aggregation.md
│
├── lib
│   └── fileTree.ts
│
└── public
```

Explanation:

* **content/** contains all Markdown files
* **components/** contains UI components
* **lib/** contains helper utilities
* **app/** contains Next.js routing logic

---

# 7. Layout Structure

The UI should consist of three main sections.

## 7.1 Repository Header

The header should resemble a GitHub repo header.

Example elements:

* repository name
* repo owner
* optional repo stats
* theme toggle

Example appearance:

```
sarthak-chaturvedi / portfolio

⭐ Stars 42   Forks 7   Last commit: updated architecture
```

The theme toggle should be placed on the right side.

---

## 7.2 Sidebar File Tree

The left sidebar displays the repository file structure.

Example:

```
README.md
about.md
skills.md
experience.md
architecture.md

projects/
  rag-pipeline.md
  event-system.md
  log-aggregation.md

contact.md
```

Clicking a file updates the content panel.

---

## 7.3 Content Viewer

The right panel displays the Markdown content.

It should support:

* headings
* lists
* code blocks
* links
* simple diagrams

---

# 8. Dark / Light Mode

The website should support both **dark mode and light mode**.

Default theme: dark.

## Dark Theme Colors

```
background: #0d1117
sidebar: #161b22
text: #c9d1d9
border: #30363d
accent: #58a6ff
```

## Light Theme Colors

```
background: #ffffff
sidebar: #f6f8fa
text: #24292f
border: #d0d7de
accent: #0969da
```

The theme toggle should switch instantly between modes.

User preference should persist using local storage.

---

# 9. Navigation Model

Navigation is **file-based**.

User interactions:

Click file → load Markdown content.

Example:

```
click skills.md
```

Content viewer loads the corresponding Markdown file.

Routing should remain simple and lightweight.

---

# 10. Default Landing Page

When the website loads, the content viewer should open:

```
README.md
```

This acts as the **homepage of the portfolio**.

README.md should include:

* short introduction
* technologies
* instructions to explore the repo
* links to other sections

---

# 11. Performance Goals

The website should prioritize performance.

Targets:

* minimal JavaScript bundle
* fast first load
* static Markdown content
* simple rendering pipeline

Avoid unnecessary dependencies.

---

# 12. Optional Enhancements

These features can be implemented if time permits.

### Breadcrumb Navigation

Example:

```
sarthak-chaturvedi / projects / rag-pipeline.md
```

---

### Repo Metadata

Display simple repository statistics.

Example:

```
Stars: 42
Forks: 7
Language: TypeScript
```

---

### Commit Message

Example:

```
Last commit: updated portfolio architecture
```

---

### File Icons

Use simple icons for:

* Markdown files
* folders

---

# 13. Long-Term Maintainability

This architecture allows easy updates.

To add a new project:

1. Create a new Markdown file in `content/projects/`
2. Update file tree structure
3. Content automatically becomes accessible.

No UI changes required.

---

# 14. Project Success Criteria

The portfolio is successful if it:

* clearly communicates backend engineering identity
* remains lightweight and fast
* feels like browsing a GitHub repository
* is easy to update and maintain
* is visually clean and developer-oriented
* avoids unnecessary frontend complexity

The final result should feel like **a well-organized developer repository representing the engineer**.
