<template>
  <div class="min-h-screen bg-[#f5f3ff] text-gray-900 flex overflow-x-hidden relative">
    
    <!-- Background Animé -->
    <div class="fixed inset-0 -z-10 light-bg"></div>

    <!-- Overlay Mobile -->
    <div v-if="isMobileMenuOpen" @click="isMobileMenuOpen = false" class="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden"></div>

    <!-- Sidebar -->
    <aside :class="[
      'fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] w-80 flex flex-col border-r border-gray-100',
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    ]">
      
      <!-- Zone Logo -->
      <div class="h-20 flex items-center justify-center px-6 border-b border-gray-50 relative">
        <WebsiteLogo context="header" />
        <button @click="isMobileMenuOpen = false" class="absolute right-4 lg:hidden p-2 text-gray-400 hover:bg-gray-100 rounded-lg">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      
      <!-- Profil Utilisateur -->
      <div class="px-6 py-6 border-b border-gray-50 bg-gray-50/30">
        <div class="flex items-center space-x-4">
          <div class="relative">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#01b4d5] to-[#009ab5] flex items-center justify-center text-white font-extrabold text-lg shadow-[0_4px_12px_rgba(1,180,213,0.3)]">
              {{ candidatInitials }}
            </div>
            <span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-[15px] font-bold text-[#1A2238] truncate" :title="candidatFullName">{{ candidatFullName }}</p>
            <p class="text-[11px] font-bold uppercase tracking-wider text-gray-500 truncate mt-0.5">Candidat</p>
          </div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div class="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 custom-scrollbar">
        
        <div class="flex items-center px-2 mb-4 mt-2">
          <div class="w-1 h-4 bg-[#01b4d5] rounded-full"></div>
          <h2 class="ml-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">Mon espace</h2>
        </div>

        <NuxtLink to="/candidat/dashboard" class="flex items-center px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group" exact-active-class="bg-gradient-to-r from-cyan-50 to-blue-50 text-[#01b4d5]" :class="[$route.path === '/candidat/dashboard' ? '' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1A2238]']" @click="isMobileMenuOpen = false">
          <div class="p-2 rounded-lg transition-colors" :class="[$route.path === '/candidat/dashboard' ? 'bg-cyan-100/50 shadow-sm text-[#01b4d5]' : 'bg-gray-100 group-hover:bg-gray-200']">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
            </svg>
          </div>
          <span class="ml-3 font-semibold text-sm flex-1 relative z-10" :class="{'font-bold text-[#01b4d5]': $route.path === '/candidat/dashboard'}">Tableau de bord</span>
          <div v-if="$route.path === '/candidat/dashboard'" class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full relative z-10 shadow-[0_0_8px_#01b4d5]"></div>
        </NuxtLink>

        <NuxtLink to="/candidat/profil" class="flex items-center px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group" exact-active-class="bg-gradient-to-r from-cyan-50 to-blue-50 text-[#01b4d5]" :class="[$route.path === '/candidat/profil' ? '' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1A2238]']" @click="isMobileMenuOpen = false">
          <div class="p-2 rounded-lg transition-colors" :class="[$route.path === '/candidat/profil' ? 'bg-cyan-100/50 shadow-sm text-[#01b4d5]' : 'bg-gray-100 group-hover:bg-gray-200']">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
            </svg>
          </div>
          <span class="ml-3 font-semibold text-sm flex-1 relative z-10" :class="{'font-bold text-[#01b4d5]': $route.path === '/candidat/profil'}">Infos personnelles</span>
          <div v-if="$route.path === '/candidat/profil'" class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full relative z-10 shadow-[0_0_8px_#01b4d5]"></div>
        </NuxtLink>

        <NuxtLink to="/candidat/documents" class="flex items-center px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group" exact-active-class="bg-gradient-to-r from-cyan-50 to-blue-50 text-[#01b4d5]" :class="[$route.path === '/candidat/documents' ? '' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1A2238]']" @click="isMobileMenuOpen = false">
          <div class="p-2 rounded-lg transition-colors" :class="[$route.path === '/candidat/documents' ? 'bg-cyan-100/50 shadow-sm text-[#01b4d5]' : 'bg-gray-100 group-hover:bg-gray-200']">
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
               <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/>
             </svg>
          </div>
          <span class="ml-3 font-semibold text-sm flex-1 relative z-10" :class="{'font-bold text-[#01b4d5]': $route.path === '/candidat/documents'}">Mes documents</span>
          <div v-if="$route.path === '/candidat/documents'" class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full relative z-10 shadow-[0_0_8px_#01b4d5]"></div>
        </NuxtLink>

        <NuxtLink to="/candidat/notifications" class="flex items-center px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden group" exact-active-class="bg-gradient-to-r from-cyan-50 to-blue-50 text-[#01b4d5]" :class="[$route.path === '/candidat/notifications' ? '' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1A2238]']" @click="isMobileMenuOpen = false">
          <div class="relative p-2 rounded-lg transition-colors" :class="[$route.path === '/candidat/notifications' ? 'bg-cyan-100/50 shadow-sm text-[#01b4d5]' : 'bg-gray-100 group-hover:bg-gray-200']">
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
             </svg>
             <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </div>
          <span class="ml-3 font-semibold text-sm flex-1 relative z-10" :class="{'font-bold text-[#01b4d5]': $route.path === '/candidat/notifications'}">Notifications</span>
          <div v-if="$route.path === '/candidat/notifications'" class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full relative z-10 shadow-[0_0_8px_#01b4d5]"></div>
        </NuxtLink>
      </div>

      <!-- Deconnexion Sidebar -->
      <div class="p-4 border-t border-gray-100">
        <button @click="logout" class="w-full flex items-center gap-3 px-4 py-3 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
          Se déconnecter
        </button>
      </div>
    </aside>

    <!-- Main Wrapper -->
    <div class="flex-1 lg:ml-80 flex flex-col min-h-screen">
      
      <!-- Topbar Header -->
      <header class="h-20 bg-white/80 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 fixed top-0 right-0 left-0 lg:left-80 z-20 shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all duration-300">
        
        <div class="flex items-center gap-4">
          <!-- Mobile Menu Toggle -->
          <button @click="isMobileMenuOpen = true" class="lg:hidden p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 active:scale-95 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <h1 class="text-lg lg:text-xl font-extrabold text-[#1A2238] hidden sm:block">Dossier Candidat</h1>
        </div>

        <div class="flex items-center gap-3 lg:gap-5">
          <!-- Notifications Dropdown -->
          <div class="relative dropdown-container">
            <button @click="isNotificationDropdownOpen = !isNotificationDropdownOpen" class="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 hover:text-[#01b4d5] transition-all shadow-sm relative group cursor-pointer">
              <svg class="w-5 h-5 group-hover:animate-swing" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
              <span v-if="unreadNotifications.length > 0" class="absolute -top-1 -right-1 min-w-[1.25rem] h-5 bg-red-500 border-2 border-white rounded-full text-[10px] font-bold text-white flex items-center justify-center px-1 shadow-sm">{{ unreadNotifications.length > 9 ? '9+' : unreadNotifications.length }}</span>
            </button>
            
            <!-- Dropdown Menu Notifications -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0 translate-y-2"
              enter-to-class="transform scale-100 opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform scale-100 opacity-100 translate-y-0"
              leave-to-class="transform scale-95 opacity-0 translate-y-2"
            >
              <div v-if="isNotificationDropdownOpen" class="absolute right-0 mt-4 w-80 bg-white/90 backdrop-blur-xl rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/50 p-2 z-50 overflow-hidden" @click.stop>
                
                <div class="px-4 py-3 mb-2 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100/50 flex justify-between items-center">
                  <p class="text-sm font-extrabold text-[#1A2238]">Notifications</p>
                  <span v-if="unreadNotifications.length > 0" class="bg-cyan-100 text-cyan-800 text-[10px] font-bold px-2 py-0.5 rounded-full">{{ unreadNotifications.length }} nouvelle(s)</span>
                </div>
                
                <div v-if="unreadNotifications.length === 0" class="p-4 text-center">
                  <div class="w-12 h-12 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-2">
                     <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                  </div>
                  <p class="text-sm text-gray-500 font-medium">Aucune nouvelle notification</p>
                </div>
                
                <div v-else class="max-h-80 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                  <div v-for="notif in unreadNotifications.slice(0, 3)" :key="notif.id" class="p-3 bg-cyan-50/50 hover:bg-cyan-50 rounded-xl transition-colors border-l-2 border-[#01b4d5] cursor-pointer" @click="$router.push('/candidat/notifications'); isNotificationDropdownOpen = false">
                    <p class="text-xs font-bold text-gray-900 line-clamp-1">{{ notif.titre || notif.title || 'Notification' }}</p>
                    <p class="text-[11px] text-gray-600 line-clamp-2 mt-0.5">{{ notif.contenu || notif.message }}</p>
                    <p class="text-[10px] text-gray-400 mt-1">{{ formatRelativeTime(notif.created_at) }}</p>
                  </div>
                </div>
                
                <NuxtLink to="/candidat/notifications" class="block w-full text-center mt-2 p-2 text-xs font-bold text-[#01b4d5] hover:bg-cyan-50 rounded-xl transition-colors" @click="isNotificationDropdownOpen = false">
                  Voir toutes les notifications
                </NuxtLink>
              </div>
            </transition>
          </div>
          
          <!-- Divider -->
          <div class="h-8 w-px bg-gray-200 hidden sm:block"></div>
          
          <!-- Profil Dropdown -->
          <div class="relative dropdown-container">
            <div @click="isProfileDropdownOpen = !isProfileDropdownOpen" class="flex items-center gap-2 lg:gap-3 cursor-pointer group select-none">
               <div class="hidden sm:block text-right">
                 <p class="text-sm font-bold text-[#1A2238] leading-none group-hover:text-[#01b4d5] transition-colors">{{ candidatShortName }}</p>
               </div>
               <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#01b4d5] to-[#009ab5] flex items-center justify-center text-white font-bold shadow-sm group-hover:shadow-md transition-all">
                {{ candidatInitials }}
               </div>
               <svg :class="{'rotate-180 text-[#01b4d5]': isProfileDropdownOpen, 'text-gray-400': !isProfileDropdownOpen}" class="w-4 h-4 transition-transform duration-200 group-hover:text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </div>
            
            <!-- Dropdown Menu Premium -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0 translate-y-2"
              enter-to-class="transform scale-100 opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="transform scale-100 opacity-100 translate-y-0"
              leave-to-class="transform scale-95 opacity-0 translate-y-2"
            >
              <div v-if="isProfileDropdownOpen" class="absolute right-0 mt-4 w-64 bg-white/90 backdrop-blur-xl rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-white/50 p-2 z-50">
                
                <!-- En-tête du Dropdown -->
                <div class="px-4 py-3 mb-2 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100/50">
                  <p class="text-xs font-bold text-[#01b4d5] uppercase tracking-widest mb-1">Connecté en tant que</p>
                  <p class="text-sm font-extrabold text-[#1A2238] truncate" :title="candidatFullName">{{ candidatFullName }}</p>
                  <p class="text-xs font-medium text-gray-500 truncate">Candidat</p>
                </div>
                
                <!-- Action Déconnexion -->
                <button @click="logout" class="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-600 hover:text-red-700 bg-red-50/50 hover:bg-red-50 font-bold rounded-xl transition-all group">
                  <div class="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                  </div>
                  Se déconnecter
                </button>
                
              </div>
            </transition>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 p-4 lg:p-8 mt-20 relative z-10">
        <slot />
      </main>

      <!-- Footer -->
      <!-- Footer -->
      <footer class="py-6 px-8 border-t border-gray-200/60 bg-white/50 backdrop-blur-sm mt-auto text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-500 font-medium">© {{ new Date().getFullYear() }} ESCEN. Tous droits réservés.</p>
        <p class="text-xs text-gray-400">
          Développé par <a href="https://neostart.tech/" target="_blank" rel="noopener noreferrer" class="font-bold text-[#01b4d5] hover:underline">Neo Start Technology</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useNuxtApp } from '#app'

const isMobileMenuOpen = ref(false)
const isProfileDropdownOpen = ref(false)
const isNotificationDropdownOpen = ref(false)
const router = useRouter()
const { $axios } = useNuxtApp()

const candidat = ref(null)

const candidatInitials = computed(() => {
  if (!candidat.value) return 'CA'
  const p = candidat.value.prenom ? String(candidat.value.prenom).charAt(0) : ''
  const n = candidat.value.nom ? String(candidat.value.nom).charAt(0) : ''
  return (p + n).toUpperCase() || 'CA'
})

const candidatFullName = computed(() => {
  if (!candidat.value) return 'Candidat'
  return `${candidat.value.prenom || ''} ${candidat.value.nom || ''}`.trim() || 'Candidat'
})

const candidatShortName = computed(() => {
  if (!candidat.value) return 'Candidat'
  const p = candidat.value.prenom || ''
  const n = candidat.value.nom ? String(candidat.value.nom).charAt(0) + '.' : ''
  return `${p} ${n}`.trim() || 'Candidat'
})

const notifications = ref([])

const fetchNotifications = async () => {
  try {
    const res = await $axios.get('/mon-dossier/notifications') 
    notifications.value = res.data.notifications || res.data || []
  } catch (error) {
    console.error('Erreur notifications:', error)
  }
}

const unreadNotifications = computed(() => {
  return notifications.value.filter(n => !n.lu)
})

const formatRelativeTime = (isoString) => {
  if (!isoString) return ''
  const date = new Date(isoString)
  const now = new Date()
  const diffInSeconds = Math.floor((now - date) / 1000)
  
  if (diffInSeconds < 60) return "À l'instant"
  if (diffInSeconds < 3600) return `Il y a ${Math.floor(diffInSeconds / 60)} min`
  if (diffInSeconds < 86400) return `Il y a ${Math.floor(diffInSeconds / 3600)} h`
  if (diffInSeconds < 2592000) return `Il y a ${Math.floor(diffInSeconds / 86400)} j`
  
  return new Intl.DateTimeFormat('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' }).format(date)
}

const logout = async () => {
  isProfileDropdownOpen.value = false
  isMobileMenuOpen.value = false
  isNotificationDropdownOpen.value = false
  
  try {
    // Appel à l'API pour invalider le token Sanctum côté serveur
    await $axios.post('/me-deconnecter')
  } catch (error) {
    console.log('Erreur déconnexion serveur:', error)
  }
  
  // Nettoyage des informations localement
  if (typeof window !== 'undefined') {
    localStorage.removeItem('candidat_token')
    localStorage.removeItem('candidat_info')
  }
  
  // Redirection vers la page de connexion
  router.push('/candidat/login')
}

// Fermer le dropdown en cliquant à l'extérieur
const closeDropdowns = (e) => {
  if (!e.target.closest('.dropdown-container')) {
    isProfileDropdownOpen.value = false
    isNotificationDropdownOpen.value = false
  }
}

onMounted(async () => {
  if (typeof window !== 'undefined') {
    const info = localStorage.getItem('candidat_info')
    if (info) {
      try {
        candidat.value = JSON.parse(info)
      } catch (e) {}
    }
  }

  fetchNotifications()
  if (typeof window !== 'undefined') {
    document.addEventListener('click', closeDropdowns)
  }

  // Resynchronise avec le candidat réellement connecté : le localStorage n'est
  // qu'un instantané pris au login, il peut être périmé (profil modifié depuis)
  // ou provenir d'une session précédente restée dans le navigateur.
  try {
    const res = await $axios.get('/mon-dossier')
    const data = res.data?.candidature || res.data
    if (data) {
      candidat.value = data
      if (typeof window !== 'undefined') {
        localStorage.setItem('candidat_info', JSON.stringify(data))
      }
    }
  } catch (error) {
    console.error('Erreur récupération profil candidat:', error)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', closeDropdowns)
  }
})
</script>

<style scoped>
/* Background Animation */
.light-bg {
  background: #f5f3ff;
  background-image:
    radial-gradient(4px 100px at 0px 235px, rgba(39,34,87,0.03), transparent),
    radial-gradient(4px 100px at 300px 235px, rgba(39,34,87,0.03), transparent),
    radial-gradient(1.5px 1.5px at 150px 105px, rgba(39,34,87,0.05) 100%, transparent 150%);
  background-size: 300px 235px, 300px 235px, 300px 210px;
  animation: hi-light 150s linear infinite;
}

@keyframes hi-light {
  0% { background-position: 0px 220px, 3px 220px, 426.5px 180px; }
  to { background-position: 0px 6800px, 3px 6800px, 426.5px 6480px; }
}

.custom-scrollbar::-webkit-scrollbar { width: 4px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }


</style>
