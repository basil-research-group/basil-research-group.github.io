/* ==========================================================================
   BASIL - site behaviour
   --------------------------------------------------------------------------
   Theme toggle, mobile menu, scroll animations, gallery lightbox and the
   publications filter. Every function bails out quietly if the elements it
   needs are not on the current page, so this one file is safe to load
   everywhere.

   The publication DATA lives in publications.js - edit that, not this.
   Section index:
     1. Setup & constants          6. Scroll reveal animations
     2. Page initialiser           7. Derived counts (filter labels, tiles)
     3. Theme toggle               8. Animated number counters
     4. Mobile menu                9. Gallery lightbox
     5. Header, progress, top     10. Publications search & filter
   ========================================================================== */

// --------------------------------------------------------------------------
// 2. Application Initializer
// --------------------------------------------------------------------------
const PREFERS_REDUCED_MOTION =
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Projects live on projects.html, so the home page can't count the cards.
// Keep this in step with the number of .project-card blocks on that page.
const PROJECT_COUNT = 4;

// Surnames + initials of group members, highlighted in every author list.
// Add a line when someone joins; matching is on the start of the name.
const GROUP_AUTHORS = [
  'Jha, D.',        // Deepak Kumar Jha (PI)
  'Vaishnav, H.',
  'Tripathi, V.',
  'Shrote, A.',
  'Shrey, S.',
  'Goel, S.',
];

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initHeaderState();
  initScrollSpy();
  initDerivedCounts();
  initNewsMarquee();
  initScrollAnimations();
  initCounters();
  initGalleryLightbox();
  initPublicationsHub();
});

// --------------------------------------------------------------------------
// 3. Theme Toggle Handler
// --------------------------------------------------------------------------
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;

  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme =
    localStorage.getItem('theme') || (systemDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;
  themeBtn.innerHTML = theme === 'dark' 
    ? '<i class="fa-solid fa-sun"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
}

// --------------------------------------------------------------------------
// 4. Mobile Navigation Menu
// --------------------------------------------------------------------------
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (!menuBtn || !navLinks) return;

  menuBtn.setAttribute('aria-expanded', 'false');

  // Replays the staggered item animation every time the menu is opened,
  // rather than relying on display:none -> flex to restart it.
  const replayStagger = () => {
    if (PREFERS_REDUCED_MOTION) return;
    navLinks.querySelectorAll('li').forEach(li => {
      li.style.animation = 'none';
      void li.offsetWidth;        // force reflow
      li.style.animation = '';
    });
  };

  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('active');
    if (open) replayStagger();
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.innerHTML = open
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });
}

// --------------------------------------------------------------------------
// 5. Sticky Header, Scroll Progress Bar & Back-to-Top Button
// --------------------------------------------------------------------------
function initHeaderState() {
  const header = document.getElementById('header');
  const progress = document.getElementById('scroll-progress');
  const fab = document.getElementById('scroll-top-fab');

  const update = () => {
    const scrolled = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(scrolled / max, 1) : 0;

    if (header) header.classList.toggle('scrolled', scrolled > 12);
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    if (fab) fab.classList.toggle('show', scrolled > 600);
  };

  // rAF-throttled so the handler never runs more than once per frame
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }, { passive: true });

  window.addEventListener('resize', update, { passive: true });

  if (fab) {
    fab.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: PREFERS_REDUCED_MOTION ? 'auto' : 'smooth'
      });
    });
  }

  update();
}

// --------------------------------------------------------------------------
// 6. Scroll Spy — highlights the nav link for the section in view
// --------------------------------------------------------------------------
function initScrollSpy() {
  const links = Array.from(document.querySelectorAll('.nav-link'));
  if (!links.length) return;

  const map = new Map();
  links.forEach(link => {
    const id = link.getAttribute('href');
    if (!id || !id.startsWith('#')) return;
    const section = document.querySelector(id);
    if (section) map.set(section, link);
  });

  if (!map.size) return;

  const setActive = (link) => {
    links.forEach(l => l.classList.toggle('active', l === link));
  };

  const observer = new IntersectionObserver((entries) => {
    // Pick the visible section closest to the top of the viewport
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

    if (visible) setActive(map.get(visible.target));
  }, { rootMargin: '-80px 0px -55% 0px', threshold: 0 });

  map.forEach((_, section) => observer.observe(section));
}

// --------------------------------------------------------------------------
// 7. Scroll Reveal Animations (pop-in, auto-staggered per group)
// --------------------------------------------------------------------------
function initScrollAnimations() {
  const items = Array.from(document.querySelectorAll('[data-reveal]'));
  if (!items.length) return;

  if (PREFERS_REDUCED_MOTION || !('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  // Siblings reveal one after another rather than all at once. Sliding
  // content gets a longer step so the cascade reads clearly left-to-right.
  const seen = new Map();
  items.forEach(el => {
    const parent = el.parentElement;
    const index = seen.get(parent) || 0;
    seen.set(parent, index + 1);

    const slides = el.dataset.reveal === 'left' || el.dataset.reveal === 'right';
    const step = slides ? 120 : 70;
    const cap = slides ? 720 : 400;
    el.style.setProperty('--reveal-delay', `${Math.min(index * step, cap)}ms`);
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);   // reveal once, then stop watching
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => observer.observe(el));

  // Safety net: anything already on screen after load is shown regardless,
  // so content is never left invisible if the observer doesn't fire.
  window.addEventListener('load', () => {
    items.forEach(el => {
      if (el.classList.contains('is-visible')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
        observer.unobserve(el);
      }
    });
  });
}

// --------------------------------------------------------------------------
// 7-B. News Ticker
// Clones the cards once so the track can slide -50% and loop seamlessly,
// then sets the duration from the real width to keep the speed constant
// however many updates are listed.
// --------------------------------------------------------------------------
function initNewsMarquee() {
  const marquee = document.getElementById('news-marquee');
  const track = document.getElementById('news-track');
  if (!marquee || !track) return;

  const cards = Array.from(track.children);
  if (!cards.length) return;

  if (PREFERS_REDUCED_MOTION) return;   // CSS falls back to a scrollable row

  // Duplicate for the seamless loop; the copies are decorative only
  cards.forEach(card => {
    const copy = card.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    track.appendChild(copy);
  });

  // ~70 pixels per second, so more cards means a longer cycle, not a faster one
  const setSpeed = () => {
    const distance = track.scrollWidth / 2;
    track.style.setProperty('--marquee-duration', `${Math.max(20, distance / 70)}s`);
  };

  setSpeed();
  window.addEventListener('resize', setSpeed, { passive: true });
}

// --------------------------------------------------------------------------
// 8. Derived Counts
// Every number shown on the page is computed from the PUBLICATIONS dataset,
// so filter labels, the hero button and the stat tiles can never disagree.
// --------------------------------------------------------------------------
function initDerivedCounts() {
  const journals = PUBLICATIONS.filter(p => p.type === 'journal').length;
  const talks = PUBLICATIONS.filter(p => p.type === 'conference').length;
  // Count the cards when we're on the projects page, else fall back
  const projects = document.querySelectorAll('.project-card').length || PROJECT_COUNT;

  const setText = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };

  setText('.pub-type-btn[data-type="journal"]', `Journal Articles (${journals})`);
  setText('.pub-type-btn[data-type="conference"]', `Conference (${talks})`);

  // A Thesis button only appears if the catalog actually contains one
  const theses = PUBLICATIONS.filter(p => p.type === 'thesis').length;
  const confBtn = document.querySelector('.pub-type-btn[data-type="conference"]');
  if (theses && confBtn && !document.querySelector('.pub-type-btn[data-type="thesis"]')) {
    const btn = document.createElement('button');
    btn.className = 'pub-type-btn';
    btn.dataset.type = 'thesis';
    btn.textContent = `Thesis (${theses})`;
    confBtn.insertAdjacentElement('afterend', btn);
  }

  // Year dropdown is built from the years actually present in the catalog
  const yearSelect = document.getElementById('pub-year-select');
  if (yearSelect) {
    const years = [...new Set(PUBLICATIONS.map(p => p.year).filter(Boolean))].sort((a, b) => b - a);
    yearSelect.innerHTML =
      `<option value="all">All Years (${years[years.length - 1]}–${years[0]})</option>` +
      years.map(y => `<option value="${y}">${y}</option>`).join('');
  }

  const heroPubBtn = document.querySelector('.hero-cta .btn-primary');
  if (heroPubBtn) {
    heroPubBtn.innerHTML =
      `<i class="fa-solid fa-book-open"></i> Publications (${PUBLICATIONS.length})`;
  }

  const stats = {
    papers: journals,
    talks: talks,
    projects: projects
  };

  document.querySelectorAll('.stat-box').forEach(box => {
    const key = box.querySelector('.stat-lbl');
    const num = box.querySelector('.stat-num');
    if (!key || !num) return;
    const value = stats[key.textContent.trim().toLowerCase()];
    if (value !== undefined) num.dataset.countTo = value;
  });
}

// --------------------------------------------------------------------------
// 9. Animated Stat Counters
// --------------------------------------------------------------------------
function initCounters() {
  const counters = Array.from(document.querySelectorAll('[data-count-to]'));
  if (!counters.length) return;

  const run = (el) => {
    const target = parseInt(el.dataset.countTo, 10) || 0;

    if (PREFERS_REDUCED_MOTION) {
      el.textContent = target;
      return;
    }

    const duration = 1100;
    const start = performance.now();

    const step = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);   // ease-out cubic
      el.textContent = Math.round(target * eased);
      if (t < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  if (!('IntersectionObserver' in window)) {
    counters.forEach(run);
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      run(entry.target);
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

// --------------------------------------------------------------------------
// 10. Gallery Lightbox
// --------------------------------------------------------------------------
function initGalleryLightbox() {
  const cards = Array.from(document.querySelectorAll('.gallery-card'));
  const box = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');

  if (!cards.length || !box || !img) return;

  const sources = cards.map(card => {
    const el = card.querySelector('img');
    return { src: el ? el.src : '', alt: el ? el.alt : '' };
  });

  let index = 0;
  let lastFocused = null;

  const show = (i) => {
    index = (i + sources.length) % sources.length;
    img.src = sources[index].src;
    img.alt = sources[index].alt;
    if (counter) counter.textContent = `${index + 1} / ${sources.length}`;
  };

  const open = (i) => {
    lastFocused = document.activeElement;
    show(i);
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    const closeBtn = document.getElementById('lightbox-close');
    if (closeBtn) closeBtn.focus();
  };

  const close = () => {
    box.classList.remove('open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  cards.forEach((card, i) => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open gallery photo ${i + 1} of ${cards.length}`);

    card.addEventListener('click', () => open(i));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(i);
      }
    });
  });

  const bind = (id, fn) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', (e) => { e.stopPropagation(); fn(); });
  };

  bind('lightbox-close', close);
  bind('lightbox-prev', () => show(index - 1));
  bind('lightbox-next', () => show(index + 1));

  // Click the backdrop (but not the image) to dismiss
  box.addEventListener('click', (e) => {
    if (e.target === box) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!box.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
}

// --------------------------------------------------------------------------
// 11. Publications Hub Filter & Search System
// --------------------------------------------------------------------------
function initPublicationsHub() {
  const container = document.getElementById('publications-list');
  const searchInput = document.getElementById('pub-search');
  const typeBtns = document.querySelectorAll('.pub-type-btn');
  const yearSelect = document.getElementById('pub-year-select');
  const countBadge = document.getElementById('pub-count-badge');

  if (!container) return;

  let activeType = 'all';
  let activeYear = 'all';
  let searchQuery = '';

  function filterAndRender() {
    const filtered = PUBLICATIONS.filter(pub => {
      const matchesType = activeType === 'all' || pub.type === activeType;
      const matchesYear = activeYear === 'all' || pub.year.toString() === activeYear;
      const matchesSearch = searchQuery === '' || 
        pub.title.toLowerCase().includes(searchQuery) ||
        pub.authors.toLowerCase().includes(searchQuery) ||
        pub.journal.toLowerCase().includes(searchQuery);

      return matchesType && matchesYear && matchesSearch;
    });

    renderPublicationsList(container, filtered, searchQuery);
    if (countBadge) {
      countBadge.textContent = `${filtered.length} Items Listed`;
    }
  }

  // One delegated listener instead of an inline onclick per card
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-copy');
    if (!btn) return;
    copyCitation(btn.dataset.citation || '', btn);
  });

  typeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeType = btn.getAttribute('data-type');
      filterAndRender();
    });
  });

  if (yearSelect) {
    yearSelect.addEventListener('change', (e) => {
      activeYear = e.target.value;
      filterAndRender();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterAndRender();
    });
  }

  filterAndRender();
}

function renderPublicationsList(container, items, query) {
  if (items.length === 0) {
    container.innerHTML = `
      <div class="pub-empty">
        <p>No publications match your search. Try a different keyword, year, or type.</p>
      </div>
    `;
    return;
  }

  const mark = (value) => highlight(escapeHtml(value), query);

  const LABEL = { journal: 'Journal Article', conference: 'Conference', thesis: 'Thesis' };

  container.innerHTML = items.map((item, i) => `
    <article class="pub-card pub-enter" id="pub-${item.id}" style="animation-delay:${Math.min(i * 40, 320)}ms">

      <div class="pub-main">
        <div class="pub-card-header">
          <span class="pub-badge">${LABEL[item.type] || 'Publication'}</span>
          <span class="pub-year">${item.year || ''}</span>
        </div>

        <div class="pub-text">
          ${renderAuthors(item.authors, query)}${item.year ? `(${item.year}). ` : ''}
          &ldquo;${mark(item.title)}&rdquo;.
          ${item.journal ? `<em>${mark(item.journal)}</em>` : ''}${item.details ? `, ${escapeHtml(item.details)}` : ''}.
        </div>

        <div class="pub-card-footer">
          <button class="btn-copy" type="button" data-citation="${escapeHtml(buildCitation(item))}">
            <i class="fa-regular fa-copy"></i> Copy Citation
          </button>
          ${item.doi ? `
          <a href="https://doi.org/${escapeHtml(item.doi)}" target="_blank" rel="noopener" class="btn-pdf-request">
            <i class="fa-solid fa-up-right-from-square"></i> View Article
          </a>` : ''}
          <a href="mailto:deepak.geo@outlook.com?subject=PDF Request: ${encodeURIComponent(item.title)}" class="btn-pdf-request">
            <i class="fa-solid fa-file-pdf"></i> Request PDF
          </a>
        </div>
      </div>

      ${renderCover(item)}
    </article>
  `).join('');

  // A cover image that 404s removes itself, revealing the typographic card beneath
  container.querySelectorAll('.pub-cover img').forEach(img => {
    img.addEventListener('error', () => img.remove());
  });
}

/**
 * Cover slot shown to the right of each entry.
 * Drop a JPG into assets/covers/ named after the journal slug (see README)
 * and it appears automatically; until then the journal name is set as a card.
 */
function renderCover(item) {
  if (!item.journal) return '<div class="pub-cover" aria-hidden="true"></div>';

  return `
      <div class="pub-cover" aria-hidden="true">
        <span class="pub-cover-fallback">${escapeHtml(item.journal)}</span>
        ${item.cover ? `<img src="${escapeHtml(item.cover)}" alt="" loading="lazy">` : ''}
      </div>`;
}

/**
 * Author list.
 * Names are stored as "Surname, Initials", so a comma already sits inside
 * every name. Separating the authors with commas as well makes "Jha, D.K."
 * read as two people - a real problem on papers carrying both Jha, D.K. and
 * Jha, G. Semicolons between authors remove the ambiguity, and members of
 * the group are picked out in the accent colour.
 */
function renderAuthors(authors, query) {
  const list = Array.isArray(authors) ? authors : (authors ? [authors] : []);
  if (!list.length) return '';

  const html = list.map(name => {
    const marked = highlight(escapeHtml(name), query);
    return isGroupMember(name)
      ? `<span class="pub-author-group">${marked}</span>`
      : marked;
  }).join('; ');

  return `<span class="pub-authors">${html}</span> `;
}

/** True for names belonging to BASIL, so they stand out in a long author list. */
function isGroupMember(name) {
  return GROUP_AUTHORS.some(g => name.toLowerCase().startsWith(g.toLowerCase()));
}

/** Plain-text citation used by the Copy button. */
function buildCitation(item) {
  const bits = [];
  const authors = Array.isArray(item.authors) ? item.authors.join('; ') : item.authors;
  if (authors) bits.push(authors);
  if (item.year) bits.push(`(${item.year}).`);
  bits.push(`${item.title}.`);
  if (item.journal) bits.push(item.journal + (item.details ? ` ${item.details}` : '') + '.');
  if (item.doi) bits.push(`https://doi.org/${item.doi}`);
  return bits.join(' ');
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Wraps the active search term so matches stand out in the results
function highlight(escapedText, query) {
  if (!query) return escapedText;
  const safe = escapeHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return escapedText.replace(new RegExp(`(${safe})`, 'gi'), '<mark>$1</mark>');
}

function copyCitation(text, buttonEl) {
  if (!navigator.clipboard) return;

  navigator.clipboard.writeText(text).then(() => {
    const originalText = buttonEl.innerHTML;
    buttonEl.classList.add('copied');
    buttonEl.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
    setTimeout(() => {
      buttonEl.classList.remove('copied');
      buttonEl.innerHTML = originalText;
    }, 2000);
  });
}
