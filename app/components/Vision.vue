<template>
  <section id="vision" ref="visionSection" class="relative overflow-hidden bg-white">

    <!-- ===== FOND DÉCORATIF LÉGER ===== -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Grille subtile -->
      <div class="absolute inset-0 opacity-[0.035]"
           style="background-image: radial-gradient(circle at 1px 1px, #202a50 1px, transparent 0); background-size: 40px 40px;"></div>
      <!-- Lueur cyan haut-droite -->
      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#01b4d5]/6 rounded-full blur-[120px]"></div>
      <!-- Lueur navy bas-gauche -->
      <div class="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-[#202a50]/5 rounded-full blur-[100px]"></div>
      <!-- Trait supérieur -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/20 to-transparent"></div>
      <!-- Trait inférieur -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/20 to-transparent"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-32 pb-12 lg:pb-20">

      <!-- ===== EN-TÊTE ===== -->
      <div class="text-center mb-12 lg:mb-20 reveal" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-3 mb-6">
          <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
          <span class="text-[#01b4d5] text-xs font-bold tracking-[0.3em] uppercase">Vision pédagogique</span>
          <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
        </div>

        <h2 class="text-3xl sm:text-5xl lg:text-6xl font-light text-[#202a50] mb-6 leading-tight">
          Notre vision pour
          <span class="font-bold text-[#01b4d5]"> l'excellence</span>
        </h2>

        <p class="text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Quatre piliers fondamentaux qui structurent notre approche pédagogique
          et guident notre mission de formation d'exception.
        </p>
      </div>

      <!-- ===== GRILLE DES 4 PILIERS ===== -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 lg:mb-20">
        <div
          v-for="(pilier, index) in piliers"
          :key="pilier.id"
          class="reveal"
          :class="[`reveal-delay-${index + 1}`, { 'is-visible': isVisible }]"
        >
          <div class="group relative h-full rounded-2xl border border-gray-100 bg-gray-50/60 p-7 cursor-default
                      hover:border-[#01b4d5]/25 hover:bg-white hover:shadow-xl hover:shadow-[#01b4d5]/5
                      transition-all duration-500 hover:-translate-y-2 overflow-hidden">

            <!-- Trait coloré supérieur — apparaît au hover -->
            <div class="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#01b4d5] to-transparent
                        scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-full"></div>

            <!-- Lueur subtile de fond -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                 style="background: radial-gradient(ellipse at 50% -10%, rgba(1,180,213,0.05) 0%, transparent 70%)"></div>

            <!-- Numéro en filigrane -->
            <div class="relative z-10 mb-4">
              <span class="text-6xl font-black text-gray-100 group-hover:text-[#01b4d5]/10 transition-colors duration-500 leading-none select-none">
                {{ pilier.id }}
              </span>
            </div>

            <!-- Icône -->
            <div class="relative z-10 mb-5 -mt-4">
              <div class="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center
                          group-hover:bg-[#01b4d5] group-hover:border-[#01b4d5] group-hover:shadow-md transition-all duration-400">
                <svg class="w-5 h-5 text-[#01b4d5] group-hover:text-white transition-colors duration-400"
                     fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="pilier.icon"/>
                </svg>
              </div>
            </div>

            <!-- Titre -->
            <h3 class="relative z-10 text-xl font-bold text-[#202a50] mb-3 tracking-wide
                       group-hover:text-[#01b4d5] transition-colors duration-300">
              {{ pilier.titre }}
            </h3>

            <!-- Description -->
            <p class="relative z-10 text-sm text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
              {{ pilier.description }}
            </p>

            <!-- Tag bas -->
            <div class="relative z-10 mt-6 pt-5 border-t border-gray-100 group-hover:border-[#01b4d5]/10 transition-colors duration-300">
              <span class="text-[10px] font-bold tracking-widest text-gray-300 group-hover:text-[#01b4d5]/60 uppercase transition-colors duration-300">
                {{ pilier.tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- ===== STATISTIQUES ===== -->
    <div class="reveal reveal-delay-5 relative w-full" :class="{ 'is-visible': isVisible }">
      <div class="bg-[#202a50] py-10 lg:py-16 relative overflow-hidden">
        
        <!-- Pattern & Glows -->
        <div class="absolute inset-0 pointer-events-none">
          <!-- Dot pattern -->
          <div class="absolute inset-0 opacity-[0.08]"
               style="background-image: radial-gradient(#01b4d5 1.5px, transparent 1.5px); background-size: 24px 24px;"></div>
          <!-- Lueur gauche -->
          <div class="absolute top-0 -left-32 w-80 h-full bg-[#01b4d5]/15 blur-[80px]"></div>
          <!-- Lueur droite -->
          <div class="absolute top-0 -right-32 w-80 h-full bg-[#01b4d5]/15 blur-[80px]"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 lg:gap-0 lg:divide-x lg:divide-white/20">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              class="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-3 lg:gap-5 lg:px-8 group"
            >
              <!-- Icône -->
              <div class="flex-shrink-0 text-[#01b4d5] group-hover:scale-110 transition-transform duration-300">
                <svg class="w-10 h-10 lg:w-12 lg:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="stat.icon"/>
                </svg>
              </div>

              <!-- Textes -->
              <div class="flex flex-col text-center lg:text-left">
                <!-- Chiffre animé -->
                <div class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-1 tabular-nums leading-none">
                  <span :ref="el => statRefs[i] = el">{{ stat.target }}{{ stat.suffix }}</span>
                </div>
                <!-- Label -->
                <div class="text-xs sm:text-sm lg:text-base text-gray-300">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useConfigurationStore } from '~/stores/configuration'

const configStore = useConfigurationStore()
await useAsyncData('configurations', () => configStore.fetchConfigurations())

const visionSection = ref(null)
const isVisible = ref(false)
const statRefs = ref([])

const piliers = [
  {
    id: '01',
    titre: 'Former',
    tag: 'Compétences',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    description: 'Développer des compétences d\'excellence chez nos étudiants, en phase avec les besoins du marché et les évolutions technologiques.'
  },
  {
    id: '02',
    titre: 'Innover',
    tag: 'Méthodes',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    description: 'Intégrer les dernières innovations pédagogiques et technologiques pour offrir une expérience d\'apprentissage unique et stimulante.'
  },
  {
    id: '03',
    titre: 'Connecter',
    tag: 'Réseau',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    description: 'Tisser des liens forts entre nos étudiants et le monde professionnel, en Afrique et à l\'international, pour favoriser leur insertion.'
  },
  {
    id: '04',
    titre: 'Rayonner',
    tag: 'Excellence',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    description: 'Devenir une référence de l\'enseignement supérieur numérique en Afrique, reconnue pour la qualité de ses formations et de ses diplômés.'
  }
]

const stats = computed(() => [
  { target: parseInt(configStore.getParamValue('stat_etudiants_formes')) || 520, suffix: '+', label: 'Étudiants formés', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { target: parseInt(configStore.getParamValue('stat_diplomes')) || 410, suffix: '+', label: 'Diplômés', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
  { target: parseInt(configStore.getParamValue('stat_partenaires')) || 84,  suffix: '+', label: 'Partenaires', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { target: parseInt(configStore.getParamValue('stat_insertion_pro')) || 76,  suffix: '%', label: 'Insertion pro.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
])

const animateCounter = (el, target, suffix) => {
  if (!el) return
  const duration = 1800
  const start = performance.now()
  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.floor(ease * target) + suffix
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

let observer

onMounted(() => {
  if (visionSection.value) {
    const rect = visionSection.value.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isVisible.value = true
      setTimeout(() => {
        stats.value.forEach((stat, i) => {
          animateCounter(statRefs.value[i], stat.target, stat.suffix)
        })
      }, 300)
    }
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          setTimeout(() => {
            stats.value.forEach((stat, i) => {
              animateCounter(statRefs.value[i], stat.target, stat.suffix)
            })
          }, 400)
        }
      })
    },
    { threshold: 0.1 }
  )
  if (visionSection.value) observer.observe(visionSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
