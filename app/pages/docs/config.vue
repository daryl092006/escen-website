<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Configuration — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Paramètres</div>
    <h2>Configuration</h2>

    <p>La configuration principale est répartie entre <code>nuxt.config.ts</code> (modules, runtime config, preset) et <code>config.ts</code> (URLs d'API et de stockage).</p>

    <h3>config.ts — URLs selon l'environnement</h3>
    <pre><span class="c">// config.ts — détection automatique dev / prod</span>
<span class="k">const isDev</span> = <span class="v">process.env.NODE_ENV === 'development'</span>

<span class="k">export const API_BASE_URL</span> = isDev
  ? <span class="s">'http://localhost:8000/api'</span>
  : <span class="s">'https://escen.neostart.tech/api'</span>

<span class="k">export const STORAGE_URL</span> = isDev
  ? <span class="s">'http://localhost:8000/storage'</span>
  : <span class="s">'https://escen.neostart.tech/storage'</span></pre>

    <h3>nuxt.config.ts — Points clés</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Clé</th><th>Valeur</th><th>Rôle</th></tr></thead>
        <tbody>
          <tr><td class="col-mono">ssr</td><td><code>false</code></td><td class="col-desc">Rendu côté client uniquement (SPA statique)</td></tr>
          <tr><td class="col-mono">srcDir</td><td><code>app/</code></td><td class="col-desc">Répertoire source de l'application</td></tr>
          <tr><td class="col-mono">nitro.preset</td><td><code>static</code></td><td class="col-desc">Génération de fichiers HTML statiques</td></tr>
          <tr><td class="col-mono">runtimeConfig.public.metaPixelId</td><td><code>24431732409802544</code></td><td class="col-desc">Facebook Pixel</td></tr>
          <tr><td class="col-mono">runtimeConfig.public.gaId</td><td><code>G-X87RFP5GDP</code></td><td class="col-desc">Google Analytics 4</td></tr>
          <tr><td class="col-mono">runtimeConfig.public.linkedinPixelId</td><td><code>8182794</code></td><td class="col-desc">LinkedIn Insight</td></tr>
          <tr><td class="col-mono">site.url</td><td><code>escen.university</code></td><td class="col-desc">Génération du sitemap</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
