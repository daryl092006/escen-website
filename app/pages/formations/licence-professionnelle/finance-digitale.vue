<template>
    <div class="min-h-screen bg-white">
        <Breadcrumb title="Licence Professionnelle en Finance Digitale" subtitle="Finance Digitale"
            description="Formation d'excellence aux métiers de la finance numérique et des fintech"
            duration="Durée : 3 ans (6 semestres) - Système LMD" backgroundImage="/formations/financedigital.jpg"
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Formations', href: '/formations' },
                { label: 'Licences Professionnelles', href: '/formations/licence-professionnelle' },
                { label: 'Finance Digitale' }
            ]" />
        <!-- Barre d'information rapide -->
        <!-- <section class="py-6 bg-gradient-to-r from-[#202a51] to-[#00b3d4]">
            <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
                <div class="flex flex-wrap items-center justify-between gap-4 text-white">
                    <div class="flex items-center gap-6">
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="font-medium">Diplôme reconnu par l'État Togolais</span>
                        </div>
                        <div class="hidden md:block w-px h-6 bg-white/30"></div>
                        <div class="flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="font-medium">6 semestres - 180 crédits ECTS</span>
                        </div>
                    </div>
                    <a href="#contact"
                        class="bg-white text-[#202a51] hover:bg-gray-100 px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 8l7.89-3.52a2 2 0 011.11 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contacter l'école
                    </a>
                </div>
            </div>
        </section> -->
        <!-- Contenu principal -->
        <main class="container mx-auto px-4 lg:px-6 max-w-7xl py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Colonne de gauche - Contenu principal -->
                <div class="lg:col-span-2 space-y-12">
                    <!-- Section objectifs -->
                    <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900">Objectifs de la Formation</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div v-for="(objectif, index) in objectifs" :key="index"
                                class="bg-gradient-to-br from-[#dbeff7] to-white p-6 rounded-xl border border-[#6cc6e2]/20">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 rounded-lg bg-[#00b3d4]/10 flex-shrink-0">
                                        <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                :d="objectif.icon" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-gray-900 mb-2">{{ objectif.title }}</h3>
                                        <p class="text-gray-600 text-sm leading-relaxed">{{ objectif.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Section programme -->
                    <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#202a51] to-[#0056b3]">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900">Structure du Programme</h2>
                        </div>
                        <!-- Timeline du programme -->
                        <div class="relative">
                            <!-- Ligne de la timeline -->
                            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00b3d4] to-[#6cc6e2]">
                            </div>
                            <!-- Semestres 1-4 -->
                            <div class="relative pl-8 pb-12">
                                <div
                                    class="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00b3d4] transform -translate-x-1.5">
                                </div>
                                <div class="bg-gradient-to-r from-[#00b3d4]/5 to-transparent p-6 rounded-xl">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <div
                                                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b3d4] text-white text-sm font-semibold mb-2">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Semestres 1 à 4
                                            </div>
                                            <h3 class="text-xl font-bold text-gray-900">Tronc Commun</h3>
                                        </div>
                                        <div
                                            class="px-4 py-2 bg-[#00b3d4]/10 text-[#00b3d4] rounded-lg font-medium text-sm">
                                            100% Présentiel
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mb-4">Formation intensive en présentiel pour acquérir les
                                        fondamentaux de la finance et du numérique</p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div v-for="cours in troncCommun" :key="cours"
                                            class="flex items-center gap-2 text-gray-700 text-sm">
                                            <div class="w-2 h-2 rounded-full bg-[#00b3d4]"></div>
                                            <span>{{ cours }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Semestres 5-6 -->
                            <div class="relative pl-8">
                                <div
                                    class="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#202a51] transform -translate-x-1.5">
                                </div>
                                <div class="bg-gradient-to-r from-[#202a51]/5 to-transparent p-6 rounded-xl">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <div
                                                class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#202a51] text-white text-sm font-semibold mb-2">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Semestres 5 à 6
                                            </div>
                                            <h3 class="text-xl font-bold text-gray-900">Spécialisation</h3>
                                        </div>
                                        <div
                                            class="px-4 py-2 bg-[#202a51]/10 text-[#202a51] rounded-lg font-medium text-sm">
                                            Hybride (Présentiel & En ligne)
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mb-4">Cours du soir avec une approche flexible combinant
                                        présentiel et enseignement à distance</p>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div v-for="specialisation in specialisations" :key="specialisation"
                                            class="flex items-center gap-2 text-gray-700 text-sm">
                                            <div class="w-2 h-2 rounded-full bg-[#202a51]"></div>
                                            <span>{{ specialisation }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Section carrières -->
                    <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#00b3d4]">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900">Perspectives de Carrière</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div v-for="(metier, index) in metiers" :key="index"
                                class="group bg-gradient-to-br from-white to-[#f8fcff] p-6 rounded-xl border border-gray-100 hover:border-[#00b3d4] hover:shadow-lg transition-all duration-300 cursor-pointer">
                                <div class="flex items-start gap-4">
                                    <div class="p-3 rounded-lg bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] group-hover:scale-110 transition-transform duration-300">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                :d="metier.icon" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-gray-900 mb-2 group-hover:text-[#00b3d4] transition-colors duration-300">{{ metier.title }}</h3>
                                        <p class="text-gray-600 text-sm">{{ metier.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- Section admission -->
                    <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#0056b3] to-[#202a51]">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900">Conditions d'Admission</h2>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div v-for="(items, niveau) in piecesAFournir" :key="niveau" class="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:border-[#00b3d4] transition-colors">
                                <div class="bg-gradient-to-r from-[#00b3d4] to-[#6cc6e2] px-4 py-3">
                                    <h3 class="text-white font-bold text-center uppercase">{{ niveau }}</h3>
                                </div>
                                <div class="p-5 space-y-4">
                                    <div v-for="(piece, index) in items" :key="index" class="flex items-start gap-3">
                                        <div class="w-5 h-5 rounded-full bg-[#00b3d4]/20 text-[#00b3d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                                            </svg>
                                        </div>
                                        <span class="text-gray-700 text-sm leading-tight">{{ piece }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 p-6 bg-gradient-to-r from-[#dbeff7] to-[#f0f9ff] rounded-xl">
                            <div class="flex items-center gap-4">
                                <div class="p-3 rounded-lg bg-white">
                                    <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 mb-1">Profil d'entrée</h4>
                                    <p class="text-gray-600 text-sm">Formation ouverte aux candidats titulaires du
                                        baccalauréat (toutes séries) ou titre équivalent</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <!-- Colonne de droite - Informations pratiques -->
                <div class="space-y-8">
                    <!-- Carte de résumé -->
                    <div class="bg-gradient-to-b from-[#202a51] to-[#0056b3] rounded-2xl p-8 text-white shadow-xl">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-3 rounded-xl bg-white/10">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 class="text-xl font-bold">Résumé de la Formation</h2>
                        </div>
                        <div class="space-y-6">
                            <div v-for="(info, index) in infosResume" :key="index" class="flex items-start gap-4">
                                <div class="p-2 rounded-lg bg-white/10 flex-shrink-0">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            :d="info.icon" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold mb-1">{{ info.title }}</h3>
                                    <p class="text-sm opacity-90">{{ info.value }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Frais de formation -->
                    <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 class="text-xl font-bold text-gray-900">Frais de Formation</h2>
                        </div>
                        <div class="space-y-4">
                            <div v-for="(frais, index) in listeFrais" :key="index"
                                :class="['p-4 rounded-xl border transition-all duration-300 hover:shadow-md', frais.featured ? 'border-[#00b3d4] bg-[#f0f9ff]' : 'border-gray-200']">
                                 <div class="flex items-center justify-between mb-2">
                                    <h3 class="font-bold text-gray-900">{{ frais.annee }}</h3>
                                     
                                </div>
                                <div class="space-y-3">
                                    <div class="flex justify-between items-center">
                                        <span class="text-gray-600 text-sm">Droit d'inscription</span>
                                        <span class="font-bold text-gray-900">{{ frais.inscription }}</span>
                                    </div>
                                    <div class="flex justify-between items-center">
                                        <span class="text-gray-600 text-sm">Frais de scolarité</span>
                                        <span class="font-bold text-[#00b3d4]">{{ frais.scolarite }}</span>
                                    </div>
                                    <div class="pt-3 border-t border-gray-200">
                                        <div class="flex justify-between items-center">
                                            <span class="font-bold text-gray-900">Total</span>
                                            <span class="text-xl font-bold text-[#202a51]">{{ frais.total }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 p-4 bg-[#dbeff7] rounded-xl">
                            <p class="text-sm text-gray-700 text-center">
                                Les frais sont payables en tranches (bimestriel, trimestriel, 5 tranches ou annuel)
                            </p>
                        </div>
                    </div>
                    <!-- Avantages ESCEN -->
                    <!-- <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#dbeff7]">
                                <svg class="w-6 h-6 text-[#202a51]" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h2 class="text-xl font-bold text-gray-900">Avantages ESCEN</h2>
                        </div>
                        <div class="grid grid-cols-2 gap-3">
                            <div v-for="(avantage, index) in avantages" :key="index"
                                class="bg-gradient-to-br from-white to-[#f8fcff] p-4 rounded-lg border border-gray-100 hover:border-[#6cc6e2] transition-all duration-300 group">
                                <div class="flex flex-col items-center text-center">
                                    <div
                                        class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#00b3d4] mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                :d="avantage.icon" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700 group-hover:text-[#00b3d4] transition-colors duration-300">{{
                                        avantage.title }}</span>
                                </div>
                            </div>
                        </div>
                    </div> -->
                 <button
                    @click="handleDownloadClick"
                    class="w-full border-2 border-[#00b3d4] text-[#00b3d4] hover:bg-[#00b3d4] hover:text-white py-3.5 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-3 mb-3 cursor-pointer"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    Télécharger la brochure
                  </button>

                  <NuxtLink
                    to="/preparation-inscription"
                    class="w-full bg-gradient-to-r from-[#00b3d4] to-[#0056b3] hover:from-[#0056b3] hover:to-[#202a51] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                    </svg>
                    S'inscrire à la formation
                    </NuxtLink>
                </div>
            </div>
        </main>
        <!-- Section stage -->
        <section class="py-16 bg-gradient-to-br from-[#f0f9ff] to-[#dbeff7]">
            <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div class="flex-1">
                            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b3d4] text-white text-sm font-semibold mb-4">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Stage Professionnel
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900 mb-4">Acquérez une expérience concrète</h2>
                            <p class="text-gray-600 mb-6">
                                Stage obligatoire de 2 mois minimum aux semestres 5 et 6, suivi de la rédaction et présentation d'un rapport ou projet professionnel.
                            </p>
                            <div class="flex items-center gap-6">
                                <div class="flex items-center gap-2">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">Durée</p>
                                        <p class="font-bold text-gray-900">2 mois minimum</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#202a51] to-[#0056b3] flex items-center justify-center">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-600">Période</p>
                                        <p class="font-bold text-gray-900">Semestres 5 & 6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Contact Section -->
        <!-- <section id="contact" class="py-16 bg-white border-t border-gray-100">
            <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">Intéressé par cette formation ?</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Contactez-nous pour plus d'informations ou pour organiser une visite de notre campus à Lomé
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">Téléphone</h3>
                        <p class="text-gray-600">(228) 98 01 27 27</p>
                        <p class="text-gray-600">(228) 92 30 87 87</p>
                    </div>
                    <div class="text-center">
                        <div
                            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#202a51] to-[#0056b3] flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89-3.52a2 2 0 011.11 0L20 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">Email</h3>
                        <p class="text-gray-600">admission@escen.university</p>
                    </div>
                    <div class="text-center">
                        <div
                            class="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6cc6e2] to-[#dbeff7] flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">Campus</h3>
                        <p class="text-gray-600">Lomé, Togo</p>
                    </div>
                </div>
            </div>
        </section> -->
        <!-- Modal Brochure -->
        <BrochureModal
          :is-open="isModalOpen"
          brochure-name="Licence Professionnelle en Finance Digitale"
          @close="isModalOpen = false"
          @submit="onBrochureSubmit"
        />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import BrochureModal from '~/components/BrochureModal.vue'

const isModalOpen = ref(false)
const brochureUrl = "/pdf/LICENCE%20PROFESSIONNELLE%20EN%20FINANCE%20DIGITALE.pdf"

const handleDownloadClick = () => {
  isModalOpen.value = true
}

const downloadPdf = () => {
  const link = document.createElement('a')
  link.href = brochureUrl
  link.target = '_blank'
  link.setAttribute('download', '')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const onBrochureSubmit = () => {
  downloadPdf()
  isModalOpen.value = false
}
// Données pour les objectifs
const objectifs = [
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Applications technologiques",
        description: "Maîtrise des solutions technologiques appliquées aux services financiers"
    },
    {
        icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
        title: "Gestion de projets",
        description: "Management de projets de mobile banking, mobile money et fintechs"
    },
    {
        icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
        title: "Processus bancaires",
        description: "Expertise en paiements mobiles, plateformes de prêts en ligne et crypto-monnaies"
    },
    {
        icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
        title: "Innovation financière",
        description: "Conception de produits financiers adaptés à l'ère numérique"
    }
]
// Données pour le tronc commun
const troncCommun = [
    "Fondamentaux de la finance",
    "Économie numérique",
    "Droit des affaires",
    "Comptabilité générale",
    "Mathématiques financières",
    "Technologies bancaires",
    "Management digital",
    "Communication professionnelle"
]
// Données pour les spécialisations
const specialisations = [
    "Fintech et innovation",
    "Mobile banking",
    "Paiements numériques",
    "Crypto-monnaies",
    "Gestion des risques digitaux",
    "Analyse financière digitale"
]
// Données pour les métiers
const metiers = [
    {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Chargé de projet finance digitale",
        description: "Gestion des projets de transformation numérique bancaire"
    },
    {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        title: "Chef projet banque digitale",
        description: "Direction des projets d'innovation bancaire"
    },
    {
        icon: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4",
        title: "Chef produit bancaire",
        description: "Développement de produits financiers innovants"
    },
    {
        icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
        title: "Chargé de développement digital",
        description: "Stratégie de digitalisation des services financiers"
    },
    {
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        title: "Chef projet fintech",
        description: "Innovation et développement de solutions fintech"
    },
    {
        icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
        title: "Consultant finance digitale",
        description: "Conseil en transformation digitale bancaire"
    }
]
// Données pour les pièces à fournir
// Données pour les pièces à fournir
const piecesAFournir = {
  "LICENCE 1": [
    "Deux (02) photos passeport",
    "Une (01) copie de la carte nationale d'identité ou du passeport",
    "Une (01) copie de l'attestation du BAC",
    "Une (01) copie du relevé de notes du BAC"
  ],
  "LICENCE 2": [
    "Deux (02) photos passeport",
    "Une (01) copie de la carte nationale d'identité ou du passeport",
    "Une (01) copie de l'attestation du BAC et du relevé de notes du BAC",
    "Une (01) copie légalisée du relevé du BAC+1"
  ],
  "LICENCE 3": [
    "Deux (02) photos passeport",
    "Une (01) copie de la carte nationale d'identité ou du passeport",
    "Une (01) copie de l'attestation du BAC et du BTS",
    "Une (01) copie des relevés légalisés du BAC+ 2 et du BTS"
  ]
}
// Données pour le résumé
const infosResume = [
    {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        title: "Type de formation",
        value: "Licence Professionnelle"
    },
    {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Domaine",
        value: "Sciences Économiques et de Gestion"
    },
    {
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        title: "Durée",
        value: "3 ans (6 semestres)"
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Modalités",
        value: "Présentiel & En ligne"
    }
]
// Données pour les frais
const listeFrais = [
    {
        annee: "Licence 1ère année",
        inscription: "50 000 FCFA",
        scolarite: "480 000 FCFA",
        total: "530 000 FCFA", 
        featured: true
    },
    {
        annee: "Licence 2ème année",
        inscription: "50 000 FCFA",
        scolarite: "550 000 FCFA",
        total: "600 000 FCFA",
        featured: true
    },
    {
        annee: "Licence 3ème année",
        inscription: "50 000 FCFA",
        scolarite: "650 000 FCFA",
        total: "700 000 FCFA",
        featured: true
    }
]
// Données pour les avantages
const avantages = [
    {
        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
        title: "Tissu pour uniforme"
    },
    {
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        title: "Assurance santé"
    },
    {
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        title: "Bibliothèque numérique"
    },
    {
        icon: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
        title: "Carte d'étudiant"
    },
    {
        icon: "M13 10V3L4 14h7v7l9-11h-7z",
        title: "Réduction loisirs"
    },
    {
        icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
        title: "Réduction transport avec Gozem"
    }
]
// Fonctions
const inscrireMaintenant = () => {
    console.log("Redirection vers le formulaire d'inscription")
}

</script>
<style scoped>
/* Styles spécifiques si besoin */
</style>