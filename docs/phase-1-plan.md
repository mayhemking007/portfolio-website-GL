# Phase 1: Foundation & Setup — Execution Plan

This document is the **actionable plan** for Phase 1. Use it as a checklist; each step has clear commands and verification.

**Goal:** Working Next.js app with TypeScript, Tailwind, react-markdown, next-themes, and the folder structure from VISION.

---

## Prerequisites

- [ ] **Node.js** — v18+ (LTS recommended). Check: `node -v`
- [ ] **npm** — v9+. Check: `npm -v`

---

## Step 1: Initialize Next.js with App Router and TypeScript

Create the Next.js app from the project root (`portfolio/`). We need App Router and TypeScript; no `src/` directory so that `app/` lives at repo root.

**Option A — Using `create-next-app` (recommended)**

From the **parent** of `portfolio/` (e.g. `portfolio-github-like/`):

```bash
cd d:\resumes\portfolio-github-like
npx create-next-app@latest portfolio --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

When prompted (if any):

- Use TypeScript: **Yes**
- Use ESLint: **Yes**
- Use Tailwind CSS: **Yes**
- Use `src/` directory: **No**
- Use App Router: **Yes**
- Customize import alias: **No** (or keep `@/*`)

**Option B — If you are already inside `portfolio/` and it’s empty**

```bash
cd d:\resumes\portfolio-github-like\portfolio
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

**Verification**

- [ ] `package.json` exists with `next`, `react`, `react-dom`, `typescript`
- [ ] `app/` exists with `layout.tsx`, `page.tsx`, `globals.css`
- [ ] `tailwind.config.ts` (or `.js`) and `postcss.config.mjs` exist
- [ ] `npm run dev` starts the app; default Next page loads in browser

---

## Step 2: Install Additional Dependencies

From project root `portfolio/`:

```bash
cd d:\resumes\portfolio-github-like\portfolio
npm install react-markdown next-themes
```

- **react-markdown** — render markdown in the content panel (Phase 3).
- **next-themes** — dark/light theme toggle (Phase 5).

**Verification**

- [ ] `package.json` includes `"react-markdown"` and `"next-themes"`
- [ ] `npm run dev` still runs without errors

---

## Step 3: Create Folder Structure

Create the directories and minimal files so the structure matches VISION §6.

**Directories to create**

| Path           | Purpose                          |
|----------------|----------------------------------|
| `components/`  | UI components (Phase 2)          |
| `content/`     | Markdown files                   |
| `lib/`         | Helpers (e.g. file tree, Phase 3)|
| `public/`      | Static assets (Next.js may add)  |

**Files to add**

1. **`content/README.md`** — placeholder so the content folder is “real” and we can load it later.

   ```markdown
   # Portfolio

   Welcome. This repo is a portfolio in the style of a GitHub repository.
   ```

2. **`components/.gitkeep`** — so an empty `components/` is tracked (optional; you can add a placeholder component instead).

3. **`lib/.gitkeep`** — same for `lib/` (optional).

**Commands (PowerShell)**

```powershell
cd d:\resumes\portfolio-github-like\portfolio
mkdir components, content, lib -Force
New-Item -Path "content\README.md" -ItemType File -Force
# If you use .gitkeep:
# New-Item -Path "components\.gitkeep" -ItemType File -Force
# New-Item -Path "lib\.gitkeep" -ItemType File -Force
```

**Verification**

- [ ] `app/` — has `layout.tsx`, `page.tsx`, `globals.css`
- [ ] `components/` — exists (empty or with .gitkeep)
- [ ] `content/` — exists with `README.md`
- [ ] `lib/` — exists (empty or with .gitkeep)
- [ ] `public/` — exists (created by create-next-app or created manually)

---

## Step 4: Confirm Tailwind and TypeScript

- **Tailwind:** `app/globals.css` should include Tailwind directives (`@tailwind base;` etc.). If not, add them.
- **TypeScript:** `tsconfig.json` should exist; `app/layout.tsx` and `app/page.tsx` should be `.tsx` with no type errors.

**Verification**

- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors in `app/` (IDE or `npx tsc --noEmit`)

---

## Step 5: Minimal Page Check

Ensure the default page renders. You can keep the default Next.js welcome content or replace `app/page.tsx` with a single line to confirm the stack:

```tsx
export default function Home() {
  return <main className="p-8">Phase 1 — Portfolio foundation</main>;
}
```

**Verification**

- [ ] `npm run dev` runs without errors
- [ ] Opening the dev URL shows the page (default or the minimal line above)

---

## Phase 1 Checklist (Exit Criteria)

Before marking Phase 1 complete:

- [ ] Next.js app runs locally (`npm run dev`)
- [ ] TypeScript, Tailwind, react-markdown, next-themes are in place
- [ ] Folder structure: `app/`, `components/`, `content/` (with `README.md`), `lib/`, `public/`
- [ ] One simple page renders
- [ ] `npm run build` succeeds

---

## Optional: Add a README in Repo Root

In `portfolio/README.md` (repo root, not `content/README.md`), you can add:

```markdown
# Portfolio (GitHub-style)

Backend engineer portfolio that feels like browsing a GitHub repo.

## Run

- `npm install`
- `npm run dev`
- Open http://localhost:3000
```

---

## What’s Next

After Phase 1 is done, move to **Phase 2: Core Layout & UI Shell** — implement the repo header, file tree sidebar, and content viewer shell (see `process.md`).
