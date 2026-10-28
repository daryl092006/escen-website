<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Plugins — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Configuration</div>
    <h2>Plugins</h2>

    <h3>axios.ts</h3>
    <p>Configure l'instance Axios globale avec la base URL (dev/prod), l'injection automatique du Bearer token depuis <code>localStorage.candidat_token</code>, et la gestion des erreurs 401 (déconnexion + redirect vers <code>/candidat/login</code>).</p>
    <pre><span class="c">// Comportement du plugin axios</span>
<span class="k">baseURL</span>: <span class="v">API_BASE_URL</span>  <span class="c">// depuis config.ts</span>

<span class="c">// Intercepteur request</span>
<span class="k">config.headers.Authorization</span> = <span class="v">`Bearer ${localStorage.candidat_token}`</span>

<span class="c">// Intercepteur response — erreur 401</span>
localStorage.<span class="k">removeItem</span>(<span class="s">'candidat_token'</span>)
localStorage.<span class="k">removeItem</span>(<span class="s">'candidat_info'</span>)
router.<span class="k">push</span>(<span class="s">'/candidat/login'</span>)</pre>

    <h3>pixels.client.ts</h3>
    <p>Initialise les trois systèmes de tracking uniquement après le consentement cookies. Écoute l'événement <code>cookies-accepted</code> sur <code>window</code> et suit les changements de route pour le tracking SPA.</p>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Pixel</th><th>Déclencheur</th><th>Condition</th></tr></thead>
        <tbody>
          <tr><td class="col-label">Meta Pixel</td><td><code>fbq('init', pixelId)</code></td><td class="col-desc">consentement localStorage OU événement <code>cookies-accepted</code></td></tr>
          <tr><td class="col-label">Google Analytics</td><td><code>gtag('config', gaId)</code></td><td class="col-desc">idem</td></tr>
          <tr><td class="col-label">LinkedIn Insight</td><td><code>_linkedin_partner_id</code></td><td class="col-desc">idem</td></tr>
        </tbody>
      </table>
    </div>

    <h3>intl-tel-input.client.js</h3>
    <p>Expose <code>$intlTelInput</code> aux composants. Permet la saisie de numéros de téléphone internationaux avec sélection du pays et validation du format.</p>
  </div>
</template>
