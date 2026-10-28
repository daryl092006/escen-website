<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Pages & Routage — ESCEN Docs', robots: 'noindex' })

const publicRoutes = [
  { path: '/', file: 'index.vue', desc: 'Accueil — slider, valeurs, témoignages, galerie' },
  { path: '/formations', file: 'formations/index.vue', desc: 'Catalogue complet des formations' },
  { path: '/formations/licence-professionnelle', file: 'licence-professionnelle/index.vue', desc: 'Licences — Finance, IA, Management, Marketing' },
  { path: '/formations/master-professionnel', file: 'master-professionnel/index.vue', desc: 'Masters — Finance, Management, Marketing' },
  { path: '/formations/executive-education', file: 'executive-education/index.vue', desc: 'Formation continue Executive' },
  { path: '/formations/certificats', file: 'certificats/index.vue', desc: 'Certificats professionnels' },
  { path: '/blogs', file: 'blogs/index.vue', desc: 'Liste des articles du blog' },
  { path: '/blogs/[id]', file: 'blogs/[id].vue', desc: 'Article de blog (route dynamique)' },
  { path: '/galerie', file: 'galerie/index.vue', desc: 'Liste des albums photo' },
  { path: '/galerie/[slug]', file: 'galerie/[slug].vue', desc: 'Album photo détail (route dynamique)' },
  { path: '/contact', file: 'contact.vue', desc: 'Formulaire de contact' },
  { path: '/inscription', file: 'inscription/index.vue', desc: 'Formulaire de candidature multi-étapes' },
  { path: '/verif/[matricule]', file: 'verif/[matricule].vue', desc: 'Vérification d\'email par matricule' },
  { path: '/cgu', file: 'cgu.vue', desc: 'Conditions générales d\'utilisation' },
  { path: '/confidentialite', file: 'confidentialite.vue', desc: 'Politique de confidentialité' },
  { path: '/mentions-legales', file: 'mentions-legales.vue', desc: 'Mentions légales' },
  { path: '/politique-cookies', file: 'politique-cookies.vue', desc: 'Politique cookies (RGPD)' },
]

const candidatRoutes = [
  { path: '/candidat/login', desc: 'Connexion candidat (layout auth)' },
  { path: '/candidat/dashboard', desc: 'Tableau de bord — statut dossier, timeline, rectifications' },
  { path: '/candidat/profil', desc: 'Informations personnelles — lecture et modification' },
  { path: '/candidat/documents', desc: 'Upload et gestion des pièces justificatives' },
  { path: '/candidat/notifications', desc: 'Centre de notifications' },
  { path: '/candidat/mot-de-passe-oublie', desc: 'Demande de réinitialisation de mot de passe' },
  { path: '/candidat/reinitialiser-mot-de-passe', desc: 'Saisie du nouveau mot de passe' },
]
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Architecture</div>
    <h2>Pages &amp; Routage</h2>
    <p>Le routage est basé sur les fichiers dans <code>app/pages/</code>. Les pages publiques utilisent le layout <code>default</code>, le portail candidat utilise le layout <code>candidat</code>.</p>

    <h3>Pages publiques</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Route</th><th>Fichier</th><th>Description</th></tr></thead>
        <tbody>
          <tr v-for="r in publicRoutes" :key="r.path">
            <td class="col-mono">{{ r.path }}</td>
            <td><code>{{ r.file }}</code></td>
            <td class="col-desc">{{ r.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Portail candidat <span class="badge-auth">auth requise</span></h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Route</th><th>Description</th></tr></thead>
        <tbody>
          <tr v-for="r in candidatRoutes" :key="r.path">
            <td class="col-mono">{{ r.path }}</td>
            <td class="col-desc">{{ r.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.badge-auth {
  font-size: 10px;
  letter-spacing: 0.08em;
  padding: 1px 7px;
  border-radius: 2px;
  font-weight: 700;
  background: #FEF3E2;
  color: #9B5500;
  text-transform: none;
  vertical-align: middle;
  margin-left: 6px;
}
</style>
