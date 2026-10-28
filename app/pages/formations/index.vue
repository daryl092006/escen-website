<template>
  <div class="min-h-screen bg-gray-50 overflow-hidden relative">
    
    <!-- Décorations de fond subtiles -->
    <div class="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div class="absolute top-[20%] left-[-10%] w-[40%] h-[50%] bg-gradient-to-r from-[#01b4d5]/5 to-transparent rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[10%] right-[-10%] w-[35%] h-[60%] bg-gradient-to-l from-[#202a50]/5 to-transparent rounded-full blur-[100px]"></div>
    </div>

    <!-- Breadcrumb -->
    <Breadcrumb 
      title="Nos Formations" 
      subtitle="Excellence académique"
      description="Découvrez l'ensemble de nos programmes conçus pour former les leaders de l'ère du numérique et du management." 
      :breadcrumb="[
        { label: 'Accueil', href: '/' },
        { label: 'Formations' }
      ]" 
      backgroundImage="/valeurs/bg.jpg" 
      class="relative z-10"
    />

    <!-- Main Content -->
    <main class="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative z-10" ref="sectionEl">
      
      <!-- En-tête -->
      <div class="text-center mb-16 lg:mb-20 reveal" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
          <span class="text-[#01b4d5] font-semibold text-xs tracking-widest uppercase">Parcours</span>
          <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
        </div>

        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#202a50] mb-6 tracking-tight">
          Choisissez votre <span class="text-[#01b4d5]">Avenir</span>
        </h2>

        <p class="text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          De la première année jusqu'à l'expertise de haut niveau, l'ESCEN vous accompagne avec des formations adaptées aux exigences du monde professionnel.
        </p>
      </div>

      <!-- Grille de Formations -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-6xl mx-auto">
        <div v-for="(formation, index) in formations" :key="formation.id"
             class="reveal"
             :class="['reveal-delay-' + (index + 1), { 'is-visible': isVisible }]">
          
          <NuxtLink :to="formation.path" class="block h-full group">
            <div class="relative bg-white rounded-2xl p-8 lg:p-10 h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2">
              
              <!-- Effet de lueur géométrique au survol -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#01b4d5]/10 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
              <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#01b4d5] to-[#202a50] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <!-- En-tête de la carte -->
              <div class="flex items-start justify-between mb-8 relative z-10">
                <div class="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-200 group-hover:bg-[#202a50] group-hover:border-[#202a50] transition-colors duration-500 shadow-sm">
                  <svg class="w-8 h-8 text-[#01b4d5] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="formation.iconPath" />
                  </svg>
                </div>
                
                <div class="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-[#01b4d5] group-hover:border-[#01b4d5] transition-colors duration-300">
                  <svg class="w-5 h-5 text-[#202a50] group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <!-- Contenu textuel -->
              <div class="relative z-10 flex-grow">
                <h3 class="text-2xl font-bold text-[#202a50] mb-4 group-hover:text-[#01b4d5] transition-colors duration-300">
                  {{ formation.title }}
                </h3>
                <p class="text-gray-500 leading-relaxed text-sm lg:text-base">
                  {{ formation.description }}
                </p>
              </div>

              <!-- Caractéristiques (tags) -->
              <div class="relative z-10 mt-8 pt-6 border-t border-gray-100">
                <div class="flex flex-wrap items-center gap-3">
                  <span v-for="(tag, tIndex) in formation.tags" :key="tIndex" 
                        class="px-3 py-1.5 bg-gray-50 text-[#202a50] text-[11px] lg:text-xs font-semibold uppercase tracking-wide rounded-md border border-gray-200 group-hover:border-[#01b4d5]/30 group-hover:bg-[#01b4d5]/5 group-hover:text-[#01b4d5] transition-colors duration-300">
                    {{ tag }}
                  </span>
                </div>
              </div>

            </div>
          </NuxtLink>

        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Breadcrumb from '~/components/Breadcrumb.vue'

const sectionEl = ref(null)
const isVisible = ref(true)

// Les 4 parcours principaux tels que définis dans Header.vue
const formations = [
  {
    id: 'licence',
    title: 'Licence Professionnelle',
    path: '/formations/licence-professionnelle',
    description: 'Une formation académique solide pour acquérir les fondamentaux du management, de la gestion et du numérique, tout en se professionnalisant.',
    iconPath: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
    tags: ['BAC+3', 'Pratique intensive', 'Stages']
  },
  {
    id: 'master',
    title: 'Master Professionnel',
    path: '/formations/master-professionnel',
    description: 'Devenez un expert en développant vos capacités de stratégie, d\'analyse et de leadership pour des postes à très haute responsabilité.',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    tags: ['BAC+5', 'Expertise pointue', 'Management']
  },
  {
    id: 'executive',
    title: 'Executive Education',
    path: '/formations/executive-education',
    description: 'Des programmes sur-mesure conçus pour les professionnels en activité désirant accélérer leur carrière ou réorienter leurs compétences.',
    iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    tags: ['Ciblé Adultes', 'Flexibles', 'Réseautage']
  },
  {
    id: 'certificats',
    title: 'Certificats Spécialisés',
    path: '/formations/certificats',
    description: 'Des modules courts et intensifs pour monter en compétences rapidement sur des outils, des technologies ou des méthodologies spécifiques.',
    iconPath: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    tags: ['Cours Intensif', 'Reconnu', 'Ultra-Spécifique']
  }
]

let observer

onMounted(() => {
  // L'observateur pour déclencher les apparitions avec délais
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            isVisible.value = true
        }
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
/* Système d'apparition au scroll (standardisé avec le reste du site) */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.reveal-delay-1 { transition-delay: 100ms; }
.reveal-delay-2 { transition-delay: 200ms; }
.reveal-delay-3 { transition-delay: 300ms; }
.reveal-delay-4 { transition-delay: 400ms; }
</style>