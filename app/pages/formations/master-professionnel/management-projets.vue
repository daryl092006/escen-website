<template>
  <div class="min-h-screen bg-white">
    <Breadcrumb 
      title="Master Professionnel en Management de Projets Numériques"
      subtitle="Management de Projets Numériques"
      description="Formation d'excellence aux métiers du management et de la gestion de projets dans l'environnement numérique"
      duration="Durée : 18 mois, 100% en ligne"
      backgroundImage="/formations/managementprojet.jpg"
      :breadcrumb="[
        { label: 'Accueil', href: '/' },
        { label: 'Formations', href: '/formations' },
        { label: 'Masters Professionnels', href: '/formations/master-professionnel' },
        { label: 'Management de Projets Numériques' }
      ]" />
   
    <!-- Contenu principal -->
    <main class="container mx-auto px-4 lg:px-6 max-w-7xl py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Colonne de gauche - Contenu principal -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Section identification -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#202a51] to-[#00b3d4]">
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
                  <p class="text-gray-900 font-medium">Sciences Économiques et de Gestion</p>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-700 text-sm mb-1">Mention</h3>
                  <p class="text-gray-900 font-medium">Sciences de Gestion</p>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-700 text-sm mb-1">Grade</h3>
                  <p class="text-gray-900 font-medium">Master Professionnel</p>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <h3 class="font-semibold text-gray-700 text-sm mb-1">Spécialité</h3>
                  <p class="text-gray-900 font-medium">Management de Projets & Transformation Digitale</p>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-700 text-sm mb-1">Durée</h3>
                  <p class="text-gray-900 font-medium">18 mois</p>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-700 text-sm mb-1">Agrément</h3>
                  <p class="text-gray-900 font-medium">N° 0102/2021/MESR/SG/DES</p>
                </div>
              </div>
            </div>
           
            <div class="mt-8 p-6 bg-gradient-to-r from-[#dbeff7] to-[#f0f9ff] rounded-xl">
              <div class="flex items-center gap-4">
                <div class="p-3 rounded-lg bg-white">
                  <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-gray-900 mb-1">Diplôme Reconnu par l'État</h4>
                  <p class="text-gray-600 text-sm">Le Master professionnel en Management de Projets Numériques est un diplôme reconnu par l'État Togolais</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Section modalités -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Modalités de Formation</h2>
            </div>
           
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-gradient-to-r from-[#dbeff7] to-[#f0f9ff] p-6 rounded-xl">
                <div class="flex items-center gap-4 mb-4">
                  <div class="p-3 rounded-lg bg-white">
                    <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900">Format flexible</h3>
                    <p class="text-gray-600 text-sm">100% en ligne</p>
                  </div>
                </div>
                <p class="text-gray-700">Cours dispensés en ligne avec des classes virtuelles, études de cas et projets réels.</p>
              </div>
              
              <div class="bg-gradient-to-r from-[#dbeff7] to-[#f0f9ff] p-6 rounded-xl">
                <div class="flex items-center gap-4 mb-4">
                  <div class="p-3 rounded-lg bg-white">
                    <svg class="w-6 h-6 text-[#00b3d4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-bold text-gray-900">Rythme de formation</h3>
                    <p class="text-gray-600 text-sm">Lundi, Mercredi, Vendredi</p>
                  </div>
                </div>
                <p class="text-gray-700">De 18h30 à 21h GMT. Un programme intensif permettant d'acquérir des compétences pratiques tout en conservant son activité professionnelle.</p>
              </div>
            </div>
          </section>

          <!-- Section objectifs et compétences -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#00b3d4]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Objectifs et Compétences</h2>
            </div>
            
            <div class="mb-8">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Objectif de la formation</h3>
              <div class="p-6 bg-gradient-to-r from-[#dbeff7] to-[#f0f9ff] rounded-xl">
                <p class="text-gray-800 text-lg font-medium">
                  Concevoir et piloter des projets numériques, gérer l'innovation digitale, développer une double compétence managériale et technique, et préparer les certifications CAPM® et PMP®.
                </p>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-6">Compétences attendues</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(competence, index) in competences" :key="index"
                  class="group bg-gradient-to-br from-white to-[#f8fcff] p-6 rounded-xl border border-gray-100 hover:border-[#00b3d4] hover:shadow-lg transition-all duration-300">
                  <div class="flex items-start gap-4">
                    <div class="flex-shrink-0">
                      <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center">
                        <span class="text-white font-bold">{{ index + 1 }}</span>
                      </div>
                    </div>
                    <div>
                      <p class="text-gray-700 group-hover:text-[#202a51] transition-colors duration-300">{{ competence }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Section perspectives carrière -->
          <section class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-8">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#202a51] to-[#0056b3]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-gray-900">Perspectives de Carrière</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(metier, index) in metiers" :key="index"
                class="group bg-gradient-to-br from-white to-[#f8fcff] p-6 rounded-xl border border-gray-100 hover:border-[#00b3d4] hover:shadow-lg transition-all duration-300">
                <div class="flex flex-col items-center text-center">
                  <div class="p-4 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="metier.icon" />
                    </svg>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-3 group-hover:text-[#00b3d4] transition-colors duration-300">{{ metier.title }}</h3>
                  <p class="text-gray-600 text-sm">{{ metier.description }}</p>
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
            
            <div class="mb-8">
              <h3 class="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#00b3d4] text-white text-sm font-bold">✓</span>
                Profil d'entrée
              </h3>
              <div class="p-6 bg-gradient-to-r from-[#dbeff7] to-[#f0f9ff] rounded-xl">
                <p class="text-gray-800 font-medium">
                  Cadres, managers, chefs de projets IT/digital, consultants, responsables métiers, entrepreneurs.
                  <br><br>
                  <span class="font-bold">Condition :</span> Titulaire d'une Licence (BAC+3) ou équivalent.
                </p>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-6">Pièces à fournir</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div v-for="(piece, index) in piecesAFournir" :key="index"
                  class="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#00b3d4] transition-colors duration-300">
                  <div class="w-8 h-8 rounded-full bg-[#dbeff7] flex items-center justify-center flex-shrink-0">
                    <span class="text-[#00b3d4] font-bold text-sm">{{ index + 1 }}</span>
                  </div>
                  <span class="text-gray-700">{{ piece }}</span>
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

          <!-- Frais de scolarité -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2]">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-gray-900">Frais de Scolarité</h2>
            </div>
            
            <div class="space-y-6">
              <div v-for="(annee, index) in fraisScolarite" :key="index"
                :class="['p-6 rounded-xl border transition-all duration-300 hover:shadow-md', annee.featured ? 'border-[#00b3d4] bg-[#f0f9ff]' : 'border-gray-200']">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-bold text-gray-900">{{ annee.niveau }}</h3>
                  <span class="px-3 py-1 bg-[#dbeff7] text-[#202a51] rounded-full text-sm font-medium">
                    {{ annee.duree }}
                  </span>
                </div>
                
                <div class="space-y-3">
                  <div class="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span class="text-gray-600">Droit d'inscription</span>
                    <span class="font-bold text-gray-900">{{ annee.inscription }}</span>
                  </div>
                  <div class="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span class="text-gray-600">Frais de scolarité</span>
                    <span class="font-bold text-[#00b3d4] text-lg">{{ annee.scolarite }}</span>
                  </div>
                  <div class="pt-3">
                    <div class="flex justify-between items-center">
                      <span class="font-bold text-gray-900">Total annuel</span>
                      <span class="text-xl font-bold text-[#202a51]">{{ annee.total }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-[#dbeff7] rounded-xl">
              <p class="text-sm text-gray-800 font-semibold text-center mb-2">Options de Certification :</p>
              <div class="flex justify-between items-center text-sm mb-1">
                <span class="text-gray-600">CAPM®</span>
                <span class="font-bold text-gray-900">+ 150 000 FCFA</span>
              </div>
              <div class="flex justify-between items-center text-sm mb-3">
                <span class="text-gray-600">PMP®</span>
                <span class="font-bold text-gray-900">+ 350 000 FCFA</span>
              </div>
              <p class="text-xs text-gray-500 text-center pt-2 border-t border-[#00b3d4]/20">
                Les frais de scolarité sont payables en tranches (bimestriel, trimestriel, 5 tranches ou annuel). Cf. Service scolarité pour plus de détails.
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

          <!-- Contact -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 rounded-xl bg-gradient-to-br from-[#6cc6e2] to-[#dbeff7]">
                <svg class="w-6 h-6 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 class="text-xl font-bold text-gray-900">Contact & Informations</h2>
            </div>
            
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#dbeff7]">
                  <svg class="w-4 h-4 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">Campus</h4>
                  <p class="text-sm text-gray-600">Lomé - Togo</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#dbeff7]">
                  <svg class="w-4 h-4 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">Téléphone</h4>
                  <p class="text-sm text-gray-600">(+228) 98 01 27 27</p>
                  <p class="text-sm text-gray-600">(+228) 92 30 87 87</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#dbeff7]">
                  <svg class="w-4 h-4 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">Email</h4>
                  <p class="text-sm text-gray-600">admission@escen.university</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="p-2 rounded-lg bg-[#dbeff7]">
                  <svg class="w-4 h-4 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900">Site web</h4>
                  <p class="text-sm text-gray-600">www.escen.university</p>
                </div>
              </div>
            </div>
          </div>

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

    <!-- Section méthodologies de gestion -->
    <section class="py-16 bg-gradient-to-br from-[#dbeff7] to-[#f0f9ff]">
      <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Méthodologies de Gestion de Projets</h2>
          <p class="text-gray-600 max-w-3xl mx-auto">Maîtrisez les principales méthodologies utilisées dans la gestion de projets numériques</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Méthodes Agiles</h3>
            <p class="text-gray-600">Scrum, Kanban, Lean : approches flexibles adaptées aux projets numériques avec des cycles de développement rapides et itératifs.</p>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#202a51] to-[#0056b3] flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Gestion Traditionnelle</h3>
            <p class="text-gray-600">Waterfall, Prince2 : méthodologies structurées pour des projets à exigences stables avec des phases bien définies.</p>
          </div>
          
          <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Outils Numériques</h3>
            <p class="text-gray-600">Jira, Trello, Asana, Microsoft Project : maîtrise des outils modernes de planification et de suivi de projets.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section compétences clés -->
    <section class="py-16 bg-white border-t border-gray-100">
      <div class="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div class="bg-gradient-to-r from-[#202a51]/5 to-[#00b3d4]/5 rounded-2xl p-8">
          <div class="flex items-center gap-4 mb-8">
            <div class="p-4 rounded-xl bg-white shadow-lg">
              <svg class="w-8 h-8 text-[#202a51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900">Compétences Clés du Manager de Projets</h2>
              <p class="text-gray-600">Les compétences essentielles pour réussir dans le management de projets numériques</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="(competence, index) in competencesCles" :key="index" 
              class="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#00b3d4] transition-colors duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-[#00b3d4] to-[#6cc6e2] flex items-center justify-center mb-4">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="competence.icon" />
                  </svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2">{{ competence.title }}</h3>
                <p class="text-sm text-gray-600">{{ competence.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal Brochure -->
    <BrochureModal
      :is-open="isModalOpen"
      brochure-name="Master Professionnel en Management de Projets & Transformation Digitale"
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
const brochureUrl = "/pdf/MASTER%20PROFESSIONNEL%20EN%20MANAGEMENT%20DE%20PROJETS%20-%20TRANSFORMATION%20DIGITALE.pdf"

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

// Compétences attendues
const competences = [
  "Veille et analyse des usages numériques",
  "Coordination des partenaires et animation de processus d'innovation",
  "Planification, gestion des risques, management d'équipes projet",
  "Élaboration de stratégies digitales et pilotage du changement"
]

// Données pour les métiers
const metiers = [
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Chef de projets digitaux",
    description: "Pilotage de projets digitaux de la conception à la livraison"
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Consultant en transformation digitale",
    description: "Accompagnement des organisations dans leur transformation numérique"
  },
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    title: "Manager de projets / PMO",
    description: "Gestion stratégique des portefeuilles de projets"
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Responsable innovation",
    description: "Pilotage et intégration des innovations technologiques"
  },
  {
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    title: "Consultant IT/Digital",
    description: "Conseil et expertise en systèmes d'information et digitalisation"
  },
  {
    icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
    title: "Entrepreneur numérique",
    description: "Création et gestion de startups technologiques innovantes"
  }
]

// Pièces à fournir
const piecesAFournir = [
  "2 photos d'identité",
  "Copie de la pièce nationale d'identité ou passeport",
  "Copie légalisée du diplôme de licence ou équivalent",
  "CV à jour"
]

// Données pour le résumé
const infosResume = [
  {
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    title: "Type de formation",
    value: "Master Professionnel"
  },
  {
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Domaine",
    value: "Sciences Économiques et de Gestion"
  },
  {
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    title: "Durée",
    value: "18 mois"
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Modalités",
    value: "100% en ligne (Lun, Mer, Ven)"
  }
]

// Données pour les frais de scolarité
const fraisScolarite = [
  {
    niveau: "Master 1",
    duree: "1ère année",
    inscription: "50 000 FCFA",
    scolarite: "950 000 FCFA",
    total: "1 000 000 FCFA",
    featured: true
  },
  {
    niveau: "Master 2",
    duree: "2ème année",
    inscription: "50 000 FCFA",
    scolarite: "950 000 FCFA",
    total: "1 000 000 FCFA",
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

// Compétences clés du manager de projets
const competencesCles = [
  {
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    title: "Planification",
    description: "Définition des objectifs, délais et ressources nécessaires"
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Leadership",
    description: "Animation et motivation des équipes projets"
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Gestion des risques",
    description: "Identification et mitigation des risques projet"
  },
  {
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
    title: "Communication",
    description: "Communication efficace avec toutes les parties prenantes"
  }
]

// Fonctions
const inscrireMaintenant = () => {
  console.log("Redirection vers le formulaire d'inscription")
  // Implémenter la logique d'inscription ici
}
</script>

<style scoped>
/* Styles spécifiques si besoin */
</style>