# Process — Phase-Wise Roadmap

This document breaks the **Backend Engineer Portfolio (GitHub Repository Style)** into a phased roadmap. Each phase has clear scope, deliverables, and dependencies so the project can be worked on incrementally.

---

## Overview

| Phase | Name | Focus |
|-------|------|--------|
| 1 | Foundation & Setup | Project init, stack, folder structure |
| 2 | Core Layout & UI Shell | Repo header, sidebar, content viewer shell |
| 3 | Content & Markdown | Content folder, file tree, markdown rendering |
| 4 | Navigation & Routing | File-based navigation, default README |
| 5 | Theming | Dark/light mode, color tokens |
| 6 | Polish & Optional Enhancements | Breadcrumbs, metadata, icons, performance |
| 7 | Content & Launch | Final content, testing, deploy |

---

## Phase 1: Foundation & Setup

**Goal:** Working Next.js app with the chosen stack and folder structure.

### Tasks

1. **Initialize Next.js (App Router)**
   - Create project with TypeScript.
   - Use App Router (`app/` directory).

2. **Install and configure stack**
   - TailwindCSS for styling.
   - `react-markdown` for markdown rendering.
   - `next-themes` for theme switching.

3. **Create folder structure**
   - `app/` — layout, page, globals.css.
   - `components/` — empty or placeholder.
   - `content/` — placeholder README.md.
   - `lib/` — placeholder or empty.
   - `public/` — as needed.

### Deliverables

- Next.js app runs locally.
- TypeScript, Tailwind, react-markdown, next-themes installed.
- Folders match VISION §6 (app, components, content, lib, public).

### Exit criteria

- `npm run dev` runs without errors.
- One simple page renders.

---

## Phase 2: Core Layout & UI Shell

**Goal:** Three-section layout (repo header, file tree sidebar, content viewer) without real content or navigation.

### Tasks

1. **Main layout**
   - Implement layout in `app/layout.tsx` with:
     - Repository header (top).
     - Sidebar (left).
     - Content area (right).

2. **Repository header component**
   - Create `components/RepoHeader.tsx`.
   - Show repo name and owner (e.g. `sarthak-chaturvedi / portfolio`).
   - Reserve space for theme toggle (can be placeholder).

3. **File tree sidebar shell**
   - Create `components/FileTree.tsx`.
   - Static list of file/folder names (no click behavior yet).
   - Match structure from VISION §7.2 (README, about, skills, experience, architecture, projects/, contact).

4. **Content viewer shell**
   - Create `components/MarkdownViewer.tsx`.
   - Single panel that can later show markdown; for now show placeholder text.

5. **Global styles**
   - In `app/globals.css`, set up base typography (e.g. JetBrains Mono, Inter per VISION §3.2).
   - Simple borders/separators for GitHub-like feel.

### Deliverables

- `RepoHeader.tsx`, `FileTree.tsx`, `MarkdownViewer.tsx` in place.
- Layout resembles GitHub repo: header + sidebar + content panel.
- No heavy animations or extra frameworks.

### Exit criteria

- Page loads with header, sidebar, and content area visible.
- Layout is responsive enough to work on desktop (mobile can be refined later).

---

## Phase 3: Content & Markdown

**Goal:** Real markdown content on disk and rendered in the content viewer.

### Tasks

1. **Content folder and files**
   - Add under `content/`:
     - `README.md`, `about.md`, `skills.md`, `experience.md`, `architecture.md`, `contact.md`.
     - `content/projects/` with e.g. `rag-pipeline.md`, `event-system.md`, `log-aggregation.md`.
   - Start with minimal placeholder content; refine in Phase 7.

2. **File tree data**
   - Create `lib/fileTree.ts` (or similar) that:
     - Reads/scans `content/` (or uses a static structure that mirrors it).
     - Exposes a tree structure (files and folders) for the sidebar.

3. **Markdown loading**
   - Add a small lib (e.g. in `lib/`) to read markdown files from `content/` by path.
   - Use Node/Next APIs for server-side reading; keep it simple and static where possible.

4. **Markdown viewer**
   - In `MarkdownViewer.tsx`, use `react-markdown` to render:
     - Headings, lists, code blocks, links.
   - Optionally add syntax highlighting for code blocks (lightweight only).

### Deliverables

- All markdown files exist under `content/` and `content/projects/`.
- `lib/fileTree.ts` (or equivalent) provides the tree used by the sidebar.
- `MarkdownViewer` renders markdown from file content (once content is passed in).

### Exit criteria

- Given a file path, the app can load and render that file’s markdown in the content panel.

---

## Phase 4: Navigation & Routing

**Goal:** Clicking a file in the sidebar loads and shows that file’s content; README is the default.

### Tasks

1. **URL / state for current file**
   - Decide navigation model:
     - **Option A:** URL-based (e.g. `/?file=README.md` or `/[slug]`) for shareable links.
     - **Option B:** Client state only (e.g. React state) for maximum simplicity.
   - Prefer URL-based if you want shareable links to specific “files.”

2. **Wire FileTree to navigation**
   - FileTree receives current file (from URL or state) and an `onSelect(path)` (or similar).
   - Clicking a file triggers navigation (update URL or state).

3. **Load and show selected file**
   - When current file changes, load that file’s markdown (using lib from Phase 3) and pass to `MarkdownViewer`.

4. **Default landing**
   - On first load or root URL, show `README.md` as the default “open” file (VISION §10).

5. **Handle invalid/missing paths**
   - If path is missing or invalid, fall back to README or show a simple “File not found” message.

### Deliverables

- Clicking a file in the sidebar updates the content panel.
- README.md is the default view.
- Invalid paths are handled gracefully.

### Exit criteria

- User can open the site, see README, then click any file and see its content.

---

## Phase 5: Theming

**Goal:** Dark and light mode with GitHub-inspired colors and persistence.

### Tasks

1. **Integrate next-themes**
   - Wrap app (or layout) with `ThemeProvider`.
   - Default theme: dark (VISION §8).

2. **Theme toggle**
   - Create `components/ThemeToggle.tsx` and add it to `RepoHeader`.
   - Toggle switches between light and dark; preference persists (e.g. localStorage via next-themes).

3. **Color tokens**
   - In `globals.css` (or Tailwind config), define:
     - **Dark:** background `#0d1117`, sidebar `#161b22`, text `#c9d1d9`, border `#30363d`, accent `#58a6ff`.
     - **Light:** background `#ffffff`, sidebar `#f6f8fa`, text `#24292f`, border `#d0d7de`, accent `#0969da`.
   - Use CSS variables or Tailwind theme so components use tokens, not hardcoded hex.

4. **Apply tokens**
   - Ensure header, sidebar, content area, borders, and links use the theme tokens.
   - Check code blocks and markdown elements in both themes.

### Deliverables

- `ThemeToggle.tsx` in header.
- Dark and light themes match VISION §8.
- Theme choice persists across reloads.

### Exit criteria

- User can switch themes; colors update everywhere; preference is saved.

---

## Phase 6: Polish & Optional Enhancements

**Goal:** Improve UX and performance without adding heavy dependencies.

### Tasks (pick by priority)

1. **Breadcrumb navigation (optional)**
   - Show path like `sarthak-chaturvedi / projects / rag-pipeline.md`.
   - Clicking a segment can navigate (e.g. to folder or file).

2. **Repo metadata (optional)**
   - In header or sidebar: simple stats (e.g. “Stars: 42”, “Forks: 7”, “Language: TypeScript”).
   - Can be static or config-driven.

3. **Commit message (optional)**
   - e.g. “Last commit: updated portfolio architecture” in header.

4. **File icons (optional)**
   - Small icons for folders and markdown files in the file tree.

5. **Performance**
   - Review bundle: avoid large dependencies; use dynamic imports only if needed.
   - Ensure markdown content is loaded in a minimal way (static or cached).
   - Run Lighthouse and fix critical issues.

6. **Responsiveness**
   - Sidebar: collapsible or drawer on small screens if needed.
   - Typography and spacing readable on mobile.

### Deliverables

- Any chosen optional features implemented lightly.
- No new heavy libraries; bundle size remains small.
- Performance and responsiveness acceptable.

### Exit criteria

- Site feels complete and fast; optional items are “nice to have,” not blockers.

---

## Phase 7: Content & Launch

**Goal:** Real content, final checks, and deployment.

### Tasks

1. **Content**
   - Replace placeholders in all `content/*.md` and `content/projects/*.md`.
   - README.md: short intro, tech stack, how to explore the repo, links to other sections (VISION §10).
   - Ensure headings, lists, code blocks, and links render correctly.

2. **Testing**
   - Manually test: every file opens from sidebar; theme toggle; default README; invalid path.
   - Cross-browser and mobile spot checks if possible.

3. **Deployment**
   - Deploy to chosen host (e.g. Vercel, Netlify).
   - Configure domain and environment if needed.
   - Ensure build and static export (if used) work.

4. **Documentation**
   - Update README in repo root with: how to run, how to add new content (e.g. new file in `content/projects/` and file tree update).

### Deliverables

- All markdown files contain final (or near-final) content.
- Site is live and stable.
- README explains run and content-update process.

### Exit criteria

- Portfolio clearly communicates backend engineering identity, is lightweight and fast, feels like a GitHub repo, and is easy to maintain (VISION §14).

---

## Dependency Summary

```
Phase 1 (Foundation)
    ↓
Phase 2 (Layout & UI Shell)
    ↓
Phase 3 (Content & Markdown) ←→ Phase 4 (Navigation)  [can be interleaved]
    ↓
Phase 5 (Theming)
    ↓
Phase 6 (Polish)
    ↓
Phase 7 (Content & Launch)
```

- **Phase 1** must be done first.
- **Phase 2** depends on Phase 1.
- **Phase 3** and **Phase 4** can be done in parallel once layout exists; navigation needs content loading, and content loading is most useful with navigation.
- **Phase 5** can start after Phase 2 (or after 4) once layout is stable.
- **Phase 6** after core features (3, 4, 5) are in place.
- **Phase 7** last, when structure and features are fixed.

---

## Success Criteria (from VISION §14)

Use this checklist before considering the project complete:

- [ ] Clearly communicates backend engineering identity.
- [ ] Lightweight and fast (minimal bundle, quick load).
- [ ] Feels like browsing a GitHub repository.
- [ ] Easy to update and maintain (content in markdown, clear structure).
- [ ] Visually clean and developer-oriented.
- [ ] No unnecessary frontend complexity.

---

*This roadmap is derived from `docs/VISION.md` and is intended to be updated as the project evolves.*
