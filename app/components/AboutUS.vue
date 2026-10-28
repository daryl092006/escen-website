<template>
  <section id="a-propos" class="relative overflow-hidden bg-white py-12 lg:py-32">
    <!-- ===== UNIQUE BACKGROUND DECORATIONS (GRADUATION CAPS, ETC.) ===== -->
    <div class="absolute inset-0 pointer-events-none opacity-50 transition-opacity duration-1000">

      <!-- Graduation caps (Chapeaux de Toque) -->
      <div class="absolute top-[15%] left-[5%] animate-float-slow" style="animation-duration: 50s;">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" class="text-[#01b4d5]/60">
          <path d="M4 10L12 5L20 10L12 15L4 10Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M8 12.5V16.5C8 18.5 12 20 12 20C12 20 16 18.5 16 16.5V12.5" stroke="currentColor" stroke-width="1.2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <div class="absolute bottom-[20%] right-[8%] animate-float-slow"
        style="animation-duration: 18s; animation-delay: 5s;">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" class="text-[#202a50]/40">
          <path d="M4 10L12 5L20 10L12 15L4 10Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M8 12.5V16.5C8 18.5 12 20 12 20C12 20 16 18.5 16 16.5V12.5" stroke="currentColor" stroke-width="1.2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <!-- Diplomas -->
      <div class="absolute top-[40%] right-[12%] animate-float-slow"
        style="animation-duration: 25s; animation-delay: 4s;">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" class="text-[#01b4d5]/50">
          <path d="M4 4H20V20H4V4Z" stroke="currentColor" stroke-width="1" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M8 8H16V12H8V8Z" stroke="currentColor" stroke-width="1" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M12 16H16" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <!-- Open Books -->
      <div class="absolute bottom-[30%] left-[10%] animate-float-slow"
        style="animation-duration: 22s; animation-delay: 1s;">
        <svg width="90" height="90" viewBox="0 0 24 24" fill="none" class="text-[#01b4d5]/40">
          <path d="M4 5H9C10.5 5 12 6.5 12 8V19C12 19 9 17 4 19V5Z" stroke="currentColor" stroke-width="1.2"
            stroke-linecap="round" />
          <path d="M20 5H15C13.5 5 12 6.5 12 8V19C12 19 15 17 20 19V5Z" stroke="currentColor" stroke-width="1.2"
            stroke-linecap="round" />
        </svg>
      </div>

      <!-- Stars (Excellence) -->
      <div class="absolute top-[8%] right-[40%] animate-float-slow"
        style="animation-duration: 15s; animation-delay: 3s;">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" class="text-[#01b4d5]/60">
          <path d="M12 2L15 9H22L16 14L19 21L12 17L5 21L8 14L2 9H9L12 2Z" stroke="currentColor" stroke-width="1"
            stroke-linejoin="round" />
        </svg>
      </div>

      <!-- University Building -->
      <div class="absolute top-[60%] left-[15%] animate-float-slow"
        style="animation-duration: 30s; animation-delay: 5s;">
        <svg width="70" height="70" viewBox="0 0 24 24" fill="none" class="text-[#202a50]/30">
          <path d="M4 20H20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          <path d="M6 20V10L12 5L18 10V20" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
          <path d="M10 20V15H14V20" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" />
        </svg>
      </div>
    </div>

    <!-- Mesh Gradients -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        class="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#01b4d5]/5 rounded-full blur-[120px] animate-pulse-slow">
      </div>
      <div
        class="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-[#202a50]/5 rounded-full blur-[150px] animate-pulse-slow"
        style="animation-delay: 2s;"></div>
      <div class="absolute inset-0 opacity-[0.03]"
        style="background-image: radial-gradient(#202a50 0.5px, transparent 0.5px); background-size: 35px 35px;"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- MAIN SECTION: ASYMMETRIC LAYOUT with "Alloy" Docking Animation -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center perspective-[2000px]">

        <!-- TEXT CONTENT (Left Column) - THE ALLOY DOCKING LEFT -->
        <div class="lg:col-span-6 space-y-8 order-2 lg:order-1 alloy-element alloy-left">
          <!-- Section Indicator -->
          <div
            class="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-[#01b4d5]/10 border border-[#01b4d5]/20 backdrop-blur-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-[#01b4d5] animate-ping"></span>
            <span class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase">À propos de l'ESCEN</span>
          </div>

          <!-- Main Title -->
          <h2 class="text-3xl md:text-4xl lg:text-6xl text-[#202a50] leading-tight">
            L'excellence du <span class="relative inline-block">
              <span class="relative z-10 text-[#01b4d5]">digital</span>
              <span class="absolute bottom-2 left-0 w-full h-3 bg-[#01b4d5]/10 -rotate-1"></span>
            </span> en Afrique.
          </h2>

          <!-- Descriptive Text -->
          <div class="space-y-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
            <p>
              Depuis <span class="text-[#202a50] font-semibold">2020</span>, l'ESCEN s'est imposée comme le pionnier de
              l'excellence académique digitale en Afrique francophone sub-saharienne.
            </p>
            <p class="text-base text-gray-500 italic">
              "Nous ne suivons pas les tendances, nous formons les leaders qui les rendront possibles."
            </p>
          </div>

          <!-- Feature Cards (Mini) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div
              class="group p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-[#01b4d5]/5 hover:-translate-y-1">
              <div
                class="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#01b4d5] transition-colors duration-300">
                <svg class="w-6 h-6 text-[#01b4d5] group-hover:text-white transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-[#202a50] mb-2">Notre Vision</h4>
              <p class="text-xs text-gray-500">Anticiper les besoins du marché pour créer des opportunités réelles.</p>
            </div>
            <div
              class="group p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-[#01b4d5]/5 hover:-translate-y-1">
              <div
                class="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#01b4d5] transition-colors duration-300">
                <svg class="w-6 h-6 text-[#01b4d5] group-hover:text-white transition-colors" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
              </div>
              <h4 class="text-lg font-bold text-[#202a50] mb-2">Impact Local</h4>
              <p class="text-xs text-gray-500">Un réseau solide de partenaires pour l'avenir professionnel.</p>
            </div>
          </div>
        </div>

        <!-- IMAGE STACK (Right Column) - THE ALLOY DOCKING RIGHT -->
        <div class="lg:col-span-6 relative order-1 lg:order-2 px-4 lg:px-0 alloy-element alloy-right">
          <!-- Main Image with Border Radius and Shadow -->
          <div
            class="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#202a50]/20 transform rotate-2 hover:rotate-0 transition-transform duration-700">
            <img loading="lazy" decoding="async" src="/images/about.jpeg" alt="Campus ESCEN"
              class="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]" />
            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#202a50]/40 to-transparent"></div>
          </div>

          <!-- Badge compact "Depuis 2020" -->
          <div class="absolute -bottom-5 -left-4 lg:-left-10 z-20 animate-float">
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100 px-5 py-4 flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-[#01b4d5]/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342" />
                </svg>
              </div>
              <div>
                <div class="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-0.5">Fondée en</div>

                <div class="text-xl font-black text-[#01b4d5] leading-none">2020</div>
              </div>
            </div>
          </div>

          <!-- Pattern Background behind image -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[4px] border-dashed border-[#01b4d5]/40 rounded-[3.5rem] -z-10 animate-spin-slow">
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const initIntersectionObserver = () => {
  const targets = document.querySelectorAll('#a-propos, .alloy-element')
  
  // Activate immediately if in viewport to avoid flash
  targets.forEach(t => {
    const rect = t.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      t.classList.add('alloy-active')
    }
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('alloy-active')
      }
    })
  }, { threshold: 0.1 })

  targets.forEach(t => observer.observe(t))
}

onMounted(() => {
  initIntersectionObserver()
})
</script>

<style scoped>
/* Base state for elements before "alloying" */
.alloy-element {
  opacity: 0;
  will-change: transform, opacity;
  transition: all 1.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.alloy-left {
  transform: translateX(-100px) rotateY(30deg) scale(0.9);
}

.alloy-right {
  transform: translateX(100px) rotateY(-30deg) scale(0.9);
}

/* Active state for docking merger */
.alloy-active .alloy-element,
.alloy-active.alloy-element {
  opacity: 1;
  transform: translateX(0) rotateY(0) scale(1);
}

/* Background floating animations */
.animate-float-slow {
  animation: float-slow 15s ease-in-out infinite;
}

@keyframes float-slow {

  0%,
  100% {
    transform: translate(0, 0) rotate(0deg);
  }

  33% {
    transform: translate(40px, -40px) rotate(15deg);
  }

  66% {
    transform: translate(-30px, 20px) rotate(-10deg);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.4;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

.animate-float {
  animation: float 5s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-15px);
  }
}

.animate-spin-slow {
  animation: spin-slow 25s linear infinite;
}

@keyframes spin-slow {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

#a-propos {
  scroll-margin-top: 80px;
}

@media (max-width: 1024px) {

  .alloy-left,
  .alloy-right {
    transform: translateY(30px);
    rotate: none;
  }
}
</style>