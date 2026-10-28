<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Stack technique — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Fondations</div>
    <h2>Stack technique</h2>

    <h3>Framework &amp; Rendu</h3>
    <div class="pill-grid">
      <span class="pill"><span class="dot c-navy" />Vue 3.5.25</span>
      <span class="pill"><span class="dot c-navy" />Nuxt 4.2.1</span>
      <span class="pill"><span class="dot c-navy" />TypeScript 5.9.3</span>
      <span class="pill"><span class="dot c-navy" />SSR : false — Static preset</span>
    </div>

    <h3>UI &amp; Style</h3>
    <div class="pill-grid">
      <span class="pill"><span class="dot c-teal" />Tailwind CSS</span>
      <span class="pill"><span class="dot c-teal" />@nuxt/ui 4.2.1</span>
      <span class="pill"><span class="dot c-teal" />PrimeVue 4.5.5</span>
      <span class="pill"><span class="dot c-teal" />Thème Aura (light)</span>
      <span class="pill"><span class="dot c-teal" />Lucide Vue Next</span>
      <span class="pill"><span class="dot c-teal" />Flag Icons 7.5</span>
    </div>

    <h3>État &amp; Données</h3>
    <div class="pill-grid">
      <span class="pill"><span class="dot c-purple" />@pinia/nuxt 0.11.3</span>
      <span class="pill"><span class="dot c-purple" />Axios 1.16.1</span>
      <span class="pill"><span class="dot c-purple" />@nuxt/content 3.8.2</span>
    </div>

    <h3>Formulaires &amp; UX</h3>
    <div class="pill-grid">
      <span class="pill"><span class="dot c-green" />intl-tel-input 25.15</span>
      <span class="pill"><span class="dot c-green" />v-phone-input 5.1.4</span>
      <span class="pill"><span class="dot c-green" />sweetalert 2.1.2</span>
      <span class="pill"><span class="dot c-green" />toastr 2.1.4</span>
      <span class="pill"><span class="dot c-green" />countries-list 3.2.2</span>
    </div>

    <h3>SEO &amp; Performance</h3>
    <div class="pill-grid">
      <span class="pill"><span class="dot c-orange" />@nuxtjs/sitemap 8.2.1</span>
      <span class="pill"><span class="dot c-orange" />@unhead/vue 2.0.19</span>
      <span class="pill"><span class="dot c-orange" />Schema.org JSON-LD</span>
      <span class="pill"><span class="dot c-orange" />Open Graph / Twitter Card</span>
    </div>

    <h3>Analytics</h3>
    <div class="pill-grid">
      <span class="pill"><span class="dot c-red" />Meta Pixel (Facebook)</span>
      <span class="pill"><span class="dot c-red" />Google Analytics 4</span>
      <span class="pill"><span class="dot c-red" />LinkedIn Insight Tag</span>
    </div>
  </div>
</template>
