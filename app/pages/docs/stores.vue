<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Stores Pinia — ESCEN Docs', robots: 'noindex' })

const piniaStores = [
  { name: 'blog.ts', state: 'articles[], currentArticle, loading, error', actions: 'fetchArticles(), fetchArticleById(id), addComment(id, data), subscribeNewsletter(email)' },
  { name: 'candidature.ts', state: 'isLoading, error', actions: 'soumettreCandidature(formData) — multipart/form-data' },
  { name: 'configuration.ts', state: 'parametres[]', actions: 'fetchConfigurations(), getParamValue(key)' },
  { name: 'gallery.ts', state: 'albums[], currentAlbum, otherAlbums, loading', actions: 'fetchAlbums(), fetchAlbumById(id)' },
  { name: 'filiere.ts', state: 'filieres[], isLoading, error', actions: 'fetchFilieresByNiveau(niveauId)' },
  { name: 'niveau.ts', state: 'niveaux[], isLoading, error', actions: 'fetchNiveaux()' },
]
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">État</div>
    <h2>Stores Pinia</h2>
    <p>Tous les stores sont dans <code>app/stores/</code>. Chaque store encapsule les appels API et l'état associé.</p>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Store</th><th>État</th><th>Actions principales</th></tr></thead>
        <tbody>
          <tr v-for="s in piniaStores" :key="s.name">
            <td class="col-mono">{{ s.name }}</td>
            <td class="col-desc"><code>{{ s.state }}</code></td>
            <td class="col-desc">{{ s.actions }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
