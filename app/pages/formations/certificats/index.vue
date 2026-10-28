<template>
    <div class="min-h-screen bg-white">
        <!-- Breadcrumb -->
      <Breadcrumb title="NOS CERTIFICATS" subtitle="NOS CERTIFICATS"
            description="ESCEN propose des certificats en Marketing Digital ; Finance Digitale ; Management de Projets Numériques."
            duration="" backgroundImage="/valeurs/bg.jpg" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Formations', href: '#' },
                { label: 'NOS CERTIFICATS' }
            ]" />

        <!-- Barre de recherche et filtres améliorée -->
        <section class="py-8 bg-white border-b border-gray-100">
            <div class="container mx-auto px-4 md:px-8 lg:px-22 max-w-7xl">
                <div class="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    <!-- Barre de recherche stylisée -->
                    <div class="relative flex-1 w-full max-w-xl">
                        <div class="relative">
                            <input v-model="searchQuery" type="text" placeholder="Rechercher une formation..."
                                class="w-full pl-12 pr-10 py-3 rounded-xl border border-gray-200 focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20 transition-all duration-300 bg-white shadow-sm text-gray-700 placeholder-gray-400">
                            <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <button v-if="searchQuery" @click="searchQuery = ''"
                                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Informations et sélecteur -->
                    <div class="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
                        <!-- Compteur de résultats -->
                        <div class="text-gray-600">
                            <span class="font-medium text-gray-900">{{ filteredFormations.length }}</span>
                            formation(s)
                        </div>

                        <!-- Séparateur visuel -->
                        <div class="hidden sm:block w-px h-6 bg-gray-300"></div>

                        <!-- Sélecteur d'éléments par page -->
                        <div class="flex items-center gap-2">
                            <span class="text-gray-600 hidden sm:inline">Afficher</span>
                            <select v-model="itemsPerPage"
                                class="px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-gray-200 focus:border-[#01b4d5] focus:ring-2 focus:ring-[#01b4d5]/20 bg-white text-gray-700 text-sm">
                                <option value="2">2</option>
                                <option value="4">4</option>
                                <option value="6">6</option>
                                <option value="8">8</option>
                            </select>
                            <span class="text-gray-600">/ page</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Formations Section -->
        <section class="py-12 lg:py-20 bg-white">
            <div class="container mx-auto px-4 md:px-8 lg:px-22 max-w-7xl">
                <!-- Message si aucune formation trouvée -->
                <div v-if="filteredFormations.length === 0" class="text-center py-16">
                    <svg class="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">Aucune formation trouvée</h3>
                    <p class="text-gray-600 mb-8 max-w-md mx-auto">
                        Aucune formation ne correspond à votre recherche "{{ searchQuery }}".
                        Essayez d'autres termes ou consultez toutes nos formations.
                    </p>
                    <button @click="searchQuery = ''"
                        class="bg-[#01b4d5] hover:bg-[#0056b3] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">
                        Voir toutes les formations
                    </button>
                </div>

                <!-- Boucle sur les formations paginées -->
                <div v-else>
                    <div v-for="(formation, index) in paginatedFormations" :key="formation.id"
                        class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-28">

                        <!-- Image à gauche pour les index pairs, à droite pour les index impairs -->
                        <div :class="getFormationOrder(index)">
                            <div class="relative group">
                                <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                                    <img :src="formation.image" :alt="formation.titre"
                                        class="w-full h-[400px] object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                        @error="handleImageError">
                                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent">
                                    </div>
                                </div>
                                <!-- Icône positionnée différemment selon l'index -->
                                <div :class="getIconPosition(index)">
                                    <svg class="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            :d="formation.icon" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Contenu -->
                        <div :class="getContentPosition(index)">
                            <!-- Badge avec couleur dynamique -->
                            <div :class="getBadgeClasses(index)">
                                {{ formation.type }}
                            </div>

                            <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                                {{ formation.titre }}
                            </h2>

                            <p class="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
                                {{ formation.description }}
                            </p>

                            <!-- Points clés -->
                            <!-- <div class="space-y-4 mb-8">
                                <div v-for="point in formation.pointsCles" :key="point"
                                    class="flex items-center gap-3 text-gray-700">
                                    <div :class="getPointClasses(index)"></div>
                                    <span>{{ point }}</span>
                                </div>
                            </div> -->

                            <!-- Boutons avec couleurs dynamiques -->
                            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <button type="button" disabled class="px-5 py-3 rounded-xl font-semibold text-gray-400 bg-gray-100 border border-gray-200 cursor-not-allowed shadow-none">
                                    Brochure indisponible
                                </button>
                                <button :class="getSecondaryButtonClasses(index)" @click="voirDetails(formation.id)">
                                    En savoir plus
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Pagination simplifiée -->
                    <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12">
                        <!-- Bouton précédent -->
                        <button @click="previousPage" :disabled="currentPage === 1" :class="[
                            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300',
                            currentPage === 1
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-600 hover:text-[#01b4d5] hover:bg-gray-50'
                        ]">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                            Précédent
                        </button>

                        <!-- Numéros de page -->
                        <div class="flex items-center gap-1">
                            <button v-for="page in visiblePages" :key="page" @click="goToPage(page)" :class="[
                                'w-9 h-9 rounded-lg font-medium transition-all duration-300 text-sm',
                                page === currentPage
                                    ? 'bg-[#01b4d5] text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                            ]">
                                {{ page }}
                            </button>
                        </div>

                        <!-- Bouton suivant -->
                        <button @click="nextPage" :disabled="currentPage === totalPages" :class="[
                            'flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300',
                            currentPage === totalPages
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-gray-600 hover:text-[#01b4d5] hover:bg-gray-50'
                        ]">
                            Suivant
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-[#01b4d5] to-[#0056b3]">
            <div class="container mx-auto px-4 lg:px-6 max-w-4xl text-center text-white">
                <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                    Prêt à transformer votre avenir ?
                </h2>
                <p class="text-xl lg:text-2xl mb-8 opacity-90">
                    Rejoignez l'ESCEN et bénéficiez d'une formation d'excellence aux métiers du numérique
                </p>
                <button
                    class="bg-white text-[#01b4d5] hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform"
                    @click="inscrireMaintenant">
                    S'inscrire maintenant
                </button>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Breadcrumb from '~/components/Breadcrumb.vue'

// États réactifs
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(4)

// Tableau des formations
const formations = [
  {
    id: 1,
    type: "Certificat Professionnel",
    titre: "Marketing Digital",
    description:
      "Ce certificat permet d’acquérir les fondamentaux du marketing digital afin de concevoir, déployer et optimiser des campagnes performantes sur les canaux numériques.",
    image: "/formations/marketingdigital2.jpg",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    pointsCles: [
      "Initiation au marketing digital & réseaux sociaux",
      "Création de campagnes et contenus performants",
      "Analyse des performances (KPIs, analytics)",
    ],
    detailsUrl: "/formations/marketing-digital",
  },

  {
    id: 2,
    type: "Certificat Professionnel",
    titre: "Finance Digitale",
    description:
      "Ce certificat forme aux nouveaux outils digitaux appliqués à la finance : fintech, paiements numériques, gestion digitale des services financiers et compréhension des nouveaux modèles économiques.",
    image: "/formations/financedigital2.jpg",
    icon:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
    pointsCles: [
      "Comprendre la fintech et ses usages",
      "Initiation aux services financiers digitaux",
      "Paiements électroniques et sécurité numérique",
    ],
    detailsUrl: "/formations/finance-digitale",
  },

  {
    id: 3,
    type: "Certificat Professionnel",
    titre: "Gestion de Projets Digitaux",
    description:
      "Ce certificat initie aux méthodes modernes de gestion de projets numériques, permettant de planifier, organiser et suivre un projet digital de bout en bout.",
    image: "/formations/managementprojet2.jpg",
    icon:
      "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    pointsCles: [
      "Bases du management de projets (Agile & classique)",
      "Outils de pilotage de projets digitaux",
      "Organisation & coordination d’équipes",
    ],
    detailsUrl: "/formations/management-projets",
  },
];


// Computed properties
const filteredFormations = computed(() => {
    if (!searchQuery.value) {
        return formations
    }

    const query = searchQuery.value.toLowerCase()
    return formations.filter(formation =>
        formation.titre.toLowerCase().includes(query) ||
        formation.description.toLowerCase().includes(query) ||
        formation.pointsCles.some(point => point.toLowerCase().includes(query))
    )
})

const totalPages = computed(() => {
    return Math.ceil(filteredFormations.value.length / itemsPerPage.value)
})

const paginatedFormations = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + parseInt(itemsPerPage.value)
    return filteredFormations.value.slice(start, end)
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
            for (let i = 1; i <= 4; i++) {
                pages.push(i)
            }
        } else if (current >= total - 2) {
            for (let i = total - 3; i <= total; i++) {
                pages.push(i)
            }
        } else {
            for (let i = current - 1; i <= current + 2; i++) {
                pages.push(i)
            }
        }
    }

    return pages
})

// Watchers
watch([searchQuery, itemsPerPage], () => {
    currentPage.value = 1
})

watch(filteredFormations, () => {
    if (currentPage.value > totalPages.value) {
        currentPage.value = Math.max(1, totalPages.value)
    }
})

// Méthodes de pagination
const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
    }
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
    }
}

const goToPage = (page) => {
    currentPage.value = page
}

// Méthodes d'helpers pour les classes
const getFormationOrder = (index) => {
    const globalIndex = (currentPage.value - 1) * itemsPerPage.value + index
    return globalIndex % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
}

const getIconPosition = (index) => {
    const globalIndex = (currentPage.value - 1) * itemsPerPage.value + index
    const baseClasses = 'absolute w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl'
    return globalIndex % 2 === 0
        ? `${baseClasses} -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[#01b4d5]`
        : `${baseClasses} -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-[#0056b3]`
}

const getContentPosition = (index) => {
    const globalIndex = (currentPage.value - 1) * itemsPerPage.value + index
    return globalIndex % 2 === 0 ? 'lg:pl-8 lg:order-2' : 'lg:pr-8 lg:order-1'
}

const getBadgeClasses = (index) => {
    const globalIndex = (currentPage.value - 1) * itemsPerPage.value + index
    const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6'
    return globalIndex % 2 === 0
        ? `${baseClasses} bg-[#01b4d5]/10 text-[#01b4d5]`
        : `${baseClasses} bg-[#0056b3]/10 text-[#0056b3]`
}

const getPointClasses = (index) => {
    const globalIndex = (currentPage.value - 1) * itemsPerPage.value + index
    return `w-2 h-2 rounded-full ${globalIndex % 2 === 0 ? 'bg-[#01b4d5]' : 'bg-[#0056b3]'}`
}

const getPrimaryButtonClasses = (index) => {
    const globalIndex = (currentPage.value - 1) * itemsPerPage.value + index
    const baseClasses = 'text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3'
    return globalIndex % 2 === 0
        ? `${baseClasses} bg-[#01b4d5] hover:bg-[#0056b3]`
        : `${baseClasses} bg-[#0056b3] hover:bg-[#01b4d5]`
}

const getSecondaryButtonClasses = (index) => {
    const globalIndex = (currentPage.value - 1) * itemsPerPage.value + index
    const baseClasses = 'border-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300'
    return globalIndex % 2 === 0
        ? `${baseClasses} border-[#01b4d5] text-[#01b4d5] hover:bg-[#01b4d5] hover:text-white`
        : `${baseClasses} border-[#0056b3] text-[#0056b3] hover:bg-[#0056b3] hover:text-white`
}

// Fonctions existantes
const handleImageError = (event) => {
    const target = event.target
    const parent = target.parentElement
    const altText = target.alt

    parent.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-gray-800 to-slate-700 flex items-center justify-center rounded-3xl">
            <div class="text-center text-white">
                <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <p class="text-sm font-medium">${altText}</p>
            </div>
        </div>
    `
}

const voirDetails = (formationId) => {
    const formation = formations.find(f => f.id === formationId)
    if (formation) {
        console.log(`Navigation vers: ${formation.detailsUrl}`)
    }
}

const inscrireMaintenant = () => {
    console.log("Redirection vers la page d'inscription")
}
</script>

<style scoped>
.bg-cover {
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" fill="none"><path d="M0 0h1200v300H0z" fill="url(%23a)"/><defs><linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="%23202a50"/><stop offset="1" stop-color="%2301a0bf"/></linearGradient></defs></svg>');
}
</style>
