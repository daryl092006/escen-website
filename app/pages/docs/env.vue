<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Variables d\'environnement — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Référence</div>
    <h2>Variables d'environnement</h2>
    <p>Les identifiants de tracking sont exposés via <code>runtimeConfig.public</code> dans <code>nuxt.config.ts</code> et chargés depuis <code>.env</code>.</p>

    <pre><span class="c"># .env</span>
<span class="k">NUXT_PUBLIC_META_PIXEL_ID</span>=<span class="v">24431732409802544</span>
<span class="k">NUXT_PUBLIC_GA_ID</span>=<span class="v">G-X87RFP5GDP</span>
<span class="k">NUXT_PUBLIC_LINKEDIN_PIXEL_ID</span>=<span class="v">8182794</span></pre>

    <div class="callout">
      <strong>Note :</strong> <code>API_BASE_URL</code> et <code>STORAGE_URL</code> sont définis directement dans <code>config.ts</code> en fonction de <code>NODE_ENV</code> — pas de variable d'environnement dédiée requise pour ces URLs.
    </div>
  </div>
</template>
