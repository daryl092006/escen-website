<template>
    <div class="min-h-screen bg-white">
        <!-- Breadcrumb -->
      <Breadcrumb title="EXECUTIVE EDUCATION" subtitle="EXECUTIVE EDUCATION"
            description="Choississez l'excellence dans les métiers du numérique avec nos executive masters et executive certificates"
            duration="" backgroundImage="/valeurs/bg.jpg" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Formations', href: '#' },
                { label: 'EXECUTIVE EDUCATION' }
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

                            <!-- Boutons avec couleurs dynamiques -->
                            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <button
                                    @click="handleDownloadClick(formation)"
                                    :class="[
                                        'flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg',
                                        downloadingId === formation.id ? 'bg-emerald-600 text-white cursor-wait' : 'bg-[#01b4d5] hover:bg-[#009bb8] text-white hover:-translate-y-0.5'
                                    ]"
                                >
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>{{ downloadingId === formation.id ? 'Téléchargement...' : 'Télécharger la brochure' }}</span>
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
                <NuxtLink
                to="/preparation-inscription"
                class="inline-block bg-white text-[#01b4d5] hover:bg-gray-100 px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl transform hover:shadow-2xl"
                >
                S'inscrire maintenant
                </NuxtLink>

            </div>
        </section>

        <!-- Modal Brochure -->
        <BrochureModal
            :is-open="isModalOpen"
            :brochure-name="selectedBrochureTitle"
            @close="isModalOpen = false"
            @submit="onBrochureSubmit"
        />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import BrochureModal from '~/components/BrochureModal.vue'

const router = useRouter()    

// États réactifs
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = ref(4)
const isModalOpen = ref(false)
const selectedBrochureUrl = ref('')
const selectedBrochureTitle = ref('')
const downloadingId = ref(null)

const openBrochureModal = (url, title) => {
  selectedBrochureUrl.value = url
  selectedBrochureTitle.value = title
  isModalOpen.value = true
}

const handleDownloadClick = (formation) => {
  openBrochureModal(formation.brochureUrl, `Executive Master ${formation.titre}`)
}

const onBrochureSubmit = async (formData) => {
  localStorage.setItem('escen_prospect_registered', 'true')
  localStorage.setItem('escen_prospect_data', JSON.stringify(formData))
  
  if (selectedBrochureUrl.value) {
    try {
      const response = await fetch(selectedBrochureUrl.value)
      if (!response.ok) throw new Error('Téléchargement échoué')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${selectedBrochureTitle.value}.pdf`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      window.open(selectedBrochureUrl.value, '_blank')
    }
  }
}

// Tableau des formations
const formations = [
    {
        id: 2,
        type: "Executive Master",
        titre: "Finance Digitale",
        description: "Conçu pour les professionnels ambitieux, ce cursus de haut niveau permet de maîtriser les enjeux stratégiques de la transformation numérique financière. Face à l'émergence des fintechs, de la blockchain et de l'IA, le programme développe votre capacité à piloter l'innovation. Grâce à une pédagogie flexible et des cas concrets, vous apprendrez à concevoir de nouveaux modèles d'affaires, gérer les risques et accélérer votre évolution de carrière.",
        image: "/formations/financedigital2.jpg",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
        brochureUrl: "/pdf/Fiche_Executive_Master_FD.pdf",
        detailsUrl: "/formations/executive-education/finance-digitale",
    },
    {
        id: 3,
        type: "Executive Master",
        titre: "Management de Projets et Transformation Digitale",
        description: "Pensé pour développer votre leadership, ce programme vous donne les clés pour piloter la transformation digitale et gérer des projets stratégiques à fort impact. Avec une pédagogie flexible, vous apprenez à aligner vos projets sur la stratégie de l'entreprise et à conduire le changement. En partenariat avec le PMI, ce cursus accélérateur de carrière intègre également la préparation aux certifications internationales CAPM® et PMP®.",
        image: "/formations/8V9B4530.jpg",
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
        brochureUrl: "/pdf/Programme_Executive_Master_MP%26TD.pdf",
        detailsUrl: "/formations/executive-education/management-projets-transformation-digitale",
    }
]

// Computed properties
const filteredFormations = computed(() => {
    if (!searchQuery.value) {
        return formations
    }

    const query = searchQuery.value.toLowerCase()
    return formations.filter(formation =>
        formation.titre.toLowerCase().includes(query) ||
        formation.description.toLowerCase().includes(query)
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

// Méthodes de redirection et de style
const voirDetails = (id) => {
    const formation = formations.find(f => f.id === id)
    if (formation && formation.detailsUrl) {
        router.push(formation.detailsUrl)
    }
}

const getFormationOrder = (index) => {
    return index % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
}

const getContentPosition = (index) => {
    return index % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
}

const getBadgeClasses = (index) => {
    const classes = [
        'bg-[#01b4d5]/10 text-[#01b4d5]',
        'bg-[#202a51]/10 text-[#202a51]'
    ]
    return `inline-block px-4 py-2 rounded-full font-bold text-sm mb-4 ${classes[index % classes.length]}`
}

const getIconPosition = (index) => {
    const positions = [
        'bottom-6 right-6 bg-[#01b4d5]',
        'bottom-6 left-6 bg-[#202a51]'
    ]
    return `absolute p-4 md:p-5 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform duration-500 ${positions[index % positions.length]}`
}

const getSecondaryButtonClasses = (index) => {
    const classes = [
        'bg-[#202a51] hover:bg-[#0056b3] text-white',
        'bg-[#01b4d5] hover:bg-[#009bb8] text-white'
    ]
    return `px-6 py-3.5 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-center ${classes[index % classes.length]}`
}

const handleImageError = (event) => {
    console.error('Erreur de chargement de l\'image:', event.target.src)
    event.target.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200'
}
</script>
