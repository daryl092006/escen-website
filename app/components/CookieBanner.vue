<template>
  <transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-400 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <div v-if="isVisible" class="fixed inset-x-0 bottom-0 z-[100] flex items-end justify-center pointer-events-none transition-all duration-500">
      <div class="pointer-events-auto bg-white w-full shadow-[0_-10px_40px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col lg:flex-row items-center border-t border-gray-100 transform transition-all rounded-t-3xl md:rounded-t-[2rem]">
        
        <!-- Info Section with Icon & Gradient -->
        <div class="bg-gradient-to-r from-[#f0f9ff] to-white p-6 md:p-8 flex-1 flex flex-col sm:flex-row items-start sm:items-center gap-5 relative overflow-hidden w-full">
            <!-- Decorative circle -->
            <div class="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-[#01b4d5]/10 to-transparent rounded-full blur-2xl"></div>
            
            <div class="shrink-0 w-14 h-14 bg-white rounded-2xl shadow-sm border border-[#01b4d5]/20 flex items-center justify-center relative z-10 transform hover:scale-105 transition-transform duration-300">
                <svg class="w-7 h-7 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
            </div>
            
            <div class="relative z-10">
                <h3 class="text-xl font-black text-gray-900 mb-1.5 tracking-tight">
                    Votre vie privée compte
                </h3>
                <p class="text-sm text-gray-600 leading-relaxed max-w-3xl">
                    Afin d'améliorer votre expérience sur notre site, d'analyser notre trafic et de vous proposer des formations pertinentes, nous utilisons des cookies.
                    <NuxtLink to="/politique-cookies" class="text-[#01b4d5] font-semibold hover:underline whitespace-nowrap ml-1">En savoir plus</NuxtLink>
                </p>
            </div>
        </div>

        <!-- Action Buttons -->
        <div class="px-6 pb-6 lg:p-8 bg-white flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 border-t lg:border-t-0 lg:border-l border-gray-100">
            <button @click="declineCookies" class="w-full sm:w-auto px-6 py-3.5 bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded-xl font-semibold text-sm transition-colors duration-200 border border-gray-200">
                Continuer sans accepter
            </button>
            <button @click="acceptCookies" class="relative group overflow-hidden bg-gradient-to-r from-[#01b4d5] to-[#0056b3] text-white w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-[0_4px_15px_rgba(1,180,213,0.3)] hover:shadow-[0_6px_20px_rgba(1,180,213,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2">
                <span class="relative z-10">Accepter tout</span>
                <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('escen_cookie_consent')
  if (!consent) {
    setTimeout(() => {
      isVisible.value = true
    }, 1500)
  }

  // Écoute de l'événement pour rouvrir la bannière manuellement
  window.addEventListener('open-cookie-banner', () => {
    isVisible.value = true
  })
})

const acceptCookies = () => {
  localStorage.setItem('escen_cookie_consent', 'accepted')
  isVisible.value = false
  window.dispatchEvent(new Event('cookies-accepted'))
}

const declineCookies = () => {
  const wasAccepted = localStorage.getItem('escen_cookie_consent') === 'accepted'
  localStorage.setItem('escen_cookie_consent', 'declined')
  isVisible.value = false

  if (wasAccepted) {
    window.location.reload()
  }
}
</script>
