<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Vue d\'ensemble — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Introduction</div>
    <h2>Vue d'ensemble</h2>

    <p>Le site ESCEN est une application Vue 3 / Nuxt 4 en mode statique (CSR). Il couvre deux grandes zones fonctionnelles : le <strong>site public</strong> (catalogue des formations, blog, galerie, inscriptions) et le <strong>portail candidat</strong> sécurisé (dossier, documents, notifications).</p>

    <div class="two-col">
      <div class="card">
        <div class="card-label">URL de production</div>
        <div class="card-val">https://www.escen.university</div>
      </div>
      <div class="card">
        <div class="card-label">API backend</div>
        <div class="card-val"><code>https://escen.neostart.tech/api</code></div>
      </div>
      <div class="card">
        <div class="card-label">API locale (dev)</div>
        <div class="card-val"><code>http://localhost:8000/api</code></div>
      </div>
      <div class="card">
        <div class="card-label">Développeur</div>
        <div class="card-val">Neo Start Technology</div>
      </div>
    </div>

    <h3>Zones fonctionnelles</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Zone</th><th>Description</th><th>Auth requise</th></tr></thead>
        <tbody>
          <tr><td class="col-label">Site public</td><td class="col-desc">Formations, blog, galerie, contact, brochures, inscription</td><td>Non</td></tr>
          <tr><td class="col-label">Portail candidat</td><td class="col-desc">Dashboard, profil, documents, notifications, mot de passe</td><td>Oui — Bearer token</td></tr>
          <tr><td class="col-label">Vérification</td><td class="col-desc">Confirmation d'email par matricule candidat</td><td>Non</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
