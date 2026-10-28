<template>
    <div class="min-h-screen flex flex-col">
        <Header />
        <main class="flex-grow">
            <slot />
        </main>
        <Footer />

        <CookieBanner />

        <!-- Bouton retour en haut -->
        <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4 scale-90"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 translate-y-4 scale-90">
            <button
                v-if="showScrollTop"
                @click="scrollToTop"
                aria-label="Retour en haut"
                class="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-2xl bg-[#01b4d5] hover:bg-[#019fbf] shadow-lg shadow-[#01b4d5]/40 hover:shadow-xl hover:shadow-[#01b4d5]/50 flex items-center justify-center group hover:-translate-y-1 active:scale-95 transition-all duration-300">
                <svg class="w-5 h-5 text-white animate-bounce-up" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                </svg>
            </button>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const showScrollTop = ref(false)

const handleScroll = () => {
    showScrollTop.value = window.scrollY > 300
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
@keyframes bounce-up {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
}
.animate-bounce-up {
    animation: bounce-up 1s ease-in-out infinite;
}
</style>