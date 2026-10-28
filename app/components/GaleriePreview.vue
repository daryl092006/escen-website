<template>
  <section ref="sectionEl" id="galerie-preview" class="relative overflow-hidden bg-white py-16 lg:py-32">
    
    <!-- Premium background elements -->
    <div class="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#01b4d5]/5 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#202a50]/5 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>



    <!-- Header Container -->
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
      <div class="text-center mb-14 reveal" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
          <span class="text-[#01b4d5] font-bold text-xs tracking-[0.2em] uppercase">Immersion Totale</span>
          <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
        </div>
        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#202a50] mb-4 tracking-tight">
          Vivez l'expérience <br class="md:hidden" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#01b4d5] to-[#202a50]">en images</span>
        </h2>
        <p class="text-base lg:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Revivez les meilleurs moments de la vie étudiante, de nos événements et de nos cérémonies au travers de notre galerie interactive.
        </p>
      </div>
    </div>

    <!-- Content Container -->
    <div class="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
      <!-- Premium Bento Grid -->
      <template v-if="albums && albums.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[400px] lg:h-[450px]">
        <div v-for="(album, index) in albums" :key="album.id"
             class="reveal h-64 md:h-full"
             :class="[
               'reveal-delay-' + (index + 1), 
               { 'is-visible': isVisible },
               index === 0 ? 'md:col-span-2 md:row-span-2' : 
               index === 1 ? 'md:col-span-2 md:row-span-1' : 
               'md:col-span-1 md:row-span-1'
             ]">
             
          <NuxtLink :to="`/galerie/${album.slug}`" class="group relative block w-full h-full rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
            
            <!-- Image with smooth scale on hover -->
            <img :src="getFileUrl(album.cover_url || album.cover) || '/valeurs/bg.jpg'" 
                 :alt="album.title"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
            
            <!-- Dynamic Gradient Overlays -->
            <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#202a50]/90 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#01b4d5]/80 via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay"></div>
            
            <!-- Content Container -->
            <div class="absolute inset-0 p-6 lg:p-8 flex flex-col">
              
              <!-- Glassmorphism Badge -->
              <div class="self-end inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-sm transform group-hover:-translate-y-1 transition-transform duration-500">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ album.photoCount }}</span>
              </div>
              
              <!-- Bottom Title & Action -->
              <div class="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 :class="[
                  'font-bold text-white mb-2 leading-tight drop-shadow-lg',
                  index === 0 ? 'text-2xl lg:text-4xl' : 
                  index === 1 ? 'text-xl lg:text-3xl' : 
                  'text-lg lg:text-2xl'
                ]">
                  {{ album.title }}
                </h3>
                
                <div class="flex items-center gap-2 text-[#01b4d5] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span class="text-sm tracking-widest uppercase">Découvrir l'album</span>
                  <svg class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

            </div>
          </NuxtLink>
        </div>
        </div>
        
        <!-- Button to explore full gallery (visible on all screens now that header is centered) -->
        <div class="mt-12 flex justify-center px-4 reveal" :class="['reveal-delay-4', { 'is-visible': isVisible }]">
          <NuxtLink to="/galerie" class="inline-flex justify-center items-center gap-3 px-8 py-4 w-full md:w-auto bg-[#202a50] text-white rounded-2xl font-semibold shadow-xl hover:bg-[#01b4d5] active:scale-95 transition-all duration-300 group">
            Explorer toute la galerie
            <svg class="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </template>

      <!-- Empty State -->
      <template v-else-if="!galleryStore.loading">
        <div class="w-full bg-white border-y border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12 lg:p-20 text-center relative overflow-hidden reveal" :class="{ 'is-visible': isVisible }">
          <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01b4d5]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#202a50]/10 to-transparent rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div class="relative z-10 flex flex-col items-center justify-center">
            <div class="w-24 h-24 mb-8 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-sm">
              <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-[#202a50] mb-4">De nouvelles images arrivent bientôt</h3>
            <p class="text-gray-500 max-w-md mx-auto text-lg">
              Notre galerie est en cours de préparation. Revenez très prochainement pour revivre en images les moments forts de notre école.
            </p>
          </div>
        </div>
      </template>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGalleryStore } from '~/stores/gallery'
import config from '~~/config'

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

const sectionEl = ref(null)
const isVisible = ref(false)

const galleryStore = useGalleryStore()
const albums = computed(() => {
  // Optionnel: On ne prend que les 4 premiers albums pour la preview
  return galleryStore.albums.slice(0, 4)
})

let observer

onMounted(async () => {
  if (sectionEl.value) {
    const rect = sectionEl.value.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isVisible.value = true
    }
  }

  if (galleryStore.albums.length === 0) {
    await galleryStore.fetchAlbums()
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) isVisible.value = true
      })
    },
    { threshold: 0.1 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* Any required additional styles - most are handled by Tailwind */
</style>
