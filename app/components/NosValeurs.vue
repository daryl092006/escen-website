<template>
  <section ref="sectionEl" id="valeurs" class="relative py-12 lg:py-28 overflow-hidden">
    <!-- Background image avec overlay -->
    <div class="absolute inset-0">
      <img
        src="/valeurs/bg.jpg"
        alt="Background valeurs ESCEN"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-[#202a50]/80 backdrop-blur-[2px]"></div>
    </div>

    <!-- Éléments décoratifs géométriques -->
    <div class="absolute top-8 right-8 w-24 h-24 border border-white/10 rounded-full animate-pulse-slow pointer-events-none"></div>
    <div class="absolute bottom-12 left-8 w-16 h-16 border border-white/8 rounded-lg rotate-45 animate-float-medium pointer-events-none"></div>

    <div class="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
      <!-- En-tête -->
      <div class="text-center mb-10 lg:mb-18 reveal" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-gradient-to-r from-transparent to-white/40"></div>
          <span class="text-white/70 font-semibold text-xs tracking-widest uppercase">Notre ADN</span>
          <div class="w-8 h-px bg-gradient-to-l from-transparent to-white/40"></div>
        </div>

        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 tracking-tight">
          Nos <span class="text-[#01b4d5]">Valeurs</span>
        </h2>

        <p class="text-base lg:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          Les piliers fondamentaux qui guident notre vision de l'éducation numérique
        </p>
      </div>

      <!-- Grille des valeurs -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div v-for="(valeur, index) in valeurs" :key="valeur.title"
             class="reveal"
             :class="['reveal-delay-' + (index + 1), { 'is-visible': isVisible }]">
          <div class="group h-full relative bg-white/8 backdrop-blur-xl rounded-2xl p-7 border border-white/15
                      hover:bg-white/14 hover:border-white/30 transition-all duration-500 hover:-translate-y-2
                      hover:shadow-2xl hover:shadow-black/20 cursor-default">
            <!-- Lueur hover -->
            <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                 style="background: radial-gradient(ellipse at 50% 0%, rgba(1,180,213,0.08) 0%, transparent 70%)"></div>

            <!-- Icône -->
            <div class="relative z-10 mb-5 flex justify-center">
              <div class="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center
                          group-hover:bg-[#01b4d5]/20 group-hover:border-[#01b4d5]/40 transition-all duration-400">
                <div class="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm
                            group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-5 h-5 text-[#202a50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="valeur.iconPath"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Titre -->
            <h3 class="relative z-10 text-xl font-bold text-white text-center mb-3 group-hover:text-[#01b4d5] transition-colors duration-300">
              {{ valeur.title }}
            </h3>

            <!-- Description -->
            <p class="relative z-10 text-white/80 leading-relaxed text-center text-sm">
              {{ valeur.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Séparateur bas -->
      <div class="text-center mt-10 lg:mt-14 reveal reveal-delay-4" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-4 text-white/40">
          <div class="w-16 h-px bg-gradient-to-r from-transparent to-white/30"></div>
          <span class="text-xs font-medium tracking-wide">L'excellence au service du numérique</span>
          <div class="w-16 h-px bg-gradient-to-l from-transparent to-white/30"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionEl = ref(null)
const isVisible = ref(false)

const valeurs = [
  {
    title: 'Excellence',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    description: 'Nous cultivons l\'excellence à travers la qualité de nos enseignements, l\'expertise de nos intervenants et l\'exigence de notre pédagogie.'
  },
  {
    title: 'Innovation',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
    description: 'Nous repoussons les limites grâce à des méthodologies innovantes et des filières adaptées aux enjeux technologiques contemporains.'
  },
  {
    title: 'Profesionnalisme et Leadership',
    iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    description: 'Nous formons des leaders capables d\'impacter leur environnement et de créer les entreprises de demain.'
  }
]

let observer

onMounted(() => {
  if (sectionEl.value) {
    const rect = sectionEl.value.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isVisible.value = true
    }
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
.animate-pulse-slow {
  animation: pulseSlow 5s ease-in-out infinite;
}

.animate-float-medium {
  animation: floatMedium 12s ease-in-out infinite;
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.05); }
}

@keyframes floatMedium {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50% { transform: translateY(-12px) rotate(45deg); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-pulse-slow,
  .animate-float-medium { animation: none; }
}
</style>
