<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Composants — ESCEN Docs', robots: 'noindex' })

const components = [
  { name: 'Header.vue', size: '42 Ko', desc: 'Navigation principale — barre supérieure (email, téléphone, horaires), menu avec dropdown formations, logo. Position fixe avec effet au scroll.' },
  { name: 'Footer.vue', size: '13 Ko', desc: 'Pied de page multi-colonnes — logo, réseaux sociaux, liens rapides, formations, coordonnées.' },
  { name: 'BrochureModal.vue', size: '—', desc: 'Modal de téléchargement de brochure. Collecte nom, email, téléphone (intl-tel-input). POST vers /public/brochures/request.' },
  { name: 'CookieBanner.vue', size: '—', desc: 'Bandeau de consentement RGPD. Stocke le consentement dans localStorage.escen_cookie_consent. Contrôle l\'initialisation des pixels analytics.' },
  { name: 'Slider.vue', size: '—', desc: 'Carousel hero de la page d\'accueil avec rotation automatique.' },
  { name: 'Temoignage.vue', size: '—', desc: 'Section témoignages d\'étudiants.' },
  { name: 'GaleriePreview.vue', size: '—', desc: 'Aperçu de la galerie photo avec thumbnails sur la homepage.' },
  { name: 'PartenairesFlag.vue', size: '—', desc: 'Affichage des pays partenaires avec drapeaux via flag-icons.' },
  { name: 'Breadcrumb.vue', size: '—', desc: 'Fil d\'Ariane — composant de navigation contextuelle.' },
  { name: 'Cta.vue', size: '—', desc: 'Section call-to-action avec statistiques de l\'école.' },
  { name: 'TypewriterText.vue', size: '—', desc: 'Animation de texte effet machine à écrire.' },
  { name: 'GlobalLoader.vue', size: '—', desc: 'Indicateur de chargement global.' },
  { name: 'AboutUS.vue', size: '—', desc: 'Section présentation institutionnelle de l\'école.' },
  { name: 'NosValeurs.vue', size: '—', desc: 'Valeurs et mission de l\'établissement.' },
  { name: 'Vision.vue', size: '—', desc: 'Vision et orientation stratégique de l\'école.' },
]
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Interface</div>
    <h2>Composants principaux</h2>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Composant</th><th>Taille</th><th>Rôle</th></tr></thead>
        <tbody>
          <tr v-for="c in components" :key="c.name">
            <td class="col-mono">{{ c.name }}</td>
            <td>{{ c.size }}</td>
            <td class="col-desc">{{ c.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
