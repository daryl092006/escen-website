<template>
    <div class="min-h-screen bg-gray-50">
        <Breadcrumb title="Galerie" subtitle="Notre galerie de photos"
            description="Revivez les meilleurs moments de l'ESCEN en images" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Galerie' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Header avec Contrôles -->
        <header class="bg-white shadow-sm">
            <div class="container mx-auto px-4 sm:px-6 py-6 lg:py-8">
                <!-- Barre de Contrôles - Layout horizontal -->
                <div class="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-sm">
                    <!-- Zone de Recherche - Gauche -->
                    <div class="w-full lg:w-auto lg:flex-1 lg:max-w-md">
                        <div class="relative">
                            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" 
                                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input 
                                type="text" 
                                v-model="searchQuery" 
                                placeholder="Rechercher un album..."
                                class="w-full pl-10 lg:pl-12 pr-4 py-2 lg:py-3 bg-white border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                            >
                        </div>
                    </div>

                    <!-- Sélecteur - Droite -->
                    <div class="flex flex-col sm:flex-row gap-3 lg:gap-4 items-stretch sm:items-center w-full lg:w-auto">
                        <!-- Sélecteur d'albums par page -->
                        <div class="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                            <span class="text-xs lg:text-sm text-gray-600 whitespace-nowrap">Albums/page :</span>
                            <select 
                                v-model="itemsPerPage" 
                                @change="currentPage = 1"
                                class="w-20 px-3 lg:px-4 py-2 lg:py-3 bg-white border border-gray-300 rounded-lg lg:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent transition-all duration-300 text-sm lg:text-base"
                            >
                                <option :value="4">4</option>
                                <option :value="8">8</option>
                                <option :value="12">12</option>
                                <option :value="16">16</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Stats -->
                <div class="flex justify-center mt-4 lg:mt-6">
                    <div class="bg-gray-100 rounded-full px-4 lg:px-6 py-1 lg:py-2">
                        <span class="text-xs lg:text-sm text-gray-600">
                            {{ filteredAlbums.length }} album{{ filteredAlbums.length > 1 ? 's' : '' }} trouvé{{ filteredAlbums.length > 1 ? 's' : '' }}
                        </span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Contenu Principal -->
        <main class="container mx-auto px-4 sm:px-6 py-6 lg:py-12">
            <!-- Grille d'Albums -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article v-for="(album, index) in displayedAlbums" :key="album.id"
                    class="group bg-white rounded-xl lg:rounded-2xl shadow-sm hover:shadow-lg lg:hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 overflow-hidden border border-gray-200">
                    <NuxtLink :to="`/galerie/${album.slug}`" class="block h-full cursor-pointer">
                        <!-- Image Container -->
                        <div class="relative h-48 sm:h-52 lg:h-56 overflow-hidden bg-gray-100">
                            <!-- Image principale -->
                            <img 
                                :src="getFileUrl(album.cover_url || album.cover) || '/valeurs/bg.jpg'" 
                                :alt="album.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />
                            
                            <!-- Overlay gradient -->
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <!-- Badges infos bas -->
                            <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <h3 class="text-lg font-bold text-white mb-0 leading-tight line-clamp-2">
                                    {{ album.title }}
                                </h3>
                            </div>
                            
                            <!-- Badge Photos Count -->
                            <div class="absolute top-4 right-4">
                                <span class="px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-xs font-semibold rounded-lg shadow flex items-center gap-1.5 border border-white/20">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    {{ album.photoCount }} photos
                                </span>
                            </div>
                        </div>
                    </NuxtLink>
                </article>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1"
                class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200">
                <!-- Info de pagination -->
                <div class="text-xs lg:text-sm text-gray-600 text-center sm:text-left">
                    Affichage de <span class="font-semibold">{{ startIndex + 1 }}</span> à
                    <span class="font-semibold">{{ Math.min(endIndex, filteredAlbums.length) }}</span> sur
                    <span class="font-semibold">{{ filteredAlbums.length }}</span> albums
                </div>

                <!-- Contrôles de pagination -->
                <div class="flex items-center gap-1 lg:gap-2">
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="p-2 lg:p-3 rounded-lg lg:rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                        <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div class="flex items-center gap-1">
                        <button v-for="page in visiblePages" :key="page" @click="currentPage = page"
                            class="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl border border-gray-300 transition-all duration-300 font-medium text-xs lg:text-sm"
                            :class="currentPage === page
                                ? 'bg-[#01b4d5] border-[#01b4d5] text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5]'">
                            {{ page }}
                        </button>
                        <span v-if="showEllipsis" class="px-1 lg:px-2 text-gray-400 text-sm">...</span>
                    </div>

                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="p-2 lg:p-3 rounded-lg lg:rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300">
                        <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="displayedAlbums.length === 0" class="text-center py-12 lg:py-20">
                <div class="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                    <svg class="w-6 h-6 lg:w-10 lg:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 class="text-lg lg:text-xl font-semibold text-gray-600 mb-2">Aucun album trouvé</h3>
                <p class="text-sm lg:text-base text-gray-500 max-w-md mx-auto px-4">
                    Aucun album ne correspond à votre recherche. Essayez d'autres termes.
                </p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
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

// State
const searchQuery = ref('')
const itemsPerPage = ref(8)
const currentPage = ref(1)

const galleryStore = useGalleryStore()

onMounted(async () => {
    await galleryStore.fetchAlbums()
})

const albums = computed(() => galleryStore.albums)

// Computed
const filteredAlbums = computed(() => {
    let filtered = albums.value

    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(album =>
            album.title.toLowerCase().includes(query)
        )
    }

    return filtered
})

const totalPages = computed(() => {
    return Math.ceil(filteredAlbums.value.length / itemsPerPage.value)
})

const startIndex = computed(() => {
    return (currentPage.value - 1) * itemsPerPage.value
})

const endIndex = computed(() => {
    return startIndex.value + itemsPerPage.value
})

const displayedAlbums = computed(() => {
    return filteredAlbums.value.slice(startIndex.value, endIndex.value)
})

const visiblePages = computed(() => {
    const pages = []
    const total = totalPages.value
    const current = currentPage.value

    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, 4, 5)
        } else if (current >= total - 2) {
            pages.push(total - 4, total - 3, total - 2, total - 1, total)
        } else {
            pages.push(current - 2, current - 1, current, current + 1, current + 2)
        }
    }
    return pages
})

const showEllipsis = computed(() => {
    return totalPages.value > 5 && (currentPage.value <= 3 || currentPage.value >= totalPages.value - 2)
})

// Responsive items per page
const updateItemsPerPage = () => {
    const width = window.innerWidth
    if (width >= 1280) {
        itemsPerPage.value = Math.max(itemsPerPage.value, 8)
    } else if (width >= 1024) {
        itemsPerPage.value = Math.max(itemsPerPage.value, 6)
    } else {
        itemsPerPage.value = Math.max(itemsPerPage.value, 4)
    }
    currentPage.value = 1
}

const handleResize = () => {
    updateItemsPerPage()
}

// Lifecycle
onMounted(() => {
    updateItemsPerPage()
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

img {
    will-change: transform;
    backface-visibility: hidden;
}
</style>