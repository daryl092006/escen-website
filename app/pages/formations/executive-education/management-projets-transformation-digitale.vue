<template>
  <div class="min-h-screen bg-white">
    <!-- Header avec Breadcrumb -->
    <Breadcrumb 
      title="Executive Master Management de Projets & Transformation Digitale"
      subtitle="Transformation digitale & management de projets numériques"
      description="Concevoir et piloter des projets numériques innovants. Gérer l’innovation digitale et accompagner la transformation des entreprises."
      duration="Durée : 12 mois, 100% en ligne"
      backgroundImage="/formations/financedigital2.jpg"
      :breadcrumb="[
        { label: 'Accueil', href: '/' },
        { label: 'Formations', href: '/formations' },
        { label: 'Masters Executive', href: '/formations/executive-education' },
        { label: 'Management de Projets & Transformation Digitale' }
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

            <!-- Timeline des semestres -->
            <div class="space-y-8">
              <div v-for="(semestre, index) in programme" :key="index" 
                   class="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00b3d4] text-white font-bold">
                      {{ index + 1 }}
                    </span>
                    <h3 class="text-lg font-bold text-gray-900">{{ semestre.nom }}</h3>
                  </div>
                  <span class="px-3 py-1 bg-[#00b3d4]/10 text-[#00b3d4] rounded-full text-sm font-medium">
                    {{ semestre.credits }} ECTS
                  </span>
                </div>
                
                <div class="space-y-3">
                  <div v-for="(ue, ueIndex) in semestre.ues" :key="ueIndex" 
                       class="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100 hover:border-[#6cc6e2] transition-colors">
                    <div class="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-[#00b3d4]"></div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-800 text-sm">{{ ue.nom }}</h4>
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
                    <p class="text-sm text-gray-600">Executive Master</p>
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
                  <p class="text-sm opacity-90">12 mois (4 semestres)</p>
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
                  <h3 class="font-semibold mb-1">Conditions d'accès</h3>
                  <p class="text-sm opacity-90">Bac+4 (Master 1) ou équivalent</p>
                  <p class="text-xs opacity-75 mt-1">Min. 4 ans d’expérience professionnelle</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="p-2 rounded-lg bg-white/10 flex-shrink-0">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold mb-1">Certifications PMI</h3>
                  <p class="text-sm opacity-90">Préparation CAPM / PMP</p>
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
                  <span class="text-gray-600 text-sm">Scolarité</span>
                  <span class="text-xl font-bold text-[#00b3d4]">1 650 000 FCFA</span>
                </div>
                <div class="pt-3 border-t border-gray-200">
                  <div class="flex justify-between items-center">
                    <span class="font-bold text-gray-900">Total (Hors Certif)</span>
                    <span class="text-2xl font-bold text-[#202a51]">1 700 000 FCFA</span>
                  </div>
                </div>
              </div>
              
              <div class="p-4 bg-[#dbeff7] rounded-xl space-y-2">
                <p class="text-sm text-gray-800 font-semibold text-center mb-2">Options de Certification :</p>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-600">CAPM</span>
                  <span class="font-bold text-gray-900">+ 150 000 FCFA</span>
                </div>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-600">PMP</span>
                  <span class="font-bold text-gray-900">+ 350 000 FCFA</span>
                </div>
                <p class="text-xs text-gray-600 text-center mt-3 pt-3 border-t border-[#00b3d4]/20">
                  Les frais de certification CAPM/PMP sont optionnels et à régler avec l’inscription. Paiement de la scolarité possible en 4 tranches maximum.
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
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-sm">Pédagogie Pragmatique</h3>
                  <p class="text-xs text-gray-600">Études de cas africains et projets appliqués</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#00b3d4]/10">
                  <svg class="w-5 h-5 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-sm">100% En Ligne</h3>
                  <p class="text-xs text-gray-600">Classes virtuelles (lun, mer, ven 18h30-20h30)</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#00b3d4]/10">
                  <svg class="w-5 h-5 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 text-sm">Préparation PMI</h3>
                  <p class="text-xs text-gray-600">Option préparation PMP / CAPM intégrée</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
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
      </div>
    </main>

    <!-- Section Pièces à Fournir -->
    <section class="py-16 bg-gradient-to-br from-[#f0f9ff] to-[#dbeff7]">
      <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex-1">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00b3d4] text-white text-sm font-semibold mb-4">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Dossier de Candidature
              </div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Pièces à Fournir</h2>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(piece, index) in piecesAFournir" :key="index" 
                     class="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center flex-shrink-0">
                    <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
                  </div>
                  <span class="text-gray-700">{{ piece }}</span>
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
      brochure-name="Executive Master Management de Projets & Transformation Digitale"
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
const brochureUrl = "/pdf/Programme_Executive_Master_MP%26TD.pdf"

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
    a.download = 'Executive_Master_Management_Projets_Transformation_Digitale.pdf'
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

// Données pour les objectifs
const objectifs = [
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z", // Éclair
    title: "Conception & Pilotage",
    description: "Concevoir et piloter des projets numériques innovants."
  },
  {
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", // Tech
    title: "Gestion de l'Innovation",
    description: "Gérer l’innovation digitale et accompagner la transformation des entreprises."
  },
  {
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4", // Settings
    title: "Double Compétence",
    description: "Développer une double compétence : managériale/stratégique et technique/numérique."
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", // Check
    title: "Certifications Internationales",
    description: "Préparer à la certification CAPM et PMP du Project Management Institute (PMI)."
  }
]

// Programme basé sur le PDF
const programme = [
  {
    nom: "Semestre 1",
    credits: 30,
    ues: [
      { nom: "Fondamentaux du management de projets" },
      { nom: "Introduction aux technologies web" },
      { nom: "Fondamentaux du marketing digital" },
      { nom: "Analyse de données (web, digital, numérique)" },
      { nom: "Initiation à la transformation digitale" },
      { nom: "Séminaire (suivi de projet)" }
    ]
  },
  {
    nom: "Semestre 2",
    credits: 30,
    ues: [
      { nom: "Projets numériques et pilotage opérationnel" },
      { nom: "Numérique et société" },
      { nom: "Web design" },
      { nom: "Management des risques, de la qualité et des achats projets" },
      { nom: "Projet de transformation digitale (étude de cas : eGov)" },
      { nom: "Séminaire (suivi de projet)" }
    ]
  },
  {
    nom: "Semestre 3",
    credits: 30,
    ues: [
      { nom: "Management de projets avancé" },
      { nom: "Innovation et entrepreneuriat" },
      { nom: "Management de l’innovation et du changement" },
      { nom: "Intelligence Artificielle appliquée à la gestion de projets" },
      { nom: "Élaboration de business case pour un projet en entreprise" },
      { nom: "Séminaire (suivi de projet)" }
    ]
  },
  {
    nom: "Semestre 4",
    credits: 30,
    ues: [
      { nom: "Méthodologie d’élaboration de mémoire" },
      { nom: "Collecte et analyse de données" },
      { nom: "Soutenance de mémoire professionnel" },
      { nom: "Séminaire TIC : Tendances et Technologies" }
    ]
  }
]

// Public cible basé sur le PDF
const publicCible = [
  "Cadres et managers",
  "Chefs de projets (IT, digital, innovation, transformation)",
  "Consultants, experts, responsables métiers",
  "Professionnels souhaitant évoluer vers le digital",
  "Entrepreneurs technologiques"
]

// Perspectives de carrière basées sur le PDF
const perspectivesCarriere = [
  "Chef de projet digital",
  "Consultant en transformation digitale",
  "Directeur / Manager de projets",
  "Responsable PMO",
  "Responsable innovation et stratégie digitale",
  "Consultant IT/Digital",
  "Entrepreneur numérique",
  "Expert en organisation et modernisation processus"
]

// Pièces à fournir basées sur le PDF
const piecesAFournir = [
  "2 photos d’identité (format passeport)",
  "Copie de la pièce d’identité ou passeport",
  "Copie légalisée du dernier diplôme universitaire",
  "Attestation ou relevé de notes du niveau Master 1",
  "CV à jour"
]
</script>

<style scoped>
/* Styles spécifiques si besoin */
</style>