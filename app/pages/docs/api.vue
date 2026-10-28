<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'API & Endpoints — ESCEN Docs', robots: 'noindex' })

const publicEndpoints = [
  { method: 'GET', path: '/public/blogs', desc: 'Liste tous les articles du blog' },
  { method: 'GET', path: '/public/blogs/{id}', desc: 'Détail d\'un article de blog' },
  { method: 'POST', path: '/public/blogs/{id}/comments', desc: 'Ajouter un commentaire sur un article' },
  { method: 'POST', path: '/public/newsletter/subscribe', desc: 'Inscription à la newsletter — body: { email }' },
  { method: 'GET', path: '/public/galeries', desc: 'Liste des albums photo' },
  { method: 'GET', path: '/public/galeries/{id}', desc: 'Album photo avec ses images' },
  { method: 'GET', path: '/public/configurations', desc: 'Paramètres de configuration de l\'application' },
  { method: 'GET', path: '/public/niveau/liste', desc: 'Liste des niveaux d\'études (Licence, Master, etc.)' },
  { method: 'GET', path: '/public/filieres/liste?niveau_id={id}', desc: 'Filières par niveau d\'études' },
  { method: 'POST', path: '/public/candidature/soumettre', desc: 'Soumission du dossier de candidature — multipart/form-data' },
  { method: 'POST', path: '/public/brochures/request', desc: 'Demande de téléchargement de brochure (nom, email, téléphone)' },
]

const authEndpoints = [
  { method: 'GET', path: '/mon-dossier/notifications', desc: 'Notifications du candidat connecté' },
  { method: 'POST', path: '/me-deconnecter', desc: 'Déconnexion — invalide le token côté serveur' },
]
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Backend</div>
    <h2>API &amp; Endpoints</h2>
    <p>Tous les appels API passent par le plugin Axios. L'URL de base est <code>https://escen.neostart.tech/api</code> en production.</p>

    <h3>Endpoints publics <span class="ep-auth pub">PUBLIC</span></h3>
    <ul class="ep-list">
      <li v-for="ep in publicEndpoints" :key="ep.path">
        <span class="method" :class="ep.method">{{ ep.method }}</span>
        <div>
          <div class="ep-path">{{ ep.path }}</div>
          <div class="ep-desc">{{ ep.desc }}</div>
        </div>
      </li>
    </ul>

    <h3>Endpoints protégés <span class="ep-auth auth">AUTH</span></h3>
    <ul class="ep-list">
      <li v-for="ep in authEndpoints" :key="ep.path">
        <span class="method" :class="ep.method">{{ ep.method }}</span>
        <div>
          <div class="ep-path">{{ ep.path }}</div>
          <div class="ep-desc">{{ ep.desc }}</div>
        </div>
      </li>
    </ul>

    <div class="callout">
      <strong>Authentification :</strong> Tous les endpoints <code>/mon-dossier/*</code> requièrent le header <code>Authorization: Bearer {candidat_token}</code>. Le plugin Axios l'injecte automatiquement.
    </div>
  </div>
</template>
