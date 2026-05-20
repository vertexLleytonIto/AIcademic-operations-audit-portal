# Academic Operations Portal

This repository contains a fictional GitHub Pages training site for the AI Challenge Week 2 **Academic Operations Audit Assistant** project.

All data on this site is synthetic. The campuses, staff names, contact details, readiness notes, and operational details are invented for AI workflow practice. The site does not contain real students, real staff, real schools, internal Vertex data, confidential information, or live operational links.

## Purpose

The site gives participants a realistic public-facing web source to audit alongside spreadsheets and PDF notes. It is intentionally designed with a few inconsistencies, stale references, contact conflicts, and incomplete support details so participants can practice using Codex to compare web content against source files.

## Files

- `index.html`: weekly academic operations update
- `campus-directory.html`: public-facing campus directory
- `cedar-vale-learning-center-profile.html`: high-priority campus profile
- `eastbank-stem-school-profile.html`: second campus profile with readiness issues
- `styles.css`: lightweight shared styling

## View Locally

Open `index.html` directly in a browser, or start a simple local static server from the repository root:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## GitHub Pages

This site is intended to deploy from the `main` branch and repository root using GitHub Pages.

Expected live URL:

```text
https://vertexlleytonito.github.io/AIcademic-operations-audit-portal/
```

After pushing changes to `main`, confirm GitHub Pages is configured to serve from:

- Branch: `main`
- Folder: `/ (root)`
