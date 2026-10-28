<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Authentification — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Sécurité</div>
    <h2>Authentification</h2>
    <p>L'authentification est basée sur un token Bearer stocké côté client. Il n'y a pas de cookie de session — le token est géré exclusivement via <code>localStorage</code>.</p>

    <h3>Flux de connexion</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Étape</th><th>Action</th><th>Stockage</th></tr></thead>
        <tbody>
          <tr><td class="col-label">1. Login</td><td class="col-desc">POST credentials → <code>/candidat/login</code></td><td>—</td></tr>
          <tr><td class="col-label">2. Token reçu</td><td class="col-desc">Le backend retourne un token</td><td><code>localStorage.candidat_token</code></td></tr>
          <tr><td class="col-label">3. Profil reçu</td><td class="col-desc">Informations du candidat stockées</td><td><code>localStorage.candidat_info</code> (JSON)</td></tr>
          <tr><td class="col-label">4. Requêtes suivantes</td><td class="col-desc">Axios injecte automatiquement le Bearer token</td><td>—</td></tr>
          <tr><td class="col-label">5. Erreur 401</td><td class="col-desc">Token expiré ou invalide détecté par l'intercepteur</td><td>Nettoyage localStorage + redirect login</td></tr>
          <tr><td class="col-label">6. Déconnexion</td><td class="col-desc">POST <code>/me-deconnecter</code> puis nettoyage local</td><td>Suppression des deux clés localStorage</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
