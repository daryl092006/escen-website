<template>
  <section class="relative h-[88vh] min-h-[480px] md:min-h-[650px] overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#141b2b]">
    <!-- ===== FOND STATIQUE ÉLÉGANT ===== -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, #01b4d5 1px, transparent 0); background-size: 50px 50px;"></div>
      <div class="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#019fbf]/10 to-transparent"></div>
      <div class="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-[#202a50]/20 to-transparent"></div>
    </div>

    <!-- ===== SVG THÉMATIQUES UNIVERSITÉ FLOTTANTS ===== -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute animate-float-university" style="top: 15%; left: 5%; animation-delay: 0s;">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30">
          <path d="M4 4H20V20H4V4Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 8H16V12H8V8Z" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 16H16" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 16H9" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="absolute animate-float-university" style="top: 25%; right: 8%; animation-delay: 1s;">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]/30">
          <path d="M4 10L12 5L20 10L12 15L4 10Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8 12.5V16.5C8 18.5 12 20 12 20C12 20 16 18.5 16 16.5V12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 10V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="absolute animate-float-university" style="bottom: 20%; left: 10%; animation-delay: 2s;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30">
          <path d="M4 5H9C10.5 5 12 6.5 12 8V19C12 19 9 17 4 19V5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M20 5H15C13.5 5 12 6.5 12 8V19C12 19 15 17 20 19V5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12 8V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="absolute animate-float-university" style="top: 60%; right: 15%; animation-delay: 3s;">
        <svg width="65" height="65" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#202a50]/40">
          <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/>
          <path d="M12 11V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M8 16H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M10 20L12 16L14 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <div class="absolute animate-float-university" style="bottom: 30%; right: 20%; animation-delay: 4s;">
        <svg width="55" height="55" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#01b4d5]/30">
          <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5"/>
          <path d="M4 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 4C14 6 15 9 15 12C15 15 14 18 12 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 4C10 6 9 9 9 12C9 15 10 18 12 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="absolute animate-float-university" style="top: 40%; left: 15%; animation-delay: 5s;">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]/30">
          <path d="M16 4L20 8L8 20H4V16L16 4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 6L18 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>

      <div class="absolute animate-float-university" style="top: 10%; right: 25%; animation-delay: 7s;">
        <svg width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-[#019fbf]/30">
          <path d="M4 20H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M6 20V10L12 5L18 10V20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          <path d="M10 20V15H14V20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>

    <!-- ===== CONTENEUR PRINCIPAL ===== -->
    <div class="relative z-20 h-full w-full flex items-center">
      <div class="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl">

          <!-- Slides avec vraie transition Vue -->
          <Transition name="slide-fade" mode="out-in">
            <div :key="currentSlide">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#01b4d5]/10 border border-[#01b4d5]/20 mb-6">
                <span class="w-1.5 h-1.5 rounded-full bg-[#01b4d5] animate-ping"></span>
                <span class="text-xs font-semibold tracking-widest text-[#01b4d5] uppercase">
                  {{ slides[currentSlide].badge }}
                </span>
              </div>

              <!-- Titre -->
              <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-center lg:text-left mb-4 lg:mb-5">
                <span class="block text-white">
                  {{ slides[currentSlide].title.split(' ').slice(0, 2).join(' ') }}
                </span>
                <span class="block text-[#01b4d5] font-semibold">
                  {{ slides[currentSlide].title.split(' ').slice(2).join(' ') }}
                </span>
              </h1>

              <!-- Sous-titre -->
              <p class="text-base sm:text-lg lg:text-xl text-[#01b4d5]/70 text-center lg:text-left mb-3">
                {{ slides[currentSlide].subtitle }}
              </p>

              <!-- Description -->
              <p class="text-sm sm:text-base text-gray-400 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 mb-10">
                {{ slides[currentSlide].description }}
              </p>

              <!-- Boutons -->
              <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <NuxtLink :to="slides[currentSlide].primaryButton.link"
                          class="px-7 py-3.5 bg-[#019fbf] hover:bg-[#01b4d5] text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center gap-2 group shadow-lg shadow-[#019fbf]/30 hover:shadow-[#01b4d5]/40 hover:-translate-y-0.5">
                  {{ slides[currentSlide].primaryButton.text }}
                  <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>

                <NuxtLink :to="slides[currentSlide].secondaryButton.link"
                          class="px-7 py-3.5 border border-white/20 hover:border-[#01b4d5]/60 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-300 text-sm sm:text-base inline-flex items-center justify-center gap-2 group hover:bg-white/5 hover:-translate-y-0.5">
                  {{ slides[currentSlide].secondaryButton.text }}
                  <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- ===== INDICATEURS DE SLIDE ===== -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
      <button v-for="(slide, index) in slides" :key="index"
              @click="goToSlide(index)"
              class="transition-all duration-400 rounded-full"
              :class="currentSlide === index
                ? 'w-8 h-2 bg-[#01b4d5]'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'">
      </button>
    </div>

    <!-- ===== FLÈCHES DE NAVIGATION ===== -->
    <button @click="prevSlide"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 z-30 flex items-center justify-center hover:scale-110">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    <button @click="nextSlide"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-white/50 hover:text-white transition-all duration-300 z-30 flex items-center justify-center hover:scale-110">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>

    <!-- Barre de progression -->
    <div class="absolute bottom-0 left-0 w-full h-0.5 bg-white/5 z-30">
      <div class="h-full bg-[#01b4d5]/50 transition-all duration-300 ease-linear"
           :style="{ width: progressWidth + '%' }">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const currentSlide = ref(0)
const progress = ref(0)
let autoplayInterval
let progressInterval

const slides = [
  {
    badge: 'Formation d\'excellence',
    title: 'Formez-vous aux Métiers du Digital',
    subtitle: 'Devenez un expert en commerce et économie numérique',
    description: 'L\'ESCEN vous prépare aux carrières d\'avenir avec des formations innovantes et adaptées aux besoins du marché.',
    primaryButton: { text: 'Nos formations', link: '/formations' },
    secondaryButton: { text: 'Candidater', link: '/inscription' }
  },
  {
    badge: 'Pédagogie innovante',
    title: 'Une Pédagogie Tournée vers l\'Avenir',
    subtitle: 'Apprenez avec les méthodes les plus modernes',
    description: 'Notre approche pédagogique unique combine théorie et pratique pour une insertion professionnelle réussie.',
    primaryButton: { text: 'Nos formations', link: '/formations' },
    secondaryButton: { text: 'Candidater', link: '/inscription' }
  },
  {
    badge: 'International',
    title: 'Ouvrez-vous sur le Monde',
    subtitle: 'Des opportunités à l\'international',
    description: 'Étudiez et développez votre réseau professionnel international avec nos partenariats mondiaux.',
    primaryButton: { text: 'Nos formations', link: '/formations' },
    secondaryButton: { text: 'Candidater', link: '/inscription' }
  }
]

const SLIDE_DURATION = 6000

const progressWidth = computed(() => progress.value)

const resetProgress = () => {
  progress.value = 0
  if (progressInterval) clearInterval(progressInterval)
  progressInterval = setInterval(() => {
    progress.value = Math.min(progress.value + (100 / (SLIDE_DURATION / 100)), 100)
  }, 100)
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
  resetProgress()
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length
  resetProgress()
}

const goToSlide = (index) => {
  currentSlide.value = index
  resetProgress()
}

onMounted(() => {
  resetProgress()
  autoplayInterval = setInterval(nextSlide, SLIDE_DURATION)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
  clearInterval(progressInterval)
})
</script>

<style scoped>
@keyframes float-university {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(15px, -15px) rotate(5deg); }
  50% { transform: translate(0, -25px) rotate(0deg); }
  75% { transform: translate(-15px, -10px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

.animate-float-university {
  animation: float-university 18s ease-in-out infinite;
  filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.2));
}

@media (max-width: 768px) {
  .animate-float-university { opacity: 0.5; }
  .animate-float-university svg { width: 35px; height: 35px; }
}
</style>
