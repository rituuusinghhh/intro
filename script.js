/* =====================================================================
   script.js — builds the website from content.js
   You do NOT need to edit this file. Edit content.js instead.
   ===================================================================== */
(function () {
  "use strict";

  var S = window.SITE;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var PH_PROFILE = "assets/images/placeholder-profile.svg";
  var PH_IMAGE = "assets/images/placeholder.svg";

  /* ---------- Friendly error if content.js has a typo ---------- */
  if (!S || typeof S !== "object") {
    var main = $("#main");
    if (main) {
      main.innerHTML = '<div style="max-width:640px;margin:140px auto;padding:24px;text-align:center;font-family:system-ui,sans-serif">' +
        '<h2>content.js could not be read</h2>' +
        '<p>There is probably a missing quote ( " ), comma ( , ) or bracket in <b>content.js</b>. ' +
        'Open it on GitHub, look at the most recent change and fix it — or use the History button to go back to the last working version.</p></div>';
    }
    return;
  }

  var C = S.contact || {};
  var ST = S.settings || {};

  /* ---------- Icons (free MIT "Feather" style, inline = no downloads) ---------- */
  var ICONS = {
    instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>',
    twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
    "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
    "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
    award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
    "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    video: '<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>',
    check: '<polyline points="20 6 9 17 4 12"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
    menu: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
    x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    "chevron-left": '<polyline points="15 18 9 12 15 6"/>',
    "chevron-right": '<polyline points="9 18 15 12 9 6"/>',
    "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>',
    "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
    "plus": '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'
  };

  function icon(name, cls) {
    return '<svg class="icon ' + (cls || "") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.globe) + "</svg>";
  }

  /* ---------- Text helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  // escape + highlight [EDIT: ...] placeholders
  function t(s) {
    var out = esc(s);
    if (ST.highlightPlaceholders !== false) out = out.replace(/\[EDIT[^\]]*\]/g, '<mark class="ph">$&</mark>');
    return out;
  }
  function paras(arr) {
    return (arr || []).map(function (p) { return "<p>" + t(p) + "</p>"; }).join("");
  }
  function d(i) { return ' style="--d:' + ((i % 6) * 70) + 'ms"'; }
  function isPh(u) { return !u || /YOUR[_-]|XXXX|example\.com/i.test(String(u)); }
  function slug(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

  function img(src, alt, cls, fallback, eager) {
    return '<img class="' + (cls || "") + '" src="' + esc(src || fallback) + '" alt="' + esc(alt || "") + '" ' +
      (eager ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async" data-fallback="' + esc(fallback) + '">';
  }

  function linkAttrs(url) {
    if (isPh(url)) return 'href="#" data-unset="1"';
    if (/^mailto:|^tel:/i.test(url)) return 'href="' + esc(url) + '"';
    return 'href="' + esc(url) + '" target="_blank" rel="noopener noreferrer"';
  }

  function waUrl(text) {
    var w = C.whatsapp || {};
    var raw = String(w.number || "");
    if (/X{2,}/i.test(raw)) return null;
    var digits = raw.replace(/\D/g, "");
    if (digits.length < 8) return null;
    return "https://wa.me/" + digits + "?text=" + encodeURIComponent(text || w.message || "");
  }

  function head(key) {
    var s = (S.sections || {})[key] || {};
    return '<div class="section__head reveal"><p class="eyebrow">' + t(s.eyebrow || "") + '</p><h2 class="section__title">' + t(s.title || "") + "</h2>" +
      (s.intro ? '<p class="section__intro">' + t(s.intro) + "</p>" : "") + "</div>";
  }

  function chipsRow(labels, activeAll, attr) {
    return '<div class="filters reveal" role="group" aria-label="Filter" data-filters="' + attr + '">' +
      '<button type="button" class="filter is-active" data-f="all" aria-pressed="true">All</button>' +
      labels.map(function (l) { return '<button type="button" class="filter" data-f="' + esc(l.key) + '" aria-pressed="false">' + esc(l.label) + "</button>"; }).join("") + "</div>";
  }

  function wireFilters(root, onChange) {
    var bar = $("[data-filters]", root);
    if (!bar) return;
    bar.addEventListener("click", function (e) {
      var b = e.target.closest(".filter");
      if (!b) return;
      $$(".filter", bar).forEach(function (x) { var on = x === b; x.classList.toggle("is-active", on); x.setAttribute("aria-pressed", on ? "true" : "false"); });
      onChange(b.getAttribute("data-f"));
    });
  }

  /* =====================================================================
     RENDERERS
     ===================================================================== */
  function renderMeta() {
    var seo = S.seo || {};
    if (seo.title) {
      document.title = seo.title;
      setM("property", "og:title", seo.title);
      setM("name", "twitter:title", seo.title);
    }
    if (seo.description) {
      setM("name", "description", seo.description);
      setM("property", "og:description", seo.description);
      setM("name", "twitter:description", seo.description);
    }
    var b = S.brand || {};
    setM("property", "og:site_name", b.name || "");
    // structured data for search engines
    var ld = {
      "@context": "https://schema.org", "@type": "Person", name: b.name || "",
      jobTitle: (b.roles || []).join(", "),
      sameAs: (C.links || []).filter(function (l) { return !isPh(l.url); }).map(function (l) { return l.url; })
    };
    var el = $("#jsonld");
    if (el) el.textContent = JSON.stringify(ld);
    // accent colour
    if (ST.accentColor) document.documentElement.style.setProperty("--accent", ST.accentColor);
  }
  function setM(attr, key, val) {
    var m = document.querySelector("meta[" + attr + '="' + key + '"]');
    if (m) m.setAttribute("content", val);
  }

  function renderHero() {
    var b = S.brand || {};
    var parts = String(b.name || "").trim().split(/\s+/);
    var first = parts.shift() || "";
    var rest = parts.join(" ");
    $("#heroName").innerHTML = esc(first) + (rest ? '<br><span class="grad-text">' + esc(rest) + "</span>" : "");
    $("#logoMark").textContent = b.logoText || "";
    $("#logoName").textContent = b.name || "";

    var badge = $("#heroBadge");
    if (b.badge) badge.innerHTML = '<span class="pulse"></span>' + t(b.badge); else badge.hidden = true;
    $("#heroTagline").innerHTML = t(b.tagline);
    $("#heroIntro").innerHTML = t(b.intro);
    var btn = b.buttons || {};
    if (btn.journey) $("#btnJourney").textContent = btn.journey;
    if (btn.work) $("#btnWork").textContent = btn.work;
    if (btn.contact) $("#btnContact").textContent = btn.contact;

    $("#heroPhotoWrap").innerHTML = img(b.photo, (b.name || "") + " — profile photograph", "", PH_PROFILE, true);

    $("#heroChips").innerHTML = (b.heroChips || []).slice(0, 3).map(function (c, i) {
      return '<div class="chip chip--' + (i + 1) + ' glass">' + icon(c.icon, "chip__icon") + "<div><b>" + t(c.label) + "</b><small>" + t(c.sub) + "</small></div></div>";
    }).join("");

    // marquee (duplicated for a seamless loop)
    var words = b.marquee || [];
    if (words.length) {
      var one = words.map(function (w) { return "<span>" + esc(w) + "</span>"; }).join("");
      $("#marquee").innerHTML = '<div class="marquee__set">' + one + '</div><div class="marquee__set">' + one + "</div>";
    } else { $(".marquee").hidden = true; }

    typer($("#typed"), b.roles || []);
  }

  function typer(el, words) {
    if (!words.length) return;
    if (reduced || words.length < 2) { el.textContent = words.join(" · "); return; }
    var w = 0, i = 0, del = false;
    (function tick() {
      var word = words[w];
      el.textContent = word.slice(0, i);
      if (!del) {
        if (i < word.length) { i++; setTimeout(tick, 85); } else { del = true; setTimeout(tick, 1700); }
      } else {
        if (i > 0) { i--; setTimeout(tick, 40); } else { del = false; w = (w + 1) % words.length; setTimeout(tick, 350); }
      }
    })();
  }

  function renderAbout() {
    var a = S.about || {};
    var photo = a.photo || (S.brand || {}).photo;
    var facts = (a.facts || []).map(function (f) { return "<div><dt>" + t(f.label) + "</dt><dd>" + t(f.value) + "</dd></div>"; }).join("");
    var traits = (a.traits || []).map(function (x, i) {
      return '<div class="trait glass reveal"' + d(i) + "><h3>" + t(x.title) + "</h3><p>" + t(x.text) + "</p></div>";
    }).join("");
    var vent = (a.ventures || []).map(function (v, i) {
      var inner = '<span class="venture__type">' + t(v.type) + "</span><h4>" + t(v.name) + "</h4><p>" + t(v.text) + "</p>";
      return (v.url && !isPh(v.url))
        ? '<a class="venture glass reveal"' + d(i) + " " + linkAttrs(v.url) + ">" + inner + icon("arrow-up-right", "venture__go") + "</a>"
        : '<div class="venture glass reveal"' + d(i) + ">" + inner + "</div>";
    }).join("");

    $("#about .container").innerHTML = head("about") +
      '<div class="about">' +
        '<figure class="about__photo reveal">' + img(photo, S.brand.name, "", PH_PROFILE) +
          (a.photoCaption ? '<figcaption class="glass">' + t(a.photoCaption) + "</figcaption>" : "") + "</figure>" +
        '<div class="about__body reveal">' +
          (a.lead ? '<p class="lead">' + t(a.lead) + "</p>" : "") + paras(a.paragraphs) +
          (facts ? '<dl class="facts">' + facts + "</dl>" : "") +
        "</div></div>" +
      (traits ? '<div class="traits">' + traits + "</div>" : "") +
      (vent ? '<h3 class="subhead reveal">' + t(a.venturesTitle || "Associated with") + '</h3><div class="ventures">' + vent + "</div>" : "");
  }

  function renderJourney() {
    var J = S.journey || {};
    var items = J.items || [];
    var labels = J.typeLabels || {};
    var order = ["education", "experience", "milestone", "achievement"];
    var present = order.filter(function (k) { return items.some(function (i) { return i.type === k; }); });

    var html = items.map(function (it, i) {
      var pts = (it.points || []).length
        ? '<ul class="t-points">' + it.points.map(function (p) { return "<li>" + t(p) + "</li>"; }).join("") + '</ul><button type="button" class="t-toggle" aria-expanded="false">' + icon("plus") + "<span>More</span></button>"
        : "";
      return '<article class="t-item reveal" data-type="' + esc(it.type) + '"' + d(i) + '><span class="t-dot"></span><div class="t-card glass">' +
        '<div class="t-meta"><span class="t-type">' + esc(labels[it.type] || it.type) + '</span><span class="t-period">' + t(it.period) + "</span></div>" +
        "<h3>" + t(it.title) + "</h3>" + (it.org ? '<p class="t-org">' + t(it.org) + "</p>" : "") +
        "<p>" + t(it.text) + "</p>" + pts + "</div></article>";
    }).join("");

    var root = $("#journey .container");
    root.innerHTML = head("journey") +
      chipsRow(present.map(function (k) { return { key: k, label: labels[k] || k }; }), true, "journey") +
      '<div class="timeline" id="timeline">' + html + "</div>";

    var tl = $("#timeline");
    function layout() {
      $$(".t-item:not([hidden])", tl).forEach(function (el, i) { el.setAttribute("data-side", i % 2 ? "right" : "left"); });
    }
    layout();
    wireFilters(root, function (f) {
      $$(".t-item", tl).forEach(function (el) {
        var show = f === "all" || el.getAttribute("data-type") === f;
        el.hidden = !show;
        if (show) el.classList.add("in");
      });
      layout();
    });
    tl.addEventListener("click", function (e) {
      var b = e.target.closest(".t-toggle");
      if (!b) return;
      var card = b.closest(".t-card");
      var open = card.classList.toggle("open");
      b.setAttribute("aria-expanded", open ? "true" : "false");
      $("span", b).textContent = open ? "Less" : "More";
    });
  }

  function renderSkills() {
    var showLv = ST.showSkillLevels === true;
    var cards = (S.skills || []).map(function (s, i) {
      var lv = Math.max(0, Math.min(100, Number(s.level) || 0));
      return '<article class="skill glass reveal"' + d(i) + '><div class="skill__icon">' + icon(s.icon) + "</div><h3>" + t(s.name) + "</h3><p>" + t(s.text) + "</p>" +
        (showLv ? '<div class="bar" role="img" aria-label="' + lv + ' percent"><span style="--w:' + lv + '%"></span></div>' : "") + "</article>";
    }).join("");
    $("#skills .container").innerHTML = head("skills") + '<div class="skills">' + cards + "</div>";
  }

  function renderProjects() {
    var P = S.projects || {};
    var items = P.items || [];
    var cats = (P.categories || []).filter(function (c) { return items.some(function (i) { return i.category === c; }); });
    items.forEach(function (i) { if (cats.indexOf(i.category) < 0 && i.category) cats.push(i.category); });

    var cards = items.map(function (p, i) {
      var link = p.link ? '<a class="link-arrow" ' + linkAttrs(p.link) + ">View project " + icon("arrow-up-right") + "</a>" : "";
      return '<article class="project glass reveal" data-cat="' + esc(slug(p.category)) + '"' + d(i) + '><div class="project__media">' + img(p.image, p.title, "", PH_IMAGE) +
        '<span class="tag">' + t(p.category) + '</span></div><div class="project__body"><h3>' + t(p.title) + "</h3><p>" + t(p.text) + "</p>" + link + "</div></article>";
    }).join("");

    var root = $("#projects .container");
    root.innerHTML = head("projects") +
      chipsRow(cats.map(function (c) { return { key: slug(c), label: c }; }), true, "projects") +
      '<div class="projects" id="projectGrid">' + cards + "</div>";
    wireFilters(root, function (f) {
      $$(".project", root).forEach(function (el) {
        var show = f === "all" || el.getAttribute("data-cat") === f;
        el.hidden = !show;
        if (show) el.classList.add("in");
      });
    });
  }

  var galleryItems = [];
  function renderGallery() {
    galleryItems = S.gallery || [];
    var cats = [];
    galleryItems.forEach(function (g) { if (g.category && cats.indexOf(g.category) < 0) cats.push(g.category); });
    var html = galleryItems.map(function (g, i) {
      return '<button type="button" class="g-item reveal" data-cat="' + esc(slug(g.category)) + '" data-i="' + i + '" aria-label="Open photo: ' + esc(g.caption || ("Photo " + (i + 1))) + '"' + d(i) + ">" +
        img(g.src, g.caption, "", PH_IMAGE) +
        '<span class="g-cap"><b>' + t(g.caption) + "</b>" + (g.category ? "<em>" + t(g.category) + "</em>" : "") + "</span></button>";
    }).join("");
    var root = $("#gallery .container");
    root.innerHTML = head("gallery") +
      (cats.length > 1 ? chipsRow(cats.map(function (c) { return { key: slug(c), label: c }; }), true, "gallery") : "") +
      '<div class="gallery" id="galleryGrid">' + html + "</div>";
    wireFilters(root, function (f) {
      $$(".g-item", root).forEach(function (el) {
        var show = f === "all" || el.getAttribute("data-cat") === f;
        el.hidden = !show;
        if (show) el.classList.add("in");
      });
    });
    $("#galleryGrid").addEventListener("click", function (e) {
      var b = e.target.closest(".g-item");
      if (!b) return;
      var vis = $$(".g-item:not([hidden])", root);
      openLB(vis.map(function (el) { return galleryItems[+el.getAttribute("data-i")]; }), vis.indexOf(b), b);
    });
  }

  function renderAchievements() {
    var A = S.achievements || {};
    var stats = (A.stats || []).map(function (s) { return '<div class="stat glass reveal"><b>' + t(s.value) + "</b><span>" + t(s.label) + "</span></div>"; }).join("");
    var groups = (A.groups || []).filter(function (g) { return (g.items || []).length; }).map(function (g, i) {
      var list = g.items.map(function (it) {
        return "<li><div><b>" + t(it.title) + "</b>" + (it.text ? "<span>" + t(it.text) + "</span>" : "") + "</div>" + (it.year ? "<time>" + t(it.year) + "</time>" : "") + "</li>";
      }).join("");
      return '<article class="ach glass reveal"' + d(i) + '><div class="ach__head"><span class="ach__icon">' + icon(g.icon) + "</span><h3>" + t(g.title) + "</h3></div><ul>" + list + "</ul></article>";
    }).join("");
    $("#achievements .container").innerHTML = head("achievements") + (stats ? '<div class="stats">' + stats + "</div>" : "") + '<div class="achs">' + groups + "</div>";
  }

  function renderInterests() {
    var I = S.interests || {};
    var cards = (I.items || []).map(function (x, i) {
      return '<article class="interest glass reveal"' + d(i) + ">" + icon(x.icon, "interest__icon") + "<h3>" + t(x.title) + "</h3><p>" + t(x.text) + "</p></article>";
    }).join("");
    var hobbies = (I.hobbies || []).map(function (h) { return "<li>" + t(h) + "</li>"; }).join("");
    var goals = (I.goals || []).map(function (g, i) {
      return '<article class="goal reveal"' + d(i) + '><span class="goal__n">' + String(i + 1).padStart(2, "0") + "</span><h4>" + t(g.title) + "</h4><p>" + t(g.text) + "</p></article>";
    }).join("");
    $("#interests .container").innerHTML = head("interests") + '<div class="interests">' + cards + "</div>" +
      (hobbies ? '<h3 class="subhead reveal">' + t(I.hobbiesTitle || "Hobbies") + '</h3><ul class="hobbies reveal">' + hobbies + "</ul>" : "") +
      (goals ? '<h3 class="subhead reveal">' + t(I.goalsTitle || "Future goals") + '</h3><div class="goals">' + goals + "</div>" : "");
  }

  function renderContact() {
    var w = C.whatsapp || {};
    var wa = waUrl(w.message);
    var mail = isPh(C.email) ? null : "mailto:" + C.email;
    var links = (C.links || []).map(function (l, i) {
      return '<a class="social glass reveal"' + d(i) + " " + linkAttrs(l.url) + ' aria-label="' + esc(l.name) + '">' + icon(l.icon) + "<span><b>" + t(l.name) + "</b><small>" + t(l.handle || "") + "</small></span></a>";
    }).join("");

    $("#contact .container").innerHTML = head("contact") +
      '<div class="contact">' +
        '<div class="contact__info reveal"><p class="lead">' + t(C.text) + "</p>" +
          '<div class="contact__btns">' +
            '<a class="btn btn--wa" ' + (wa ? 'href="' + esc(wa) + '" target="_blank" rel="noopener noreferrer"' : 'href="#" data-unset="1"') + ">" + icon("whatsapp") + " Chat on WhatsApp</a>" +
            '<a class="btn btn--ghost" ' + (mail ? 'href="' + esc(mail) + '"' : 'href="#" data-unset="1"') + ">" + icon("mail") + " Send an email</a>" +
          "</div>" +
          (C.email ? '<p class="contact__mail">' + icon("mail") + " " + t(C.email) + "</p>" : "") +
          '<div class="socials">' + links + "</div></div>" +
        '<form class="form glass reveal" id="contactForm" novalidate>' +
          "<h3>Send a message</h3>" +
          '<label>Your name<input type="text" id="fName" autocomplete="name" placeholder="Your name"></label>' +
          '<label>Message<textarea id="fMsg" rows="5" placeholder="How can I help you?"></textarea></label>' +
          '<div class="form__btns"><button class="btn btn--primary" type="submit">Send by email</button>' +
          '<button class="btn btn--wa" type="button" id="fWa">' + icon("whatsapp") + " Send on WhatsApp</button></div>" +
          '<p class="form__note">This opens your email app or WhatsApp with your message ready to send.</p>' +
        "</form></div>";

    var form = $("#contactForm");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!mail) { toast("Email address is not set yet — add it in content.js"); return; }
      var n = $("#fName").value.trim() || "a visitor";
      var m = $("#fMsg").value.trim();
      window.location.href = mail + "?subject=" + encodeURIComponent("Message from " + n + " via your website") + "&body=" + encodeURIComponent(m + "\n\n— " + n);
    });
    $("#fWa").addEventListener("click", function () {
      var n = $("#fName").value.trim();
      var m = $("#fMsg").value.trim() || (w.message || "");
      var u = waUrl((n ? "Hi, I'm " + n + ". " : "") + m);
      if (!u) { toast("WhatsApp number is not set yet — add it in content.js"); return; }
      window.open(u, "_blank", "noopener");
    });
  }

  function renderFooter() {
    var b = S.brand || {}, F = S.footer || {};
    var socials = (C.links || []).map(function (l) {
      return '<a class="icon-btn" ' + linkAttrs(l.url) + ' aria-label="' + esc(l.name) + '">' + icon(l.icon) + "</a>";
    }).join("");
    $("#footer .container").innerHTML =
      '<div class="footer__top"><div><a class="logo" href="#home"><b>' + esc(b.logoText || "") + "</b><span>" + esc(b.name) + "</span></a>" +
      '<p class="footer__tag">' + t(F.tagline || b.tagline) + '</p></div><div class="footer__social">' + socials + "</div></div>" +
      '<div class="footer__bottom"><span>© <span id="year">' + new Date().getFullYear() + "</span> " + esc(b.name) + ". " + t(F.note || "") + "</span>" +
      '<a href="#home">Back to top ↑</a></div>';
  }

  /* =====================================================================
     LIGHTBOX
     ===================================================================== */
  var lb = { list: [], i: 0, opener: null };
  function openLB(list, i, opener) {
    lb.list = list; lb.i = Math.max(0, i); lb.opener = opener || null;
    var box = $("#lightbox");
    box.classList.add("open");
    box.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    showLB();
    $("#lbClose").focus();
  }
  function showLB() {
    var g = lb.list[lb.i];
    if (!g) return;
    var im = $("#lbImg");
    im.setAttribute("data-fallback", PH_IMAGE);
    im.src = g.src || PH_IMAGE;
    im.alt = g.caption || "";
    $("#lbCap").innerHTML = t(g.caption || "");
    $("#lbCount").textContent = (lb.i + 1) + " / " + lb.list.length;
    var multi = lb.list.length > 1;
    $("#lbPrev").hidden = !multi; $("#lbNext").hidden = !multi;
  }
  function stepLB(n) { lb.i = (lb.i + n + lb.list.length) % lb.list.length; showLB(); }
  function closeLB() {
    var box = $("#lightbox");
    box.classList.remove("open");
    box.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lb.opener) lb.opener.focus();
  }
  function setupLightbox() {
    $("#lbClose").innerHTML = icon("x");
    $("#lbPrev").innerHTML = icon("chevron-left");
    $("#lbNext").innerHTML = icon("chevron-right");
    $("#lbClose").addEventListener("click", closeLB);
    $("#lbPrev").addEventListener("click", function () { stepLB(-1); });
    $("#lbNext").addEventListener("click", function () { stepLB(1); });
    $("#lightbox").addEventListener("click", function (e) { if (e.target.id === "lightbox" || e.target.tagName === "FIGURE") closeLB(); });
    document.addEventListener("keydown", function (e) {
      if (!$("#lightbox").classList.contains("open")) return;
      if (e.key === "Escape") closeLB();
      else if (e.key === "ArrowLeft") stepLB(-1);
      else if (e.key === "ArrowRight") stepLB(1);
    });
    var x0 = null;
    $("#lightbox").addEventListener("touchstart", function (e) { x0 = e.changedTouches[0].clientX; }, { passive: true });
    $("#lightbox").addEventListener("touchend", function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) stepLB(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  /* =====================================================================
     UI BEHAVIOUR
     ===================================================================== */
  var toastTimer;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 3600);
  }

  function setupTheme() {
    var root = document.documentElement;
    var saved = null;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    if (saved !== "light" && saved !== "dark") root.setAttribute("data-theme", ST.defaultTheme === "light" ? "light" : "dark");
    var btn = $("#themeBtn");
    function paint() {
      var dark = root.getAttribute("data-theme") !== "light";
      btn.innerHTML = icon(dark ? "sun" : "moon");
      var m = document.querySelector('meta[name="theme-color"]');
      if (m) m.setAttribute("content", dark ? "#0a0f1c" : "#f6f4ee");
    }
    paint();
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      paint();
    });
  }

  function setupNav() {
    var nav = $("#nav"), menuBtn = $("#menuBtn");
    menuBtn.innerHTML = icon("menu");
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
      menuBtn.innerHTML = icon(open ? "x" : "menu");
    });
    $("#navLinks").addEventListener("click", function (e) {
      if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.innerHTML = icon("menu"); }
    });

    var toTop = $("#toTop");
    toTop.innerHTML = icon("arrow-up");
    toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); });

    var bar = $("#progress"), ticking = false;
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, y / h) : 0) + ")";
      nav.classList.toggle("scrolled", y > 20);
      toTop.classList.toggle("show", y > 700);
      ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
    onScroll();

    // highlight the nav link of the section in view
    if ("IntersectionObserver" in window) {
      var links = {};
      $$("#navLinks a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
      var spy = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            $$("#navLinks a").forEach(function (a) { a.classList.remove("active"); });
            if (links[e.target.id]) links[e.target.id].classList.add("active");
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
    }
  }

  function setupReveal() {
    var els = $$(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || reduced) { els.forEach(function (el) { el.classList.add("in"); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function setupGlobalHandlers() {
    // links that still contain placeholders do not navigate
    document.addEventListener("click", function (e) {
      var a = e.target.closest("[data-unset]");
      if (a) { e.preventDefault(); toast("This link isn't set up yet — add it in content.js"); }
    });
    // image fallback: broken photo path → neat placeholder
    document.addEventListener("error", function (e) {
      var el = e.target;
      if (el && el.tagName === "IMG" && el.getAttribute("data-fallback") && el.getAttribute("data-fb") !== "1") {
        el.setAttribute("data-fb", "1");
        el.src = el.getAttribute("data-fallback");
      }
    }, true);
  }

  /* =====================================================================
     START
     ===================================================================== */
  [setupGlobalHandlers, renderMeta, renderHero, renderAbout, renderJourney, renderSkills, renderProjects, renderGallery,
   renderAchievements, renderInterests, renderContact, renderFooter, setupTheme, setupNav, setupLightbox]
    .forEach(function (fn) {
      try { fn(); } catch (err) { if (window.console) console.error("Problem in " + fn.name + ":", err); }
    });
  setupReveal();
})();
