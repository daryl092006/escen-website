<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Layouts — ESCEN Docs', robots: 'noindex' })
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">Architecture</div>
    <h2>Layouts</h2>

    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Layout</th><th>Utilisé par</th><th>Éléments inclus</th></tr></thead>
        <tbody>
          <tr>
            <td class="col-label">default</td>
            <td class="col-desc">Toutes les pages publiques</td>
            <td class="col-desc"><code>&lt;Header&gt;</code>, <code>&lt;Footer&gt;</code>, <code>&lt;CookieBanner&gt;</code>, bouton scroll-to-top</td>
          </tr>
          <tr>
            <td class="col-label">auth</td>
            <td class="col-desc">/inscription, /candidat/login</td>
            <td class="col-desc">Layout minimal sans header/footer</td>
          </tr>
          <tr>
            <td class="col-label">candidat</td>
            <td class="col-desc">Portail candidat (/candidat/*)</td>
            <td class="col-desc">Sidebar de navigation, dropdown profil, centre de notifications, badge logout</td>
          </tr>
          <tr>
            <td class="col-label">docs</td>
            <td class="col-desc">/docs/*</td>
            <td class="col-desc">Sidebar de navigation de la documentation uniquement</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout info">
      <strong>Guard de navigation :</strong> Le layout <code>candidat</code> vérifie la présence de <code>candidat_token</code> dans le <code>localStorage</code>. En l'absence du token, l'utilisateur est redirigé vers <code>/candidat/login</code>.
    </div>
  </div>
</template>
