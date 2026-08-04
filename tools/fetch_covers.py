# -*- coding: utf-8 -*-
"""
Fetch journal cover images into assets/covers/.

Run from the project root:

    python tools/fetch_covers.py

It reads the journal names out of assets/js/publications.js, looks up each
journal's ISSN via Crossref, then tries the publishers' public cover-image
endpoints. Anything it can't find is reported so you can drop the file in by
hand -- the site falls back to a typographic card, so gaps are harmless.

NOTE ON RIGHTS: journal cover art belongs to the publisher. Showing the cover
of an issue containing your own paper is common practice on lab sites, but it
is the publisher's image, not yours. If you would rather not host them, delete
assets/covers/*.jpg and the site still looks finished.
"""
import io, json, os, re, sys, time, urllib.request, urllib.error

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBS = os.path.join(ROOT, 'assets', 'js', 'publications.js')
OUT = os.path.join(ROOT, 'assets', 'covers')
MAILTO = 'deepak.geo@outlook.com'
UA = 'BASIL-site/1.0 (mailto:%s)' % MAILTO


def fetch(url, timeout=25):
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.read(), r.headers.get('Content-Type', '')


def journals_from_publications():
    """(journal name, cover slug) pairs, in catalogue order, de-duplicated."""
    src = io.open(PUBS, encoding='utf-8').read()
    pairs, seen = [], set()
    for m in re.finditer(r'journal:\s*"([^"]*)"[\s\S]{0,220}?cover:\s*"([^"]*)"', src):
        name, cover = m.group(1), m.group(2)
        if not name or not cover or name in seen:
            continue
        seen.add(name)
        pairs.append((name, os.path.basename(cover)))
    return pairs


def issn_for(journal):
    """Ask Crossref for the journal's ISSNs (print and electronic)."""
    url = ('https://api.crossref.org/journals?query=%s&rows=5&mailto=%s'
           % (urllib.parse.quote(journal), MAILTO))
    try:
        data = json.loads(fetch(url)[0])
    except Exception:
        return []
    for item in data.get('message', {}).get('items', []):
        if item.get('title', '').strip().lower() == journal.strip().lower():
            return [i for i in (item.get('ISSN') or []) if i]
    items = data.get('message', {}).get('items', [])
    return [i for i in (items[0].get('ISSN') or [])] if items else []


def candidate_urls(issns):
    """Public cover endpoints, tried in order."""
    urls = []
    for issn in issns:
        bare = issn.replace('-', '')
        # Elsevier serves journal covers at a predictable path
        urls.append('https://ars.els-cdn.com/content/image/X%s.jpg' % bare)
    return urls


def main():
    import urllib.parse  # noqa: F401  (used in issn_for)
    if not os.path.isdir(OUT):
        os.makedirs(OUT)

    journals = journals_from_publications()
    print('%d distinct journals in the catalogue\n' % len(journals))

    got, missing = [], []
    for name, filename in journals:
        dest = os.path.join(OUT, filename)
        if os.path.exists(dest):
            print('  skip (already have)  %s' % filename)
            continue

        issns = issn_for(name)
        time.sleep(0.15)

        saved = False
        for url in candidate_urls(issns):
            try:
                body, ctype = fetch(url)
            except Exception:
                continue
            if 'image' in ctype and len(body) > 4000:
                io.open(dest, 'wb').write(body)
                print('  saved  %-52s %6.0f KB' % (filename, len(body) / 1024))
                got.append(name)
                saved = True
                break
        if not saved:
            missing.append((name, issns))
        time.sleep(0.15)

    print('\n%d saved, %d not found' % (len(got), len(missing)))
    if missing:
        print('\nNo public cover found for these - add by hand if you want them:')
        for name, issns in missing:
            print('  %-52s ISSN %s' % (name[:52], ', '.join(issns) or 'unknown'))
        print('\n(These simply keep the typographic fallback card.)')


if __name__ == '__main__':
    import urllib.parse
    main()
