<template>
  <transition
    leave-active-class="transition-all duration-700 ease-in-out"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-105"
  >
    <div v-if="isLoading" class="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md flex items-center justify-center overflow-hidden">
      <!-- Cercles décoratifs en arrière-plan (glassmorphism feeling) -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#01b4d5]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-300/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div class="relative flex flex-col items-center justify-center z-10">
        <!-- Logo -->
        <div class="relative mb-8">
          <WebsiteLogo context="header" />
          <!-- Lueur derrière le logo -->
          <div class="absolute inset-0 bg-[#01b4d5]/10 blur-2xl rounded-full scale-[2] animate-pulse"></div>
        </div>
        
        <!-- Barre de progression premium -->
        <div class="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden relative shadow-inner">
          <div class="absolute inset-y-0 left-0 bg-gradient-to-r from-[#01b4d5] via-blue-500 to-[#01b4d5] rounded-full w-full animate-loading-bar bg-[length:200%_auto]"></div>
        </div>
        
        <p class="mt-6 text-xs font-semibold text-gray-500 uppercase tracking-[0.3em] animate-pulse">
          Chargement
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoading = ref(true)

onMounted(() => {
  const finishLoading = () => {
    // Un petit délai pour que l'utilisateur ait le temps d'apprécier l'animation
    setTimeout(() => {
      isLoading.value = false
    }, 800)
  }

  // Vérifier si la page a déjà fini de charger ses ressources (images, styles, etc.)
  if (document.readyState === 'complete') {
    finishLoading()
  } else {
    // Sinon, on attend l'événement complet du navigateur
    window.addEventListener('load', finishLoading)
    
    // Fallback de sécurité (le loader disparaît toujours après 4 secondes quoi qu'il arrive)
    setTimeout(() => {
      isLoading.value = false
    }, 4000)
  }
})
</script>

<style scoped>
@keyframes loading-bar {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(0); }
  100% { transform: translateX(100%); }
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-loading-bar {
  animation: loading-bar 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
