<template>
    <div class="min-h-screen bg-gray-50">
        <Breadcrumb title="Blog ESCEN" subtitle="Actualités & Insights"
            description="Découvrez les dernières tendances du numérique et insights d'experts" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Blog' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Contrôles et Filtres -->
        <div class="container mx-auto px-4 sm:px-6 py-6 lg:py-8">
            <div class="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-4 sm:p-6 mb-8 flex flex-col gap-5">
                
                <!-- Ligne supérieure : Recherche et Filtre Type -->
                <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <!-- Recherche -->
                    <div class="w-full md:w-1/2 lg:w-1/3 relative group">
                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg class="w-5 h-5 text-gray-400 group-focus-within:text-[#01b4d5] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input 
                            type="text" 
                            v-model="searchQuery" 
                            placeholder="Rechercher un article ou événement..."
                            class="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#01b4d5]/20 focus:border-[#01b4d5] focus:bg-white transition-all duration-300"
                        >
                    </div>

                    <!-- Filtre Type (Pills) -->
                    <div class="flex bg-gray-50 p-1.5 rounded-xl w-full md:w-auto border border-gray-200 shadow-sm">
                        <button 
                            @click="filterType = 'all'; currentPage = 1" 
                            class="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap"
                            :class="filterType === 'all' ? 'bg-white text-[#01b4d5] shadow-sm border border-gray-100' : 'text-gray-500 hover:text-gray-900 border border-transparent'"
                        >
                            Tout
                        </button>
                        <button 
                            @click="filterType = 'blog'; currentPage = 1" 
                            class="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap"
                            :class="filterType === 'blog' ? 'bg-white text-[#01b4d5] shadow-sm border border-gray-100' : 'text-gray-500 hover:text-gray-900 border border-transparent'"
                        >
                            Articles
                        </button>
                        <button 
                            @click="filterType = 'event'; currentPage = 1" 
                            class="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex-1 sm:flex-none whitespace-nowrap"
                            :class="filterType === 'event' ? 'bg-white text-[#01b4d5] shadow-sm border border-gray-100' : 'text-gray-500 hover:text-gray-900 border border-transparent'"
                        >
                            Événements
                        </button>
                    </div>
                </div>

                <div class="w-full h-px bg-gray-100 hidden md:block"></div>

                <!-- Ligne inférieure : Stats et Pagination -->
                <div class="flex flex-col md:flex-row items-center justify-between gap-4">
                    <!-- Badge Stats -->
                    <div class="px-4 py-2 bg-blue-50/50 text-[#01b4d5] rounded-xl font-semibold text-sm border border-blue-100 shadow-sm w-full md:w-auto text-center md:text-left">
                        {{ filteredArticles.length }} résultat{{ filteredArticles.length > 1 ? 's' : '' }}
                    </div>

                    <!-- Sélecteur d'affichage -->
                    <div class="flex items-center justify-center md:justify-end gap-3 w-full md:w-auto">
                        <span class="text-sm text-gray-500 font-medium hidden sm:block">Affichage :</span>
                        <div class="relative w-full sm:w-auto">
                            <select 
                                v-model="articlesPerPage" 
                                @change="currentPage = 1"
                                class="appearance-none w-full sm:w-auto pl-4 pr-10 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-[#01b4d5]/20 focus:border-[#01b4d5] cursor-pointer hover:bg-gray-50 transition-all duration-300 shadow-sm"
                            >
                                <option :value="4">4 par page</option>
                                <option :value="8">8 par page</option>
                                <option :value="12">12 par page</option>
                                <option :value="16">16 par page</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contenu Principal -->
        <main class="container mx-auto px-4 sm:px-6 pb-12 lg:pb-20">
            <!-- Grille d'Articles -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <article v-for="(article, index) in displayedArticles" :key="article.id"
                    class="group bg-white rounded-xl lg:rounded-2xl shadow-sm hover:shadow-lg lg:hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 lg:hover:-translate-y-2 overflow-hidden border border-gray-200">
                    <!-- Image Container — hauteur adaptée à l'image -->
                    <div class="relative overflow-hidden bg-gray-100">
                        <!-- Image principale -->
                        <img 
                            :src="article.image" 
                            :alt="article.title"
                            class="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                        />
                        
                        <!-- Overlay gradient -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <!-- Badge Featured -->
                        <div v-if="article.featured" class="absolute top-3 right-3 lg:top-4 lg:right-4">
                            <span
                                class="px-2 lg:px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1 border border-yellow-600">
                                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="hidden sm:inline">Featured</span>
                            </span>
                        </div>

                        <!-- Badge Evénement -->
                        <div v-if="article.is_event" class="absolute top-3 left-3 lg:top-4 lg:left-4">
                            <span
                                class="px-2 lg:px-3 py-1 bg-[#01b4d5] text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1 border border-[#0095b3]">
                                <svg class="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <span class="hidden sm:inline">Événement</span>
                            </span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="p-4 lg:p-6">
                        <!-- Meta informations -->
                        <div class="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3 lg:mb-4">
                            <div class="flex items-center gap-2 lg:gap-3">
                                <div class="flex items-center gap-1">
                                    <svg class="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span class="text-xs">{{ article.author }}</span>
                                </div>
                                <div class="w-1 h-1 bg-gray-300 rounded-full"></div>
                                <div class="flex items-center gap-1">
                                    <svg class="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span class="text-xs">{{ article.readTime }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Titre -->
                        <h3
                            class="text-base lg:text-lg font-bold text-gray-900 mb-2 lg:mb-3 leading-tight group-hover:text-[#01b4d5] transition-colors duration-300 line-clamp-2">
                            {{ article.title }}
                        </h3>

                        <!-- Excerpt -->
                        <p
                            class="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 line-clamp-2 lg:line-clamp-3">
                            {{ article.excerpt }}
                        </p>

                        <!-- Date et Actions -->
                        <div class="flex flex-wrap items-center justify-between gap-3 pt-3 lg:pt-4 border-t border-gray-100 mt-auto">
                            <span
                                class="text-xs text-gray-500 bg-gray-100 px-2 lg:px-3 py-1.5 rounded-full border border-gray-200">
                                {{ article.is_event && article.start_date ? 'Du ' + article.start_date + (article.end_date ? ' au ' + article.end_date : '') : article.date }}
                            </span>
                            <NuxtLink :to="`/blogs/${article.slug}`"
                                class="flex-shrink-0 flex items-center gap-1 lg:gap-2 text-[#01b4d5] font-semibold text-xs lg:text-sm hover:gap-2 lg:hover:gap-3 transition-all duration-300 group/btn border border-[#01b4d5] rounded-lg px-3 py-1.5 hover:bg-[#01b4d5] hover:text-white">
                                Lire
                                <svg class="w-3 h-3 lg:w-4 lg:h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7" />
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages > 1"
                class="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-gray-200">
                <!-- Info de pagination -->
                <div class="text-xs lg:text-sm text-gray-600 text-center sm:text-left">
                    Affichage de <span class="font-semibold">{{ startIndex + 1 }}</span> à
                    <span class="font-semibold">{{ Math.min(endIndex, filteredArticles.length) }}</span> sur
                    <span class="font-semibold">{{ filteredArticles.length }}</span> articles
                </div>

                <!-- Contrôles de pagination -->
                <div class="flex items-center gap-1 lg:gap-2">
                    <!-- Bouton Précédent -->
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="p-2 lg:p-3 rounded-lg lg:rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        aria-label="Page précédente">
                        <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <!-- Pages -->
                    <div class="flex items-center gap-1">
                        <button v-for="page in visiblePages" :key="page" @click="currentPage = page"
                            class="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl border border-gray-300 transition-all duration-300 font-medium text-xs lg:text-sm"
                            :class="currentPage === page
                                ? 'bg-[#01b4d5] border-[#01b4d5] text-white shadow-md'
                                : 'text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5]'"
                            :aria-label="`Page ${page}`" :aria-current="currentPage === page ? 'page' : null">
                            {{ page }}
                        </button>
                        <span v-if="showEllipsis" class="px-1 lg:px-2 text-gray-400 text-sm">...</span>
                    </div>

                    <!-- Bouton Suivant -->
                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="p-2 lg:p-3 rounded-lg lg:rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        aria-label="Page suivante">
                        <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="displayedArticles.length === 0" class="text-center py-12 lg:py-20">
                <div
                    class="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-4 lg:mb-6 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                    <svg class="w-6 h-6 lg:w-10 lg:h-10 text-gray-400" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                </div>
                <h3 class="text-lg lg:text-xl font-semibold text-gray-600 mb-2">Aucun article trouvé</h3>
                <p class="text-sm lg:text-base text-gray-500 max-w-md mx-auto px-4">
                    Aucun article ne correspond à votre recherche. Essayez d'autres termes.
                </p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import { useBlogStore } from '~/stores/blog'

// State
const searchQuery = ref('')
const filterType = ref('all') // 'all', 'blog', 'event'
const articlesPerPage = ref(4)
const currentPage = ref(1)

const blogStore = useBlogStore()
// ESCEN: public content in initial HTML; browser mount still revalidates publication.
const { error: publicContentError } = await useAsyncData('public-articles', async () => {
  await blogStore.fetchArticles()
  if (blogStore.error) throw createError({ statusCode: 503, statusMessage: 'Publication indisponible' })
  return blogStore.articles
})
if (publicContentError.value) throw createError(publicContentError.value)

const articles = computed(() => blogStore.articles)

// Computed
const filteredArticles = computed(() => {
    let filtered = articles.value

    // Filtre par type
    if (filterType.value === 'blog') {
        filtered = filtered.filter(article => !article.is_event)
    } else if (filterType.value === 'event') {
        filtered = filtered.filter(article => article.is_event)
    }

    // Filtre par recherche
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(query) ||
            article.excerpt.toLowerCase().includes(query) ||
            article.author.toLowerCase().includes(query)
        )
    }

    return filtered
})

const totalPages = computed(() => {
    return Math.ceil(filteredArticles.value.length / articlesPerPage.value)
})

const startIndex = computed(() => {
    return (currentPage.value - 1) * articlesPerPage.value
})

const endIndex = computed(() => {
    return startIndex.value + articlesPerPage.value
})

const displayedArticles = computed(() => {
    return filteredArticles.value.slice(startIndex.value, endIndex.value)
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

// Methods

// Responsive articles per page
const updateArticlesPerPage = () => {
    const width = window.innerWidth

    if (width >= 1280) {
        articlesPerPage.value = Math.max(articlesPerPage.value, 4)
    } else if (width >= 1024) {
        articlesPerPage.value = Math.max(articlesPerPage.value, 3)
    } else if (width >= 768) {
        articlesPerPage.value = Math.max(articlesPerPage.value, 2)
    } else {
        articlesPerPage.value = Math.max(articlesPerPage.value, 1)
    }

    currentPage.value = 1
}

const handleResize = () => {
    updateArticlesPerPage()
}

// Lifecycle
onMounted(async () => {
    await blogStore.fetchArticles()
    updateArticlesPerPage()
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

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Style pour les images */
img {
    will-change: transform;
    backface-visibility: hidden;
}

/* Responsive grid */
@media (max-width: 640px) {
    .sm\:grid-cols-2 {
        grid-template-columns: 1fr;
    }
}

@media (min-width: 641px) and (max-width: 768px) {
    .sm\:grid-cols-2 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .lg\:grid-cols-3 {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1025px) and (max-width: 1280px) {
    .xl\:grid-cols-4 {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1281px) {
    .xl\:grid-cols-4 {
        grid-template-columns: repeat(4, 1fr);
    }
}

/* Amélioration du touch sur mobile */
@media (max-width: 768px) {
    button,
    select {
        -webkit-tap-highlight-color: transparent;
        min-height: 44px;
        min-width: 44px;
    }
}

/* Animation pour le hover d'image */
.group:hover img {
    transform: scale(1.1);
}
</style>