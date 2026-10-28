<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb title="Politique de Confidentialité" subtitle="Protection de vos données"
            description="Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément aux réglementations en vigueur."
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Politique de Confidentialité' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Section principale -->
        <section class="py-16 md:py-20">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                    <!-- En-tête -->
                    <div class="mb-10 text-center">
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Politique de Confidentialité
                        </h1>
                        <p class="text-gray-600 text-lg">
                            Dernière mise à jour : 1er Janvier 2026
                        </p>
                    </div>

                    <!-- Introduction -->
                    <div class="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0">
                                <div class="w-12 h-12 bg-[#01b4d5] rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                                    Engagement de confidentialité
                                </h3>
                                <p class="text-gray-700">
                                    ESCEN University s'engage à protéger votre vie privée et à traiter vos données personnelles avec transparence, loyauté et respect. Cette politique explique comment nous collectons, utilisons, partageons et protégeons vos informations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Contenu principal -->
                    <div class="prose prose-lg max-w-none">
                        <!-- Collecte des données -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                1. Collecte de vos données personnelles
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="border-l-4 border-[#01b4d5] pl-4 py-2">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                                        Données que nous collectons
                                    </h3>
                                    <p class="text-gray-700 mb-3">
                                        Nous collectons différentes catégories de données personnelles selon les services que vous utilisez :
                                    </p>
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <!-- Données d'identité -->
                                    <div class="border border-gray-200 rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                                                <svg class="w-6 h-6 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                                </svg>
                                            </div>
                                            <h4 class="font-semibold text-gray-900">Données d'identité</h4>
                                        </div>
                                        <ul class="space-y-2 text-sm text-gray-600">
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Nom et prénom
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Adresse email
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Numéro de téléphone
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Adresse postale
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <!-- Données académiques -->
                                    <div class="border border-gray-200 rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                                                <svg class="w-6 h-6 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                                                </svg>
                                            </div>
                                            <h4 class="font-semibold text-gray-900">Données académiques</h4>
                                        </div>
                                        <ul class="space-y-2 text-sm text-gray-600">
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Niveau d'études
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Parcours académique
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Formation souhaitée
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Objectifs professionnels
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <!-- Données de navigation -->
                                    <div class="border border-gray-200 rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                                                <svg class="w-6 h-6 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                                                </svg>
                                            </div>
                                            <h4 class="font-semibold text-gray-900">Données techniques</h4>
                                        </div>
                                        <ul class="space-y-2 text-sm text-gray-600">
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Adresse IP
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Type de navigateur
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Pages consultées
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Données de cookies
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <!-- Données de communication -->
                                    <div class="border border-gray-200 rounded-xl p-6">
                                        <div class="flex items-center gap-3 mb-4">
                                            <div class="w-10 h-10 bg-[#01b4d5]/10 rounded-lg flex items-center justify-center">
                                                <svg class="w-6 h-6 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                                </svg>
                                            </div>
                                            <h4 class="font-semibold text-gray-900">Données de communication</h4>
                                        </div>
                                        <ul class="space-y-2 text-sm text-gray-600">
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Échanges par email
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Conversations téléphoniques
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Messages via formulaires
                                            </li>
                                            <li class="flex items-center gap-2">
                                                <div class="w-1.5 h-1.5 bg-[#01b4d5] rounded-full"></div>
                                                Feedback et témoignages
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <p class="text-gray-700 text-sm">
                                        <strong>Note :</strong> Nous ne collectons que les données strictement nécessaires à la réalisation des finalités pour lesquelles elles sont traitées.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Finalités du traitement -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                2. Finalités du traitement
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="border border-gray-200 rounded-xl p-6">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Pourquoi traitons-nous vos données ?</h3>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div class="space-y-4">
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Gestion des inscriptions</h4>
                                                    <p class="text-gray-600 text-sm">Traitement des candidatures et inscriptions aux formations</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Communication</h4>
                                                    <p class="text-gray-600 text-sm">Réponse à vos demandes d'information et suivi</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Amélioration des services</h4>
                                                    <p class="text-gray-600 text-sm">Analyse et optimisation de l'expérience utilisateur</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="space-y-4">
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Sécurité</h4>
                                                    <p class="text-gray-600 text-sm">Protection de nos systèmes et prévention des fraudes</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Marketing</h4>
                                                    <p class="text-gray-600 text-sm">Envoi d'informations sur nos formations et événements</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Conformité légale</h4>
                                                    <p class="text-gray-600 text-sm">Respect des obligations légales et réglementaires</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                    <p class="text-gray-700">
                                        <strong>Consentement :</strong> Pour certaines finalités (notamment le marketing), nous basons le traitement sur votre consentement explicite. Vous pouvez retirer votre consentement à tout moment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Base légale -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                3. Base légale du traitement
                            </h2>
                            
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse">
                                    <thead>
                                        <tr class="bg-gray-50">
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Base légale</th>
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Description</th>
                                            <th class="py-3 px-4 text-left font-semibold text-gray-700 border-b">Exemples</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-gray-200">
                                        <tr class="hover:bg-gray-50">
                                            <td class="py-3 px-4 font-medium text-gray-700">Consentement</td>
                                            <td class="py-3 px-4 text-gray-600">Vous avez donné votre accord explicite</td>
                                            <td class="py-3 px-4 text-gray-600">Newsletter, communications marketing</td>
                                        </tr>
                                        <tr class="hover:bg-gray-50">
                                            <td class="py-3 px-4 font-medium text-gray-700">Exécution du contrat</td>
                                            <td class="py-3 px-4 text-gray-600">Nécessaire pour exécuter nos services</td>
                                            <td class="py-3 px-4 text-gray-600">Inscription à une formation, paiement</td>
                                        </tr>
                                        <tr class="hover:bg-gray-50">
                                            <td class="py-3 px-4 font-medium text-gray-700">Obligation légale</td>
                                            <td class="py-3 px-4 text-gray-600">Imposé par la loi</td>
                                            <td class="py-3 px-4 text-gray-600">Facturation, conservation des données</td>
                                        </tr>
                                        <tr class="hover:bg-gray-50">
                                            <td class="py-3 px-4 font-medium text-gray-700">Intérêt légitime</td>
                                            <td class="py-3 px-4 text-gray-600">Nécessaire pour nos activités légitimes</td>
                                            <td class="py-3 px-4 text-gray-600">Sécurité, amélioration des services</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Partage des données -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                4. Partage de vos données
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="border border-gray-200 rounded-xl p-6">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Avec qui partageons-nous vos données ?</h3>
                                    
                                    <div class="space-y-4">
                                        <div class="flex items-start gap-3">
                                            <div class="flex-shrink-0 mt-1">
                                                <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                                            </div>
                                            <div>
                                                <h4 class="font-medium text-gray-900">Prestataires de services</h4>
                                                <p class="text-gray-600 text-sm">Hébergeurs, services de paiement, outils de communication</p>
                                                <p class="text-gray-500 text-xs mt-1">Ces prestataires sont soumis à des obligations contractuelles strictes</p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div class="flex-shrink-0 mt-1">
                                                <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            </div>
                                            <div>
                                                <h4 class="font-medium text-gray-900">Partenaires académiques</h4>
                                                <p class="text-gray-600 text-sm">Universités partenaires, organisations de certification</p>
                                                <p class="text-gray-500 text-xs mt-1">Uniquement avec votre consentement explicite</p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div class="flex-shrink-0 mt-1">
                                                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                                            </div>
                                            <div>
                                                <h4 class="font-medium text-gray-900">Autorités légales</h4>
                                                <p class="text-gray-600 text-sm">Sur demande légale ou pour protéger nos droits</p>
                                                <p class="text-gray-500 text-xs mt-1">Conformément aux obligations légales</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <p class="text-gray-700 text-sm">
                                        <strong>Important :</strong> Nous ne vendons jamais vos données personnelles à des tiers. Tous nos partenaires sont sélectionnés pour leur engagement en matière de protection des données.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Sécurité -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                5. Sécurité des données
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div class="border border-gray-200 rounded-xl p-6 text-center">
                                        <div class="w-12 h-12 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg class="w-6 h-6 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                            </svg>
                                        </div>
                                        <h4 class="font-semibold text-gray-900 mb-2">Chiffrement</h4>
                                        <p class="text-gray-600 text-sm">Toutes les données sensibles sont chiffrées en transit et au repos</p>
                                    </div>
                                    
                                    <div class="border border-gray-200 rounded-xl p-6 text-center">
                                        <div class="w-12 h-12 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg class="w-6 h-6 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                            </svg>
                                        </div>
                                        <h4 class="font-semibold text-gray-900 mb-2">Accès restreint</h4>
                                        <p class="text-gray-600 text-sm">Accès aux données limité au personnel autorisé</p>
                                    </div>
                                    
                                    <div class="border border-gray-200 rounded-xl p-6 text-center">
                                        <div class="w-12 h-12 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <svg class="w-6 h-6 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                            </svg>
                                        </div>
                                        <h4 class="font-semibold text-gray-900 mb-2">Audits réguliers</h4>
                                        <p class="text-gray-600 text-sm">Contrôles de sécurité réguliers et mises à jour</p>
                                    </div>
                                </div>
                                
                                <div class="bg-green-50 p-4 rounded-lg border border-green-100">
                                    <p class="text-gray-700">
                                        <strong>Notification des violations :</strong> En cas de violation de données à caractère personnel, nous nous engageons à notifier l'autorité de contrôle et les personnes concernées dans les délais légaux.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Durée de conservation -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                6. Durée de conservation
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="border border-gray-200 rounded-xl p-6">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Combien de temps conservons-nous vos données ?</h3>
                                    
                                    <div class="space-y-4">
                                        <div class="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span class="font-medium text-gray-700">Données des étudiants</span>
                                            <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Durée des études + 5 ans</span>
                                        </div>
                                        
                                        <div class="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span class="font-medium text-gray-700">Prospects et contacts</span>
                                            <span class="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">3 ans après dernier contact</span>
                                        </div>
                                        
                                        <div class="flex justify-between items-center py-3 border-b border-gray-100">
                                            <span class="font-medium text-gray-700">Données de navigation</span>
                                            <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">13 mois maximum</span>
                                        </div>
                                        
                                        <div class="flex justify-between items-center py-3">
                                            <span class="font-medium text-gray-700">Données comptables</span>
                                            <span class="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">10 ans</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <p class="text-gray-700 text-sm">
                                        <strong>Note :</strong> Ces durées peuvent être prolongées pour répondre à des obligations légales ou réglementaires, ou pour la gestion de contentieux.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Vos droits -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                7. Vos droits
                            </h2>
                            
                            <div class="space-y-6">
                                <div class="border border-gray-200 rounded-xl p-6">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Exercer vos droits</h3>
                                    
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <!-- Droits de gauche -->
                                        <div class="space-y-4">
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Droit d'accès</h4>
                                                    <p class="text-gray-600 text-sm">Obtenir confirmation du traitement et accès à vos données</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Droit de rectification</h4>
                                                    <p class="text-gray-600 text-sm">Faire corriger des données inexactes ou incomplètes</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Droit à l'effacement</h4>
                                                    <p class="text-gray-600 text-sm">Obtenir l'effacement de vos données ("droit à l'oubli")</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Droits de droite -->
                                        <div class="space-y-4">
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Droit à la limitation</h4>
                                                    <p class="text-gray-600 text-sm">Restreindre temporairement le traitement</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Droit d'opposition</h4>
                                                    <p class="text-gray-600 text-sm">Vous opposer au traitement pour motifs légitimes</p>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-start gap-3">
                                                <div class="flex-shrink-0 mt-1">
                                                    <div class="w-3 h-3 bg-[#01b4d5] rounded-full"></div>
                                                </div>
                                                <div>
                                                    <h4 class="font-medium text-gray-900">Droit à la portabilité</h4>
                                                    <p class="text-gray-600 text-sm">Recevoir vos données dans un format structuré</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Comment exercer ses droits -->
                                <div class="bg-blue-50 p-6 rounded-xl">
                                    <h4 class="text-lg font-semibold text-gray-900 mb-3">Comment exercer vos droits ?</h4>
                                    <p class="text-gray-700 mb-4">
                                        Pour exercer vos droits ou pour toute question concernant vos données personnelles, vous pouvez nous contacter :
                                    </p>
                                    
                                    <div class="space-y-3">
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="font-medium text-gray-700">Par email</p>
                                                <a href="mailto:hello@escen.university" class="text-[#01b4d5] hover:underline text-sm">hello@escen.university</a>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-center gap-3">
                                            <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                                <svg class="w-4 h-4 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="font-medium text-gray-700">Par courrier</p>
                                                <p class="text-gray-600 text-sm">ESCEN University - Service Données Personnelles, Hountigomé, Lomé, Togo</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="mt-4 p-4 bg-white rounded-lg">
                                        <p class="text-gray-700 text-sm">
                                            <strong>Réponse :</strong> Nous nous engageons à répondre à votre demande dans un délai maximum d'un mois. Une pièce d'identité pourra vous être demandée pour vérifier votre identité.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Contact DPO -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                8. Délégué à la Protection des Données (DPO)
                            </h2>
                            
                            <div class="border border-gray-200 rounded-xl p-6">
                                <div class="flex items-start gap-4">
                                    <div class="flex-shrink-0">
                                        <div class="w-16 h-16 bg-[#01b4d5]/10 rounded-full flex items-center justify-center">
                                            <svg class="w-8 h-8 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Notre Délégué à la Protection des Données</h3>
                                        <p class="text-gray-700 mb-4">
                                            ESCEN University a désigné un Délégué à la Protection des Données (DPO) chargé de veiller au respect des réglementations en matière de protection des données.
                                        </p>
                                        
                                        <div class="space-y-2">
                                            <p class="text-gray-700">
                                                <strong>Contact du DPO :</strong>
                                            </p>
                                            <p class="text-gray-600">
                                                 <a href="mailto:hello@escen.university" class="text-[#01b4d5] hover:underline">hello@escen.university</a>
                                            </p>
                                            <p class="text-gray-600">
                                                 <a href="tel:+22898012727" class="text-[#01b4d5] hover:underline">+228 98 01 27 27</a> (poste DPO)
                                            </p>
                                        </div>
                                        
                                        <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                                            <p class="text-gray-700 text-sm">
                                                Vous pouvez contacter directement notre DPO pour toute question concernant le traitement de vos données personnelles ou pour déposer une réclamation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Réclamation -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-[#01b4d5]">
                                9. Réclamation auprès de l'autorité de contrôle
                            </h2>
                            
                            <div class="bg-red-50 p-6 rounded-xl border border-red-100">
                                <div class="flex items-start gap-3">
                                    <div class="flex-shrink-0 mt-1">
                                        <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.954-.833-2.724 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Votre droit de réclamation</h3>
                                        <p class="text-gray-700 mb-4">
                                            Si vous estimez que le traitement de vos données personnelles n'est pas conforme aux réglementations en vigueur, vous avez le droit d'introduire une réclamation auprès de l'autorité de contrôle compétente.
                                        </p>
                                        
                                        <div class="bg-white p-4 rounded-lg">
                                            <h4 class="font-medium text-gray-900 mb-2">Au Togo :</h4>
                                            <p class="text-gray-600">
                                                <strong>HAAC - Haute Autorité de l'Audiovisuel et de la Communication</strong><br>
                                                BP 3412 Lomé, Togo<br>
                                                Tél : +228 22 21 43 31<br>
                                                Email : info@haac.tg
                                            </p>
                                        </div>
                                        
                                        <div class="bg-white p-4 rounded-lg mt-3">
                                            <h4 class="font-medium text-gray-900 mb-2">En France :</h4>
                                            <p class="text-gray-600">
                                                <strong>CNIL - Commission Nationale de l'Informatique et des Libertés</strong><br>
                                                3 Place de Fontenoy, 75007 Paris, France<br>
                                                Tél : +33 1 53 73 22 22<br>
                                                Site : <a href="https://www.cnil.fr" target="_blank" class="text-[#01b4d5] hover:underline">www.cnil.fr</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mise à jour -->
                        <div class="mt-12 pt-8 border-t border-gray-200">
                            <div class="bg-gray-50 p-6 rounded-xl">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Mise à jour de la politique de confidentialité</h3>
                                <p class="text-gray-700 mb-4">
                                    Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment pour nous adapter aux évolutions légales, réglementaires ou technologiques. Les modifications entreront en vigueur dès leur publication sur notre site.
                                </p>
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-700">
                                            <strong>Date de dernière mise à jour :</strong> 1er Janvier 2026
                                        </p>
                                        <p class="text-gray-600 text-sm mt-1">
                                            Version 1.0
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Fonction pour imprimer la page
const printPage = () => {
    window.print()
}
</script>

<style scoped>
/* Styles spécifiques pour la page de politique de confidentialité */
.prose table {
    width: 100%;
    border-collapse: collapse;
}

.prose table th,
.prose table td {
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    text-align: left;
}

.prose table th {
    background-color: #f9fafb;
    font-weight: 600;
}

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
    
    /* Masquer les boutons d'impression lors de l'impression */
    button {
        display: none !important;
    }
    
    /* Assurer une bonne impression des tableaux */
    table {
        page-break-inside: auto;
    }
    
    tr {
        page-break-inside: avoid;
        page-break-after: auto;
    }
}
</style>