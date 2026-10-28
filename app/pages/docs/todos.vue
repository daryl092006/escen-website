<script setup>
definePageMeta({ layout: 'docs' })
useSeoMeta({ title: 'Notes & TODO — ESCEN Docs', robots: 'noindex' })

const inscriptionTodos = [
  { item: 'Sauvegarde étape 1', detail: 'Enregistrer les infos d\'identité en base avant de passer aux étapes suivantes' },
  { item: 'Logique BAC / BTS', detail: 'BAC → afficher champ "série" ; BTS/Licence/Master → afficher "domaine d\'études"' },
  { item: 'Indicatif téléphonique', detail: 'Ajouter la sélection d\'indicatif pays dans la modale brochure' },
  { item: 'Email admin', detail: 'Envoyer un email à admission@escen.university à chaque nouvelle candidature' },
  { item: 'Export Excel', detail: 'Exporter les inscriptions et téléchargements de brochures en format Excel' },
]

const financeTodos = [
  { item: 'Notification examens', detail: 'Alerter l\'équipe finance 1 semaine avant les examens' },
  { item: 'Frais de désistement', detail: 'Ajouter les frais de désistement dans le tableau financier' },
  { item: 'Licence 3 en ligne', detail: 'Séparer la Licence 3 en ligne des autres programmes dans les filtres' },
  { item: 'Mode hybride', detail: 'Ajouter l\'option de mode hybride dans la sélection de formation' },
  { item: 'Filtres avancés', detail: 'Filtrage par niveau et filière dans le calendrier de paiement' },
]

const miscTodos = [
  { item: 'Tracking brochures', detail: 'Enregistrer les téléchargements de brochures par utilisateur' },
  { item: 'Cookie analytics', detail: 'Améliorer le suivi des visiteurs via les cookies' },
  { item: 'Executive Master', detail: 'Corriger le texte et les problèmes de coupure d\'image' },
]
</script>

<template>
  <div class="doc-page">
    <div class="page-eyebrow">En cours</div>
    <h2>Notes &amp; TODO</h2>
    <p>Points identifiés en cours de développement, issus des fichiers de notes internes.</p>

    <h3>Formulaire d'inscription</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Item</th><th>Détail</th></tr></thead>
        <tbody>
          <tr v-for="t in inscriptionTodos" :key="t.item">
            <td class="col-label">{{ t.item }}</td>
            <td class="col-desc">{{ t.detail }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Dashboard finance</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Item</th><th>Détail</th></tr></thead>
        <tbody>
          <tr v-for="t in financeTodos" :key="t.item">
            <td class="col-label">{{ t.item }}</td>
            <td class="col-desc">{{ t.detail }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Améliorations diverses</h3>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Item</th><th>Détail</th></tr></thead>
        <tbody>
          <tr v-for="t in miscTodos" :key="t.item">
            <td class="col-label">{{ t.item }}</td>
            <td class="col-desc">{{ t.detail }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
