# BASIL — Biogeochemical Geoarchaeology Research Group

Website for the BASIL research group, Department of Applied Geology,
IIT (ISM) Dhanbad.

Plain HTML, CSS and JavaScript. **No build step, no npm, no framework.**
Edit a file, save it, refresh the browser — that's the whole workflow.

---

## Contents

- [Running it locally](#running-it-locally)
- [Folder layout](#folder-layout)
- [Common edits](#common-edits) — the bits you'll actually do
  - [Add a publication](#add-a-publication)
  - [Add journal cover images](#add-journal-cover-images)
  - [Add or remove a group member](#add-or-remove-a-group-member)
  - [Add a photo to the gallery](#add-a-photo-to-the-gallery)
  - [Add a project, instrument, or highlight](#add-a-project-instrument-or-highlight)
  - [Change the colours or fonts](#change-the-colours-or-fonts)
  - [Editing the navigation](#editing-the-navigation)
- [Publishing to GitHub Pages](#publishing-to-github-pages)
- [Things to know before you edit](#things-to-know-before-you-edit)

---

## Running it locally

Double-clicking `index.html` mostly works, but a local server behaves
exactly like the real site. From this folder:

```bash
python -m http.server 8777
```

Then open <http://localhost:8777>. Stop it with `Ctrl+C`.

---

## Folder layout

```
.
├── index.html            Home — intro, partner logos, news
├── research.html         Research themes + funded projects
├── team.html             Team members (one flat grid)
├── publications.html     Publication list (data comes from JS, see below)
├── facilities.html       Instruments and lab infrastructure
├── achievements.html     Research highlights + press coverage
├── gallery.html          Photo gallery with lightbox
├── contact.html          Contact details and profile links
│
├── assets/
│   ├── css/
│   │   └── style.css         All styling. Colours are set at the very top.
│   ├── js/
│   │   ├── publications.js   ← THE PUBLICATION LIST. Edit this to add papers.
│   │   └── app.js            Behaviour (menu, animations, filters, lightbox).
│   ├── images/               Photos: people, articles, partner logos, gallery.
│   ├── covers/               Journal cover images (optional — see below).
│   └── logo/                 BASIL logo in SVG.
│
└── README.md             This file.
```

---

## Common edits

### Add a publication

Open **`assets/js/publications.js`**. Copy any existing block, paste it at the
top of the list, and change the fields:

```js
  {
    id: 36,                                  // any unique number
    type: "journal",                         // "journal" | "conference" | "thesis"
    year: 2026,
    authors: ["Surname, A.B.", "Jha, D.K."],  // one quoted name each
    title: "Title of the paper",
    journal: "Quaternary Science Reviews",
    details: "325, 108480",                  // volume(issue), pages
    doi: "10.1016/j.quascirev.2024.108480",  // becomes the "View Article" button
    cover: "assets/covers/quaternary-science-reviews.jpg"
  },
```

Keep the commas between blocks. Leave a field as `""` if you don't have it
(or `[]` for authors). Names go one per quoted string so the site can tell
them apart — group members are highlighted automatically via `GROUP_AUTHORS`
at the top of `app.js`.

**You never need to update any counts.** The filter buttons, the year
dropdown and the tiles on the home page all count this list themselves.

### Add journal cover images

Each entry can show a cover thumbnail to the right. Until an image exists,
the site draws a neat card with the journal name on it, so the page always
looks finished — adding covers is optional polish.

To add one:

1. Save the image as a `.jpg` in `assets/covers/`.
2. Name it after the journal, lowercase, spaces and punctuation replaced
   with hyphens. `Quaternary Science Reviews` →
   `quaternary-science-reviews.jpg`.
3. Make sure the entry's `cover:` field points at that path.

Because the name is derived from the journal, **one file covers every paper
in that journal**. Roughly 3:4 portrait, around 300px wide, is plenty.

> On sourcing: journal cover art belongs to the publisher, not to the
> authors. Most publishers are relaxed about an author showing the cover of
> the issue their own paper appeared in, but the safest images are ones you
> own — your own graphical abstract, a figure from the paper, or a cover the
> publisher sent you. If in doubt, leave the slot empty; the fallback card
> looks intentional.

### Add or remove a group member

Open **`team.html`**. Everyone sits in a single grid with no hierarchy.
Copy a whole `<div class="team-card"> ... </div>` block, paste it where you
want the person to appear, and change the photo, name, role and institution.

Put the photo in `assets/images/` first. Square images look best — the card
is a square, and the name and role appear over the photo on hover.

When someone leaves, move their card into the **Alumni** block near the
bottom of the file and delete the `<!--` and `-->` markers around it.

### Add a photo to the gallery

Open **`gallery.html`**, copy one `<div class="gallery-card"> ... </div>`
block, and point it at your new file in
`assets/images/wix_gallery_exact/`.

Resize big photos first — anything over about 2000px wide is wasted and
slows the page down.

### Add a project, instrument, or highlight

Same pattern in each case: open the page, copy one card block, edit it.

| To add a…   | Open              | Copy the block                    |
| ----------- | ----------------- | --------------------------------- |
| Project     | `research.html`   | `<div class="project-card">`      |
| Instrument  | `facilities.html` | `<article class="facility-card">` |
| Highlight   | `achievements.html` | `<article class="blog-card">`   |
| News item   | `index.html`      | `<div class="news-item-card">`    |

`facilities.html` has a ready-made template near the bottom that's commented
out — remove the `<!--` and `-->` around it to switch it on.

**Press coverage** lives at the bottom of `achievements.html`. Each paper gets
one `<article class="media-group">` block holding the paper title, its citation
line, and a `<li>` per outlet. Copy a `<li>` to add another news item.

### Change the colours or fonts

Everything lives in the first 90 lines of **`assets/css/style.css`**:

```css
:root {
  --paper:  #FAF7F2;   /* page background */
  --accent: #96341F;   /* brick red — buttons, links, highlights */
  --ink:    #23180F;   /* headings */
  ...
}
```

Change a value once and it updates everywhere. The site is light-only, so
there is a single set of colours to keep track of.

Fonts are `--font-heading` and `--font-body` in the same block. If you swap
in a different font, update the Google Fonts `<link>` in the `<head>` of
**every** HTML file too.

### Editing the navigation

The header and footer are copied into every `.html` file. That's deliberate —
it keeps the site dependency-free and lets search engines read each page —
but it means **a nav change has to be made in all eight files**.

Find this block and edit it identically everywhere:

```html
<ul class="nav-links" id="nav-links">
  <li><a href="index.html" class="nav-link active">Home</a></li>
  ...
```

The `active` class marks the current page — it belongs on a different link
in each file.

---

## Publishing to GitHub Pages

1. Create a new repository on GitHub (public).
2. From this folder:

```bash
git init
git add .
git commit -m "BASIL group website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

3. On GitHub: **Settings → Pages → Source → Deploy from a branch**, pick
   `main` and `/ (root)`, then Save.
4. After a minute the site is live at
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

To update it later: edit, then

```bash
git add .
git commit -m "describe what changed"
git push
```

### Custom domain (optional)

In **Settings → Pages → Custom domain**, enter your domain. Then at your DNS
provider add a `CNAME` record pointing it to `YOUR-USERNAME.github.io`.

---

## Things to know before you edit

- **Publication counts are automatic.** Don't hard-code numbers anywhere;
  they're derived from `publications.js`.
- **Animations degrade safely.** Content slides in as you scroll, but if
  JavaScript is off, everything is simply visible. It also respects the
  operating system's "reduce motion" setting.
- **Images aren't optimised automatically.** Resize before adding: about
  1800px on the long edge is more than enough for full-width photos.
- **Keep the quote marks and commas** in `publications.js`. A missing comma
  stops the whole list from rendering. If the publication list ever appears
  blank, open the browser console (F12) — a syntax error will be named there.
