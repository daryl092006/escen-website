<template>
  <section ref="ctaSection" class="relative py-24 lg:py-32 overflow-hidden bg-[#0a0e1a]">
    <!-- Fond avec gradient -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#141b2b] to-[#0a0e1a]"></div>
      <!-- Grille de points -->
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, #01b4d5 1px, transparent 0); background-size: 40px 40px;"></div>
      <!-- Lueurs -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#01b4d5]/8 rounded-full blur-[120px]"></div>
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-[#202a50]/30 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#019fbf]/10 rounded-full blur-[80px]"></div>
    </div>

    <!-- Ligne décorative supérieure -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/30 to-transparent"></div>
    <!-- Ligne décorative inférieure -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/30 to-transparent"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <!-- Colonne gauche : texte -->
        <div class="text-center lg:text-left">
          <!-- Badge -->
          <div class="inline-flex items-center gap-3 mb-6 reveal" :class="{ 'is-visible': isVisible }">
            <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#01b4d5]/10 border border-[#01b4d5]/20">
              <span class="w-1.5 h-1.5 rounded-full bg-[#01b4d5] animate-ping"></span>
              <span class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">Candidatures ouvertes</span>
            </div>
          </div>

          <!-- Titre -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-6 leading-tight reveal reveal-delay-1" :class="{ 'is-visible': isVisible }">
            Prêt à construire
            <span class="block font-bold text-[#01b4d5]">votre avenir digital ?</span>
          </h2>

          <!-- Description -->
          <p class="text-base lg:text-lg text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 reveal reveal-delay-2" :class="{ 'is-visible': isVisible }">
            Rejoignez une communauté d'étudiants venus de toute l'Afrique.
            Des formations conçues par des experts, pour les métiers de demain.
          </p>

          <!-- Boutons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal reveal-delay-3" :class="{ 'is-visible': isVisible }">
            <NuxtLink to="/inscription"
              class="group relative px-8 py-4 bg-[#01b4d5] hover:bg-[#019fbf] text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-[#01b4d5]/25 hover:shadow-[#01b4d5]/40 hover:-translate-y-0.5">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
              Candidater maintenant
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>

            <NuxtLink to="/formations"
              class="group px-8 py-4 border border-white/15 hover:border-[#01b4d5]/40 text-white/80 hover:text-white font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 hover:bg-white/5 hover:-translate-y-0.5">
              Voir les formations
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </div>
        </div>

        <!-- Colonne droite : chiffres clés -->
        <div class="grid grid-cols-2 gap-4 reveal-right" :class="{ 'is-visible': isVisible }">
          <div v-for="(stat, i) in stats" :key="i"
               class="group p-6 rounded-2xl border border-white/8 bg-white/3 hover:bg-white/6 hover:border-[#01b4d5]/30 transition-all duration-400 hover:-translate-y-1 text-center">
            <div class="text-3xl lg:text-4xl font-bold text-[#01b4d5] mb-2 tabular-nums"
                 :ref="el => statRefs[i] = el">0</div>
            <div class="text-xs text-gray-500 font-medium uppercase tracking-wider">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const ctaSection = ref(null)
const isVisible = ref(false)
const statRefs = ref([])

const stats = [
  { target: 520, suffix: '+', label: 'Étudiants formés' },
  { target: 10,  suffix: '+', label: 'Pays représentés' },
  { target: 84,  suffix: '+', label: 'Partenaires' },
  { target: 76,  suffix: '%', label: 'Insertion pro.' },
]

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
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible.value) {
          isVisible.value = true
          setTimeout(() => {
            stats.forEach((stat, i) => {
              animateCounter(statRefs.value[i], stat.target, stat.suffix)
            })
          }, 400)
        }
      })
    },
    { threshold: 0.2 }
  )
  if (ctaSection.value) observer.observe(ctaSection.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>
