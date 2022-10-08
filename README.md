# Lucio R. Salinas — Academic website

This repository is a **Hugo source site** using **GitHub Pages + GitHub Actions**.

## Directory tree

```text
.
├── .github/
│   └── workflows/
│       └── hugo.yml
├── .gitignore
├── CNAME
├── README.md
├── hugo.toml
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── images/
│   └── js/
│       └── main.js
├── content/
│   ├── _index.en.md
│   ├── _index.es.md
│   ├── contact.en.md
│   ├── contact.es.md
│   ├── experience.en.md
│   ├── experience.es.md
│   ├── projects.en.md
│   ├── projects.es.md
│   ├── teaching.en.md
│   ├── teaching.es.md
│   └── publications/
│       ├── _index.en.md
│       └── _index.es.md
├── data/
│   ├── profile.yaml
│   ├── projects.yaml
│   └── publications.yaml
├── i18n/
│   ├── en.toml
│   └── es.toml
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   └── single.html
│   ├── contact/
│   │   └── single.html
│   ├── experience/
│   │   └── single.html
│   ├── partials/
│   │   ├── footer.html
│   │   ├── head.html
│   │   ├── page-hero.html
│   │   └── site-nav.html
│   ├── projects/
│   │   └── single.html
│   ├── publications/
│   │   └── list.html
│   ├── teaching/
│   │   └── single.html
│   ├── 404.html
│   └── index.html
└── static/
    ├── CNAME
    ├── img/
    │   ├── avatar.jpeg
    │   └── favicon.svg
    └── uploads/
```

## GitHub Pages deployment

1. Push this source tree to the `main` branch of `LucioRS.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push any change to `main`.
5. GitHub Actions will build and deploy the site.

## Local development

Install **Hugo Extended**, then run:

```bash
hugo server
```

For a production build:

```bash
hugo --gc --minify
```

## Where to edit content later

- `data/profile.yaml` → bio, positions, education, awards, memberships, contact details.
- `data/projects.yaml` → projects and technology transfer.
- `data/publications.yaml` → selected publications and full lists.
- `content/*.es.md` and `content/*.en.md` → page titles and introductory text.
- `assets/css/main.css` → styling.
- `layouts/` → page structure and templates.
