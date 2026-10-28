<template>
  <div class="docs-layout">
    <aside class="sidebar">
      <div class="sidebar-brand">
        <div class="school">Documentation</div>
        <div class="name">ESCEN Website</div>
        <span class="badge">v1.0 — Nuxt 4</span>
      </div>
      <nav>
        <div class="nav-section">
          <div class="nav-label">Introduction</div>
          <NuxtLink class="nav-link" to="/docs" exact>Vue d'ensemble</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/stack">Stack technique</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/config">Configuration</NuxtLink>
        </div>
        <div class="nav-section">
          <div class="nav-label">Architecture</div>
          <NuxtLink class="nav-link" to="/docs/structure">Structure des répertoires</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/routing">Pages &amp; Routage</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/layouts">Layouts</NuxtLink>
        </div>
        <div class="nav-section">
          <div class="nav-label">Composants</div>
          <NuxtLink class="nav-link" to="/docs/components">Composants principaux</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/stores">Stores Pinia</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/plugins">Plugins</NuxtLink>
        </div>
        <div class="nav-section">
          <div class="nav-label">Backend &amp; Auth</div>
          <NuxtLink class="nav-link" to="/docs/api">API &amp; Endpoints</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/auth">Authentification</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/analytics">Analytics &amp; Tracking</NuxtLink>
        </div>
        <div class="nav-section">
          <div class="nav-label">Référence</div>
          <NuxtLink class="nav-link" to="/docs/env">Variables d'environnement</NuxtLink>
          <NuxtLink class="nav-link" to="/docs/todos">Notes &amp; TODO</NuxtLink>
        </div>
      </nav>
    </aside>

    <main class="docs-main">
      <slot />
    </main>
  </div>
</template>

<style>
/* ── Layout ── */
.docs-layout {
  display: flex;
  min-height: 100vh;
  background: #F2F4F9;
  font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* ── Sidebar ── */
.sidebar {
  position: fixed;
  top: 0; left: 0;
  width: 240px;
  height: 100vh;
  background: #1B2D5A;
  overflow-y: auto;
  z-index: 100;
  display: flex;
  flex-direction: column;
}
.sidebar::-webkit-scrollbar { width: 4px; }
.sidebar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }

.sidebar-brand {
  padding: 24px 20px 18px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  flex-shrink: 0;
}
.sidebar-brand .school {
  font-size: 10px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.38);
  font-weight: 600;
}
.sidebar-brand .name {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-top: 3px;
  font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.2;
}
.sidebar-brand .badge {
  display: inline-block;
  margin-top: 9px;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #C8A020;
  background: rgba(200,160,32,0.13);
  border: 1px solid rgba(200,160,32,0.28);
  padding: 2px 8px;
  border-radius: 2px;
  font-weight: 600;
}

.nav-section { padding: 14px 0 6px; }
.nav-section + .nav-section { border-top: 1px solid rgba(255,255,255,0.06); }
.nav-label {
  font-size: 9.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.28);
  padding: 0 20px;
  margin-bottom: 2px;
  font-weight: 700;
}
.nav-link {
  display: block;
  padding: 6px 20px 6px 18px;
  font-size: 13px;
  color: rgba(255,255,255,0.58);
  text-decoration: none;
  border-left: 2px solid transparent;
  transition: color 0.15s, background 0.15s, border-color 0.15s;
  line-height: 1.4;
}
.nav-link:hover {
  color: rgba(255,255,255,0.9);
  background: rgba(255,255,255,0.05);
  border-left-color: rgba(200,160,32,0.45);
}
.nav-link.router-link-exact-active,
.nav-link.router-link-active {
  color: #fff;
  background: rgba(255,255,255,0.08);
  border-left-color: #C8A020;
}

/* ── Main ── */
.docs-main {
  margin-left: 240px;
  flex: 1;
  padding: 52px 60px 96px 64px;
  max-width: 1040px;
}

/* ── Page shared styles (namespaced under .doc-page) ── */
.doc-page {
  font-size: 15px;
  line-height: 1.65;
  color: #18213A;
}
.doc-page .page-eyebrow {
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C8A020;
  font-weight: 700;
  margin-bottom: 3px;
}
.doc-page h2 {
  font-family: 'Avenir', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 25px;
  color: #1B2D5A;
  font-weight: 700;
  line-height: 1.2;
  text-wrap: balance;
  padding-bottom: 14px;
  border-bottom: 1px solid #D5DCF0;
  margin-bottom: 22px;
}
.doc-page h3 {
  font-size: 14.5px;
  font-weight: 700;
  margin: 28px 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #243D72;
}
.doc-page p {
  max-width: 72ch;
  margin-bottom: 12px;
}
.doc-page code {
  font-family: 'SFMono-Regular', 'Consolas', 'Liberation Mono', monospace;
  font-size: 12.5px;
  background: #E8EDF8;
  color: #1B2D5A;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 500;
}
.doc-page pre {
  background: #1B2D5A;
  color: #C8D6F0;
  padding: 20px 24px;
  border-radius: 4px;
  font-family: 'SFMono-Regular', 'Consolas', monospace;
  font-size: 12.5px;
  line-height: 1.8;
  overflow-x: auto;
  margin: 14px 0;
  white-space: pre;
}
.doc-page pre code { background: none; color: inherit; padding: 0; font-size: inherit; }
.doc-page pre .k { color: #7EC8E3; }
.doc-page pre .v { color: #A8C97F; }
.doc-page pre .s { color: #F0B840; }
.doc-page pre .c { color: #4A6080; }
.doc-page .tree {
  background: #1B2D5A;
  color: #C8D6F0;
  padding: 20px 24px;
  border-radius: 4px;
  font-family: 'SFMono-Regular', 'Consolas', monospace;
  font-size: 12.5px;
  line-height: 1.85;
  overflow-x: auto;
  margin: 14px 0;
  white-space: pre;
}
.doc-page .tbl-wrap { overflow-x: auto; margin: 14px 0; }
.doc-page table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
.doc-page thead th {
  text-align: left;
  font-size: 10px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #5C6E8A;
  font-weight: 700;
  padding: 0 14px 10px;
  border-bottom: 2px solid #D5DCF0;
}
.doc-page tbody td {
  padding: 10px 14px;
  border-bottom: 1px solid #D5DCF0;
  vertical-align: top;
  font-variant-numeric: tabular-nums;
}
.doc-page tbody tr:last-child td { border-bottom: none; }
.doc-page tbody tr:hover td { background: #EEF2FB; }
.doc-page td.col-mono {
  font-family: 'SFMono-Regular', 'Consolas', monospace;
  font-size: 12.5px;
  color: #1B2D5A;
  font-weight: 600;
}
.doc-page td.col-label { font-weight: 600; color: #1B2D5A; font-size: 13px; }
.doc-page td.col-desc  { color: #5C6E8A; font-size: 13px; }
.doc-page .two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 20px 0 10px;
}
.doc-page .card {
  background: #fff;
  border: 1px solid #D5DCF0;
  border-radius: 4px;
  padding: 14px 16px;
}
.doc-page .card-label {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #5C6E8A;
  font-weight: 700;
  margin-bottom: 6px;
}
.doc-page .card-val { font-size: 13.5px; color: #18213A; font-weight: 500; }
.doc-page .pill-grid { display: flex; flex-wrap: wrap; gap: 8px; margin: 4px 0 16px; }
.doc-page .pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  background: #fff;
  border: 1px solid #D5DCF0;
  color: #18213A;
  padding: 5px 13px;
  border-radius: 3px;
  font-weight: 500;
}
.doc-page .dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  display: inline-block;
}
.doc-page .c-navy   { background: #1B2D5A; }
.doc-page .c-teal   { background: #2BA7A0; }
.doc-page .c-purple { background: #7B5EA7; }
.doc-page .c-green  { background: #2E8B57; }
.doc-page .c-red    { background: #C0392B; }
.doc-page .c-orange { background: #E08020; }
.doc-page .ep-list { list-style: none; margin: 10px 0; }
.doc-page .ep-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 9px 0;
  border-bottom: 1px solid #D5DCF0;
}
.doc-page .ep-list li:last-child { border-bottom: none; }
.doc-page .method {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 2px 7px;
  border-radius: 3px;
  font-family: 'SFMono-Regular', monospace;
  flex-shrink: 0;
  margin-top: 2px;
  min-width: 42px;
  text-align: center;
}
.doc-page .GET  { background: #E6F4EA; color: #1E6B33; }
.doc-page .POST { background: #E8EEF8; color: #1B3A8C; }
.doc-page .ep-path { font-family: 'SFMono-Regular', monospace; font-size: 13px; font-weight: 600; color: #18213A; }
.doc-page .ep-desc { color: #5C6E8A; font-size: 12px; margin-top: 2px; }
.doc-page .ep-auth {
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 2px;
  font-weight: 700;
  margin-left: 6px;
  letter-spacing: 0.08em;
  vertical-align: middle;
}
.doc-page .ep-auth.pub  { background: #E6F4EA; color: #1E6B33; }
.doc-page .ep-auth.auth { background: #FEF3E2; color: #9B5500; }
.doc-page .callout {
  background: #fff;
  border: 1px solid #D5DCF0;
  border-left: 3px solid #C8A020;
  padding: 13px 18px;
  border-radius: 0 4px 4px 0;
  margin: 16px 0;
  font-size: 14px;
  max-width: 72ch;
}
.doc-page .callout.info { border-left-color: #243D72; }
.doc-page .callout strong { color: #1B2D5A; }

@media (max-width: 900px) {
  .doc-page .two-col { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .sidebar { display: none; }
  .docs-main { margin-left: 0; padding: 32px 24px 72px; }
}
@media (prefers-reduced-motion: reduce) {
  .nav-link { transition: none; }
}
</style>
