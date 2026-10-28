<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Analytics & Tracking — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Tracking</div>
    <h2>Analytics &amp; Tracking</h2>
    <p>Les trois pixels sont initialisés par le plugin <code>pixels.client.ts</code> uniquement après accord explicite du visiteur via le bandeau RGPD.</p>

    <div class="callout info">
      <strong>Conformité RGPD :</strong> Le plugin vérifie <code>localStorage.escen_cookie_consent</code> au chargement et écoute l'événement <code>window.cookies-accepted</code>. Aucun pixel n'est déclenché avant le consentement.
    </div>

    <div class="tbl-wrap" style="margin-top:16px">
      <table>
        <thead><tr><th>Service</th><th>Identifiant</th><th>Événements trackés</th></tr></thead>
        <tbody>
          <tr><td class="col-label">Meta Pixel</td><td class="col-mono">24431732409802544</td><td class="col-desc">PageView, changements de route SPA</td></tr>
          <tr><td class="col-label">Google Analytics 4</td><td class="col-mono">G-X87RFP5GDP</td><td class="col-desc">page_view, changements de route SPA</td></tr>
          <tr><td class="col-label">LinkedIn Insight</td><td class="col-mono">8182794</td><td class="col-desc">Conversions, audiences LinkedIn</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
