# Summit Public Accountability Portal

This repository contains the fictional public report portal for AI Challenge Week 2.

The portal is a static training website for Summit Charter Schools, a fictional Arizona charter network. It gives participants a realistic place to search campus profiles, navigate to report-card download links, and review methodology notes before extracting data from PDFs.

All site data is synthetic. The campuses, report values, URLs, and archive records are invented for workflow practice.

## Pages

- `index.html`: portal home and current release overview
- `campus-directory.html`: searchable and filterable campus directory
- `methodology.html`: methodology, source-page notes, and synthetic data disclosure
- `campuses/*.html`: ten campus profile pages matching `Campus Report Links.csv`
- `campus-data.js`: shared campus data from `_build_notes/Campus Performance Data Map.csv`
- `directory.js`: directory search and filters
- `campus-profile.js`: campus profile rendering
- `reports/current/`: planned location for current report-card PDFs
- `reports/archive/`: planned location for archive report PDFs

## Local URL

The intake CSV points to:

```text
http://localhost:8000/campuses/<campus-slug>.html
```

Start a local static server from this folder:

```powershell
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Live URL

After GitHub Pages deploys from `main`, the live portal should be available at:

```text
https://vertexlleytonito.github.io/AIcademic-operations-audit-portal/
```

## PDF Status

The current campus profile pages link to the 2025-2026 report-card PDFs under `reports/current/`. These PDFs are hosted by the public portal and should not be copied into the participant package.
