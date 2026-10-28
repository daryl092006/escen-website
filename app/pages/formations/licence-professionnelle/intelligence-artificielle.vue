<template>
    <div class="min-h-screen bg-white">
        <Breadcrumb title="Licence Professionnelle en Intelligence Artificielle & Génie Logiciel" 
            subtitle="Intelligence Artificielle & Génie Logiciel"
            description="Formation d'excellence aux métiers du développement logiciel, de l'intelligence artificielle et de l'ingénierie des données"
            duration="Durée : 3 ans (6 semestres) - Système LMD" 
            backgroundImage="/formations/intelligenceartificielle.jpg"
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Formations', href: '/formations' },
                { label: 'Licences Professionnelles', href: '/formations/licence-professionnelle' },
                { label: 'IA & Génie Logiciel' }
            ]" />
        

        <!-- Contenu principal -->
        <main class="container mx-auto px-4 lg:px-6 max-w-7xl py-12">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <!-- Colonne de gauche - Contenu principal -->
                <div class="lg:col-span-2 space-y-12">
                    <!-- Section identification -->
                    <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900">Identification de la Formation</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div class="space-y-4">
                                <div>
                                    <h3 class="font-semibold text-gray-700 text-sm mb-1">Domaine</h3>
                                    <p class="text-gray-900 font-medium">Sciences et Technologies</p>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-700 text-sm mb-1">Mention</h3>
                                    <p class="text-gray-900 font-medium">Génie Informatique</p>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-700 text-sm mb-1">Grade</h3>
                                    <p class="text-gray-900 font-medium">Licence Professionnelle</p>
                                </div>
                            </div>
                            <div class="space-y-4">
                                <div>
                                    <h3 class="font-semibold text-gray-700 text-sm mb-1">Spécialité</h3>
                                    <p class="text-gray-900 font-medium">Intelligence Artificielle et Génie Logiciel</p>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-700 text-sm mb-1">Durée</h3>
                                    <p class="text-gray-900 font-medium">6 semestres (3 ans)</p>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-700 text-sm mb-1">Agrément</h3>
                                    <p class="text-gray-900 font-medium">N° 0102 / 2021/ MESR / SG / DES</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Double diplôme -->
                        <div class="mt-8 p-6 bg-gradient-to-r from-[#dbeff7] to-[#f0f9ff] rounded-xl">
                            <div class="flex items-center gap-4">
                                <div class="p-3 rounded-lg bg-white">
                                    <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 mb-1">Double Diplôme International</h4>
                                    <p class="text-gray-600 text-sm">Ce programme donne droit à un double diplôme : Togolais (ESCEN) et Français (ESTIA - École Supérieure des Technologies Industrielles Avancées)</p>
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
                            <div class="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00b3d4] to-[#6cc6e2]"></div>
                            
                            <!-- Semestres 1-4 -->
                            <div class="relative pl-8 pb-12">
                                <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00b3d4] transform -translate-x-1.5"></div>
                                <div class="bg-gradient-to-r from-[#00b3d4]/5 to-transparent p-6 rounded-xl">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b3d4] text-white text-sm font-semibold mb-2">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Semestres 1 à 4
                                            </div>
                                            <h3 class="text-xl font-bold text-gray-900">Tronc Commun</h3>
                                        </div>
                                        <div class="px-4 py-2 bg-[#00b3d4]/10 text-[#00b3d4] rounded-lg font-medium text-sm">
                                            Cours du jour en présentiel
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mb-4">Formation intensive en présentiel pour acquérir les fondamentaux de l'informatique, des mathématiques et de la programmation</p>
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
                                <div class="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#202a51] transform -translate-x-1.5"></div>
                                <div class="bg-gradient-to-r from-[#202a51]/5 to-transparent p-6 rounded-xl">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#202a51] text-white text-sm font-semibold mb-2">
                                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Semestres 5 à 6
                                            </div>
                                            <h3 class="text-xl font-bold text-gray-900">Spécialisation</h3>
                                        </div>
                                        <div class="px-4 py-2 bg-[#202a51]/10 text-[#202a51] rounded-lg font-medium text-sm">
                                            Cours du soir en présentiel
                                        </div>
                                    </div>
                                    <p class="text-gray-600 mb-4">Cours du soir avec approfondissement en Intelligence Artificielle et Génie Logiciel</p>
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

                    <!-- Section compétences -->
                    <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#00b3d4]">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold text-gray-900">Perspectives de carrière & Compétences</h2>
                        </div>
                        <div class="space-y-8">
                            <div>
                                <p class="text-gray-600 mb-6">La licence professionnelle en Intelligence Artificielle & Génie Logiciel vise à former les étudiants pour les trois métiers suivants :</p>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div v-for="(competence, index) in competences" :key="index"
                                        class="group bg-gradient-to-br from-white to-[#f8fcff] p-6 rounded-xl border border-gray-100 hover:border-[#00b3d4] hover:shadow-lg transition-all duration-300 cursor-pointer">
                                        <div class="flex flex-col items-center text-center">
                                            <div class="p-4 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="competence.icon" />
                                                </svg>
                                            </div>
                                            <h3 class="font-bold text-gray-900 mb-3 group-hover:text-[#00b3d4] transition-colors duration-300">{{ competence.title }}</h3>
                                            <p class="text-gray-600 text-sm">{{ competence.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 mb-4">Domaines de compétences</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div class="p-5 rounded-xl border border-[#00b3d4]/20 bg-[#f0f9ff]">
                                        <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <div class="w-3 h-3 rounded-full bg-[#00b3d4]"></div>
                                            Compétences principales
                                        </h4>
                                        <div class="grid grid-cols-2 gap-2">
                                            <div v-for="comp in competencesPrincipales" :key="comp"
                                                class="flex items-center gap-2 text-gray-700 text-sm">
                                                <svg class="w-3 h-3 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{{ comp }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="p-5 rounded-xl border border-gray-200 bg-gray-50">
                                        <h4 class="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                            <div class="w-3 h-3 rounded-full bg-gray-600"></div>
                                            Compétences transverses
                                        </h4>
                                        <div class="grid grid-cols-2 gap-2">
                                            <div v-for="comp in competencesTransverses" :key="comp"
                                                class="flex items-center gap-2 text-gray-700 text-sm">
                                                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{{ comp }}</span>
                                            </div>
                                        </div>
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
                                    <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 mb-1">Profil d'entrée</h4>
                                    <p class="text-gray-600 text-sm">Formation ouverte aux candidats titulaires du baccalauréat scientifique</p>
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
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="info.icon" />
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
                                <svg class="w-6 h-6 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                    <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#00b3d4] mb-3 group-hover:scale-110 transition-transform duration-300">
                                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="avantage.icon" />
                                        </svg>
                                    </div>
                                    <span class="text-xs font-medium text-gray-700 group-hover:text-[#00b3d4] transition-colors duration-300">{{ avantage.title }}</span>
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

        <!-- Section poursuite d'études -->
        <section class="py-16 bg-white border-t border-gray-100">
            <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
                <div class="bg-gradient-to-r from-[#202a51]/5 to-[#00b3d4]/5 rounded-2xl p-8">
                    <div class="flex items-center gap-4 mb-8">
                        <div class="p-4 rounded-xl bg-white shadow-lg">
                            <svg class="w-8 h-8 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900">Poursuite d'Études en France</h2>
                            <p class="text-gray-600">Grâce au partenariat avec ESTIA</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div v-for="(etape, index) in poursuiteEtudes" :key="index" class="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <div class="flex items-center gap-4 mb-4">
                                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center">
                                    <span class="text-white font-bold text-lg">{{ index + 1 }}</span>
                                </div>
                                <div>
                                    <h3 class="font-bold text-gray-900">{{ etape.title }}</h3>
                                    <p class="text-sm text-gray-600">{{ etape.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Modal Brochure -->
        <BrochureModal
          :is-open="isModalOpen"
          brochure-name="Licence Professionnelle en Intelligence Artificielle & Génie Logiciel"
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
const brochureUrl = "/pdf/LICENCE%20PROFESSIONNELLE%20EN%20IA%26GL.pdf"

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

// Données pour le tronc commun
const troncCommun = [
    "Algorithmique et programmation",
    "Mathématiques pour l'IA",
    "Bases de données",
    "Systèmes d'exploitation",
    "Réseaux informatiques",
    "Architecture des ordinateurs",
    "Développement web",
    "Ingénierie logicielle"
]

// Données pour les spécialisations
const specialisations = [
    "Intelligence Artificielle",
    "Machine Learning",
    "Deep Learning",
    "Big Data",
    "Développement avancé",
    "Cloud Computing"
]

// Données pour les compétences
const competences = [
    {
        icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
        title: "Développeur d'applications WEB/Mobile",
        description: "Développement d'applications à plusieurs niveaux avec les dernières technologies"
    },
    {
        icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
        title: "Ingénieur de données Big Data",
        description: "Administration de données structurées et non structurées (SQL, NoSQL, Hadoop)"
    },
    {
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        title: "Analyste de données",
        description: "Analyse avec outils OLAP, Machine Learning et Deep Learning"
    }
]

// Compétences principales et transverses
const competencesPrincipales = [
    "Ingénierie des données",
    "Programmation",
    "Mathématiques",
    "Analyse de données",
    "Machine Learning",
    "Développement logiciel"
]

const competencesTransverses = [
    "Management",
    "Gestion de projet",
    "Communication",
    "Insertion en entreprise",
    "Travail d'équipe",
    "Résolution de problèmes"
]

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
        value: "Sciences et Technologies"
    },
    {
        icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
        title: "Durée",
        value: "3 ans (6 semestres)"
    },
    {
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        title: "Modalités",
        value: "Présentiel (jour/soir)"
    }
]

// Données pour les frais
const listeFrais = [
    {
        annee: "Licence TC 1ère année",
        inscription: "50 000 FCFA",
        scolarite: "850 000 FCFA",
        total: "900 000 FCFA",
        featured: true
    },
    {
        annee: "Licence TC 2ème année",
        inscription: "50 000 FCFA",
        scolarite: "975 000 FCFA",
        total: "1 025 000 FCFA",
        featured: true
    },
    {
        annee: "Licence 3ème année",
        inscription: "50 000 FCFA",
        scolarite: "1 100 000 FCFA",
        total: "1 150 000 FCFA",
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

// Données pour la poursuite d'études
const poursuiteEtudes = [
    {
        title: "Après la Licence 2",
        description: "Poursuite en France à ESTIA après validation du niveau L2"
    },
    {
        title: "Après la Licence 3",
        description: "Poursuite en Master 1 en France après obtention de la licence"
    },
    {
        title: "Après le Master 1",
        description: "Poursuite en Master 2 à ESTIA pour spécialisation approfondie"
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