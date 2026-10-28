<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Structure des répertoires — ESCEN Docs', robots: 'noindex' })

const tree = `escen-website/
├── app/                      ← Répertoire source (srcDir)
│   ├── components/            ← Composants réutilisables
│   ├── layouts/               ← Layouts (default, auth, candidat, docs)
│   ├── pages/                 ← Routage basé sur les fichiers
│   ├── plugins/               ← axios.ts, pixels.client.ts, intl-tel-input.client.js
│   ├── stores/                ← Stores Pinia
│   ├── utils/                 ← Fonctions utilitaires et données statiques
│   ├── app.vue                ← Composant racine, meta SEO globaux
│   └── router.options.ts      ← Configuration du routeur
├── public/                    ← Assets statiques globaux
│   ├── logo/                  ← Logos ESCEN
│   ├── formations/            ← Images des formations
│   ├── slider/                ← Images du carousel homepage
│   ├── album/                 ← Galeries photo
│   ├── temoignage/            ← Photos des témoignages
│   ├── payspartenaire/        ← Drapeaux des pays partenaires
│   └── pdf/                   ← Brochures PDF
├── nuxt.config.ts
├── config.ts
└── package.json`
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Architecture</div>
    <h2>Structure des répertoires</h2>
    <div class="tree">{{ tree }}</div>
  </div>
</template>
