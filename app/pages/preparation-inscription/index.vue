<template>
  <div class="prep-page">
    <div class="prep-bg" aria-hidden="true">
      <div class="prep-bg-grid"></div>
      <div class="prep-bg-blob prep-bg-blob--1"></div>
      <div class="prep-bg-blob prep-bg-blob--2"></div>
      <div class="prep-bg-blob prep-bg-blob--3"></div>
    </div>

    <div class="prep-hero">
      <Breadcrumb
        title="Préparez votre dossier"
        subtitle="Avant de commencer"
        description="Retrouvez, pour chaque niveau, la liste complète des pièces à réunir avant de démarrer votre inscription en ligne."
        backgroundImage="/valeurs/bg.jpg"
        :breadcrumb="[
          { label: 'Accueil', href: '/' },
          { label: 'Préparer mon inscription' },
        ]"
      />
    </div>

    <!-- ─── Couverture du dossier ─────────────────────────────────── -->
    <div class="prep-cover-wrap">
      <div class="prep-cover">
        <div class="prep-cover-seal">
          <svg viewBox="0 0 100 100" class="prep-cover-seal-ring">
            <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 4" />
          </svg>
          <span class="prep-cover-seal-value">{{ maxDocsCount || '—' }}</span>
          <span class="prep-cover-seal-label">pièces max.</span>
        </div>
        <div class="prep-cover-body">
          <p class="prep-cover-kicker">Dossier de candidature</p>
          <h2 class="prep-cover-title">Un dossier, {{ niveauxAvecDocs.length || '' }} niveaux, une quinzaine de minutes</h2>
          <p class="prep-cover-text">
            Cochez chaque pièce à mesure que vous la réunissez — votre progression reste enregistrée sur cet appareil.
          </p>
        </div>
        <div class="prep-cover-eta">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
            <circle cx="12" cy="12" r="9" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3.5 2" />
          </svg>
          <span>~15 min en ligne</span>
        </div>
      </div>
    </div>

    <section class="prep-section">
      <div class="prep-container">

        <!-- Onglets de dossier -->
        <div v-if="!isLoading && niveauxAvecDocs.length > 1" class="prep-tabs" role="tablist">
          <a
            v-for="n in niveauxAvecDocs"
            :key="n.id"
            :href="`#niveau-${n.id}`"
            class="prep-tab"
            :style="{ '--tab-progress': `${n.progress}%` }"
          >
            <span class="prep-tab-name">{{ n.libelle || n.nom }}</span>
            <span class="prep-tab-frac">{{ n.checkedCount }}/{{ n.docs.length }}</span>
          </a>
        </div>

        <!-- Chargement -->
        <div v-if="isLoading" class="prep-niveaux">
          <div v-for="i in 2" :key="i" class="prep-folio prep-folio--skel">
            <div class="prep-folio-tab">
              <div class="prep-skel-line" style="width:60%;height:14px"></div>
            </div>
            <div class="prep-folio-body">
              <div class="prep-skel-line" style="width:40%;height:24px;margin-bottom:1.5rem"></div>
              <div class="prep-checklist">
                <div v-for="j in 5" :key="j" class="prep-item prep-item--skel">
                  <div class="prep-skel-box"></div>
                  <div class="prep-skel-line" style="width:70%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenu -->
        <div v-else class="prep-niveaux">
          <article
            v-for="(niveau, idx) in niveauxAvecDocs"
            :id="`niveau-${niveau.id}`"
            :key="niveau.id"
            class="prep-folio"
          >
            <div class="prep-folio-tab">
              <span class="prep-folio-tab-num">{{ String(idx + 1).padStart(2, '0') }}</span>
              <span class="prep-folio-tab-label">Niveau</span>
            </div>

            <div class="prep-folio-body">
              <header class="prep-folio-head">
                <h2 class="prep-folio-title">{{ niveau.libelle || niveau.nom }}</h2>
                <div class="prep-progress" :aria-label="`${niveau.checkedCount} sur ${niveau.docs.length} pièces réunies`">
                  <svg viewBox="0 0 44 44" class="prep-progress-ring">
                    <circle cx="22" cy="22" r="19" class="prep-progress-track" />
                    <circle
                      cx="22" cy="22" r="19"
                      class="prep-progress-fill"
                      :style="{ strokeDasharray: 119.4, strokeDashoffset: 119.4 * (1 - niveau.progress / 100) }"
                    />
                  </svg>
                  <span class="prep-progress-text">{{ niveau.checkedCount }}/{{ niveau.docs.length }}</span>
                </div>
              </header>

              <template v-if="niveau.docs.length">
                <div v-if="niveau.obligatoires.length" class="prep-doc-group">
                  <p class="prep-doc-group-title">Pièces obligatoires</p>
                  <ul class="prep-checklist">
                    <li v-for="doc in niveau.obligatoires" :key="doc.key">
                      <label class="prep-item" :class="{ 'prep-item--done': isChecked(niveau.id, doc.key) }">
                        <span class="prep-item-box" @click.prevent="toggle(niveau.id, doc.key)">
                          <svg v-if="isChecked(niveau.id, doc.key)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span class="prep-item-icon">
                          <svg v-if="iconKind(doc) === 'photo'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <svg v-else-if="iconKind(doc) === 'medical'" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </span>
                        <span class="prep-item-label">{{ doc.label }}</span>
                        <span class="prep-item-tag prep-item-tag--req">requis</span>
                      </label>
                    </li>
                  </ul>
                </div>

                <div v-if="niveau.optionnels.length" class="prep-doc-group">
                  <p class="prep-doc-group-title">Pièces optionnelles</p>
                  <ul class="prep-checklist">
                    <li v-for="doc in niveau.optionnels" :key="doc.key">
                      <label class="prep-item prep-item--opt" :class="{ 'prep-item--done': isChecked(niveau.id, doc.key) }">
                        <span class="prep-item-box" @click.prevent="toggle(niveau.id, doc.key)">
                          <svg v-if="isChecked(niveau.id, doc.key)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span class="prep-item-icon">
                          <svg v-if="iconKind(doc) === 'photo'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <svg v-else-if="iconKind(doc) === 'medical'" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </span>
                        <span class="prep-item-label">{{ doc.label }}</span>
                        <span class="prep-item-tag prep-item-tag--opt">facultatif</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </template>
              <p v-else class="prep-empty">Aucune pièce spécifique configurée pour ce niveau.</p>
            </div>
          </article>
        </div>

        <!-- Appel à l'action -->
        <div class="prep-cta">
          <div class="prep-cta-content">
            <p class="prep-cta-kicker">Dossier prêt ?</p>
            <h3 class="prep-cta-title">Démarrez votre inscription en ligne</h3>
            <p class="prep-cta-text">Comptez une quinzaine de minutes pour compléter le formulaire une fois vos pièces réunies.</p>
          </div>
          <NuxtLink to="/inscription" class="prep-cta-btn">
            Commencer mon inscription <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ redirect: '/inscription' })


import { ref, reactive, computed, onMounted, watch } from 'vue'
import { useNuxtApp } from '#app'
import { useNiveauStore } from '~/stores/niveau'

const niveauStore = useNiveauStore()

const isLoading = ref(true)
const niveauxBruts = ref([])

const STORAGE_KEY = 'prep-dossier-checked'

// Pièces génériques utilisées quand aucune configuration spécifique n'existe
// pour un niveau donné — cohérent avec le repli déjà appliqué côté formulaire.
const defaultDocs = [
  { key: 'photo_identite_file', label: "Photo d'identité", is_obligatoire: true },
  { key: 'nationalite_file', label: "Pièce d'identité", is_obligatoire: true },
  { key: 'naissance_file', label: 'Acte de naissance', is_obligatoire: true },
  { key: 'diplome_file', label: 'Dernier diplôme', is_obligatoire: true },
  { key: 'certificat_medical_file', label: 'Certificat médical', is_obligatoire: false },
  { key: 'cv_file', label: 'Curriculum vitae', is_obligatoire: false },
  { key: 'releve_bac1', label: 'Relevés année 1', is_obligatoire: false },
  { key: 'releve_bac2', label: 'Relevés année 2', is_obligatoire: false },
]

// État de la checklist (persisté localement, par niveau + clé de pièce)
const checkedState = reactive({})

const loadCheckedState = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw) Object.assign(checkedState, JSON.parse(raw))
  } catch (e) {
    // stockage indisponible : la checklist reste simplement non persistée
  }
}

const persistCheckedState = () => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(checkedState))
  } catch (e) {
    // ignore
  }
}

const isChecked = (niveauId, docKey) => !!checkedState[`${niveauId}:${docKey}`]

const toggle = (niveauId, docKey) => {
  const k = `${niveauId}:${docKey}`
  checkedState[k] = !checkedState[k]
  persistCheckedState()
}

// Regroupe obligatoires/optionnels et calcule la progression de chaque niveau
const niveauxAvecDocs = computed(() => niveauxBruts.value.map(n => {
  const checkedCount = n.docs.filter(d => isChecked(n.id, d.key)).length
  return {
    ...n,
    obligatoires: n.docs.filter(d => d.is_obligatoire),
    optionnels: n.docs.filter(d => !d.is_obligatoire),
    checkedCount,
    progress: n.docs.length ? Math.round((checkedCount / n.docs.length) * 100) : 0,
  }
}))

const maxDocsCount = computed(() => niveauxBruts.value.reduce((max, n) => Math.max(max, n.docs.length), 0))

const iconKind = (doc) => {
  const text = `${doc.key || ''} ${doc.label || ''}`.toLowerCase()
  if (text.includes('photo')) return 'photo'
  if (text.includes('medical') || text.includes('médical')) return 'medical'
  return 'doc'
}

const fetchNiveauDocs = async (niveauId) => {
  try {
    const { $axios } = useNuxtApp()
    const res = await $axios.get(`/public/niveau/${niveauId}/document-requirements`)
    const reqs = res.data || []
    if (!reqs.length) return defaultDocs
    return reqs.map(r => ({
      key: r.document_key,
      label: r.nom_affichage,
      is_obligatoire: r.is_obligatoire == 1 || r.is_obligatoire === true,
    }))
  } catch (e) {
    console.error('Erreur chargement des documents du niveau', niveauId, e)
    return defaultDocs
  }
}

onMounted(async () => {
  loadCheckedState()
  isLoading.value = true
  try {
    const niveaux = await niveauStore.fetchNiveaux()
    niveauxBruts.value = await Promise.all(
      niveaux.map(async (n) => ({
        id: n.id,
        libelle: n.libelle,
        nom: n.nom,
        docs: await fetchNiveauDocs(n.id),
      }))
    )
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped>
@reference "tailwindcss";

.prep-page {
  @apply relative;
  isolation: isolate;
  background: #F9FAFB;
}

.prep-bg  { @apply absolute inset-0 overflow-hidden pointer-events-none; z-index: 0; }
.prep-hero, .prep-cover-wrap, .prep-section { @apply relative; z-index: 1; }
.prep-bg-grid {
  @apply absolute;
  inset: -60px;
  background-image: radial-gradient(rgba(18,25,43,0.06) 1px, transparent 1.5px);
  background-size: 32px 32px;
  animation: prep-grid-pan 60s linear infinite;
}
.prep-bg-blob {
  @apply absolute rounded-full;
  filter: blur(100px);
  opacity: 0.35;
}
.prep-bg-blob--1 {
  width: 500px; height: 500px;
  top: -100px; right: -150px;
  background: radial-gradient(circle, #01b4d5, transparent 70%);
  animation: prep-float-1 24s ease-in-out infinite;
}
.prep-bg-blob--2 {
  width: 480px; height: 480px;
  top: 45%; left: -200px;
  background: radial-gradient(circle, #C9A84C, transparent 70%);
  animation: prep-float-2 28s ease-in-out infinite;
}
.prep-bg-blob--3 {
  width: 450px; height: 450px;
  top: 80%; right: -100px;
  background: radial-gradient(circle, #01b4d5, transparent 70%);
  animation: prep-float-1 26s ease-in-out infinite reverse;
}
@keyframes prep-grid-pan {
  0%   { background-position: 0 0; }
  100% { background-position: 320px 320px; }
}
@keyframes prep-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(-30px, 40px) scale(1.05); }
}
@keyframes prep-float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(40px, -30px) scale(1.05); }
}
@media (prefers-reduced-motion: reduce) {
  .prep-bg-grid, .prep-bg-blob { animation: none; }
}

.prep-cover-wrap { @apply relative z-20 px-4 sm:px-8 lg:px-12; margin-top: -3.5rem; }
.prep-cover {
  @apply w-full flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-3xl relative overflow-hidden;
  padding: 2.5rem 3rem;
  background: #12192B;
  box-shadow: 0 20px 40px -10px rgba(18,25,43,0.3);
}
.prep-cover::before {
  content: '';
  @apply absolute top-0 left-0 w-full h-1;
  background: linear-gradient(90deg, #01b4d5, #C9A84C);
}
.prep-cover-seal {
  @apply relative flex-shrink-0 flex flex-col items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10;
  width: 100px; height: 100px;
  color: #01b4d5;
}
.prep-cover-seal-ring { @apply absolute inset-0 w-full h-full opacity-60; }
.prep-cover-seal-value { @apply font-bold text-white; font-size: 32px; line-height: 1; text-shadow: 0 2px 4px rgba(0,0,0,0.2); }
.prep-cover-seal-label { @apply text-[11px] font-medium mt-1 uppercase tracking-wider; color: #C9A84C; }
.prep-cover-body { @apply flex-1 text-center sm:text-left; }
.prep-cover-kicker { @apply text-xs font-bold uppercase tracking-[0.2em] mb-2; color: #C9A84C; }
.prep-cover-title { @apply text-white font-semibold leading-tight; font-size: clamp(1.25rem, 2vw + 0.7rem, 2rem); }
.prep-cover-text { @apply text-sm mt-3 leading-relaxed; color: rgba(255,255,255,0.7); max-width: 50ch; }
.prep-cover-eta {
  @apply hidden md:flex flex-shrink-0 items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm;
  color: white;
}
.prep-cover-eta svg { width: 18px; height: 18px; color: #01b4d5; }

.prep-section { @apply pt-10 pb-16 lg:pt-12 lg:pb-20; }
.prep-container { @apply w-full px-4 md:px-8 lg:px-12 max-w-7xl mx-auto; }

.prep-tabs { @apply flex items-center gap-3 overflow-x-auto mb-6 pb-2; scrollbar-width: none; }
.prep-tabs::-webkit-scrollbar { display: none; }
.prep-tab {
  @apply relative flex-shrink-0 flex items-center gap-3 whitespace-nowrap overflow-hidden transition-all duration-300;
  padding: 0.75rem 1.25rem;
  border-radius: 12px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.prep-tab:hover { border-color: #01b4d5; box-shadow: 0 4px 12px rgba(1,180,213,0.1); }
.prep-tab-name { @apply text-sm font-semibold; color: #12192B; }
.prep-tab-frac { @apply text-[11px] font-bold bg-[#F3F4F6] px-2 py-1 rounded text-[#4B5563]; }
.prep-tab::after {
  content: '';
  @apply absolute left-0 bottom-0 block;
  height: 3px; width: 100%; background: #F3F4F6;
}
.prep-tab::before {
  content: '';
  @apply absolute left-0 bottom-0 block;
  height: 3px; width: var(--tab-progress, 0%);
  background: #01b4d5; z-index: 1; transition: width 0.4s ease;
}

.prep-niveaux { @apply flex flex-col gap-8; }

.prep-folio {
  @apply relative flex flex-col rounded-2xl overflow-hidden transition-shadow duration-300;
  scroll-margin-top: 2rem;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  box-shadow: 0 4px 24px rgba(18,25,43,0.04);
}
.prep-folio:hover { box-shadow: 0 10px 40px rgba(18,25,43,0.08); }

.prep-folio-tab {
  @apply flex flex-row items-center justify-start gap-4;
  background: #12192B;
  padding: 1rem 2rem;
  width: 100%;
}
.prep-folio-tab-num { @apply text-2xl font-bold text-white; }
.prep-folio-tab-label { @apply text-xs font-bold uppercase tracking-[0.2em]; color: #01b4d5; }

.prep-folio-body { @apply flex-1 p-6 sm:p-10; }
.prep-folio-head { @apply flex items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6; }
.prep-folio-title { @apply text-2xl sm:text-3xl font-bold text-[#12192B]; }

.prep-progress { @apply relative flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-full; width: 56px; height: 56px; }
.prep-progress-ring { @apply w-full h-full -rotate-90 p-1; }
.prep-progress-track { fill: none; stroke: #E5E7EB; stroke-width: 4; }
.prep-progress-fill { fill: none; stroke: #01b4d5; stroke-width: 4; stroke-linecap: round; transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.prep-progress-text { @apply absolute inset-0 flex items-center justify-center text-[11px] font-bold; color: #12192B; }

.prep-empty { @apply text-sm py-8 text-center bg-gray-50 rounded-xl font-medium; color: #6B7280; }

.prep-doc-group + .prep-doc-group { @apply mt-8 pt-8; border-top: 1px dashed #E5E7EB; }
.prep-doc-group-title { @apply text-[11px] font-bold uppercase tracking-[0.15em] mb-4 flex items-center gap-2; color: #6B7280; }
.prep-doc-group-title::after { content: ''; @apply h-px flex-1 bg-gray-100; }

.prep-checklist { @apply grid gap-3; grid-template-columns: 1fr; }
@media (min-width: 640px)  { .prep-checklist { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .prep-checklist { grid-template-columns: repeat(3, 1fr); } }
.prep-item {
  @apply flex items-center gap-4 rounded-xl cursor-pointer transition-all duration-200 border border-transparent;
  padding: 1rem;
  background: #F9FAFB;
}
.prep-item:hover { background: #FFFFFF; border-color: #01b4d5; box-shadow: 0 4px 12px rgba(1,180,213,0.05); transform: translateY(-1px); }
.prep-item-box {
  @apply flex-shrink-0 flex items-center justify-center rounded-md transition-all duration-200 bg-white;
  width: 24px; height: 24px;
  border: 2px solid #D1D5DB;
  color: white;
}
.prep-item-box svg { width: 14px; height: 14px; }
.prep-item--done .prep-item-box { background: #01b4d5; border-color: #01b4d5; box-shadow: 0 0 10px rgba(1,180,213,0.3); }
.prep-item--opt.prep-item--done .prep-item-box { background: #C9A84C; border-color: #C9A84C; box-shadow: 0 0 10px rgba(201,168,76,0.3); }

.prep-item-icon { @apply flex-shrink-0 flex items-center justify-center rounded-lg w-10 h-10 bg-white shadow-sm border border-gray-100; color: #4B5563; }
.prep-item-icon svg { width: 18px; height: 18px; color: #01b4d5; }
.prep-item--done .prep-item-icon { opacity: 0.5; }
.prep-item-label { @apply flex-1 text-sm font-semibold text-[#111827] transition-colors duration-200; }
.prep-item--done .prep-item-label { color: #9CA3AF; text-decoration: line-through; text-decoration-color: #D1D5DB; }

.prep-item-tag { @apply flex-shrink-0 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full; }
.prep-item-tag--req { background: rgba(1,180,213,0.1); color: #01899f; }
.prep-item-tag--opt { background: rgba(201,168,76,0.1); color: #b39035; }

.prep-folio--skel .prep-folio-tab { opacity: 0.6; }
.prep-item--skel { pointer-events: none; }
.prep-skel-line, .prep-skel-box { @apply rounded-md animate-pulse; background: #E5E7EB; }
.prep-skel-box { width: 24px; height: 24px; border-radius: 6px; flex-shrink: 0; }
.prep-skel-line { height: 12px; }

.prep-cta {
  @apply relative mt-10 lg:mt-14 flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl overflow-hidden p-8 sm:p-12 text-center sm:text-left;
  background: #12192B;
  box-shadow: 0 20px 40px -10px rgba(18,25,43,0.3);
}
.prep-cta::before {
  content: '';
  @apply absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 pointer-events-none;
  background: radial-gradient(circle, #01b4d5, transparent 70%);
  transform: translate(30%, -30%);
}
.prep-cta-content { @apply relative z-10; }
.prep-cta-kicker { @apply text-xs font-bold uppercase tracking-[0.2em] mb-2; color: #C9A84C; }
.prep-cta-title { @apply text-2xl sm:text-3xl font-bold text-white mb-3; }
.prep-cta-text  { @apply text-sm leading-relaxed; color: rgba(255,255,255,0.7); max-width: 45ch; }
.prep-cta-btn {
  @apply relative z-10 flex-shrink-0 inline-flex items-center justify-center gap-3 font-bold transition-all duration-300 whitespace-nowrap;
  height: 56px;
  padding: 0 36px;
  background: linear-gradient(135deg, #01b4d5, #01899f);
  color: white;
  border-radius: 12px;
  font-size: 15px;
  box-shadow: 0 8px 24px rgba(1,180,213,0.25);
}
.prep-cta-btn:hover { box-shadow: 0 12px 32px rgba(1,180,213,0.4); transform: translateY(-2px); }

@media (max-width: 640px) {
  .prep-cover { padding: 2rem 1.5rem; border-radius: 1.5rem; }
  .prep-folio-body { padding: 1.5rem; }
  .prep-folio-tab { padding: 1rem 1.5rem; }
  .prep-cta { padding: 2rem; border-radius: 1.5rem; }
}
</style>