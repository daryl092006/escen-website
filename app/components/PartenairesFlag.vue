
<template>
  <section id="origins" ref="sectionEl" class="relative py-12 lg:py-24 bg-white overflow-hidden">
    <!-- Décorations subtiles -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/20 to-transparent"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01b4d5]/20 to-transparent"></div>

    <div class="container mx-auto px-4 lg:px-6 max-w-7xl relative z-10">
      <!-- En-tête -->
      <div class="text-center mb-14 reveal" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-8 h-px bg-gradient-to-r from-transparent to-[#01b4d5]"></div>
          <span class="text-[#01b4d5] font-semibold text-xs tracking-widest uppercase">Diversité</span>
          <div class="w-8 h-px bg-gradient-to-l from-transparent to-[#01b4d5]"></div>
        </div>

        <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#202a50] mb-4 tracking-tight">
          Nos étudiants viennent de
        </h2>

        <p class="text-base lg:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
          Une communauté estudiantine riche et diversifiée venue de toute l'Afrique
        </p>
      </div>

      <!-- Compteur de pays -->
      <div class="flex justify-center mb-10 reveal reveal-delay-1" :class="{ 'is-visible': isVisible }">
        <div class="inline-flex items-center gap-6 px-8 py-4 rounded-2xl bg-gray-50 border border-gray-100">
          <div class="text-center">
            <div class="text-3xl font-bold text-[#01b4d5]">{{ countries.length }}</div>
            <div class="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Pays</div>
          </div>
          <div class="w-px h-10 bg-gray-200"></div>
          <div class="text-sm text-gray-600 max-w-[200px] leading-relaxed">
            Une école panafricaine ouverte sur le monde
          </div>
        </div>
      </div>

      <!-- Marquee infini -->
      <div class="relative reveal reveal-delay-2" :class="{ 'is-visible': isVisible }">
        <!-- Masque de fondu gauche/droite -->
        <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <!-- Piste du marquee -->
        <div class="overflow-hidden">
          <div class="flex gap-10 marquee-track" style="width: max-content">
            <!-- Double liste pour loop parfaite -->
            <div v-for="country in [...countries, ...countries]"
                 :key="country.name + Math.random()"
                 class="flex flex-col items-center flex-shrink-0 group cursor-default">
              <div class="website-country-flag overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-400 group-hover:-translate-y-1 border border-gray-100">
                <img
                  :src="country.flag"
                  :alt="`Drapeau ${country.name}`"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  @error="(e) => handleImageError(e, country.name)"
                >
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

const sectionEl = ref(null)
const isVisible = ref(false)

const countries = [
  { name: "Sénégal", flag: "/payspartenaire/senegal.png" },
  { name: "Togo", flag: "/payspartenaire/togo.png" },
  { name: "Bénin", flag: "/payspartenaire/benin.png" },
  { name: "Burkina Faso", flag: "/payspartenaire/burkina.png" },
  { name: "Burundi", flag: "/payspartenaire/burundi.png" },
  { name: "Congo", flag: "/payspartenaire/congo.png" },
  { name: "Côte d'Ivoire", flag: "/payspartenaire/Cote_ivoire.png" },
  { name: "Guinée", flag: "/payspartenaire/guineeC.png" },
  { name: "Niger", flag: "/payspartenaire/Niger.png" },
  { name: "Tchad", flag: "/payspartenaire/thad.png" }
]

const handleImageError = (event, countryName) => {
  const parent = event.target.parentElement
  parent.innerHTML = `
    <div class="w-full h-full bg-gradient-to-br from-[#01b4d5] to-[#202a50] flex items-center justify-center">
      <span class="text-white text-xs font-bold text-center px-2">${countryName}</span>
    </div>
  `
}

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
@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
</style>
