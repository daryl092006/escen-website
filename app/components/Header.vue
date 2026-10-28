<template>
  <div>
    <!-- Header avec design ultra-moderne et effet de profondeur -->
    <header class="website-header fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[
      scrolled
        ? 'bg-white shadow-lg'
        : 'bg-white shadow-none'
    ]">
      <!-- Barre supérieure — cachée sur mobile, visible sur md+ -->
      <div :aria-hidden="scrolled" :inert="scrolled" class="website-header-contact hidden md:block transition-all duration-300 overflow-hidden origin-top" :class="scrolled ? 'h-0 opacity-0' : 'h-11 opacity-100'">
        <!-- Fond -->
        <div class="relative bg-gradient-to-r from-[#0a1a3f] via-[#1e2f5e] to-[#2a3a6e]">
          <!-- Lueur subtile -->
          <div class="absolute inset-0 overflow-hidden pointer-events-none">
            <div class="absolute -top-4 left-1/4 w-64 h-16 bg-[#01b4d5]/15 rounded-full blur-2xl animate-pulse-slow"></div>
            <div class="particle particle-1"></div>
            <div class="particle particle-2"></div>
            <div class="particle particle-3"></div>
          </div>

          <!-- Contenu en une seule ligne -->
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex items-center justify-between h-11">
              <!-- Gauche : Contact info -->
              <div class="flex items-center gap-5">
                <!-- Email -->
                <a href="mailto:hello@escen.university"
                  class="group flex items-center gap-2 text-white hover:text-white transition-all duration-300">
                  <svg class="w-4 h-4 text-[#01b4d5] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span class="text-sm font-medium text-white">hello@escen.university</span>
                </a>

                <!-- Séparateur -->
                <div class="w-px h-4 bg-white/15"></div>

                <!-- Téléphone -->
                <a href="tel:+22898012727"
                  class="group flex items-center gap-2 text-white hover:text-white transition-all duration-300">
                  <svg class="w-4 h-4 text-[#01b4d5] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                  </svg>
                  <span class="text-sm font-medium text-white">+228 98 01 27 27</span>
                </a>

                <!-- Séparateur -->
                <div class="hidden lg:block w-px h-4 bg-white/15"></div>

                <!-- Horaires -->
                <div class="hidden lg:flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                  </svg>
                  <span class="text-sm font-medium text-white">Lun – Ven : 7h30 à 17h30</span>
                </div>
              </div>

              <!-- Droite : Espace étudiant + Réseaux sociaux -->
              <div class="flex items-center gap-3">
                <!-- Espace étudiant -->
                <a href="/connexion"
                  class="group flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 hover:border-white/35 transition-all duration-300 text-sm font-medium text-white">
                  <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  Espace étudiant
                  <svg class="w-3.5 h-3.5 text-white/50 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>


              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation principale -->
      <nav class="website-header-nav max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="website-header-row flex items-center justify-between w-full relative">
          <!-- Logo -->
          <NuxtLink to="/" class="website-header-brand group relative py-2 z-10">
            <div class="relative transition-all duration-500 group-hover:scale-105">
              <WebsiteLogo context="header" />
            </div>
          </NuxtLink>

          <!-- Navigation Desktop avec indicateurs actifs élégants -->
          <div class="website-header-links hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max gap-3 lg:gap-5 xl:gap-8 z-10">
            <!-- Accueil avec indicateur élégant -->
            <NuxtLink to="/" class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 group"
              :class="$route.path === '/' ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'">
              <span class="relative z-10">
                Accueil
                <!-- Cercle décoratif pour l'état actif -->
                <span v-if="$route.path === '/'" class="absolute -top-1 -right-3 w-2 h-2">
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
                </span>
              </span>
              <!-- Fine ligne en bas -->
              <span
                class="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#01b4d5] to-[#0095b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === '/' }"></span>
            </NuxtLink>

            <!-- Formations avec dropdown -->
            <div class="relative group" @mouseenter="openFormationsDropdown"
              @mouseleave="closeFormationsDropdown" @focusin="openFormationsDropdown" @focusout="closeFormationsDropdown">
              <NuxtLink to="/formations"
                class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 flex items-center gap-1 group"
                :class="$route.path.startsWith('/formations') ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'">
                <span class="relative z-10">
                  Formations
                  <!-- Indicateur élégant -->
                  <span v-if="$route.path.startsWith('/formations')" class="absolute -top-1 -right-3 w-2 h-2">
                    <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                    <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
                  </span>
                </span>
                <svg class="w-4 h-4 transition-transform duration-500"
                  :class="showFormationsDropdown ? 'rotate-180' : ''" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </NuxtLink>

              <!-- Dropdown Formations -->
              <transition enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 -translate-y-6 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 translate-y-0 scale-100"
                leave-to-class="opacity-0 -translate-y-6 scale-95">
                <div v-if="showFormationsDropdown" class="absolute top-full left-0 mt-2 w-96" style="z-index: 1000;">
                  <div class="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    <!-- Vagues SVG animées -->
                    <div class="absolute inset-0 overflow-hidden">
                      <svg class="absolute -bottom-10 left-0 w-full h-40 text-[#01b4d5] animate-wave-slow"
                        viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fill-opacity="0.08"
                          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                      </svg>
                      <svg class="absolute -bottom-5 left-0 w-full h-32 text-[#01b4d5] animate-wave"
                        viewBox="0 0 1440 320" preserveAspectRatio="none" style="animation-delay: -3s;">
                        <path fill="currentColor" fill-opacity="0.05"
                          d="M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,138.7C672,128,768,96,864,112C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                      </svg>
                    </div>

                    <!-- Contenu du dropdown -->
                    <div class="relative z-10 p-6">
                      <!-- Grille des formations -->
                      <div class="space-y-2">
                        <!-- Licence Professionnelle -->
                        <NuxtLink to="/formations/licence-professionnelle"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/licence-professionnelle' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'">
                          <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 3L1 9l11 6 11-6-11-6zM1 18l11 6 11-6M1 14l11 6 11-6" />
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span
                              class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Licence
                              Professionnelle</span>
                            <span class="text-xs text-gray-400">BAC+3 · Formation professionnalisante</span>
                          </div>
                          <!-- Indicateur de page active - flèche au lieu d'un point -->
                          <svg v-if="$route.path === '/formations/licence-professionnelle'"
                            class="w-5 h-5 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <svg v-else
                            class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </NuxtLink>

                        <!-- Master Professionnel -->
                        <NuxtLink to="/formations/master-professionnel"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/master-professionnel' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'">
                          <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span
                              class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Master
                              Professionnel</span>
                            <span class="text-xs text-gray-400">BAC+5 · Expertise et spécialisation</span>
                          </div>
                          <svg v-if="$route.path === '/formations/master-professionnel'" class="w-5 h-5 text-[#01b4d5]"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <svg v-else
                            class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </NuxtLink>

                        <!-- Executive Education -->
                        <NuxtLink to="/formations/executive-education"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/executive-education' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'">
                          <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span
                              class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Executive
                              Education</span>
                            <span class="text-xs text-gray-400">Formation continue pour cadres</span>
                          </div>
                          <svg v-if="$route.path === '/formations/executive-education'" class="w-5 h-5 text-[#01b4d5]"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <svg v-else
                            class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </NuxtLink>

                        <!-- Certificats -->
                        <!-- <NuxtLink to="/formations/certificats"
                          class="flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-[#01b4d5]/20 hover:shadow-lg relative"
                          :class="$route.path === '/formations/certificats' ? 'bg-gradient-to-r from-[#01b4d5]/5 to-transparent border-[#01b4d5]/20' : 'hover:bg-gradient-to-r hover:from-[#01b4d5]/5 hover:to-transparent'">
                          <div
                            class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 flex items-center justify-center group-hover/item:scale-110 transition-transform group-hover/item:shadow-md">
                            <svg class="w-6 h-6 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                              <path
                                d="M12 2L1 7v9c0 5 11 8 11 8s11-3 11-8V7l-11-5zm0 4.2L18.5 9 12 11.8 5.5 9 12 6.2zM4 14.3V9.7l6 2.7v4.6l-6-2.7zm12 2.7v-4.6l6-2.7v4.6l-6 2.7z" />
                            </svg>
                          </div>
                          <div class="flex-1">
                            <span
                              class="font-semibold text-gray-800 group-hover/item:text-[#01b4d5] transition-colors block">Certificats</span>
                            <span class="text-xs text-gray-400">Certifications professionnelles</span>
                          </div>
                          <svg v-if="$route.path === '/formations/certificats'" class="w-5 h-5 text-[#01b4d5]"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <svg v-else
                            class="w-5 h-5 text-gray-300 group-hover/item:text-[#01b4d5] group-hover/item:translate-x-1 transition-all"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </NuxtLink> -->
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>

            <!-- Blogs -->
            <NuxtLink to="/blogs" class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 group"
              :class="$route.path === '/blogs' || $route.path.startsWith('/blogs/') ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'">
              <span class="relative z-10">
                Blogs
                <span v-if="$route.path === '/blogs' || $route.path.startsWith('/blogs/')"
                  class="absolute -top-1 -right-3 w-2 h-2">
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
                </span>
              </span>
              <span
                class="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#01b4d5] to-[#0095b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === '/blogs' || $route.path.startsWith('/blogs/') }"></span>
            </NuxtLink>

            <!-- Galerie -->
            <NuxtLink to="/galerie" class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 group"
              :class="$route.path === '/galerie' || $route.path.startsWith('/galerie/') ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'">
              <span class="relative z-10">
                Galerie
                <span v-if="$route.path === '/galerie' || $route.path.startsWith('/galerie/')"
                  class="absolute -top-1 -right-3 w-2 h-2">
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
                </span>
              </span>
              <span
                class="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#01b4d5] to-[#0095b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === '/galerie' || $route.path.startsWith('/galerie/') }"></span>
            </NuxtLink>

            <!-- Nous contacter -->
            <NuxtLink to="/contact"
              class="relative px-4 py-2.5 font-medium rounded-xl transition-all duration-300 group"
              :class="$route.path === '/contact' ? 'text-[#01b4d5]' : 'text-[#202a50] hover:text-[#01b4d5]'">
              <span class="relative z-10">
                Nous contacter
                <span v-if="$route.path === '/contact'" class="absolute -top-1 -right-3 w-2 h-2">
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5] animate-ping opacity-75"></span>
                  <span class="absolute inset-0 rounded-full bg-[#01b4d5]"></span>
                </span>
              </span>
              <span
                class="absolute -bottom-1 left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#01b4d5] to-[#0095b0] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                :class="{ 'scale-x-100': $route.path === '/contact' }"></span>
            </NuxtLink>

          </div>

          <!-- Section Droite (CTA + Mobile Toggle) -->
          <div class="flex items-center gap-4 relative z-10">
            <!-- Bouton CTA -->
            <NuxtLink to="/preparation-inscription"
              class="website-header-cta hidden lg:flex group relative px-6 py-2.5 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <span class="absolute inset-0 bg-gradient-to-r from-[#01b4d5] to-[#0095b0]"></span>
              <span
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <span class="relative z-10 flex items-center gap-2 text-white font-semibold">
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Inscription</span>
              </span>
            </NuxtLink>

            <!-- Bouton Menu Mobile -->
            <button aria-label="Ouvrir le menu" :aria-expanded="isMobileMenuOpen" @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="website-header-toggle lg:hidden flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#01b4d5]/10 to-[#0095b0]/10 hover:from-[#01b4d5]/20 hover:to-[#0095b0]/20 transition-all duration-300 group focus:outline-none">
              <div class="w-5 h-[16px] flex flex-col justify-between items-center relative">
                <span class="block w-5 h-[2px] bg-[#202a50] rounded-full transition-all duration-300 origin-center"
                  :class="isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''"></span>
                <span class="block w-5 h-[2px] bg-[#202a50] rounded-full transition-all duration-300 origin-center"
                  :class="isMobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'"></span>
                <span class="block w-5 h-[2px] bg-[#202a50] rounded-full transition-all duration-300 origin-center"
                  :class="isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <!-- Espace réservé pour le header (top bar + nav) afin d'éviter que le hero ne coupe le logo -->
    <div class="website-header-spacer" aria-hidden="true"></div>

    <!-- Menu Mobile -->
    <transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full">
      <div v-if="isMobileMenuOpen"
           class="lg:hidden fixed top-0 right-0 h-full w-[85vw] max-w-xs bg-white shadow-2xl flex flex-col"
           style="z-index: 9999;">

        <!-- ===== EN-TÊTE ===== -->
        <div class="relative bg-gradient-to-br from-[#0a1a3f] via-[#1e2f5e] to-[#0a1a3f] px-6 py-5 flex-shrink-0 overflow-hidden">
          <!-- Déco lumineuse -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-[#01b4d5]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute bottom-0 left-0 w-24 h-24 bg-[#01b4d5]/10 rounded-full blur-2xl pointer-events-none"></div>

          <div class="relative z-10 flex items-center justify-between">
            <NuxtLink to="/" @click="isMobileMenuOpen = false">
              <WebsiteLogo light context="header" />
            </NuxtLink>
            <button @click="isMobileMenuOpen = false"
                    class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all duration-200 group">
              <svg class="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- ===== NAVIGATION ===== -->
        <div class="flex-1 overflow-y-auto px-4 py-5 space-y-1">

          <!-- Label section -->
          <p class="text-[10px] font-bold tracking-widest text-gray-400 uppercase px-3 mb-3">Navigation</p>

          <template v-for="link in mobileLinks" :key="link.path">
            <!-- Formations : accordion -->
            <template v-if="link.path === '/formations'">
              <button
                @click="showMobileFormations = !showMobileFormations"
                class="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 group"
                :class="isActive('/formations')
                  ? 'bg-[#01b4d5]/8 text-[#01b4d5]'
                  : 'text-[#202a50] hover:bg-gray-50 hover:text-[#01b4d5]'">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                       :class="isActive('/formations') ? 'bg-[#01b4d5]/15' : 'bg-gray-100 group-hover:bg-[#01b4d5]/10'">
                    <svg class="w-4 h-4 transition-colors duration-200"
                         :class="isActive('/formations') ? 'text-[#01b4d5]' : 'text-gray-500 group-hover:text-[#01b4d5]'"
                         fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="link.icon"/>
                    </svg>
                  </div>
                  <span>{{ link.label }}</span>
                </div>
                <svg class="w-4 h-4 transition-transform duration-300"
                     :class="showMobileFormations ? 'rotate-180 text-[#01b4d5]' : 'text-gray-300'"
                     fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </button>

              <!-- Sous-liens formations -->
              <transition
                enter-active-class="transition-all duration-300 ease-out overflow-hidden"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-96"
                leave-active-class="transition-all duration-200 ease-in overflow-hidden"
                leave-from-class="opacity-100 max-h-96"
                leave-to-class="opacity-0 max-h-0">
                <div v-if="showMobileFormations" class="ml-4 mt-1 space-y-1 border-l-2 border-[#01b4d5]/20 pl-3">
                  <NuxtLink
                    v-for="sub in mobileFormationLinks" :key="sub.path"
                    :to="sub.path"
                    @click="isMobileMenuOpen = false; showMobileFormations = false"
                    class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                    :class="$route.path === sub.path
                      ? 'text-[#01b4d5] bg-[#01b4d5]/8'
                      : 'text-gray-500 hover:text-[#01b4d5] hover:bg-gray-50'">
                    <div class="w-1.5 h-1.5 rounded-full flex-shrink-0"
                         :class="$route.path === sub.path ? 'bg-[#01b4d5]' : 'bg-gray-300'"></div>
                    <span>{{ sub.label }}</span>
                  </NuxtLink>
                </div>
              </transition>
            </template>

            <!-- Autres liens -->
            <NuxtLink v-else
                      :to="link.path"
                      @click="isMobileMenuOpen = false"
                      class="flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 group"
                      :class="isActive(link.path)
                        ? 'bg-[#01b4d5]/8 text-[#01b4d5]'
                        : 'text-[#202a50] hover:bg-gray-50 hover:text-[#01b4d5]'">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                     :class="isActive(link.path) ? 'bg-[#01b4d5]/15' : 'bg-gray-100 group-hover:bg-[#01b4d5]/10'">
                  <svg class="w-4 h-4 transition-colors duration-200"
                       :class="isActive(link.path) ? 'text-[#01b4d5]' : 'text-gray-500 group-hover:text-[#01b4d5]'"
                       fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.8">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="link.icon"/>
                  </svg>
                </div>
                <span>{{ link.label }}</span>
              </div>
              <div v-if="isActive(link.path)" class="w-1.5 h-1.5 rounded-full bg-[#01b4d5]"></div>
              <svg v-else class="w-4 h-4 text-gray-300 group-hover:text-[#01b4d5] group-hover:translate-x-0.5 transition-all duration-200"
                   fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
              </svg>
            </NuxtLink>
          </template>

          <!-- Bouton Inscription -->
          <div class="pt-3">
            <NuxtLink to="/preparation-inscription" @click="isMobileMenuOpen = false"
                      class="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#01b4d5] hover:bg-[#019fbf] text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#01b4d5]/25">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Candidater
            </NuxtLink>
          </div>
        </div>

        <!-- ===== CONTACT ===== -->
        <div class="flex-shrink-0 border-t border-gray-100 px-4 py-5 space-y-3 bg-gray-50">
          <p class="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">Contact</p>

          <a href="tel:+22898012727"
             class="flex items-center gap-3 text-gray-600 hover:text-[#01b4d5] transition-colors duration-200 group">
            <div class="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#01b4d5]/30 group-hover:bg-[#01b4d5]/5 transition-all duration-200">
              <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
              </svg>
            </div>
            <span class="text-sm font-medium">+228 98 01 27 27</span>
          </a>

          <a href="mailto:hello@escen.university"
             class="flex items-center gap-3 text-gray-600 hover:text-[#01b4d5] transition-colors duration-200 group">
            <div class="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#01b4d5]/30 group-hover:bg-[#01b4d5]/5 transition-all duration-200">
              <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span class="text-sm font-medium">hello@escen.university</span>
          </a>

          <div class="flex items-center gap-3 text-gray-500">
            <div class="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
              <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <span class="text-sm">Lun – Ven : 7h30 à 17h30</span>
          </div>
        </div>

      </div>
    </transition>

    <!-- Overlay pour mobile -->
    <transition enter-active-class="transition duration-500" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="isMobileMenuOpen" class="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        style="z-index: 9998;" @click="isMobileMenuOpen = false" />
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const scrolled = ref(false)
const isMobileMenuOpen = ref(false)
const showFormationsDropdown = ref(false)
const showMobileFormations = ref(false)
let formationsCloseTimer = null

const openFormationsDropdown = () => {
  if (formationsCloseTimer) { clearTimeout(formationsCloseTimer); formationsCloseTimer = null }
  showFormationsDropdown.value = true
}
const closeFormationsDropdown = () => {
  formationsCloseTimer = setTimeout(() => { showFormationsDropdown.value = false }, 120)
}

const mobileLinks = [
  {
    label: 'Accueil',
    path: '/',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    label: 'Formations',
    path: '/formations',
    icon: 'M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 013.741-1.342'
  },
  {
    label: 'Blogs',
    path: '/blogs',
    icon: 'M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z'
  },
  {
    label: 'Galerie',
    path: '/galerie',
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
  },
  {
    label: 'Nous contacter',
    path: '/contact',
    icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
  },
  {
    label: 'Espace étudiant',
    path: '/connexion',
    icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
  },
]

const mobileFormationLinks = [
  { label: 'Toutes les formations', path: '/formations' },
  { label: 'Licence Professionnelle', path: '/formations/licence-professionnelle' },
  { label: 'Master Professionnel', path: '/formations/master-professionnel' },
  { label: 'Executive Education', path: '/formations/executive-education' },
  // { label: 'Certificats', path: '/formations/certificats' },
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

// Détection du scroll
onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 44
}

// Fermer les menus au changement de route
watch(() => isMobileMenuOpen.value, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Animations pour les vagues */
@keyframes wave {
  0% {
    transform: translateX(0) translateY(0);
  }

  50% {
    transform: translateX(-15%) translateY(5px);
  }

  100% {
    transform: translateX(-30%) translateY(0);
  }
}

@keyframes wave-slow {
  0% {
    transform: translateX(0) translateY(0);
  }

  50% {
    transform: translateX(10%) translateY(-5px);
  }

  100% {
    transform: translateX(20%) translateY(0);
  }
}

.animate-wave {
  animation: wave 12s ease-in-out infinite;
}

.animate-wave-slow {
  animation: wave-slow 15s ease-in-out infinite;
}

/* Autres animations existantes */
@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }

  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}

@keyframes pulse-slower {

  0%,
  100% {
    opacity: 0.15;
    transform: scale(1);
  }

  50% {
    opacity: 0.25;
    transform: scale(1.1);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 6s ease-in-out infinite;
}

/* Particules flottantes */
.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;
}

.particle-1 {
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.particle-2 {
  top: 60%;
  right: 15%;
  width: 6px;
  height: 6px;
  animation-delay: 1s;
}

.particle-3 {
  bottom: 30%;
  left: 20%;
  width: 3px;
  height: 3px;
  animation-delay: 2s;
}

/* Scrollbar personnalisée */
.overflow-y-auto::-webkit-scrollbar {
  width: 4px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #01b4d5, #0095b0);
  border-radius: 4px;
}

/* Transitions fluides */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Effet de glassmorphism */
.backdrop-blur-xl {
  backdrop-filter: blur(20px);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

/* Empêcher le scroll quand le menu mobile est ouvert */
body:has(.fixed.inset-0.bg-black\/60) {
  overflow: hidden;
}

/* Assurer que le header n'a pas d'overflow caché */
header>div:first-child {
  overflow: visible !important;
}

/* Ajout pour les très petits écrans */
@media (min-width: 480px) {
  .xs\:flex {
    display: flex;
  }
}
</style>

<style src="~/assets/css/website-header.css"></style>
