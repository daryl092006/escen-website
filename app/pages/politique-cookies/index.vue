<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb title="Politique des Cookies" subtitle="Gestion de vos préférences"
            description="Comprenez comment nous utilisons les cookies et comment vous pouvez gérer vos préférences pour protéger votre vie privée."
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Politique des Cookies' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Section principale -->
        <section class="py-16 md:py-20">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                    <!-- En-tête -->
                    <div class="mb-10 text-center">
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Politique d'Utilisation des Cookies
                        </h1>
                        <p class="text-gray-600 text-lg">
                            Dernière mise à jour : 1er Janvier 2026
                        </p>
                    </div>

                    <!-- Introduction -->
                    <div class="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                    Que sont les cookies ?
                                </h3>
                                <p class="text-gray-700">
                                    Les cookies sont de petits fichiers texte stockés sur votre appareil (ordinateur, tablette, smartphone) lorsque vous visitez notre site. Ils permettent de mémoriser vos préférences et d'améliorer votre expérience de navigation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Contenu principal -->
                    <div class="prose prose-lg max-w-none">
                        <!-- Types de cookies -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                Types de cookies utilisés
                            </h2>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <!-- Stockage nécessaire -->
                                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                            </svg>
                                        </div>
                                        <h3 class="text-lg font-bold text-gray-900">Stockage nécessaire</h3>
                                    </div>
                                    <p class="text-gray-700 mb-3">
                                        Le site mémorise votre choix de consentement dans le stockage local du navigateur. Ce mécanisme n'est pas un cookie.
                                    </p>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                            Mémorisation du choix accepter/refuser
                                        </li>
                                    </ul>
                                </div>

                                <!-- Traceurs analytiques -->
                                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                            </svg>
                                        </div>
                                        <h3 class="text-lg font-bold text-gray-900">Traceurs analytiques</h3>
                                    </div>
                                    <p class="text-gray-700 mb-3">
                                        Peuvent être activés pour mesurer l'utilisation du site. Ils ne sont chargés qu'après votre acceptation.
                                    </p>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            Statistiques de visite
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            Performance du site
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                            Amélioration continue
                                        </li>
                                    </ul>
                                </div>

                                <!-- Stockages fonctionnels -->
                                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                                            </svg>
                                        </div>
                                        <h3 class="text-lg font-bold text-gray-900">Stockages fonctionnels</h3>
                                    </div>
                                    <p class="text-gray-700 mb-3">
                                        Le stockage local conserve certaines données nécessaires aux fonctions que vous utilisez.
                                    </p>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                            Sauvegarde temporaire d'une candidature
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                            Informations de connexion à l'espace candidat
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                                            Ces données sont gérées par les fonctions du site, pas par le bandeau cookies
                                        </li>
                                    </ul>
                                </div>

                                <!-- Traceurs marketing -->
                                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                    <div class="flex items-center gap-3 mb-4">
                                        <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                                            </svg>
                                        </div>
                                        <h3 class="text-lg font-bold text-gray-900">Traceurs marketing</h3>
                                    </div>
                                    <p class="text-gray-700 mb-3">
                                        LinkedIn Insight Tag mesure les conversions et peut utiliser des cookies ou identifiants publicitaires. Il est chargé uniquement après votre acceptation.
                                    </p>
                                    <ul class="space-y-2 text-sm text-gray-600">
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                            Publicités ciblées
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                            Suivi des campagnes
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                                            Mesure de performance
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Gestion des cookies -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                Gérer vos préférences
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="border-l-4 border-[#01b4d5] pl-4 py-2">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                        Paramètres du navigateur
                                    </h3>
                                    <p class="text-gray-700 mb-4">
                                        Vous pouvez configurer votre navigateur pour accepter ou refuser les cookies, ou pour vous avertir lorsqu'un cookie est envoyé.
                                    </p>
                                    <div class="bg-gray-50 p-4 rounded-lg">
                                        <p class="text-gray-700 text-sm">
                                            <strong>Note :</strong> La désactivation complète des cookies peut empêcher certaines fonctionnalités de fonctionner correctement.
                                        </p>
                                    </div>
                                </div>

                                <div class="border-l-4 border-green-500 pl-4 py-2">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                        Outils de gestion
                                    </h3>
                                    <p class="text-gray-700 mb-4">
                                        Utilisez notre outil de gestion des cookies pour personnaliser vos préférences :
                                    </p>
                                    <button @click="openCookieSettings"
                                        class="inline-flex items-center gap-2 bg-[#01b4d5] text-white px-6 py-3 rounded-lg hover:bg-[#0056b3] transition-colors duration-300 font-medium">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        Gérer mes préférences cookies
                                    </button>
                                </div>

                                <!-- Guide par navigateur -->
                                <div class="mt-8">
                                    <h4 class="text-lg font-semibold text-gray-900 mb-4">
                                        Guides par navigateur :
                                    </h4>
                                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <a href="https://support.google.com/chrome/answer/95647" target="_blank"
                                            class="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div class="w-10 h-10 mb-2">
                                                <svg class="w-full h-full text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0124 11.971C24 18.57 18.627 24 12 24S0 18.57 0 11.971c0-6.6 5.373-11.942 12-11.942 1.825 0 3.557.41 5.132 1.124L15.45 6.654l.764 2.036z"/>
                                                    <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0124 11.971C24 18.57 18.627 24 12 24S0 18.57 0 11.971c0-6.6 5.373-11.942 12-11.942 1.825 0 3.557.41 5.132 1.124L15.45 6.654l.764 2.036z" fill="#EA4335"/>
                                                    <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0124 11.971C24 18.57 18.627 24 12 24S0 18.57 0 11.971c0-6.6 5.373-11.942 12-11.942 1.825 0 3.557.41 5.132 1.124L15.45 6.654l.764 2.036z" fill="#FBBC05"/>
                                                    <path d="M16.214 8.69l6.715-1.679A12.027 12.027 0 0124 11.971C24 18.57 18.627 24 12 24S0 18.57 0 11.971c0-6.6 5.373-11.942 12-11.942 1.825 0 3.557.41 5.132 1.124L15.45 6.654l.764 2.036z" fill="#34A853"/>
                                                </svg>
                                            </div>
                                            <span class="text-sm font-medium text-gray-700">Chrome</span>
                                        </a>
                                        <a href="https://support.mozilla.org/fr/kb/autoriser-bloquer-cookies-preferences-sites" target="_blank"
                                            class="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div class="w-10 h-10 mb-2">
                                                <svg class="w-full h-full text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M16.614 4.361c-1.432-1.244-3.189-1.952-5.078-2.021-.167.006-.333.019-.5.019-1.989 0-3.9.722-5.361 2.033-1.661 1.489-2.615 3.6-2.615 5.821 0 2.222.954 4.332 2.615 5.821 1.461 1.311 3.372 2.033 5.361 2.033 1.989 0 3.9-.722 5.361-2.033 1.661-1.489 2.615-3.6 2.615-5.821 0-2.222-.954-4.332-2.615-5.821zm-5.078 12.284c-2.833 0-5.139-2.306-5.139-5.139s2.306-5.139 5.139-5.139 5.139 2.306 5.139 5.139-2.306 5.139-5.139 5.139z"/>
                                                </svg>
                                            </div>
                                            <span class="text-sm font-medium text-gray-700">Firefox</span>
                                        </a>
                                        <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank"
                                            class="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div class="w-10 h-10 mb-2">
                                                <svg class="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.31-2.33 1.05-3.11z"/>
                                                </svg>
                                            </div>
                                            <span class="text-sm font-medium text-gray-700">Safari</span>
                                        </a>
                                        <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank"
                                            class="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                            <div class="w-10 h-10 mb-2">
                                                <svg class="w-full h-full text-green-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-10 8.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zm.75-14.25a.75.75 0 00-1.5 0v7.5a.75.75 0 001.5 0v-7.5zm0 10.5a.75.75 0 10-1.5 0 .75.75 0 001.5 0z"/>
                                                </svg>
                                            </div>
                                            <span class="text-sm font-medium text-gray-700">Edge</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Cookies spécifiques -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                Traceurs et stockages utilisés
                            </h2>
                            
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse">
                                    <thead>
                                        <tr class="bg-gray-50">
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Traceur ou stockage</th>
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Fournisseur</th>
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Type</th>
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Durée</th>
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Objectif</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        <tr class="hover:bg-gray-50">
                                            <td class="py-3 px-4 text-gray-700 font-medium">escen_cookie_consent</td>
                                            <td class="py-3 px-4 text-gray-600">ESCEN University</td>
                                            <td class="py-3 px-4">
                                                <span class="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Préférence</span>
                                            </td>
                                            <td class="py-3 px-4 text-gray-600">Jusqu'à suppression du stockage navigateur</td>
                                            <td class="py-3 px-4 text-gray-600">Mémoriser le choix accepter/refuser dans le stockage local (pas un cookie)</td>
                                        </tr>
                                        <tr class="hover:bg-gray-50">
                                            <td class="py-3 px-4 text-gray-700 font-medium">LinkedIn Insight Tag</td>
                                            <td class="py-3 px-4 text-gray-600">LinkedIn</td>
                                            <td class="py-3 px-4">
                                                <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Marketing</span>
                                            </td>
                                            <td class="py-3 px-4 text-gray-600">Selon les règles de LinkedIn</td>
                                            <td class="py-3 px-4 text-gray-600">Mesure des conversions ; chargé uniquement après acceptation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p class="text-sm text-gray-600 mt-4">
                                Les traceurs Google Analytics, Google Tag Manager ou Meta ne sont utilisés que si leur identifiant est configuré pour le site ; ils sont également bloqués avant votre acceptation. Les fonctions de connexion et de sauvegarde de candidature utilisent le stockage local du navigateur, pas un cookie ESCEN.
                            </p>
                        </div>

                        <!-- FAQ -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                Questions fréquentes
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-3">
                                        Les cookies sont-ils dangereux ?
                                    </h3>
                                    <p class="text-gray-700">
                                        Non, les cookies en eux-mêmes ne sont pas dangereux. Ce sont de simples fichiers texte qui ne peuvent pas exécuter de code ou propager de virus. Ils ne peuvent pas non plus être utilisés pour accéder à votre ordinateur.
                                    </p>
                                </div>
                                
                                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-3">
                                        Que se passe-t-il si je refuse tous les cookies ?
                                    </h3>
                                    <p class="text-gray-700 mb-3">
                                        Le site reste accessible et ses formulaires continuent de fonctionner. Les pixels publicitaires et de mesure activés pour le site ne sont pas chargés. Votre choix est mémorisé dans le stockage local de votre navigateur.
                                    </p>
                                </div>
                                
                                <div class="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-3">
                                        Comment puis-je voir quels cookies sont placés sur mon appareil ?
                                    </h3>
                                    <p class="text-gray-700">
                                        Vous pouvez consulter les cookies et le stockage local dans les outils de développement de votre navigateur (F12, puis « Application » ou « Stockage »). Le choix de consentement ESCEN est enregistré dans le stockage local, pas dans un cookie.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Contact -->
                        <div class="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h3 class="text-xl font-semibold text-gray-900 mb-4">
                                Besoin d'aide ?
                            </h3>
                            <p class="text-gray-700 mb-4">
                                Si vous avez des questions concernant notre politique des cookies, n'hésitez pas à nous contacter :
                            </p>
                            <div class="flex flex-col md:flex-row gap-4">
                                <a href="mailto:hello@escen.university"
                                    class="inline-flex items-center justify-center gap-2 bg-[#01b4d5] text-white px-6 py-3 rounded-lg hover:bg-[#0056b3] transition-colors duration-300 font-medium">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                    hello@escen.university
                                </a>
                                <a href="tel:+22898012727"
                                    class="inline-flex items-center justify-center gap-2 bg-white text-[#01b4d5] border border-[#01b4d5] px-6 py-3 rounded-lg hover:bg-[#01b4d5] hover:text-white transition-colors duration-300 font-medium">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                    +228 98 01 27 27
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Gestion des préférences cookies
const openCookieSettings = () => {
    // Déclenche l'événement pour réafficher la bannière de cookies située dans le layout
    window.dispatchEvent(new Event('open-cookie-banner'))
}
</script>

<style scoped>
/* Styles d'impression */
@media print {
    .min-h-screen {
        min-height: auto;
    }
    
    .bg-gradient-to-br {
        background: white !important;
    }
    
    .shadow-lg {
        box-shadow: none !important;
    }
    
    .rounded-2xl {
        border-radius: 0 !important;
    }
    
    /* Masquer les éléments non nécessaires à l'impression */
    button,
    a,
    .bg-blue-50,
    .hover\\:shadow-md {
        display: none !important;
    }
    
    /* Assurer une bonne impression */
    table {
        page-break-inside: auto;
    }
    
    tr {
        page-break-inside: avoid;
        page-break-after: auto;
    }
}
</style>
