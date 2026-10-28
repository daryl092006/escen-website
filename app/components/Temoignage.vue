<template>
  <section id="testimonials" class="relative py-16 lg:py-32 bg-[#f8fafc] overflow-hidden">
    <!-- Déco de fond -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#01b4d5]/5 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#202a50]/5 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 relative z-10 mb-10 lg:mb-16 text-center">
      <div class="inline-flex items-center gap-3 mb-6">
        <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
        <span class="text-[#01b4d5] text-xs font-bold tracking-[0.3em] uppercase">Expériences</span>
        <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
      </div>

      <h2 class="text-3xl sm:text-5xl lg:text-6xl font-light text-[#202a50] mb-6 leading-tight">
        Ils parlent de
        <span class="font-bold text-[#01b4d5]"> leur réussite.</span>
      </h2>
    </div>

    <!-- Conteneur strict pour n'afficher qu'un nombre exact de cartes et cacher totalement le reste -->
    <div class="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-24 overflow-hidden">
      <!-- Piste de défilement horizontal sans padding interne -->
      <div 
        ref="scrollContainer" 
        class="flex items-stretch overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-20 pt-10"
        style="scroll-behavior: smooth;"
      @mouseenter="pauseAutoScroll"
      @mouseleave="startAutoScroll"
      @touchstart="pauseAutoScroll"
      @touchend="startAutoScroll"
    >
        <div 
          v-for="(t, index) in duplicatedTestimonials" 
          :key="index"
          class="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.33px)] flex relative group cursor-grab active:cursor-grabbing mr-4 lg:mr-8"
        >
        <!-- Card -->
        <div class="w-full h-full bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 lg:p-8 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(1,180,213,0.1)] transition-all duration-500 transform group-hover:-translate-y-2 flex flex-col justify-between">
          
          <div>
            <!-- Stars & Quote Icon -->
            <div class="flex justify-between items-start mb-8">
              <div class="flex gap-1">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </div>
              <span class="text-6xl leading-none text-[#01b4d5]/10 font-serif font-black absolute top-6 right-8">"</span>
            </div>

            <!-- Content -->
            <p class="text-base lg:text-lg text-gray-700 leading-relaxed font-medium mb-8 relative z-10">
              {{ t.content }}
            </p>
          </div>

          <!-- User Info -->
          <div class="flex items-center gap-4 mt-auto pt-5 border-t border-gray-100">
            <div class="relative w-14 h-14 rounded-full overflow-hidden shadow-md shrink-0">
              <img loading="lazy" decoding="async" :src="t.photo" :alt="t.name" class="w-full h-full object-cover" @error="handleImageError" />
              <div class="absolute inset-0 bg-[#202a50]/10 mix-blend-overlay"></div>
            </div>
            <div>
              <h4 class="font-bold text-[#202a50] text-base leading-tight">{{ t.name }}</h4>
              <p class="text-xs font-medium text-[#01b4d5] mt-1">{{ t.role }}</p>
              <p class="text-[11px] text-gray-400 mt-0.5">{{ t.type }} <span v-if="t.country">• {{ t.country }}</span></p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollContainer = ref(null)
let autoScrollInterval = null

const testimonials = [
  {
    name: "Ibrahim DAN KARAMI",
    role: "Directeur général ID Money",
    detail: "Chargé du cours transformation digitale",
    country: "",
    type: "Intervenant Expert",
    photo: "/temoignage/Ibrahim_Dan_Karami.png",
    content: "J'apprécie de former de futurs spécialistes en économie numérique. Je suis ravi de voir l'engagement des apprenants et leur enthousiasme. Je suis impatient de voir l'impact que cela induira dans l'industrie."
  },
  {
    name: "Mathias DEKADJEVI",
    role: "Spécialiste Transformation digitale",
    detail: "Chargé de cours finance digitale",
    country: "",
    type: "Intervenant Expert",
    photo: "/temoignage/Mathias_Dekadjevi.png",
    content: "L'économie numérique est une véritable chance pour notre continent et je suis persuadé que le vivier en cours de constitution grâce à l'initiative ESCEN, fera progresser les limites d'une véritable inclusion financière."
  },
  {
    name: "Bénédicte MUYISA",
    role: "Étudiante Management de projets",
    detail: "Licence en Management numérique",
    country: "RD Congo",
    type: "Étudiante",
    photo: "/temoignage/Benedicte.jpg",
    content: "Originaire du Congo, j'ai été impressionnée par la qualité des cours dispensés par des experts du domaine. ESCEN a un réseau solide d'entreprises partenaires, ce qui m'a permis de trouver un stage enrichissant."
  },
  {
    name: "Akoèsso AKAKPO",
    role: "Étudiant Finance Digitale",
    detail: "Spécialisation technologies financières",
    country: "Togo",
    type: "Étudiant",
    photo: "/temoignage/Akoesso_Akakpo.png",
    content: "Mon expérience à ESCEN m'a permis d'acquérir une solide compréhension des concepts financiers appliqués aux technologies numériques, un choix idéal pour se spécialiser."
  },
  {
    name: "Williams SANOU",
    role: "Responsable filière MSA",
    detail: "Master Pro Finance Digitale",
    country: "Côte d'Ivoire",
    type: "Professionnel",
    photo: "/temoignage/Williams_Sanou.jpg",
    content: "Le programme de Master Pro Finance digitale est bien fourni et chaque participant se retrouve facilement, quel que soit son background. Les intervenants étaient très expérimentés."
  },
  {
    name: "Emeraude AVOCE",
    role: "Étudiante Marketing Digital",
    detail: "Spécialisation stratégies digitales",
    country: "Bénin",
    type: "Étudiante",
    photo: "/temoignage/Emeraude_Avoce.png",
    content: "Ce qui fait d'ESCEN une école particulière est la combinaison parfaite entre théorie et pratique. Quoi de mieux que d'être formés par des professionnels dans un cadre convivial et confortable."
  }
]

// Duplication massive pour un défilement "continu" sans retour arrière visible rapide
const duplicatedTestimonials = Array(15).fill(testimonials).flat()

const scrollLeft = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.children[0].offsetWidth
    scrollContainer.value.scrollBy({ left: -cardWidth - 32, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    const cardWidth = scrollContainer.value.children[0].offsetWidth
    scrollContainer.value.scrollBy({ left: cardWidth + 32, behavior: 'smooth' })
  }
}

const handleImageError = (event) => {
  const parent = event.target.parentElement
  const initials = event.target.alt.split(' ').map(n => n[0]).join('').slice(0, 2)
  parent.innerHTML = `
    <div class="w-full h-full bg-gradient-to-br from-[#01b4d5] to-[#202a50] flex items-center justify-center">
      <span class="text-white text-xl font-bold">${initials}</span>
    </div>
  `
}

const startAutoScroll = () => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
  autoScrollInterval = setInterval(() => {
    if (scrollContainer.value) {
      const container = scrollContainer.value
      const cardWidth = container.children[0].offsetWidth
      
      // On scroll d'environ 70% de la carte, le snap CSS s'occupe de l'alignement parfait !
      // Cela évite le bug des marges qui se décalent au fur et à mesure.
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 50) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        container.scrollBy({ left: cardWidth * 0.75, behavior: 'smooth' })
      }
    }
  }, 3500)
}

const pauseAutoScroll = () => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
}

onMounted(() => {
  startAutoScroll()
})

onUnmounted(() => {
  if (autoScrollInterval) clearInterval(autoScrollInterval)
})
</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
