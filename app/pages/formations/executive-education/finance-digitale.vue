<template>
  <div class="min-h-screen bg-white">
    <!-- Header avec Breadcrumb -->
    <Breadcrumb 
      title="Executive Master en Finance Digitale"
      subtitle="Transformation digitale des services financiers"
      description="Formation d'excellence pour les cadres et professionnels du secteur financier en Afrique"
      duration="Durée : 12 mois (4 trimestres) - Formation Executive"
      backgroundImage="/formations/financedigital.jpg"
      :breadcrumb="[
        { label: 'Accueil', href: '/' },
        { label: 'Formations', href: '/formations' },
        { label: 'Masters Executive', href: '/formations/executive-education' },
        { label: 'Finance Digitale' }
      ]"
    />

    <!-- Contenu principal -->
    <main class="container mx-auto px-4 lg:px-6 max-w-7xl py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Colonne de gauche - Contenu principal -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Section Objectifs -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Objectifs de la Formation</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="(objectif, index) in objectifs" :key="index" 
                   class="bg-gradient-to-br from-[#dbeff7] to-white p-6 rounded-xl border border-[#6cc6e2]/20">
                <div class="flex items-start gap-4">
                  <div class="p-3 rounded-lg bg-[#00b3d4]/10 flex-shrink-0">
                    <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="objectif.icon"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-2">{{ objectif.title }}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ objectif.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section Programme -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#202a51] to-[#0056b3]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Structure du Programme</h2>
            </div>

            <!-- Timeline des trimestres -->
            <div class="space-y-8">
              <div v-for="(trimestre, index) in programme" :key="index" 
                   class="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00b3d4] text-white font-bold">
                      {{ index + 1 }}
                    </span>
                    <h3 class="text-lg font-bold text-gray-900">{{ trimestre.nom }}</h3>
                  </div>
                  <span class="px-3 py-1 bg-[#00b3d4]/10 text-[#00b3d4] rounded-full text-sm font-medium">
                    {{ trimestre.credits }} crédits
                  </span>
                </div>
                
                <div class="space-y-3">
                  <div v-for="(ue, ueIndex) in trimestre.ues" :key="ueIndex" 
                       class="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-[#6cc6e2] transition-colors">
                    <div class="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00b3d4]"></div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-800 text-sm">{{ ue.code }} - {{ ue.nom }}</h4>
                      <p class="text-xs text-gray-500 mt-1">{{ ue.credits }} crédits • {{ ue.heures }} heures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section Public Cible -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#00b3d4]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Public Cible</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(secteur, index) in publicCible" :key="index" 
                   class="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-[#00b3d4] transition-colors">
                <div class="p-2 rounded-lg bg-[#00b3d4]/10">
                  <svg class="w-5 h-5 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="text-gray-700 font-medium">{{ secteur }}</span>
              </div>
            </div>
          </section>

          <!-- Section Perspectives Carrière -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#0056b3] to-[#202a51]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Perspectives de Carrière</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="(metier, index) in perspectivesCarriere" :key="index" 
                   class="p-4 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-[#00b3d4] hover:shadow-md transition-all">
                <div class="flex items-start gap-3">
                  <div class="p-2 rounded-lg bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900 mb-1">{{ metier }}</h3>
                    <p class="text-sm text-gray-600">Master Executive en Finance Digitale</p>
                  </div>
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
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 class="text-xl font-bold">Résumé du Master</h2>
            </div>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="p-2 rounded-lg bg-white/10 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Format</h3>
                  <p class="text-sm opacity-90">100% En ligne</p>
                  <p class="text-xs opacity-75 mt-1">Lundi, Mercredi, Vendredi (18h30-20h30 GMT)</p>
                  <p class="text-xs opacity-75">+ Séminaire bimestriel le samedi</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="p-2 rounded-lg bg-white/10 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Durée</h3>
                  <p class="text-sm opacity-90">12 mois (4 trimestres)</p>
                  <p class="text-xs opacity-75 mt-1">120 crédits ECTS</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="p-2 rounded-lg bg-white/10 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Profil</h3>
                  <p class="text-sm opacity-90">Cadres & Professionnels</p>
                  <p class="text-xs opacity-75 mt-1">Expérience professionnelle requise</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="p-2 rounded-lg bg-white/10 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Accréditation</h3>
                  <p class="text-sm opacity-90">Agrément N°0102/2021/MESR/SG/DES</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Frais de formation -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 class="text-xl font-bold text-gray-900">Frais de Formation</h2>
            </div>
            
            <div class="space-y-6">
              <div class="p-4 bg-gradient-to-r from-[#f0f9ff] to-white rounded-xl border border-[#00b3d4]">
                <div class="flex justify-between items-center mb-3">
                  <span class="text-gray-600 text-sm">Droit d'inscription</span>
                  <span class="font-bold text-gray-900">50 000 FCFA</span>
                </div>
                <div class="flex justify-between items-center mb-4">
                  <span class="text-gray-600 text-sm">Frais de scolarité</span>
                  <span class="text-xl font-bold text-[#00b3d4]">1 650 000 FCFA</span>
                </div>
                <div class="pt-3 border-t border-gray-200">
                  <div class="flex justify-between items-center">
                    <span class="font-bold text-gray-900">Total</span>
                    <span class="text-2xl font-bold text-[#202a51]">1 700 000 FCFA</span>
                  </div>
                </div>
              </div>
              
              <div class="p-4 bg-[#dbeff7] rounded-xl">
                <p class="text-sm text-gray-700 text-center">
                  Frais payables en tranches (bimestriel, trimestriel, 5 tranches ou annuel)
                </p>
              </div>
            </div>
          </div>

          <!-- Approche Pédagogique -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#dbeff7]">
                <svg class="w-6 h-6 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                </svg>
              </div>
              <h2 class="text-xl font-bold text-gray-900">Approche Pédagogique</h2>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#00b3d4]/10">
                  <svg class="w-5 h-5 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-sm">20+ Experts Internationaux</h3>
                  <p class="text-xs text-gray-600">Formateurs certifiés et praticiens</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#00b3d4]/10">
                  <svg class="w-5 h-5 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-sm">Études de Cas & Projets</h3>
                  <p class="text-xs text-gray-600">Partage d'expériences concrètes</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#00b3d4]/10">
                  <svg class="w-5 h-5 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-sm">Séminaires Professionnels</h3>
                  <p class="text-xs text-gray-600">6 séminaires thématiques bimensuels</p>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="handleDownloadClick"
            class="w-full bg-[#01b4d5] hover:bg-[#009bb8] text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Télécharger la brochure</span>
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

    <!-- Section Pièces à Fournir -->
    <section class="py-16 bg-gradient-to-br from-[#f0f9ff] to-[#dbeff7]">
      <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b3d4] text-white text-sm font-semibold mb-4">
                Dosssier d'inscription
              </div>
              <h2 class="text-3xl font-bold text-gray-900 mb-4">
                Pièces à fournir pour votre admission
              </h2>
              <p class="text-gray-600 text-lg">
                Constituez votre dossier avec soin pour accélérer votre procédure d'admission
              </p>
            </div>
          </div>

          <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div v-for="(pieces, niveau) in piecesAFournir" :key="niveau" 
                 class="bg-gradient-to-br from-white to-[#f0f9ff] p-6 rounded-xl border border-gray-200 hover:border-[#00b3d4] transition-all duration-300">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-8 h-8 rounded-lg bg-[#00b3d4] text-white font-bold flex items-center justify-center text-sm">
                  {{ niveau.split(' ')[1] }}
                </div>
                <h3 class="font-bold text-gray-900">{{ niveau }}</h3>
              </div>
              
              <div class="space-y-3">
                <div v-for="(piece, index) in pieces" :key="index" class="flex items-start gap-2">
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
        </div>
      </div>
    </section>

    <!-- Modal Brochure -->
    <BrochureModal
      :is-open="isModalOpen"
      brochure-name="Executive Master en Finance Digitale"
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
const brochureUrl = "/pdf/Fiche_Executive_Master_FD.pdf"

const handleDownloadClick = () => {
  isModalOpen.value = true
}

const downloadPdf = async () => {
  try {
    const response = await fetch(brochureUrl)
    if (!response.ok) throw new Error('Téléchargement échoué')
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Executive_Master_Finance_Digitale.pdf'
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  } catch (err) {
    window.open(brochureUrl, '_blank')
  }
}

const onBrochureSubmit = (formData) => {
  localStorage.setItem('escen_prospect_registered', 'true')
  localStorage.setItem('escen_prospect_data', JSON.stringify(formData))
  downloadPdf()
}

// Données pour les objectifs (basées sur le PDF)
const objectifs = [
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Inclusion financière",
    description: "Cerner les problématiques liées à l'inclusion financière en Afrique"
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Digitalisation",
    description: "Comprendre les enjeux de la digitalisation des services financiers"
  },
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    title: "Expertise financière digitale",
    description: "Acquérir des connaissances solides en finance digitale et innovation"
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Projets concrets",
    description: "Contribuer à des projets de finance digitale dans des secteurs clés"
  }
]

// Programme basé sur le PDF
const programme = [
  {
    nom: "Trimestre 1 : Fondamentaux",
    credits: 30,
    ues: [
      { code: "UE 1", nom: "Généralités sur l'inclusion financière", credits: 3, heures: 36 },
      { code: "UE 2", nom: "Enjeux de la digitalisation", credits: 3, heures: 36 },
      { code: "UE 3", nom: "Concepts clés finance digitale", credits: 3, heures: 36 },
      { code: "UE 4", nom: "Modèles d'affaire en finance digitale", credits: 3, heures: 36 },
      { code: "S 1", nom: "Séminaire : Écosystème paiement numérique", credits: 3, heures: 36 },
      { code: "UE 5", nom: "Cadre réglementaire finance digitale", credits: 3, heures: 36 },
      { code: "UE 6", nom: "Mobile money : opérations et stratégies", credits: 3, heures: 36 },
      { code: "UE 7", nom: "Réseau distribution et marchand", credits: 3, heures: 36 },
      { code: "UE 8", nom: "Stratégies d'inclusion financière", credits: 3, heures: 36 },
      { code: "S 2", nom: "Séminaire : Concurrence mobile money", credits: 3, heures: 36 }
    ]
  },
  {
    nom: "Trimestre 2 : Spécialisation",
    credits: 30,
    ues: [
      { code: "UE 9", nom: "Gestion des risques en finance digitale", credits: 3, heures: 36 },
      { code: "UE 10", nom: "Éducation financière et numérique", credits: 3, heures: 36 },
      { code: "UE 11", nom: "Digitalisation administration (e-Gov)", credits: 3, heures: 36 },
      { code: "UE 12", nom: "Gestion de projet finance digitale", credits: 3, heures: 36 },
      { code: "S 3", nom: "Séminaire : Digitalisation secteurs clés", credits: 3, heures: 36 },
      { code: "UE 13", nom: "Transformation digitale", credits: 3, heures: 36 },
      { code: "UE 14", nom: "Digitalisation banque et microfinance", credits: 3, heures: 36 },
      { code: "UE 15", nom: "Partenariat et interopérabilité", credits: 3, heures: 36 },
      { code: "UE 16", nom: "Business des fintechs", credits: 3, heures: 36 },
      { code: "S 4", nom: "Séminaire : Épargne et crédit mobile", credits: 3, heures: 36 }
    ]
  },
  {
    nom: "Trimestre 3 : Technologies avancées",
    credits: 30,
    ues: [
      { code: "UE 17", nom: "Blockchain et cryptomonnaies", credits: 4, heures: 48 },
      { code: "UE 18", nom: "Intelligence artificielle secteur financier", credits: 4, heures: 48 },
      { code: "UE 19", nom: "Banque digitale & Open Banking", credits: 4, heures: 48 },
      { code: "S 5", nom: "Séminaire : Lancement startup fintech", credits: 6, heures: 72 },
      { code: "UE 20", nom: "E-commerce et paiement en ligne", credits: 4, heures: 48 },
      { code: "UE 21", nom: "Management du changement et innovation", credits: 4, heures: 48 },
      { code: "S 6", nom: "Séminaire : Neobank et Open banking", credits: 4, heures: 48 }
    ]
  },
  {
    nom: "Trimestre 4 : Projets professionnels",
    credits: 30,
    ues: [
      { code: "UE 22", nom: "Projet digitalisation institution financière", credits: 4, heures: 48 },
      { code: "UE 23", nom: "Projet lancement/renforcement fintech", credits: 4, heures: 48 },
      { code: "UE 24", nom: "Projet réformes réglementaires", credits: 4, heures: 48 },
      { code: "UE 25", nom: "Projet e-Gov (Digitalisation administration)", credits: 4, heures: 48 },
      { code: "UE 26", nom: "Projet digitalisation agricole (Agritech)", credits: 4, heures: 48 },
      { code: "UE 27", nom: "Soutenance mémoire", credits: 12, heures: 120 }
    ]
  }
]

// Public cible basé sur le PDF
const publicCible = [
  "Banques et Établissements Financiers",
  "Institutions de microfinance",
  "Opérateurs de transfert d'argent",
  "Opérateurs de téléphonie mobile",
  "Fintechs & Startups",
  "Compagnies d'assurance",
  "Cabinets de conseil",
  "Organisations Non Gouvernementales",
  "Autorités sectorielles financières",
  "Entreprises (Agriculture, Éducation, Transport, Santé)"
]

// Perspectives de carrière basées sur le PDF
const perspectivesCarriere = [
  "Chef projet Finance Digitale",
  "Directeur de projet banque digitale",
  "Chargé de transformation digitale",
  "Responsable d'études en Finance Digitale",
  "Responsable de développement digital",
  "Chef projet finTech & innovation",
  "Chef Département mobile money",
  "Consultant en Finance Digitale"
]

// Pièces à fournir basées sur le PDF
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

// Fonctions
const postulerMaintenant = () => {
  console.log("Redirection vers le formulaire de candidature")
}
</script>

<style scoped>
/* Styles spécifiques si besoin */
</style>