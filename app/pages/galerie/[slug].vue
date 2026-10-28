<template>
  <div class="min-h-screen bg-[#f5f7fb]">

    <!-- ══ HERO (Breadcrumb composant) ══ -->
    <Breadcrumb
      v-if="album"
      :title="album.title"
      subtitle="Album Photo"
      :description="`${album.photoCount} photographie${album.photoCount > 1 ? 's' : ''} · ${album.subtitle}`"
      :backgroundImage="getFileUrl(album.cover_url || album.cover) || '/valeurs/bg.jpg'"
      :animateTitle="showContent"
      :breadcrumb="[
        { label: 'Accueil', href: '/' },
        { label: 'Galerie', href: '/galerie' },
        { label: album.title }
      ]"
    />
    <Breadcrumb
      v-else
      :title="galleryStore.loading ? 'Chargement en cours...' : 'Album introuvable'"
      :subtitle="galleryStore.loading ? 'Veuillez patienter' : 'Oups !'"
      :description="galleryStore.loading ? 'Nous préparons votre galerie...' : 'Cet album n\'existe pas dans notre galerie.'"
      backgroundImage="/valeurs/bg.jpg"
      :breadcrumb="[{ label: 'Accueil', href: '/' }, { label: 'Galerie', href: '/galerie' }]"
    />

    <!-- ══ CORPS PRINCIPAL ══ -->
    <div v-if="album" class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-12 lg:py-16">

      <!-- Navigation albums (tabs) -->
      <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#202a50]/10">
        <NuxtLink
          v-for="a in albums" :key="a.slug"
          :to="`/galerie/${a.slug}`"
          class="shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border"
          :class="a.slug === albumSlug
            ? 'bg-[#202a50] text-white border-[#202a50] shadow-lg shadow-[#202a50]/20'
            : 'bg-white text-[#5a6480] border-[#202a50]/10 hover:border-[#01b4d5]/40 hover:text-[#01b4d5]'"
        >
          {{ a.title }}
        </NuxtLink>
      </div>

      <!-- Layout : sidebar + grille -->
      <div class="flex gap-10 xl:gap-14">

        <!-- ── Sidebar ── -->
        <aside class="hidden lg:flex flex-col w-56 xl:w-64 shrink-0">
          <div class="sticky top-8 bg-white rounded-2xl border border-[#202a50]/8 shadow-sm overflow-hidden">

            <!-- Accent bar -->
            <div class="h-1 w-full bg-gradient-to-r from-[#01b4d5] to-[#202a50]"></div>

            <div class="p-6">
              <p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#9aa0b8] mb-4">Cet album</p>

              <!-- Stat principale -->
              <div class="mb-5">
                <span class="block text-5xl font-light text-[#202a50] leading-none mb-1">{{ album.photoCount }}</span>
                <span class="text-xs text-[#9aa0b8] tracking-wide">photographie{{ album.photoCount > 1 ? 's' : '' }}</span>
              </div>

              <hr class="border-[#202a50]/8 mb-5" />

              <!-- Infos -->
              <div class="space-y-4">
                <div class="flex items-start gap-3">
                  <div class="w-7 h-7 rounded-lg bg-[#01b4d5]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#9aa0b8] uppercase tracking-wide mb-0.5">Événement</p>
                    <p class="text-xs font-semibold text-[#202a50]">{{ album.subtitle }}</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-7 h-7 rounded-lg bg-[#01b4d5]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#9aa0b8] uppercase tracking-wide mb-0.5">Catégorie</p>
                    <p class="text-xs font-semibold text-[#202a50]">Vie étudiante</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-7 h-7 rounded-lg bg-[#01b4d5]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#9aa0b8] uppercase tracking-wide mb-0.5">Lieu</p>
                    <p class="text-xs font-semibold text-[#202a50]">Campus principal</p>
                  </div>
                </div>
              </div>

              <hr class="border-[#202a50]/8 my-5" />

              <!-- Sélecteur affichage -->
              <p class="text-[10px] font-bold tracking-[0.2em] uppercase text-[#9aa0b8] mb-3">Affichage</p>
              <div class="flex gap-2">
                <button v-for="n in [4, 3, 2]" :key="n" @click="gridCols = n"
                  class="flex-1 h-8 rounded-lg border transition-all duration-200 flex items-center justify-center text-sm"
                  :class="gridCols === n
                    ? 'bg-[#202a50] border-[#202a50] text-white shadow'
                    : 'border-[#202a50]/10 text-[#9aa0b8] hover:border-[#01b4d5]/40 hover:text-[#01b4d5]'"
                >
                  {{ n }}
                </button>
              </div>
            </div>
          </div>
        </aside>

        <!-- ── Zone grille ── -->
        <div class="flex-1 min-w-0">

          <!-- En-tête contenu -->
          <div class="flex items-center justify-between mb-7 pb-5 border-b border-[#202a50]/8">
            <div>
              <h2 class="text-xl font-bold text-[#202a50]">{{ album.title }}</h2>
              <p class="text-sm text-[#9aa0b8] mt-1">{{ album.photoCount }} photo{{ album.photoCount > 1 ? 's' : '' }} · {{ album.subtitle }}</p>
            </div>
            <!-- Sélecteur mobile -->
            <div class="flex lg:hidden gap-2">
              <button v-for="n in [3, 2]" :key="n" @click="gridCols = n"
                class="w-9 h-9 rounded-xl border text-sm transition-all duration-200 flex items-center justify-center"
                :class="gridCols === n ? 'bg-[#202a50] border-[#202a50] text-white' : 'border-[#202a50]/10 text-[#9aa0b8]'"
              >{{ n }}</button>
            </div>
          </div>

          <!-- Grille photos -->
          <div
            class="grid gap-4 lg:gap-5"
            :class="{
              'grid-cols-2 sm:grid-cols-4': gridCols === 4,
              'grid-cols-2 sm:grid-cols-3': gridCols === 3,
              'grid-cols-1 sm:grid-cols-2': gridCols === 2,
            }"
          >
            <div
              v-for="(photoUrl, index) in parsedPhotos" :key="index"
              class="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#c8d3e8] border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500"
              :class="gridCols === 4 ? 'aspect-[3/4]' : gridCols === 2 ? 'aspect-[4/3]' : 'aspect-[3/4]'"
              :style="{ animationDelay: `${(index + 1) * 60}ms` }"
              @click="openLightbox(index + 1)"
            >
              <!-- Image -->
              <img
                :src="photoUrl"
                :alt="`Photo ${index + 1} de ${album.title}`"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                @error="handleImgError"
              />

              <!-- Gradient permanent bas -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e1428]/60 via-transparent to-transparent"></div>

              <!-- Hover overlay cyan -->
              <div class="absolute inset-0 bg-[#01b4d5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

              <!-- Contenu bas (apparaît au survol) -->
              <div class="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out z-10">
                <span class="font-light text-white/80 text-2xl leading-none" style="font-family: 'Georgia', serif;">{{ String(index + 1).padStart(2, '0') }}</span>
                <div class="w-8 h-8 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                </div>
              </div>

              <!-- Coin décoratif -->
              <div class="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#01b4d5]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- ══ AUTRES GALERIES ══ -->
    <div v-if="album && otherAlbums && otherAlbums.length > 0" class="relative bg-[#0e1428] overflow-hidden mt-2">

      <!-- Lueur d'ambiance -->
      <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#01b4d5]/8 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#202a50]/60 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] py-16 lg:py-24 relative z-10">

        <!-- En-tête -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <span class="w-8 h-px bg-[#01b4d5]"></span>
              <span class="text-[#01b4d5] text-xs font-bold tracking-[0.25em] uppercase">Découvrir aussi</span>
            </div>
            <h2 class="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">Autres <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#01b4d5] to-[#4dcde6]">galeries</span></h2>
          </div>
          <NuxtLink to="/galerie"
            class="group self-start sm:self-auto inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full text-sm font-semibold text-white/70 hover:text-white hover:border-[#01b4d5]/50 hover:bg-[#01b4d5]/10 transition-all duration-300">
            Toute la galerie
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </NuxtLink>
        </div>

        <!-- Grille full-image animée -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <NuxtLink
            v-for="(a, index) in otherAlbums" :key="a.slug"
            :to="`/galerie/${a.slug}`"
            class="other-card group relative block rounded-3xl overflow-hidden cursor-pointer"
            :style="{ animationDelay: `${index * 120}ms` }"
          >
            <!-- Image de fond -->
            <div class="relative h-64 sm:h-72 lg:h-80">
              <img
                :src="getFileUrl(a.cover_url || a.cover) || '/valeurs/bg.jpg'"
                :alt="a.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <!-- Dégradé permanent -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0e1428] via-[#0e1428]/50 to-transparent"></div>

              <!-- Overlay hover cyan -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#01b4d5]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <!-- Badge photo count -->
              <div class="absolute top-4 right-4 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-semibold tracking-widest flex items-center gap-1.5 transform group-hover:scale-105 transition-transform duration-300">
                <svg class="w-3 h-3 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                {{ a.photoCount }}
              </div>

              <!-- Contenu bas -->
              <div class="absolute inset-0 p-6 flex flex-col justify-end">
                <!-- Ligne déco animée -->
                <div class="w-8 h-0.5 bg-[#01b4d5] mb-3 transform -translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400 ease-out"></div>

                <p class="text-[#01b4d5] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{{ a.subtitle }}</p>
                <h3 class="text-white font-bold text-lg leading-snug mb-4 drop-shadow-lg">{{ a.title }}</h3>

                <div class="flex items-center gap-2 text-white/0 group-hover:text-white/80 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
                  <span class="text-xs tracking-[0.15em] uppercase font-semibold">Voir l'album</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

      </div>
    </div>

    <!-- Album introuvable / Erreur 404 -->
    <div v-if="!album" class="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 text-center bg-white relative overflow-hidden">
      <!-- Arrière-plan décoratif subtil -->
      <div class="absolute inset-0 pointer-events-none flex justify-center items-center opacity-5">
        <svg class="w-[400px] h-[400px] text-[#202a50]" fill="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
      </div>
      
      <div class="relative z-10 max-w-md mx-auto">
        <div class="w-20 h-20 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center mx-auto mb-8 shadow-sm">
          <svg class="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h2 class="text-3xl font-bold text-[#202a50] mb-3 tracking-tight">Album indisponible</h2>
        <p class="text-gray-500 mb-10 text-lg leading-relaxed">
          La galerie photo que vous tentez de consulter n'est pas ou plus accessible. Nous vous invitons à explorer nos autres albums pour revivre nos événements marquants.
        </p>
        
        <NuxtLink to="/galerie"
          class="inline-flex items-center gap-3 px-8 py-4 bg-[#202a50] text-white rounded-xl font-semibold hover:bg-[#01b4d5] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Retour à la galerie
        </NuxtLink>
      </div>
    </div>

    <!-- ══ LIGHTBOX ══ -->
    <Teleport to="body">
      <Transition name="lb-fade">
        <div v-if="lightboxOpen && album"
          class="fixed inset-0 z-[9999] flex flex-col bg-[#050a18]/97 backdrop-blur-2xl"
          @keydown.left.window="lbPrev" @keydown.right.window="lbNext" @keydown.esc.window="closeLightbox"
        >
          <!-- Header lightbox -->
          <div class="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/5 bg-[#202a50]/30 shrink-0">
            <div class="flex items-center gap-4">
              <span class="text-white font-bold text-xl">{{ String(currentPhoto).padStart(2,'0') }}</span>
              <span class="text-white/20 text-sm">/</span>
              <span class="text-white/30 text-sm">{{ album.photoCount }}</span>
              <div class="w-px h-4 bg-white/10 hidden md:block"></div>
              <span class="text-white/40 text-xs tracking-widest uppercase hidden md:block">{{ album.title }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="px-3 py-1 bg-[#01b4d5]/15 border border-[#01b4d5]/25 text-[#01b4d5] text-xs tracking-widest uppercase rounded-sm hidden md:block">Galerie</span>
              <button @click="closeLightbox"
                class="w-10 h-10 rounded-sm bg-white/5 hover:bg-white hover:text-black border border-white/10 hover:border-transparent text-white flex items-center justify-center transition-all duration-200 group">
                <svg class="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          </div>

          <!-- Image zone -->
          <div class="flex-1 flex items-center justify-center relative px-16 md:px-24 py-8 min-h-0" @click.self="closeLightbox">
            <button v-if="album.photoCount > 1" @click="lbPrev"
              class="absolute left-4 md:left-8 w-12 h-12 rounded-sm bg-[#202a50]/60 hover:bg-[#01b4d5]/20 border border-white/8 hover:border-[#01b4d5]/40 text-white flex items-center justify-center transition-all duration-200 hover:-translate-x-0.5 z-10">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>

            <Transition name="lb-img" mode="out-in">
              <img :key="currentPhoto"
                :src="parsedPhotos[currentPhoto - 1]"
                :alt="`Photo ${currentPhoto} de ${album.title}`"
                class="max-w-full max-h-[78vh] object-contain select-none rounded-sm"
                style="box-shadow: 0 0 0 1px rgba(1,180,213,0.12), 0 0 0 6px rgba(1,180,213,0.04), 0 40px 80px rgba(0,0,0,0.7)"
                @click.stop
              />
            </Transition>

            <button v-if="album.photoCount > 1" @click="lbNext"
              class="absolute right-4 md:right-8 w-12 h-12 rounded-sm bg-[#202a50]/60 hover:bg-[#01b4d5]/20 border border-white/8 hover:border-[#01b4d5]/40 text-white flex items-center justify-center transition-all duration-200 hover:translate-x-0.5 z-10">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <!-- Dots -->
          <div class="flex items-center justify-center gap-2 py-5 border-t border-white/5 shrink-0">
            <button v-for="i in album.photoCount" :key="i"
              @click="currentPhoto = i"
              class="rounded-full transition-all duration-250 border-none p-0"
              :class="i === currentPhoto ? 'w-5 h-2 bg-[#01b4d5]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'"
            />
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '~/components/Breadcrumb.vue'
import config from '~~/config'

import { useGalleryStore } from '~/stores/gallery'

const getFileUrl = (path) => {
  if (!path || typeof path !== 'string' || path === 'null' || path === 'undefined') return null;
  
  const baseUrl = config.app_local ? config.app_dev_storage_url : config.app_prod_storage_url;
  
  if (path === `${baseUrl}/storage` || path === `${baseUrl}/storage/`) return null;

  if (path.startsWith('http')) return path;

  let cleanPath = path.replace(/^\/+/, '').trim();
  if (!cleanPath || cleanPath === 'storage' || cleanPath === 'storage/') return null;
  if (cleanPath.startsWith('storage/')) {
    return `${baseUrl}/${cleanPath}`;
  }
  return `${baseUrl}/storage/${cleanPath}`;
};

const route   = useRoute()
const albumSlug = route.params.slug

const galleryStore = useGalleryStore()

// Récupérer l'album depuis l'API
onMounted(async () => {
  await galleryStore.fetchAlbumById(albumSlug)
  setTimeout(() => { showContent.value = true }, 80)
})

const album = computed(() => galleryStore.currentAlbum)
const otherAlbums = computed(() => galleryStore.otherAlbums)
const albums = computed(() => galleryStore.albums) // Just in case for the tabs (but usually we might need fetchAlbums)

const parsedPhotos = computed(() => {
  if (!album.value || !album.value.photos) return [];
  let photos = album.value.photos;
  
  if (typeof photos === 'string') {
    try { photos = JSON.parse(photos); } 
    catch(e) { return []; }
  }
  
  if (!Array.isArray(photos)) return [];
  
  return photos.map(p => {
    let url = null;
    if (typeof p === 'string') url = p;
    else if (p && typeof p === 'object') {
      url = p.file_url || p.url || p.path || p.file || p.cover_url || p.cover;
    }
    return getFileUrl(url) || '/valeurs/bg.jpg';
  });
});

// On peut aussi trigger fetchAlbums pour les tabs si galleryStore.albums est vide
onMounted(async () => {
  if(galleryStore.albums.length === 0) {
    await galleryStore.fetchAlbums();
  }
})

const showContent = ref(false)
const gridCols    = ref(4)

function handleImgError(e) { e.target.style.display = 'none' }

// Lightbox
const lightboxOpen = ref(false)
const currentPhoto = ref(1)

function openLightbox(i) { currentPhoto.value = i; lightboxOpen.value = true; document.body.style.overflow = 'hidden' }
function closeLightbox()  { lightboxOpen.value = false; document.body.style.overflow = '' }
function lbPrev() { currentPhoto.value = currentPhoto.value > 1 ? currentPhoto.value - 1 : (parsedPhotos.value.length || 1) }
function lbNext() { currentPhoto.value = currentPhoto.value < parsedPhotos.value.length ? currentPhoto.value + 1 : 1 }

function handleKey(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'ArrowLeft')  lbPrev()
  if (e.key === 'ArrowRight') lbNext()
  if (e.key === 'Escape')     closeLightbox()
}
onMounted(()  => window.addEventListener('keydown', handleKey))
onUnmounted(() => window.removeEventListener('keydown', handleKey))
</script>

<style scoped>
.lb-fade-enter-active, .lb-fade-leave-active { transition: opacity 0.3s ease; }
.lb-fade-enter-from, .lb-fade-leave-to       { opacity: 0; }

.lb-img-enter-active, .lb-img-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.lb-img-enter-from, .lb-img-leave-to       { opacity: 0; transform: scale(0.97); }

.scrollbar-none { scrollbar-width: none; }
.scrollbar-none::-webkit-scrollbar { display: none; }

/* Animation entrée décalée pour les cartes "Autres galeries" */
@keyframes cardReveal {
  from { opacity: 0; transform: translateY(28px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

.other-card {
  animation: cardReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
  box-shadow: 0 4px 24px rgba(0,0,0,0.35);
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease;
}

.other-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 20px 60px rgba(1,180,213,0.18), 0 8px 32px rgba(0,0,0,0.5);
}
</style>