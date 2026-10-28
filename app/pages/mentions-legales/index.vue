<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb title="Mentions Légales" subtitle="Informations légales"
            description="Consultez les mentions légales relatives à l'éditeur, l'hébergeur et les conditions générales d'utilisation du site ESCEN University."
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Mentions Légales' }
            ]" backgroundImage="/valeurs/bg.jpg" /> 

        <!-- Section principale -->
        <section class="py-16 md:py-20">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                    <!-- En-tête -->
                    <div class="mb-10 text-center">
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Mentions Légales
                        </h1>
                        <p class="text-gray-600 text-lg">
                            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique
                        </p>
                    </div>

                    <!-- Contenu -->
                    <div class="prose prose-lg max-w-none">
                        <!-- Éditeur du site -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Éditeur du site
                            </h2>
                            
                            <div class="space-y-4">
                                <div class="bg-gray-50 p-6 rounded-xl">
                                    <h3 class="text-xl font-semibold text-gray-900 mb-4">ESCEN University</h3>
                                    <div class="space-y-3">
                                        <div class="flex items-start gap-3">
                                            <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                                <svg fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="font-medium text-gray-700">Adresse :</p>
                                                <p class="text-gray-600">Hountigomé, Rue en face Eglise Notre Dame du Liban, à 5 mn de l'aéroport de Lomé, Togo</p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                                <svg fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="font-medium text-gray-700">Email :</p>
                                                <a href="mailto:hello@escen.university" class="text-[#01b4d5] hover:underline">hello@escen.university</a>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                                <svg fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="font-medium text-gray-700">Téléphone :</p>
                                                <a href="tel:+22898012727" class="text-[#01b4d5] hover:underline">+228 98 01 27 27</a>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                                <svg fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="font-medium text-gray-700">Statut :</p>
                                                <p class="text-gray-600">Établissement d'enseignement supérieur privé</p>
                                            </div>
                                        </div>
                                        
                                        <div class="flex items-start gap-3">
                                            <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                                <svg fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p class="font-medium text-gray-700">Directeur de la publication :</p>
                                                <p class="text-gray-600">Directeur Général</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hébergeur -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Hébergeur du site
                            </h2>
                            
                            <div class="bg-gray-50 p-6 rounded-xl">
                                <h3 class="text-xl font-semibold text-gray-900 mb-4">[Nom de l'hébergeur]</h3>
                                <div class="space-y-3">
                                    <div class="flex items-start gap-3">
                                        <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-700">Raison sociale :</p>
                                            <p class="text-gray-600">[Raison sociale de l'hébergeur]</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-3">
                                        <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-700">Adresse :</p>
                                            <p class="text-gray-600">[Adresse complète de l'hébergeur]</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-3">
                                        <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-700">Téléphone :</p>
                                            <p class="text-gray-600">[Téléphone de l'hébergeur]</p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-start gap-3">
                                        <div class="w-6 h-6 text-[#01b4d5] flex-shrink-0">
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-700">Site web :</p>
                                            <span>Adresse de l’hébergeur à renseigner par l’établissement.</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                    <p class="text-gray-700 text-sm">
                                        <strong>Note :</strong> Ces informations sont fournies à titre indicatif et peuvent être modifiées. Pour les informations les plus récentes concernant notre hébergeur, veuillez nous contacter directement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Propriété intellectuelle -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Propriété intellectuelle
                            </h2>
                            
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    L'ensemble de ce site relève de la législation togolaise et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                                </p>
                                
                                <div class="border-l-4 border-[#01b4d5] pl-4 py-2">
                                    <p class="text-gray-700">
                                        La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                                    </p>
                                </div>
                                
                                <p class="text-gray-700">
                                    Les marques et logos figurant sur le site sont des marques déposées. Toute reproduction totale ou partielle de ces marques ou logos sans l'autorisation expresse d'ESCEN University est prohibée.
                                </p>
                                
                                <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                                    <p class="text-gray-700">
                                        <strong>Attention :</strong> Toute utilisation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions légales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Protection des données -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Protection des données personnelles
                            </h2>
                            
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Conformément à la loi n° 2019-19 du 20 décembre 2019 relative à la protection des données à caractère personnel au Togo et au Règlement Général sur la Protection des Données (RGPD) de l'Union Européenne, vous disposez d'un droit d'accès, de rectification, de modification et de suppression des données qui vous concernent.
                                </p>
                                
                                <div class="bg-gray-50 p-6 rounded-xl">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Vos droits</h3>
                                    <ul class="space-y-2 text-gray-700">
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Droit d'accès aux données vous concernant</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Droit de rectification des données inexactes</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Droit à l'effacement (droit à l'oubli)</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Droit à la limitation du traitement</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Droit d'opposition au traitement</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Droit à la portabilité des données</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <p class="text-gray-700">
                                    Pour exercer ces droits ou pour toute question concernant le traitement de vos données à caractère personnel, vous pouvez nous contacter :
                                </p>
                                
                                <div class="border border-gray-200 rounded-xl p-6">
                                    <p class="text-gray-700 mb-4">
                                        <strong>Par email :</strong> <a href="mailto:hello@escen.university" class="text-[#01b4d5] hover:underline">hello@escen.university</a>
                                    </p>
                                    <p class="text-gray-700">
                                        <strong>Par courrier :</strong> ESCEN University - Service Données Personnelles, Hountigomé, Rue en face Eglise Notre Dame du Liban, à 5 mn de l'aéroport de Lomé, Togo
                                    </p>
                                </div>
                                
                                <p class="text-gray-700">
                                    Pour plus d'informations détaillées sur notre politique de traitement des données personnelles, veuillez consulter notre <a href="/confidentialite" class="text-[#01b4d5] hover:underline">Politique de Confidentialité</a>.
                                </p>
                            </div>
                        </div>

                        <!-- Cookies -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Utilisation des cookies
                            </h2>
                            
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Le site ESCEN University peut être amené à utiliser des « cookies » pour traiter des statistiques et des informations sur le trafic, faciliter la navigation et améliorer le service pour le confort de l'utilisateur.
                                </p>
                                
                                <p class="text-gray-700">
                                    Conformément à la législation en vigueur, ESCEN University a procédé à la mise à jour de sa politique de confidentialité concernant les cookies. L'utilisateur peut à tout moment exprimer et modifier ses souhaits en matière de cookies, par les moyens décrits ci-dessous.
                                </p>
                                
                                <div class="bg-gray-50 p-6 rounded-xl">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Gestion des cookies</h3>
                                    <p class="text-gray-700 mb-4">
                                        L'utilisateur peut configurer son navigateur pour :
                                    </p>
                                    <ul class="space-y-2 text-gray-700">
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Accepter ou refuser les cookies</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Être averti lorsqu'un cookie est déposé</span>
                                        </li>
                                        <li class="flex items-start gap-2">
                                            <div class="w-2 h-2 bg-[#01b4d5] rounded-full mt-2"></div>
                                            <span>Supprimer régulièrement les cookies</span>
                                        </li>
                                    </ul>
                                </div>
                                
                                <p class="text-gray-700">
                                    Pour plus d'informations détaillées sur notre utilisation des cookies, veuillez consulter notre <a href="/politique-cookies" class="text-[#01b4d5] hover:underline">Politique d'Utilisation des Cookies</a>.
                                </p>
                            </div>
                        </div>

                        <!-- Responsabilité -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Limitation de responsabilité
                            </h2>
                            
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    ESCEN University met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés, mais ne saurait être tenue pour responsable des erreurs, d'une absence de disponibilité des fonctionnalités et/ou de la présence de virus sur son site.
                                </p>
                                
                                <div class="border-l-4 border-red-400 pl-4 py-2">
                                    <p class="text-gray-700">
                                        Les informations fournies par ESCEN University le sont à titre indicatif et ne sauraient dispenser l'utilisateur d'une analyse complémentaire et personnalisée.
                                    </p>
                                </div>
                                
                                <p class="text-gray-700">
                                    ESCEN University ne saurait garantir l'exactitude, la complétude, l'actualité des informations diffusées sur son site. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                                </p>
                                
                                <div class="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <p class="text-gray-700">
                                        <strong>Important :</strong> ESCEN University décline toute responsabilité en cas de difficultés d'accès à son site ou d'interruptions dans la connexion, quelles qu'en soient les causes.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Liens hypertextes -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Liens hypertextes
                            </h2>
                            
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Le site ESCEN University peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers d'autres sites ne engagent pas la responsabilité d'ESCEN University quant au contenu de ces sites.
                                </p>
                                
                                <p class="text-gray-700">
                                    Il est interdit de créer un lien vers le site sans l'autorisation expresse d'ESCEN University. En tout état de cause, ESCEN University se réserve la possibilité de supprimer à tout moment un lien hypertexte pointant vers son site s'il estime que ce lien ne respecte pas sa politique éditoriale.
                                </p>
                                
                                <div class="bg-gray-50 p-4 rounded-lg">
                                    <p class="text-gray-700 text-sm">
                                        <strong>Note :</strong> Si vous souhaitez créer un lien vers notre site, veuillez nous contacter préalablement à l'adresse suivante : <a href="mailto:hello@escen.university" class="text-[#01b4d5] hover:underline">hello@escen.university</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Droit applicable -->
                        <div class="mb-12">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Droit applicable
                            </h2>
                            
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Les présentes mentions légales sont régies par le droit togolais. En cas de différend et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Lomé.
                                </p>
                                
                                <div class="border border-gray-200 rounded-xl p-6">
                                    <h3 class="text-lg font-semibold text-gray-900 mb-3">Coordonnées de contact</h3>
                                    <p class="text-gray-700 mb-2">
                                        Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
                                    </p>
                                    <div class="space-y-2 text-gray-700">
                                        <p><a href="mailto:hello@escen.university" class="text-[#01b4d5] hover:underline">hello@escen.university</a></p>
                                        <p> <a href="tel:+22898012727" class="text-[#01b4d5] hover:underline">+228 98 01 27 27</a></p>
                                        <p>Hountigomé, Rue en face Eglise Notre Dame du Liban, à 5 mn de l'aéroport de Lomé, Togo</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Mise à jour -->
                        <div class="mt-12 pt-8 border-t border-gray-200">
                            <div class="bg-blue-50 p-6 rounded-xl">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">Mise à jour des mentions légales</h3>
                                <p class="text-gray-700">
                                    ESCEN University se réserve le droit de modifier et de mettre à jour, sans préavis, les présentes mentions légales et l'ensemble des éléments et produits présentés sur le site. Toutes les modifications s'imposent aux utilisateurs qui doivent consulter régulièrement les présentes mentions légales.
                                </p>
                                <p class="text-gray-700 mt-2">
                                    <strong>Date de dernière mise à jour :</strong> 1er Janvier 2026
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Aucune logique JavaScript spécifique nécessaire pour cette page
</script>

<style scoped>
/* Styles spécifiques pour la page des mentions légales */
.prose ul {
    list-style-type: none;
    padding-left: 0;
}

.prose ul li {
    position: relative;
    padding-left: 1.5rem;
}

.prose ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.7rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #01b4d5;
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
    
    /* Assurer une bonne impression */
    a {
        color: #01b4d5 !important;
        text-decoration: underline !important;
    }
    
    .bg-blue-50,
    .bg-gray-50,
    .bg-red-50,
    .bg-yellow-50 {
        background-color: #f8fafc !important;
    }
}
</style>