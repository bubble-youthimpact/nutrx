/* ==========================================================
   CONFIG — paste your image URLs here when ready.
   Leave '' to show a placeholder.
   ========================================================== */
var IMAGES = {
  // Hero carousel slides. Each: { src, alt, href (optional: page the slide links to) }
  hero: [
    { src: 'assets/img/hero-series.webp', alt: 'NUTRX Series now released', href: '/series' },
    { src: 'assets/img/hero-lab.webp', alt: 'Two scientists examining a sample in a lab' }
  ],
  heroInterval: 4000,      // ms between slides
  service: 'assets/img/our-service.webp',   // "Our Service" image (home)
  story: 'assets/img/our-story.webp',       // "Our Story" image (about)
  founder: 'assets/img/joan-kim.webp',   // Joan Kim headshot
  logo: 'assets/img/logo.png'
};
/* Details shown on the Privacy Policy and Terms pages. */
var LEGAL = {
  operator: 'Nutrx',               // legal name of whoever runs the site
  contactEmail: '',                // e.g. 'privacy@yourdomain.com' (shown on both pages); '' = contact form only
  effective: 'November 9, 2026',
  updated: 'November 9, 2026',
  minAge: 14,                      // minimum age for accounts
  governingLaw: ''                 // e.g. 'the Republic of Korea'
};

/* Google sign-in + saved profiles/favorites use Firebase (free tier is plenty).
   Paste the config from Firebase console → Project settings → Your apps → Web app.
   Leave null to run in "local profile" mode (data stays in the visitor's browser). */
var FIREBASE_CONFIG = {
  apiKey: "AIzaSyBnyyUntQRKZtt1Vz0sSHyhIQecNnd6DWc",
  authDomain: "nutrx-3ceca.firebaseapp.com",
  projectId: "nutrx-3ceca",
  storageBucket: "nutrx-3ceca.firebasestorage.app",
  messagingSenderId: "773887119281",
  appId: "1:773887119281:web:6c95e9853f84b517703790"
};
/* e.g.
var FIREBASE_CONFIG = {
  apiKey: "…", authDomain: "your-project.firebaseapp.com", projectId: "your-project", appId: "…"
};
*/

/* Contact + Submit Product forms are emailed via FormSubmit (formsubmit.co).
   After the first submission, FormSubmit emails an activation link to this address —
   click it once. It then gives you a random alias; paste it here to hide the address. */
var FORMSUBMIT_TO = 'bubble.youthimpact@gmail.com';
var MAX_COMPARE = 4;
/* Where the site lives. '/' for a custom domain (nutrx.org/…); '/repo-name/' for username.github.io/repo-name/;
   null = work it out from the address automatically. */
var SITE_BASE = (window.NUTRX_SITE && NUTRX_SITE.base) || null;
/* Browser-tab title + description for every page (also used for link previews). */
var PAGE_META = (window.NUTRX_SITE && NUTRX_SITE.pages) || { '': { title: document.title, description: '' } };

/* ================= DATA ================= */
/* PRODUCTS and DOCS are loaded from assets/js/data.js */

(function(){
'use strict';

/* ---------- Icons ---------- */
var I = {
  shield:'<path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  checkBadge:'<path d="M12 2.5l2.4 1.8 3-.2.9 2.9 2.4 1.8-1 2.8 1 2.8-2.4 1.8-.9 2.9-3-.2L12 21.5l-2.4-1.8-3 .2-.9-2.9-2.4-1.8 1-2.8-1-2.8 2.4-1.8.9-2.9 3 .2Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  alert:'<path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  upload:'<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
  flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.4 3.4-5.5 6.5-5.5s5.7 2.1 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.6c2.4.2 4.3 2 5 4.9"/>',
  check:'<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  compare:'<rect x="3" y="4" width="7" height="16" rx="1.5"/><rect x="14" y="4" width="7" height="16" rx="1.5"/>',
  book:'<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2V5Z"/><path d="M4 19a2 2 0 0 1 2-2h13v4H6a2 2 0 0 1-2-2Z"/>',
  chat:'<path d="M4 5h16v11H9l-5 4V5Z"/>',
  external:'<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  doc:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z"/><path d="M14 3v5h5"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 16-5-5-9 9"/>',
  play:'<circle cx="12" cy="12" r="9"/><path d="m10 8.5 5.5 3.5-5.5 3.5v-7Z"/>',
  cart:'<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M3 4h2.5l2.2 11.2a1 1 0 0 0 1 .8h9.4a1 1 0 0 0 1-.8L21 8H6.4"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  home:'<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  chev:'<path d="m6 9 6 6 6-6"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.6 1-1.1a5.5 5.5 0 0 0 0-7.7Z"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4.4-6 8-6s7 2 8 6"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5M21 12H9"/>'
};
function icon(n, sw){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+(I[n]||'')+'</svg>'; }
function asset(u){ u = String(u || ''); if (!u || /^(data:|blob:|https?:|\/)/.test(u)) return u; return (CLEAN ? BASE : '') + u; }
function logoHTML(){ return '<img class="logo-img" src="'+asset(IMAGES.logo)+'" alt="" width="51" height="34">'; }

function $(s, r){ return (r||document).querySelector(s); }
function $$(s, r){ return Array.prototype.slice.call((r||document).querySelectorAll(s)); }
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
function has(v){ return v && String(v).trim() && String(v).trim().toUpperCase() !== 'X'; }
function urls(v){ return has(v) ? String(v).split(/\s+/).filter(function(u){ return /^https?:\/\//i.test(u); }) : []; }
function initials(name){ var w = String(name).replace(/[^A-Za-z0-9 ]/g,' ').trim().split(/\s+/); return ((w[0]||'')[0]||'?').toUpperCase() + ((w[1]||'')[0]||'').toUpperCase(); }
function cleanUrl2(u){ return String(u||'').trim().replace(/&amp;/g,'&'); }
function isImg(u){ u = cleanUrl2(u); if (/^assets\//.test(u)) return true; if (!has(u) || !/^https?:\/\//.test(u)) return false; if (/\.(jpe?g|png|webp|gif|avif)(\?|#|$)/i.test(u.split('?')[0]+'?')) return true; return !/\.pdf(\?|$)/i.test(u) && !/\/dp\/|\/products\/|\?srsltid=|\/medication-health-fraud\//i.test(u); }

function hydrateIcons(root){
  $$('[data-icon]', root).forEach(function(el){ el.innerHTML = icon(el.getAttribute('data-icon')); el.removeAttribute('data-icon'); el.classList.add('ic-wrap'); });
  $$('[data-icon-before]', root).forEach(function(el){ el.insertAdjacentHTML('afterbegin', icon(el.getAttribute('data-icon-before'), 2.4)); el.removeAttribute('data-icon-before'); });
  $$('[data-logo]', root).forEach(function(el){ el.outerHTML = logoHTML(); });
}

/* ---------- Placeholders / images ---------- */
function placeholder(label){ return '<div class="ph-inner">'+icon('image',1.6)+'<span>'+esc(label||'Image coming soon')+'</span></div>'; }
function fillImageSlot(el, url, label){
  el.classList.add('ph');
  el.innerHTML = placeholder(label);
  if (url) {
    url = asset(url);
    var img = new Image(); img.alt = label || '';
    img.onload = function(){ el.innerHTML = ''; el.appendChild(img); };
    img.src = url;
  }
}
function noImgHTML(p, withLabel){
  return '<div class="noimg '+p.type+'"><span class="ini">'+esc(initials(p.name))+'</span>'+(withLabel?'<small>No image available</small>':'')+'</div>';
}
function productImage(container, p, withLabel){
  container.insertAdjacentHTML('beforeend', noImgHTML(p, withLabel));
  if (isImg(p.image)) {
    var img = new Image(); img.alt = p.name; img.loading = 'lazy'; img.decoding = 'async'; img.referrerPolicy = 'no-referrer';
    img.onload = function(){ img.classList.add('ld'); var n = container.querySelector('.noimg'); if (n) n.remove(); };
    img.onerror = function(){ img.remove(); };
    img.style.position = 'relative';
    img.src = asset(cleanUrl2(p.image));
    container.appendChild(img);
  }
}

/* ---------- Dates ---------- */
function parseDate(s){
  if (!has(s)) return null;
  var c = String(s).split('(')[0].replace(/\.$/,'').trim().replace(/^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,'$1-$2-$3');
  var d = new Date(c); return isNaN(d) ? null : d;
}
function primaryDate(p){ return parseDate(p.type==='verified' ? (p.releasedDate && parseDate(p.releasedDate) ? p.releasedDate : p.verifiedDate) : p.detectedDate); }

/* ---------- Toast ---------- */
var toastT;
function toast(msg){ var t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(function(){ t.classList.remove('show'); }, 2600); }

/* ---------- Modals ---------- */
var openStack = [];
var lastFocus = null;
function openModal(id){
  var o = document.getElementById(id);
  if (!openStack.length) lastFocus = document.activeElement;
  o.classList.add('show'); openStack.push(o); document.body.classList.add('lock');
  setTimeout(function(){ var f = o.querySelector('[data-close]'); if (f) f.focus({preventScroll:true}); }, 30);
}
function closeModal(o){
  o = o || openStack[openStack.length-1]; if (!o) return;
  o.classList.remove('show'); openStack = openStack.filter(function(x){ return x!==o; });
  if (!openStack.length){ document.body.classList.remove('lock'); if (lastFocus && lastFocus.focus) lastFocus.focus({preventScroll:true}); }
  if (o.id === 'pdfOverlay') setTimeout(function(){ $('#pdfFrame').removeAttribute('src'); }, 200);
}
$('#detailFav').addEventListener('click', function(){ handleFav(+this.getAttribute('data-fav'), this); });
$$('.overlay').forEach(function(o){
  o.addEventListener('click', function(e){ if (e.target === o || e.target.closest('[data-close]')) closeModal(o); });
});
document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && openStack.length) closeModal(); });

/* ---------- Detail modal ---------- */
var VERIFIED_ROWS = [['Description','description'],['Function','function'],['Caution','caution',1],["What We Don't Know",'unknowns'],['What This Means','meaning']];
var FAKE_ROWS = [['Claimed Effects','claimedEffects'],['Problem','problem',1],['Resolution','resolution']];
function typeLabel(p){ return p.type === 'verified' ? 'Verified' : 'Fake / Recalled'; }
function pillHTML(p){ return '<span class="pill '+p.type+'">'+icon(p.type==='verified'?'check':'alert',2.6)+typeLabel(p)+'</span>'; }

function linksHTML(p){
  var out = [], notes = [];
  var a = urls(p.articlesLink), y = urls(p.youtubeLink), b = urls(p.purchaseLink);
  a.forEach(function(u,i){ out.push('<a class="link-btn" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">'+icon('doc')+(a.length>1?'Article '+(i+1):'Read source')+'</a>'); });
  y.forEach(function(u){ out.push('<a class="link-btn" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">'+icon('play')+'Video review</a>'); });
  if (p.type==='verified') b.forEach(function(u){ out.push('<a class="link-btn primary" href="'+esc(u)+'" target="_blank" rel="noopener noreferrer">'+icon('cart')+'Where to buy</a>'); });
  if (has(p.articlesLink) && !a.length) notes.push('Source: '+esc(p.articlesLink));
  if (has(p.youtubeLink) && !y.length) notes.push('Study: '+esc(p.youtubeLink));
  return (out.length?'<div class="links">'+out.join('')+'</div>':'') + notes.map(function(n){ return '<div class="src-text">'+n+'</div>'; }).join('');
}

function openDetail(p){
  $('#detailTitle').textContent = p.name;
  var df = $('#detailFav'); df.setAttribute('data-fav', p.id); updateFavButtons();
  $('#detailMeta').innerHTML = pillHTML(p) + (has(p.producer)?'<span class="sub" style="color:var(--muted);font-size:14px">'+esc(p.producer)+'</span>':'');
  var v = p.type==='verified';
  var summary = v ? (p.description || p.function) : (p.problem || p.claimedEffects);
  var dates = v ? [['Verified', p.verifiedDate], ['Released', p.releasedDate]] : [['Company informed', p.informedDate], ['Detected', p.detectedDate]];
  var datesHTML = dates.filter(function(d){ return has(d[1]); }).map(function(d){ return '<div><small>'+d[0]+'</small>'+esc(d[1])+'</div>'; }).join('');
  var rows = (v?VERIFIED_ROWS:FAKE_ROWS).filter(function(r){ return has(p[r[1]]); }).map(function(r){
    return '<div class="row'+(r[2]?' warn':'')+'"><div>'+r[0]+'</div><div>'+esc(p[r[1]])+'</div></div>';
  }).join('');
  var body = $('#detailBody');
  body.innerHTML =
    '<div class="det-top"><div class="det-img" id="detImg"></div><div class="det-summary"><div class="k">'+(v?'At a glance':'What went wrong')+'</div><p>'+esc(summary||'')+'</p>'+(datesHTML?'<div class="det-dates">'+datesHTML+'</div>':'')+'</div></div>' +
    (rows?'<div class="rows">'+rows+'</div>':'') + linksHTML(p);
  productImage($('#detImg'), p, true);
  openModal('detailOverlay');
}

/* ---------- Compare state ---------- */
var selected = [];
function isSel(id){ return selected.indexOf(id) !== -1; }
function toggleSel(id){
  if (isSel(id)) selected = selected.filter(function(x){ return x!==id; });
  else { if (selected.length >= MAX_COMPARE) { toast('You can compare up to '+MAX_COMPARE+' products at a time.'); return; } selected.push(id); }
  refreshBrowsers(); updateTray();
}
function byId(id){ for (var i=0;i<PRODUCTS.length;i++) if (PRODUCTS[i].id===id) return PRODUCTS[i]; }
function updateTray(){
  var n = selected.length, onCompare = currentView === 'suggestions';
  $('#tray').classList.toggle('show', n>0 && onCompare);
  var slots = '';
  for (var i=0;i<MAX_COMPARE;i++){ var p = byId(selected[i]); slots += p ? '<span title="'+esc(p.name)+'">'+esc(initials(p.name))+'</span>' : '<span class="empty-slot"></span>'; }
  $('#trayItems').innerHTML = slots;
  $('#trayLabel').innerHTML = '<b>'+n+'</b> of '+MAX_COMPARE+' selected<small>'+(n<2?'Pick at least 2 to compare':'Ready to compare')+'</small>';
  $('#trayCompare').disabled = n<2; $('#trayCompare').style.opacity = n<2 ? .5 : 1;
}
$('#trayClear').addEventListener('click', function(){ selected = []; refreshBrowsers(); updateTray(); });
$('#trayCompare').addEventListener('click', function(){ if (selected.length>=2) openCompare(); });

function cell(v){ return has(v) ? esc(v) : '<span class="na">Not available</span>'; }
function linkCell(v, label){ var u = urls(v); if (u.length) return u.map(function(x,i){ return '<a href="'+esc(x)+'" target="_blank" rel="noopener noreferrer">'+label+(u.length>1?' '+(i+1):'')+'</a>'; }).join('<br>'); return has(v) ? '<span style="color:var(--muted)">'+esc(v)+'</span>' : '<span class="na">Not available</span>'; }

function openCompare(){
  var items = selected.map(byId).filter(Boolean);
  if (items.length < 2) { closeModal($('#cmpOverlay')); return; }
  var anyV = items.some(function(p){ return p.type==='verified'; }), anyF = items.some(function(p){ return p.type==='fake'; });
  var h = '<table class="cmp"><thead><tr><th class="lab"></th>';
  items.forEach(function(p){ h += '<td>'+esc(p.name)+'<div class="rm">'+pillHTML(p)+'<button data-rm="'+p.id+'">Remove</button></div></td>'; });
  h += '</tr></thead><tbody>';
  function row(label, fn){ h += '<tr><th class="lab">'+label+'</th>'; items.forEach(function(p){ h += '<td>'+fn(p)+'</td>'; }); h += '</tr>'; }
  function sec(label){ h += '<tr class="sec"><th class="lab">'+label+'</th>'+items.map(function(){ return '<td></td>'; }).join('')+'</tr>'; }
  row('Producer', function(p){ return cell(p.producer); });
  row('Image', function(p){ return '<div class="cimg" data-cimg="'+p.id+'"></div>'; });
  if (anyV){ sec('Verified product info');
    row('Verified Date', function(p){ return cell(p.verifiedDate); }); row('Released Date', function(p){ return cell(p.releasedDate); });
    VERIFIED_ROWS.forEach(function(r){ row(r[0], function(p){ return cell(p[r[1]]); }); });
    row('Purchase Link', function(p){ return linkCell(p.purchaseLink, 'Buy'); }); }
  if (anyF){ sec('Recall / fake product info');
    row('Company Informed', function(p){ return cell(p.informedDate); }); row('Detected Date', function(p){ return cell(p.detectedDate); });
    FAKE_ROWS.forEach(function(r){ row(r[0], function(p){ return cell(p[r[1]]); }); }); }
  sec('Sources');
  row('Articles', function(p){ return linkCell(p.articlesLink, 'View source'); });
  row('Video Review', function(p){ return linkCell(p.youtubeLink, 'Watch'); });
  h += '</tbody></table>';
  var body = $('#cmpBody'); body.innerHTML = h;
  $('#cmpSub').textContent = items.length + ' products side by side';
  $$('[data-cimg]', body).forEach(function(el){ productImage(el, byId(+el.getAttribute('data-cimg')), false); });
  $$('[data-rm]', body).forEach(function(b){ b.addEventListener('click', function(){ toggleSel(+b.getAttribute('data-rm')); if (selected.length<2) closeModal($('#cmpOverlay')); else openCompare(); }); });
  if (!$('#cmpOverlay').classList.contains('show')) openModal('cmpOverlay');
}

/* ---------- Product cards ---------- */
function buildCard(p, mode){
  var el = document.createElement('div');
  el.className = 'card' + (isSel(p.id)?' selected':'');
  el.tabIndex = 0; el.setAttribute('role','button'); el.setAttribute('aria-label', p.name + ', ' + typeLabel(p) + ' — view details');
  var desc = p.type==='verified' ? (p.description || p.function) : (p.problem || p.claimedEffects);
  el.innerHTML = '<div class="thumb"><span class="badge '+p.type+'">'+icon(p.type==='verified'?'check':'alert',2.8)+typeLabel(p)+'</span><span class="check">'+icon('check',3)+'</span>'+favBtnHTML(p.id)+'</div>' +
    '<div class="card-body"><p class="card-name">'+esc(p.name)+'</p><p class="card-prod">'+esc(has(p.producer)?p.producer:'')+'</p><p class="card-desc">'+esc(desc||'')+'</p>' +
    '<div class="card-foot">' + (mode==='compare'
      ? '<button class="sel-btn'+(isSel(p.id)?' on':'')+'" data-sel>'+(isSel(p.id)?'✓ Selected':'Select<span class="long"> to compare</span>')+'</button><button class="det-btn" data-det>Details</button>'
      : '<span class="card-link">View details '+icon('arrow',2.4)+'</span>') + '</div></div>';
  productImage($('.thumb', el), p, true);
  el.addEventListener('click', function(e){
    if (e.target.closest('[data-fav]')) { e.stopPropagation(); handleFav(p.id, e.target.closest('[data-fav]')); return; }
    if (e.target.closest('[data-sel]')) { e.stopPropagation(); toggleSel(p.id); return; }
    if (mode==='compare' && !e.target.closest('[data-det]')) { toggleSel(p.id); return; }
    openDetail(p);
  });
  el.addEventListener('keydown', function(e){ if ((e.key==='Enter'||e.key===' ') && e.target===el){ e.preventDefault(); mode==='compare' ? toggleSel(p.id) : openDetail(p); } });
  return el;
}

/* ---------- Product browsers ---------- */
var PAGE = 30;
var browsers = [];
function makeBrowser(host){
  var mode = host.getAttribute('data-browser'); // verified | fake | compare
  var st = { q:'', type: mode==='compare' ? 'all' : mode, sort: mode==='fake' ? 'date-desc' : 'name-asc', shown: PAGE };
  var pool = mode==='compare' ? PRODUCTS : PRODUCTS.filter(function(p){ return p.type===mode; });
  var cV = PRODUCTS.filter(function(p){ return p.type==='verified'; }).length, cF = PRODUCTS.length - cV;
  host.innerHTML =
    '<div class="toolbar">' +
      '<div class="search">'+icon('search')+'<input type="search" placeholder="Search by product, company, ingredient or problem…" aria-label="Search products"><button class="clear" aria-label="Clear search">'+icon('x')+'</button></div>' +
      '<div class="filters">' +
        (mode==='compare' ? '<button class="chip on" data-type="all">All <span class="n">'+PRODUCTS.length+'</span></button><button class="chip" data-type="verified">Verified <span class="n">'+cV+'</span></button><button class="chip" data-type="fake">Fake / Recalled <span class="n">'+cF+'</span></button>' : '') +
        '<span class="spacer"></span>' +
        '<select class="select" aria-label="Sort"><option value="name-asc">Name A–Z</option><option value="name-desc">Name Z–A</option><option value="date-desc">Newest first</option><option value="date-asc">Oldest first</option></select>' +
      '</div>' +
    '</div>' +
    (mode==='compare' ? '<div class="hint">'+icon('info')+'<span>Tap <b>Select to compare</b> on 2–'+MAX_COMPARE+' products, then hit <b>Compare</b> in the bar at the bottom.</span></div>' : '') +
    '<p class="count"></p><div class="grid"></div>' +
    '<div class="empty" style="display:none">'+icon('search',1.6)+'<b>No products match your search</b>Try a different word, or clear the search.</div>' +
    '<div class="more" style="display:none"><button class="btn btn-ghost">Show more</button></div>';
  var input = $('input', host), clearB = $('.clear', host), sel = $('select', host), grid = $('.grid', host), count = $('.count', host), empty = $('.empty', host), more = $('.more', host);
  sel.value = st.sort;
  var t;
  input.addEventListener('input', function(){ clearTimeout(t); clearB.classList.toggle('show', !!input.value); t = setTimeout(function(){ st.q = input.value.trim().toLowerCase(); st.shown = PAGE; render(); }, 120); });
  clearB.addEventListener('click', function(){ input.value=''; st.q=''; clearB.classList.remove('show'); st.shown = PAGE; render(); input.focus(); });
  sel.addEventListener('change', function(){ st.sort = sel.value; render(); });
  $$('.chip', host).forEach(function(c){ c.addEventListener('click', function(){ $$('.chip', host).forEach(function(x){ x.classList.remove('on'); }); c.classList.add('on'); st.type = c.getAttribute('data-type'); st.shown = PAGE; render(); }); });
  $('button', more).addEventListener('click', function(){ st.shown += PAGE; render(); });

  function hay(p){ return [p.name,p.producer,p.description,p.function,p.caution,p.unknowns,p.meaning,p.claimedEffects,p.problem,p.resolution].join(' ').toLowerCase(); }
  function list(){
    var l = pool.filter(function(p){ return (st.type==='all' || p.type===st.type) && (!st.q || hay(p).indexOf(st.q)!==-1); });
    l.sort(function(a,b){
      if (st.sort==='name-asc') return a.name.localeCompare(b.name);
      if (st.sort==='name-desc') return b.name.localeCompare(a.name);
      var da = primaryDate(a), db = primaryDate(b);
      if (!da && !db) return a.name.localeCompare(b.name); if (!da) return 1; if (!db) return -1;
      return st.sort==='date-desc' ? db-da : da-db;
    });
    return l;
  }
  function card(p){ return buildCard(p, mode); }
  function render(){
    var l = list();
    count.innerHTML = '<b>'+l.length+'</b> '+(l.length===1?'product':'products')+' found';
    grid.innerHTML = '';
    var frag = document.createDocumentFragment();
    l.slice(0, st.shown).forEach(function(p){ frag.appendChild(card(p)); });
    grid.appendChild(frag);
    empty.style.display = l.length ? 'none' : 'block';
    more.style.display = l.length > st.shown ? 'flex' : 'none';
    $('button', more).textContent = 'Show more ('+(l.length - st.shown)+' left)';
  }
  render();
  return { render: render, mode: mode };
}
function refreshBrowsers(){ browsers.forEach(function(b){ if (b.mode==='compare') b.render(); }); }

/* ---------- Series ---------- */
var seriesGrid = $('#seriesGrid'), seriesTop = $('#seriesTop');
function isIntro(d){ return /_intro$/.test(d.key); }
function slug(s){ return s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
function cleanUrl(u){ return String(u).split('?')[0]; }
function fmtDate(s){ var d = parseDate(s); return d ? d.toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}) : (s||''); }
function docCard(d, opts){
  var el = document.createElement('button');
  el.className = 'doc'; el.type = 'button';
  el.innerHTML = '<div class="doc-thumb"><img src="'+esc(asset(d.thumb))+'" alt="'+esc(d.title)+' cover" loading="lazy"><span class="doc-cat" style="background:'+esc(d.color)+'">'+esc(d.category)+'</span><span class="doc-badge">'+icon('doc',2.4)+esc(opts.badge)+'</span><div class="doc-ov"><span>'+esc(opts.overlay)+'</span></div></div>' +
    '<div class="doc-body"><h3>'+esc(d.title)+'</h3><p>'+esc(d.subtitle)+'</p>'+(opts.date?'<time>'+esc(fmtDate(d.date))+'</time>':'')+'</div>';
  el.addEventListener('click', opts.onClick);
  return el;
}
function showSeries(cat){
  seriesGrid.innerHTML = '';
  if (!cat){
    seriesTop.style.display = 'none'; seriesGrid.classList.add('landing');
    DOCS.filter(isIntro).forEach(function(intro){
      var n = DOCS.filter(function(d){ return d.category===intro.category; }).length;
      seriesGrid.appendChild(docCard(intro, { badge: n+' PDFs', overlay: 'View articles →', onClick: function(){ navigate('/series/' + slug(intro.category)); } }));
    });
  } else {
    seriesTop.style.display = 'flex'; seriesGrid.classList.remove('landing');
    $('#seriesHeading').textContent = cat;
    DOCS.filter(function(d){ return d.category===cat; })
      .sort(function(a,b){ if (isIntro(a)) return -1; if (isIntro(b)) return 1; return (parseDate(b.date)||0) - (parseDate(a.date)||0); })
      .forEach(function(d){ seriesGrid.appendChild(docCard(d, { badge: 'PDF', overlay: 'Read article', date: true, onClick: function(){ openPdf(d); } })); });
  }
}
$('#seriesBack').addEventListener('click', function(){ navigate('/series'); });

/* PDF popup */
var pdfBlocked = false, pdfTimer;
function showPdfFallback(){ clearTimeout(pdfTimer); $('#pdfLoading').style.display='none'; $('#pdfFrame').style.visibility='hidden'; $('#pdfFallback').classList.add('show'); }
document.addEventListener('securitypolicyviolation', function(e){
  if (e.violatedDirective && /frame-src|child-src|default-src/.test(e.violatedDirective) && /bubble|pdf/i.test(e.blockedURI||'')) { pdfBlocked = true; showPdfFallback(); }
});
function openPdf(d){
  var url = cleanUrl(d.url);
  $('#pdfTitle').textContent = d.title;
  $('#pdfSub').textContent = d.category + ' · ' + d.subtitle;
  $('#pdfOpen').href = url; $('#pdfFallbackOpen').href = url;
  $('#pdfFallbackImg').src = asset(d.thumb); $('#pdfFallbackImg').alt = d.title;
  var frame = $('#pdfFrame'), fb = $('#pdfFallback'), ld = $('#pdfLoading');
  fb.classList.remove('show'); frame.style.visibility = 'visible'; ld.style.display = 'flex';
  openModal('pdfOverlay');
  if (pdfBlocked) { showPdfFallback(); return; }
  frame.onload = function(){ clearTimeout(pdfTimer); ld.style.display = 'none'; };
  frame.src = url + '#view=FitH';
  clearTimeout(pdfTimer);
  pdfTimer = setTimeout(function(){ if (ld.style.display !== 'none') showPdfFallback(); }, 9000);
}

/* ---------- Forms ---------- */
var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function setErr(field, on){ field.classList.toggle('err', !!on); }
function notice(form, kind, html){ var n = $('[data-notice]', form); n.className = 'notice show ' + kind; n.innerHTML = icon(kind==='ok'?'check':'info') + '<span>'+html+'</span>'; }
var FS_AJAX = 'https://formsubmit.co/ajax/' + encodeURIComponent(FORMSUBMIT_TO);
var FS_POST = 'https://formsubmit.co/' + encodeURIComponent(FORMSUBMIT_TO);
function busy(form, on, label){
  var btn = $('button[type=submit]', form);
  if (on){ btn.dataset.old = btn.innerHTML; btn.disabled = true; btn.innerHTML = '<span class="spin" style="width:16px;height:16px;border-width:2px"></span>' + (label || 'Sending…'); }
  else { btn.disabled = false; if (btn.dataset.old) btn.innerHTML = btn.dataset.old; }
}
function sentOK(form, msg){
  notice(form, 'ok', msg); form.reset(); if (form.id === 'submitForm') clearPhoto();
  var n = $('[data-notice]', form); if (n) n.scrollIntoView({ behavior:'smooth', block:'nearest' });
}
function sendFail(form, why){
  if (why && window.console) console.warn('[Nutrx] form not sent:', why);
  notice(form, 'info', 'Sorry — we couldn’t send this right now. Please check your connection and try again in a moment.');
}
function isBot(form){ var h = $('input[name=_honey]', form); return h && h.value; }

/* Contact: FormSubmit AJAX endpoint (JSON in, JSON out) */
function sendJSON(form, fields, okMsg){
  if (isBot(form)){ sentOK(form, okMsg); return; }
  busy(form, true);
  var body = Object.assign({ _template: 'table', _captcha: 'false' }, fields);
  fetch(FS_AJAX, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(body) })
    .then(function(r){ return r.json().catch(function(){ return { success: r.ok ? 'true' : 'false' }; }); })
    .then(function(j){ if (String(j.success) === 'true') sentOK(form, okMsg); else sendFail(form, j.message || j); })
    .catch(function(err){ sendFail(form, err); })
    .then(function(){ busy(form, false); });
}

/* Submit product: a real multipart POST (FormSubmit's documented way to attach files),
   sent into a hidden frame so the visitor stays on the page. */
var fsFrame = null, fsWait = null;
function postWithFile(form, fields, file, okMsg){
  if (isBot(form)){ sentOK(form, okMsg); return; }
  busy(form, true, 'Uploading…');
  if (!fsFrame){
    fsFrame = document.createElement('iframe'); fsFrame.name = 'fsFrame'; fsFrame.title = 'Form delivery';
    fsFrame.style.cssText = 'position:absolute;width:0;height:0;border:0;visibility:hidden'; document.body.appendChild(fsFrame);
  }
  var pf = document.createElement('form');
  pf.method = 'POST'; pf.action = FS_POST; pf.enctype = 'multipart/form-data'; pf.target = 'fsFrame'; pf.style.display = 'none';
  var all = Object.assign({ _template: 'table', _captcha: 'false' }, fields);
  // On the real site FormSubmit redirects back to our own small page after a successful send;
  // that same-site redirect is how we know the email went out.
  if (CLEAN) all._next = location.origin + BASE + 'sent.html';
  Object.keys(all).forEach(function(k){ var i = document.createElement('input'); i.type = 'hidden'; i.name = k; i.value = all[k]; pf.appendChild(i); });
  var fi = document.createElement('input'); fi.type = 'file'; fi.name = 'attachment';
  try { var dt = new DataTransfer(); dt.items.add(file); fi.files = dt.files; } catch(e){ busy(form, false); return sendFail(form, 'file attach unsupported'); }
  pf.appendChild(fi); document.body.appendChild(pf);
  var done = false;
  function finish(ok, why){ if (done) return; done = true; clearTimeout(fsWait); document.removeEventListener('securitypolicyviolation', onCsp); fsFrame.onload = null; pf.remove(); busy(form, false); ok ? sentOK(form, okMsg) : sendFail(form, why); }
  function onCsp(e){ if (/formsubmit/.test(e.blockedURI || '') || e.violatedDirective === 'form-action') finish(false, 'blocked by page security policy'); }
  document.addEventListener('securitypolicyviolation', onCsp);
  fsFrame.onload = function(){
    var href; try { href = fsFrame.contentWindow.location.href; } catch(e){ href = 'other-site'; }
    if (href === 'about:blank') return;                       // the empty frame itself
    if (!CLEAN) return finish(true);                           // preview/local file: can't confirm, assume sent
    href === 'other-site' ? finish(false, 'FormSubmit did not confirm (form may need activation — check the inbox)') : finish(true);
  };
  fsWait = setTimeout(function(){ finish(false, 'timeout'); }, 45000);
  pf.submit();
}

/* Shrink big photos before upload (max 1600px, JPEG) so they reliably attach */
function shrinkPhoto(file){
  return new Promise(function(resolve){
    if (!/^image\/(jpeg|png|webp)$/.test(file.type) || !window.createImageBitmap || file.size < 900*1024) return resolve(file);
    createImageBitmap(file).then(function(bm){
      var k = Math.min(1, 1600 / Math.max(bm.width, bm.height)), c = document.createElement('canvas');
      c.width = Math.round(bm.width*k); c.height = Math.round(bm.height*k);
      var g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0,0,c.width,c.height); g.drawImage(bm, 0, 0, c.width, c.height);
      c.toBlob(function(b){
        if (!b || b.size >= file.size) return resolve(file);
        resolve(new File([b], file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' }));
      }, 'image/jpeg', 0.85);
    }).catch(function(){ resolve(file); });
  });
}
$$('form .input').forEach(function(i){ i.addEventListener('input', function(){ var f = i.closest('.field'); if (f) setErr(f, false); if (i.id==='c-email'||i.id==='c-phone'){ setErr($('#c-email-f'),false); setErr($('#c-phone-f'),false); } }); });

// Contact
$('#contactForm').addEventListener('submit', function(e){
  e.preventDefault(); var f = e.target, ok = true;
  var name = $('#c-name'), em = $('#c-email'), ph = $('#c-phone'), msg = $('#c-msg');
  if (!name.value.trim()){ setErr(name.closest('.field'), 1); ok = false; }
  if (!msg.value.trim()){ setErr(msg.closest('.field'), 1); ok = false; }
  var emV = em.value.trim(), phV = ph.value.trim();
  var emOk = emV && EMAIL.test(emV), phOk = phV.replace(/\D/g,'').length >= 7;
  if (!emOk && !phOk){ setErr($('#c-email-f'), 1); setErr($('#c-phone-f'), 1); ok = false; }
  else if (emV && !emOk){ setErr($('#c-email-f'), 1); ok = false; }
  if (!ok){ var first = $('.field.err .input', f); if (first) first.focus(); return; }
  var fields = { _subject: 'Nutrx contact: ' + name.value.trim(), Name: name.value.trim(), Email: emV || '(not given)', Phone: phV || '(not given)', Message: msg.value.trim(), Page: location.href };
  if (emOk) fields._replyto = emV;
  sendJSON(f, fields, 'Thanks! Your message was sent — we’ll get back to you soon.');
});

// Submit product
var photoFile = null;
function clearPhoto(){ photoFile = null; $('#s-photo').value=''; $('#preview').classList.remove('show'); $('#drop').style.display=''; }
function setPhoto(file){
  if (!file) return;
  if (!/^image\//.test(file.type)) { toast('Please choose an image file.'); return; }
  if (file.size > 15*1024*1024) { toast('That image is over 15 MB. Please choose a smaller one.'); return; }
  photoFile = file; setErr($('#photoField'), false);
  var pv = $('#preview'), r = new FileReader();
  r.onload = function(){ $('img', pv).src = r.result; };
  r.readAsDataURL(file);
  $('b', pv).textContent = file.name; $('small', pv).textContent = (file.size/1024 < 1024 ? Math.round(file.size/1024)+' KB' : (file.size/1048576).toFixed(1)+' MB');
  pv.classList.add('show'); $('#drop').style.display = 'none';
}
$('#s-photo').addEventListener('change', function(e){ setPhoto(e.target.files[0]); });
var drop = $('#drop');
['dragenter','dragover'].forEach(function(ev){ drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.add('over'); }); });
['dragleave','drop'].forEach(function(ev){ drop.addEventListener(ev, function(e){ e.preventDefault(); drop.classList.remove('over'); }); });
drop.addEventListener('drop', function(e){ setPhoto(e.dataTransfer.files[0]); });
$('#removePhoto').addEventListener('click', clearPhoto);
$('#submitForm').addEventListener('submit', function(e){
  e.preventDefault(); var f = e.target, ok = true;
  ['#s-product','#s-company'].forEach(function(s){ var i = $(s); if (!i.value.trim()){ setErr(i.closest('.field'),1); ok=false; } });
  var em = $('#s-email'); if (!EMAIL.test(em.value.trim())){ setErr(em.closest('.field'),1); ok=false; }
  if (!photoFile){ $('#photoField .msg').textContent = 'Please add a photo of the product.'; setErr($('#photoField'),1); ok=false; }
  if (!ok){ var first = $('.field.err .input, .field.err input', f); if (first) first.focus(); return; }
  var prod = $('#s-product').value.trim(), comp = $('#s-company').value.trim();
  var fields = { _subject: 'Nutrx product review: ' + prod + ' (' + comp + ')', 'Product name': prod, 'Company name': comp, Email: em.value.trim(), _replyto: em.value.trim(), Comment: $('#s-comment').value.trim() || '(none)' };
  busy(f, true, 'Preparing photo…');
  shrinkPhoto(photoFile).then(function(file){
    busy(f, false);
    if (file.size > 5*1024*1024){ setErr($('#photoField'), 1); $('#photoField .msg').textContent = 'This photo is too large to send. Please choose one under 5 MB.'; return; }
    postWithFile(f, fields, file, 'Thanks! We received your product and will review it. We’ll email you if we have questions.');
  });
});

// Sign in
/* ---------- Nav ---------- */
var drop1 = $('#productsDrop'), dropBtn = $('.nav-drop-btn', drop1), closeT;
function setDrop(o){ drop1.classList.toggle('open', o); dropBtn.setAttribute('aria-expanded', o); }
dropBtn.addEventListener('click', function(e){ e.stopPropagation(); var hover = matchMedia('(hover:hover)').matches && e.detail > 0; setDrop(hover ? true : !drop1.classList.contains('open')); });
drop1.addEventListener('mouseenter', function(){ if (matchMedia('(hover:hover)').matches){ clearTimeout(closeT); setDrop(true); } });
drop1.addEventListener('mouseleave', function(){ if (matchMedia('(hover:hover)').matches){ closeT = setTimeout(function(){ setDrop(false); }, 150); } });
document.addEventListener('click', function(e){ if (!drop1.contains(e.target)) setDrop(false); });
$$('.nav-menu a').forEach(function(a){ a.addEventListener('click', function(){ setDrop(false); }); });
var burger = $('#burger'), drawer = $('#mDrawer'), backdrop = $('#mBackdrop'), mGroup = $('#mProducts'), mGroupBtn = $('button', mGroup);
function isMobileOpen(){ return drawer.classList.contains('open'); }
function setGroup(o){ mGroup.classList.toggle('open', o); mGroupBtn.setAttribute('aria-expanded', o); $$('.m-sub a', mGroup).forEach(function(a){ a.tabIndex = o ? 0 : -1; }); mGroupBtn.classList.toggle('active', !o && ['verified','fake','submit'].indexOf(currentView) !== -1); }
function openMobile(){
  setGroup(['verified','fake','submit'].indexOf(currentView) !== -1 || mGroup.classList.contains('open'));
  drawer.classList.add('open'); backdrop.classList.add('open');
  burger.setAttribute('aria-expanded', true); burger.setAttribute('aria-label', 'Close menu');
  document.body.classList.add('lock');
  setTimeout(function(){ var f = $('.m-item.active', drawer) || $('.m-item', drawer); f.focus({preventScroll:true}); }, 60);
}
function closeMobile(restoreFocus){
  if (!isMobileOpen()) return;
  drawer.classList.remove('open'); backdrop.classList.remove('open');
  burger.setAttribute('aria-expanded', false); burger.setAttribute('aria-label', 'Open menu');
  if (!openStack.length) document.body.classList.remove('lock');
  if (restoreFocus) burger.focus({preventScroll:true});
}
burger.addEventListener('click', function(){ isMobileOpen() ? closeMobile(true) : openMobile(); });
backdrop.addEventListener('click', function(){ closeMobile(true); });
mGroupBtn.addEventListener('click', function(){ setGroup(!mGroup.classList.contains('open')); });
document.addEventListener('keydown', function(e){
  if (!isMobileOpen()) return;
  if (e.key === 'Escape' && !openStack.length){ closeMobile(true); return; }
  if (e.key === 'Tab'){ // keep focus inside the menu (burger + drawer)
    var f = [burger].concat($$('a,button', drawer).filter(function(el){ return !el.closest('.m-sub') || mGroup.classList.contains('open'); }));
    var i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0){ e.preventDefault(); f[f.length-1].focus(); }
    else if (!e.shiftKey && i === f.length-1){ e.preventDefault(); f[0].focus(); }
  }
});
matchMedia('(min-width:1021px)').addEventListener('change', function(m){ if (m.matches) closeMobile(); });

/* ---------- Accounts (Google sign-in via Firebase, or local profile) ---------- */
var GOOGLE_G = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>';
var GOALS = ['Immunity','Energy','Sleep','Digestion','Heart health','Joint & bone','Weight management','Skin & hair','Brain & focus','Healthy aging'];
var AGES = ['Under 18','18–29','30–44','45–59','60–74','75+','Prefer not to say'];

var Account = (function(){
  var LS_PROFILE = 'nutrx.localProfile', LS_SESSION = 'nutrx.localSession';
  // Google sign-in needs the site to be served from a web address (not opened as a local file)
  var mode = (FIREBASE_CONFIG && FIREBASE_CONFIG.apiKey && /^https?:$/.test(location.protocol)) ? 'firebase' : 'local';
  var user = null, profile = null, fb = null, ready = false, listeners = [], mem = {};
  function lsGet(k){ try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch(e){ return mem[k] || null; } }
  function lsSet(k, v){ mem[k] = v; try { v == null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
  function defaults(u){ return { name: u.displayName || '', email: u.email || '', photo: u.photoURL || '', ageRange: '', goals: [], allergies: '', favorites: [] }; }
  function emit(){ listeners.forEach(function(f){ try { f(); } catch(e){ console.error(e); } }); }
  function init(){
    if (mode === 'firebase') return loadFirebase();
    var p = lsGet(LS_PROFILE);
    if (p && lsGet(LS_SESSION)) { profile = Object.assign(defaults({}), p); user = { uid: 'local', local: true }; }
    ready = true; emit();
  }
  function loadFirebase(){
    var base = 'https://www.gstatic.com/firebasejs/10.12.2/';
    Promise.all([import(base+'firebase-app.js'), import(base+'firebase-auth.js'), import(base+'firebase-firestore.js')]).then(function(m){
      var app = m[0].initializeApp(FIREBASE_CONFIG);
      fb = { A: m[1], F: m[2], auth: m[1].getAuth(app), db: m[2].getFirestore(app) };
      fb.A.onAuthStateChanged(fb.auth, function(u){
        if (!u){ user = null; profile = null; ready = true; emit(); return; }
        user = { uid: u.uid, email: u.email };
        var ref = fb.F.doc(fb.db, 'users', u.uid);
        fb.F.getDoc(ref).then(function(snap){
          if (snap.exists()) {
            profile = Object.assign(defaults(u), snap.data());
            if (!profile.photo && u.photoURL) profile.photo = u.photoURL;
          } else { profile = defaults(u); return fb.F.setDoc(ref, Object.assign({ createdAt: Date.now() }, profile)); }
        }).catch(function(){ profile = profile || defaults(u); toast('We couldn’t load your saved profile.'); })
          .then(function(){ ready = true; emit(); });
      });
    }).catch(function(){ mode = 'local'; ready = true; emit(); });
  }
  function signInGoogle(){
    if (mode !== 'firebase') return Promise.reject({ code: 'not-configured' });
    if (!fb) return Promise.reject({ code: 'loading' });
    var prov = new fb.A.GoogleAuthProvider(); prov.setCustomParameters({ prompt: 'select_account' });
    return fb.A.signInWithPopup(fb.auth, prov);
  }
  function startLocal(name){
    var p = lsGet(LS_PROFILE) || defaults({});
    if (name) p.name = name;
    profile = Object.assign(defaults({}), p); user = { uid: 'local', local: true };
    lsSet(LS_PROFILE, profile); lsSet(LS_SESSION, true); emit();
  }
  function signOut(){
    if (user && !user.local && fb) return fb.A.signOut(fb.auth);
    lsSet(LS_SESSION, null); user = null; profile = null; emit(); return Promise.resolve();
  }
  function persist(patch){
    if (user.local){ lsSet(LS_PROFILE, profile); return Promise.resolve(); }
    return fb.F.setDoc(fb.F.doc(fb.db, 'users', user.uid), patch, { merge: true });
  }
  function save(patch){ Object.assign(profile, patch); emit(); return persist(Object.assign({ updatedAt: Date.now() }, patch)); }
  function isFav(id){ return !!(profile && profile.favorites && profile.favorites.indexOf(id) !== -1); }
  function toggleFav(id){
    var on = !isFav(id);
    profile.favorites = on ? [id].concat(profile.favorites || []) : profile.favorites.filter(function(x){ return x !== id; });
    emit();
    var p = user.local ? persist() : fb.F.updateDoc(fb.F.doc(fb.db, 'users', user.uid), { favorites: on ? fb.F.arrayUnion(id) : fb.F.arrayRemove(id) });
    return p.then(function(){ return on; }, function(err){ // roll back on failure
      profile.favorites = on ? profile.favorites.filter(function(x){ return x !== id; }) : [id].concat(profile.favorites); emit(); throw err; });
  }
  function deleteAccount(){
    if (!user) return Promise.resolve();
    if (user.local){ lsSet(LS_PROFILE, null); lsSet(LS_SESSION, null); user = null; profile = null; emit(); return Promise.resolve(); }
    var cu = fb.auth.currentUser, ref = fb.F.doc(fb.db, 'users', cu.uid);
    function delUser(){ return fb.A.deleteUser(cu); }
    return fb.F.deleteDoc(ref).then(delUser).catch(function(e){
      if (e && e.code === 'auth/requires-recent-login'){
        var prov = new fb.A.GoogleAuthProvider();
        return fb.A.reauthenticateWithPopup(cu, prov).then(function(){ return fb.F.deleteDoc(ref); }).then(delUser);
      }
      throw e;
    });
  }
  return {
    init: init, deleteAccount: deleteAccount, on: function(f){ listeners.push(f); }, signInGoogle: signInGoogle, startLocal: startLocal, signOut: signOut,
    save: save, isFav: isFav, toggleFav: toggleFav,
    get user(){ return user; }, get profile(){ return profile; }, get mode(){ return mode; }, get ready(){ return ready; }
  };
})();

function displayName(){ var p = Account.profile; return (p && (p.name || (p.email||'').split('@')[0])) || 'You'; }
function avatarHTML(size){
  var p = Account.profile || {}, ini = initials(displayName()) || '?';
  return '<span class="av" style="width:'+size+'px;height:'+size+'px;font-size:'+Math.round(size*.38)+'px">'+esc(ini) +
    (p.photo ? '<img src="'+esc(p.photo)+'" alt="" referrerpolicy="no-referrer" onerror="this.remove()">' : '') + '</span>';
}

/* Sign-in modal */
var pendingFav = null;
$('.g-logo').outerHTML = GOOGLE_G;
function openSignin(reason){
  $('#signinSub').textContent = reason || 'Save products and personalize your experience.';
  $('#signinErr').classList.remove('show');
  $('#localBox').hidden = Account.mode !== 'local';
  if (typeof closeMobile === 'function') closeMobile();
  openModal('signinOverlay');
}
function afterSignIn(){
  closeModal($('#signinOverlay'));
  toast('Welcome, ' + displayName().split(' ')[0] + '!');
  if (pendingFav !== null){ var id = pendingFav; pendingFav = null; if (!Account.isFav(id)) handleFav(id); }
}
$('#googleBtn').addEventListener('click', function(){
  var btn = this, err = $('#signinErr');
  err.classList.remove('show');
  if (Account.mode === 'local'){ var lb = $('#localBox'); lb.classList.remove('flash'); void lb.offsetWidth; lb.classList.add('flash'); $('#localName').focus(); return; }
  btn.disabled = true; $('.lbl', btn).textContent = 'Opening Google…';
  Account.signInGoogle().then(function(){ waitForProfile(afterSignIn); }).catch(function(e){
    var c = e && e.code || '';
    if (window.console) console.warn('[Nutrx] Google sign-in error:', c, e && e.message);
    if (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') return;
    err.textContent = c === 'auth/unauthorized-domain' ? 'This website’s address isn’t authorized for Google sign-in yet. (Site owner: add it in Firebase → Authentication → Settings → Authorized domains.)'
      : c === 'auth/popup-blocked' ? 'Your browser blocked the sign-in window. Please allow pop-ups for this site and try again.'
      : c === 'loading' ? 'Still loading — please try again in a moment.'
      : c === 'auth/operation-not-supported-in-this-environment' ? 'Google sign-in isn’t available in this preview. Open the site from its web address to sign in.'
      : (c === 'auth/network-request-failed' || c === 'auth/internal-error') ? 'Couldn’t connect to Google sign-in. Check your connection (or turn off blockers for this site) and try again.'
      : 'Sign-in didn’t work. Please try again.';
    err.classList.add('show');
  }).then(function(){ btn.disabled = false; $('.lbl', btn).textContent = 'Continue with Google'; });
});
function waitForProfile(cb){ var n = 0; (function chk(){ if (Account.profile || n++ > 50) cb(); else setTimeout(chk, 100); })(); }
$('#localForm').addEventListener('submit', function(e){
  e.preventDefault(); var n = $('#localName').value.trim();
  if (!n){ $('#localName').focus(); $('#localName').style.borderColor = 'var(--bad)'; return; }
  Account.startLocal(n); afterSignIn();
});
$('#localName').addEventListener('input', function(){ this.style.borderColor = ''; });
document.addEventListener('click', function(e){ var t = e.target.closest('[data-open-signin]'); if (t){ e.preventDefault(); openSignin(); } });
function doSignOut(){ setAcct(false); if (typeof closeMobile === 'function') closeMobile(); Account.signOut().then(function(){ toast('You’re signed out.'); }); }

/* Favorites */
function favBtnHTML(id){ var on = Account.isFav(id); return '<button class="fav-btn'+(on?' on':'')+'" type="button" data-fav="'+id+'" aria-pressed="'+on+'" aria-label="'+(on?'Remove from favorites':'Save to favorites')+'">'+icon('heart',2.2)+'</button>'; }
function updateFavButtons(){
  $$('[data-fav]').forEach(function(b){ var on = Account.isFav(+b.getAttribute('data-fav')); b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); b.setAttribute('aria-label', on ? 'Remove from favorites' : 'Save to favorites'); });
}
function handleFav(id, btn){
  if (!Account.user){ pendingFav = id; openSignin('Sign in to save products to your favorites.'); return; }
  if (btn){ btn.classList.remove('pop'); void btn.offsetWidth; btn.classList.add('pop'); }
  Account.toggleFav(id).then(function(on){ toast(on ? 'Saved to favorites' : 'Removed from favorites'); }, function(){ toast('Couldn’t update favorites. Please try again.'); });
}

/* Header account UI */
var acctOpen = false;
function setAcct(o){ acctOpen = o; var a = $('#acct'); if (a){ a.classList.toggle('open', o); $('.acct-btn', a).setAttribute('aria-expanded', o); } }
document.addEventListener('click', function(e){ if (acctOpen && !e.target.closest('#acct')) setAcct(false); });
document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && acctOpen){ setAcct(false); $('#acct .acct-btn').focus(); } });
function renderAcctUI(){
  var u = Account.user, slot = $('#acctSlot'), sm = $('#acctSlotSm'), foot = $('#mFoot');
  var favN = (Account.profile && Account.profile.favorites || []).length;
  if (!u){
    slot.innerHTML = '<button class="btn btn-lime btn-sm" data-open-signin style="padding:10px 20px;font-size:15px">Sign In</button>';
    sm.innerHTML = '<button class="btn btn-lime btn-sm nav-signin-sm" data-open-signin>Sign In</button>';
    foot.innerHTML = '<button class="btn btn-lime" data-open-signin>Sign In</button><p>Save favorites and personalize Nutrx.</p>';
  } else {
    var first = esc(displayName().split(' ')[0]);
    slot.innerHTML = '<div class="acct" id="acct"><button class="acct-btn" aria-haspopup="true" aria-expanded="false">'+avatarHTML(32)+'<span>'+first+'</span><span class="chev">'+icon('chev',2.4)+'</span></button>' +
      '<div class="acct-menu" role="menu"><div class="acct-head">'+avatarHTML(40)+'<div><b>'+esc(displayName())+'</b><small>'+esc(u.local ? 'Local profile · this browser' : (Account.profile.email||''))+'</small></div></div>' +
      '<a href="/profile" role="menuitem">'+icon('user')+'Your profile</a>' +
      '<a href="/profile" role="menuitem" data-scroll-fav>'+icon('heart')+'Favorites<span class="count-pill">'+favN+'</span></a>' +
      '<button type="button" role="menuitem" data-signout>'+icon('logout')+'Sign out</button></div></div>';
    sm.innerHTML = '<a class="acct-sm" href="/profile" aria-label="Your profile">'+avatarHTML(38)+'</a>';
    foot.innerHTML = '<div class="m-user">'+avatarHTML(44)+'<div><b>'+esc(displayName())+'</b><small>'+esc(u.local ? 'Local profile · this browser' : (Account.profile.email||''))+'</small></div></div>' +
      '<div class="row-btns"><a class="btn btn-teal" href="/profile">'+icon('user')+'Your profile</a><button class="btn btn-ghost" type="button" data-signout aria-label="Sign out">'+icon('logout')+'</button></div>';
    $('.acct-btn', slot).addEventListener('click', function(e){ e.stopPropagation(); setAcct(!acctOpen); });
  }
  $$('[data-signout]').forEach(function(b){ b.addEventListener('click', doSignOut); });
  linkify(document);
}

/* Profile page */
var profUid = null;
function renderProfile(full){
  var head = $('#profHead'), body = $('#profBody'), u = Account.user, p = Account.profile;
  if (!Account.ready){ head.innerHTML = '<span class="eyebrow">Your account</span><h1>Profile</h1>'; body.innerHTML = '<div class="gate"><div class="spin" style="margin:0 auto"></div></div>'; return; }
  if (!u || !p){
    profUid = null; head.className = 'band';
    head.innerHTML = '<span class="eyebrow">Your account</span><h1>Profile</h1><p>Sign in to see your saved products and profile.</p>';
    body.innerHTML = '<div class="gate"><span data-icon="heart"></span><h2>Your favorites live here</h2><p>Sign in with Google to save products, keep your health goals handy, and compare your favorites in one tap.</p><button class="btn btn-teal" data-open-signin>Sign In</button></div>';
    hydrateIcons(body); return;
  }
  head.className = 'band prof-band';
  head.innerHTML = avatarHTML(92) + '<div class="who"><h1>'+esc(displayName())+'</h1><p class="em">'+esc(u.local ? 'Saved in this browser only' : (p.email||''))+'</p>' +
    '<span class="mode-pill">'+(u.local ? icon('info',2.2)+'Local profile' : GOOGLE_G.replace('<svg','<svg style="width:14px;height:14px"')+'Signed in with Google')+'</span></div>' +
    '<button class="btn btn-ghost-light" data-signout>'+icon('logout')+'Sign out</button>';
  $$('[data-signout]', head).forEach(function(b){ b.addEventListener('click', doSignOut); });
  $$('.mode-pill svg', head).forEach(function(s){ s.style.width = '14px'; s.style.height = '14px'; });
  if (full || profUid !== u.uid){
    profUid = u.uid;
    body.innerHTML = '<div class="prof-grid"><form class="card-form" id="profForm" novalidate>' +
      '<h2>Profile details</h2><p class="sub">Used to tailor suggestions. Only you can see this.</p>' +
      '<div class="field"><label for="p-name">Display name</label><input class="input" id="p-name" autocomplete="name"></div>' +
      (u.local ? '' : '<div class="field"><label for="p-email">Email <span class="opt">(from Google)</span></label><input class="input" id="p-email" readonly style="background:var(--soft);color:var(--muted)"></div>') +
      '<div class="field"><label for="p-age">Age range</label><select class="input" id="p-age"><option value="">Select…</option>'+AGES.map(function(a){ return '<option>'+a+'</option>'; }).join('')+'</select></div>' +
      '<div class="field"><label>Health goals <span class="opt">(pick any)</span></label><div class="goal-chips" id="p-goals">'+GOALS.map(function(g){ return '<button type="button" aria-pressed="false" data-goal="'+esc(g)+'">'+esc(g)+'</button>'; }).join('')+'</div></div>' +
      '<div class="field"><label for="p-allergy">Allergies &amp; sensitivities <span class="opt">(optional)</span></label><textarea class="input" id="p-allergy" style="min-height:90px" placeholder="e.g. soy, fish, caffeine"></textarea></div>' +
      '<div class="form-actions"><button class="btn btn-teal" type="submit">Save changes</button></div><div class="notice" data-notice></div>' +
      '<div class="danger-card" style="margin:26px -8px -8px;border-radius:16px"><h3>Delete account</h3><p>Permanently delete your profile, favorites'+(u.local?'':' and sign-in record')+'. <a href="/privacy" style="color:var(--teal);font-weight:600">Privacy Policy</a></p><button class="btn btn-outline-danger btn-sm" type="button" id="openDelete">Delete account</button></div></form>' +
      '<div class="fav-col" id="favSection"></div></div>';
    $('#p-name').value = p.name || ''; if ($('#p-email')) $('#p-email').value = p.email || '';
    $('#p-age').value = p.ageRange || ''; $('#p-allergy').value = p.allergies || '';
    $$('#p-goals button').forEach(function(b){ b.setAttribute('aria-pressed', (p.goals||[]).indexOf(b.getAttribute('data-goal')) !== -1); b.addEventListener('click', function(){ b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); }); });
    linkify(body);
    $('#openDelete').addEventListener('click', function(){
      var loc = Account.user && Account.user.local;
      $('#delSigninItem').hidden = !!loc; $('#delReauth').hidden = !!loc;
      $('#deleteErr').classList.remove('show'); openModal('deleteOverlay');
    });
    $('#profForm').addEventListener('submit', function(e){
      e.preventDefault(); var f = e.target, btn = $('button[type=submit]', f);
      var patch = { name: $('#p-name').value.trim(), ageRange: $('#p-age').value, allergies: $('#p-allergy').value.trim(),
        goals: $$('#p-goals button[aria-pressed=true]').map(function(b){ return b.getAttribute('data-goal'); }) };
      btn.disabled = true;
      Account.save(patch).then(function(){ notice(f, 'ok', 'Profile saved.'); }, function(){ notice(f, 'info', 'Couldn’t save right now. Please try again.'); })
        .then(function(){ btn.disabled = false; });
    });
  }
  renderFavs();
}
function renderFavs(){
  var box = $('#favSection'); if (!box) return;
  var ids = (Account.profile && Account.profile.favorites) || [], items = ids.map(byId).filter(Boolean);
  box.innerHTML = '<div class="fav-head"><div><h2>Your favorites</h2><p class="sub">'+items.length+' saved product'+(items.length===1?'':'s')+'</p></div>' +
    (items.length >= 2 ? '<button class="btn btn-teal btn-sm" id="cmpFavs">'+icon('compare')+'Compare '+(items.length > MAX_COMPARE ? 'top '+MAX_COMPARE : 'all '+items.length)+'</button>' : '') + '</div>';
  if (!items.length){
    box.insertAdjacentHTML('beforeend', '<div class="fav-empty"><span data-icon="heart"></span><b>No favorites yet</b><p>Tap the heart on any product to save it here.</p><div class="row-btns"><a class="btn btn-green btn-sm" href="/verified-products">Browse verified</a><a class="btn btn-ghost btn-sm" href="/fake-products">See recalls</a></div></div>');
    hydrateIcons(box); linkify(box); return;
  }
  var g = document.createElement('div'); g.className = 'grid';
  items.forEach(function(p){ g.appendChild(buildCard(p, 'view')); });
  box.appendChild(g);
  var cb = $('#cmpFavs', box);
  if (cb) cb.addEventListener('click', function(){ selected = ids.slice(0, MAX_COMPARE); refreshBrowsers(); navigate('/suggestions'); setTimeout(openCompare, 60); });
}

Account.on(function(){
  renderAcctUI(); updateFavButtons();
  if (currentView === 'profile'){ var uid = Account.user && Account.user.uid; renderProfile(uid !== profUid); }
});

/* ---------- Legal pages ---------- */
function renderLegal(){
  var em = (LEGAL.contactEmail || '').trim();
  var contact = em ? 'Email us at <a href="mailto:'+esc(em)+'">'+esc(em)+'</a> or use our <a href="/contact">contact form</a>.' : 'Please use our <a href="/contact">contact form</a>.';
  var law = LEGAL.governingLaw ? 'These Terms are governed by the laws of '+esc(LEGAL.governingLaw)+', without regard to conflict-of-law rules. If you live somewhere that gives you consumer protections these Terms can’t override, those protections still apply to you.'
    : 'These Terms are governed by the laws of the place where Nutrx is operated, without regard to conflict-of-law rules. If you live somewhere that gives you consumer protections these Terms can’t override, those protections still apply to you.';
  var map = { operator: esc(LEGAL.operator || 'Nutrx'), effective: esc(LEGAL.effective), updated: esc(LEGAL.updated), minAge: esc(String(LEGAL.minAge || 14)), contact: contact, law: law };
  $$('[data-legal]').forEach(function(el){ el.innerHTML = map[el.getAttribute('data-legal')] || ''; });
}
// In-page "On this page" links: scroll instead of changing the route
document.addEventListener('click', function(e){
  var a = e.target.closest && e.target.closest('a[data-anchor]'); if (!a) return;
  e.preventDefault();
  var t = document.getElementById(a.getAttribute('href').slice(1)); if (!t) return;
  t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (matchMedia('(max-width:1020px)').matches){ var d = a.closest('details'); if (d) d.open = false; }
}, true);
var spy = null;
function setupSpy(view){
  if (spy){ spy.disconnect(); spy = null; }
  var sec = $('[data-view="'+view+'"]'); if (!sec || !('IntersectionObserver' in window)) return;
  var links = $$('.legal-toc a', sec), heads = $$('.legal-doc h2[id]', sec);
  var d = $('.legal-toc details', sec); if (d) d.open = !matchMedia('(max-width:1020px)').matches;
  spy = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if (en.isIntersecting){ links.forEach(function(l){ l.classList.toggle('on', l.getAttribute('href') === '#'+en.target.id); }); } });
  }, { rootMargin: '-90px 0px -65% 0px' });
  heads.forEach(function(h){ spy.observe(h); });
}
$('#confirmDelete').addEventListener('click', function(){
  var btn = this, err = $('#deleteErr'); err.classList.remove('show');
  btn.disabled = true; btn.textContent = 'Deleting…';
  Account.deleteAccount().then(function(){
    closeModal($('#deleteOverlay')); toast('Your account and saved data were deleted.'); navigate('/');
  }, function(e){
    var c = e && e.code || '';
    if (c === 'auth/popup-closed-by-user' || c === 'auth/cancelled-popup-request') err.textContent = 'Deletion cancelled — please confirm with Google to continue.';
    else err.textContent = 'We couldn’t delete your account. Please try again, or contact us.';
    err.classList.add('show');
  }).then(function(){ btn.disabled = false; btn.textContent = 'Delete permanently'; });
});

/* ---------- Router (clean URLs) ----------
   On a real web host: /team, /series/health-fraud-files … via the History API.
   When opened as a local file or inside a sandboxed preview: falls back to #team, #series-health-fraud-files. */
var VIEWS = ['home','team','verified','fake','suggestions','submit','series','contact','profile','privacy','terms','notfound'];
var PATHS = { home:'', team:'team', verified:'verified-products', fake:'fake-products', submit:'submit-product', suggestions:'suggestions', series:'series', contact:'contact', profile:'profile', privacy:'privacy', terms:'terms' };
var BY_PATH = {}; Object.keys(PATHS).forEach(function(v){ BY_PATH[PATHS[v]] = v; });
var CLEAN = (function(){
  try {
    if (!/^https?:$/.test(location.protocol)) return false;          // local file / blob preview
    if (window.top !== window.self) return false;                     // inside a preview frame
    if (/(^|\.)(claude\.ai|claudeusercontent\.com|anthropic\.com)$/i.test(location.hostname)) return false;
    history.replaceState(history.state, '', location.href);           // throws where history is locked down
    return true;
  } catch(e){ return false; }
})();
var memPath = null; // path we last navigated to ourselves (used when the address bar can't be updated)
var BASE = '/';
if (CLEAN && typeof SITE_BASE === 'string' && SITE_BASE){ BASE = SITE_BASE.replace(/\/?$/, '/'); if (BASE.charAt(0) !== '/') BASE = '/' + BASE; }
else if (CLEAN){
  // Works at a domain root (/) or in a sub-folder such as GitHub Pages (/repo-name/)
  var segs = location.pathname.replace(/index\.html$/,'').split('/').filter(Boolean), b = [];
  for (var i=0;i<segs.length;i++){ if (BY_PATH.hasOwnProperty(segs[i])) break; b.push(segs[i]); }
  BASE = '/' + b.join('/') + (b.length ? '/' : '');
}
function hrefFor(path){ // path like '/team' or '/series/x'
  var p = path.replace(/^\//,'');
  return CLEAN ? BASE + (p ? p.replace(/\/?$/, '/') : '') : '#' + (p ? p.replace(/\//g,'-') : 'home');
}
function currentPath(){
  if (CLEAN){ var pn = location.pathname.replace(/index\.html$/,''); return (pn.indexOf(BASE) === 0 ? pn.slice(BASE.length) : pn.replace(/^\//,'')).replace(/\/+$/,''); }
  var h = (location.hash || '').replace(/^#/,'');
  if (memPath !== null) return memPath;
  if (!h || h === 'home') return '';
  if (h.indexOf('series-') === 0) return 'series/' + h.slice(7);
  if (VIEWS.indexOf(h) !== -1) return PATHS[h]; // older #view links
  return h;
}
function navigate(path, replace){
  if (CLEAN){
    try { history[replace ? 'replaceState' : 'pushState'](null, '', hrefFor(path)); route(); return; }
    catch(e){ CLEAN = false; linkify(document); }
  }
  // Hash mode: switch the page ourselves, then try to reflect it in the address bar.
  memPath = path.replace(/^\//, '');
  var url = hrefFor(path);
  try { history[replace ? 'replaceState' : 'pushState'](null, '', url); }
  catch(e){ try { if (location.hash !== url) location.hash = url.slice(1); } catch(_){} }
  route();
}
function linkify(root){
  $$('a[href^="/"]', root).forEach(function(a){
    var p = a.getAttribute('data-path') || a.getAttribute('href');
    if (p.indexOf('//') === 0) return;
    a.setAttribute('data-path', p); a.setAttribute('href', hrefFor(p));
  });
}
// Handle every internal link click ourselves (capture phase, before any host/preview script sees it)
window.addEventListener('click', function(e){
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  var a = e.target.closest && e.target.closest('a[data-path]'); if (!a || a.target === '_blank') return;
  e.preventDefault(); e.stopImmediatePropagation();
  navigate(a.getAttribute('data-path'));
  if (a.hasAttribute('data-scroll-fav')) setTimeout(function(){ var f = document.getElementById('favSection'); if (f) f.scrollIntoView({ behavior:'smooth', block:'start' }); }, 80);
}, true);
var currentView = null, currentPathKey = null;
function route(){
  var path = currentPath(), parts = path.split('/'), view = BY_PATH[parts[0]], seriesCat = null;
  if (view === 'series' && parts[1]) DOCS.forEach(function(d){ if (slug(d.category) === parts[1]) seriesCat = d.category; });
  if (!view || (view === 'series' && parts[1] && !seriesCat) || (view !== 'series' && parts.length > 1)) {
    // Unknown address (or an old #link on a clean-URL host): send to the right place
    var legacy = CLEAN && location.hash ? location.hash.slice(1) : '';
    if (legacy && (BY_PATH[legacy] || VIEWS.indexOf(legacy) !== -1 || legacy.indexOf('series-') === 0)) {
      var lp = BY_PATH[legacy] ? legacy : (legacy.indexOf('series-') === 0 ? 'series/' + legacy.slice(7) : PATHS[legacy]);
      return navigate('/' + lp, true);
    }
    view = path === '' ? 'home' : 'notfound';
  }
  if (CLEAN && location.hash && path === '' && location.hash.length > 1) { var lh = location.hash.slice(1); if (BY_PATH[lh] || PATHS[lh] !== undefined || lh.indexOf('series-') === 0) return navigate('/' + (BY_PATH[lh] ? lh : lh.indexOf('series-') === 0 ? 'series/' + lh.slice(7) : PATHS[lh]), true); }
  var changed = view !== currentView, samePath = path === currentPathKey;
  currentView = view; currentPathKey = path;
  $$('.view').forEach(function(v){ v.classList.toggle('active', v.getAttribute('data-view') === view); });
  $$('[data-nav]').forEach(function(a){ a.classList.toggle('active', a.getAttribute('data-nav') === view); });
  dropBtn.classList.toggle('active', ['verified','fake','submit'].indexOf(view) !== -1);
  setGroup(mGroup.classList.contains('open'));
  if (view === 'series') showSeries(seriesCat);
  while (openStack.length) closeModal();
  setDrop(false); closeMobile();
  updateTray();
  var mkey = view === 'series' && seriesCat ? 'series/' + slug(seriesCat) : (PATHS[view] !== undefined ? PATHS[view] : '');
  if (view === 'notfound') mkey = '404';
  var meta = PAGE_META[mkey] || PAGE_META[''];
  document.title = meta.title;
  var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', meta.description);
  var mr = document.querySelector('meta[name="robots"]'); if (mr && CLEAN) mr.setAttribute('content', meta.noindex ? 'noindex' : 'index,follow');
  if (view === 'privacy' || view === 'terms') setupSpy(view);
  setAcct(false);
  if (view === 'profile') renderProfile(true);
  if (!samePath) window.scrollTo({ top: 0, behavior: changed ? 'auto' : 'smooth' });
  if (view === 'home') runCountUps();
}
window.addEventListener('hashchange', function(){ if (!CLEAN){ memPath = null; route(); } });
window.addEventListener('popstate', function(){ memPath = null; route(); });

/* ---------- Home extras ---------- */
function buildCarousel(){
  var c = $('#heroCarousel'), slides = IMAGES.hero && IMAGES.hero.length ? IMAGES.hero : [{}];
  var track = document.createElement('div'); track.className = 'track'; c.appendChild(track);
  slides.forEach(function(sl, i){
    if (typeof sl === 'string') sl = { src: sl };
    var s = document.createElement(sl.href ? 'a' : 'div'); s.className = 'slide';
    if (sl.href){ s.href = sl.href; s.setAttribute('aria-label', sl.alt || 'Open'); }
    var ph = document.createElement('div'); s.appendChild(ph); fillImageSlot(ph, sl.src, sl.alt || ('Hero image '+(i+1)));
    track.appendChild(s);
  });
  if (slides.length < 2) return;
  var dots = document.createElement('div'); dots.className = 'dots'; c.appendChild(dots);
  var idx = 0, timer;
  slides.forEach(function(_, i){ var b = document.createElement('button'); b.setAttribute('aria-label','Show slide '+(i+1)); if (!i) b.className='on'; b.addEventListener('click', function(){ go(i); restart(); }); dots.appendChild(b); });
  function go(i){ dots.children[idx].classList.remove('on'); idx = i; dots.children[idx].classList.add('on'); track.style.transform = 'translateX(' + (-100*idx) + '%)'; }
  function restart(){ clearInterval(timer); timer = setInterval(function(){ go((idx+1)%slides.length); }, IMAGES.heroInterval || 4000); }
  restart();
}
var countedUp = false;
function runCountUps(){
  if (countedUp || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var els = $$('[data-countup]');
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (!en.isIntersecting) return; io.unobserve(en.target);
      var el = en.target, to = +el.getAttribute('data-countup'), dec = +(el.getAttribute('data-dec')||0), pre = el.getAttribute('data-prefix')||'', suf = el.getAttribute('data-suffix')||'', t0 = performance.now();
      (function tick(now){ var k = Math.min(1,(now-t0)/1200), e = 1-Math.pow(1-k,3); el.textContent = pre + (to*e).toFixed(dec) + suf; if (k<1) requestAnimationFrame(tick); })(t0);
    });
  }, { threshold: .4 });
  els.forEach(function(el){ io.observe(el); });
  countedUp = true;
}

/* ---------- Init ---------- */
$$('link[data-asset]').forEach(function(l){ l.setAttribute('href', asset(l.getAttribute('data-asset'))); });
hydrateIcons(document);
$('#year').textContent = new Date().getFullYear();
$$('[data-count]').forEach(function(el){ var t = el.getAttribute('data-count'); el.textContent = PRODUCTS.filter(function(p){ return p.type===t; }).length; });
$$('[data-img]').forEach(function(el){ fillImageSlot(el, IMAGES[el.getAttribute('data-img')], el.getAttribute('data-label')); });
if (IMAGES.founder){ var av = $('#founderAvatar'), im = new Image(); im.alt = 'Joan Kim'; im.onload = function(){ av.appendChild(im); }; im.src = asset(IMAGES.founder); }
buildCarousel();
linkify(document);
$$('[data-browser]').forEach(function(h){ browsers.push(makeBrowser(h)); });
renderLegal();
linkify(document);
Account.init();
route();
})();
