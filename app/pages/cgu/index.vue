<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb title="Conditions Générales d'Utilisation" subtitle="Informations légales"
            description="Consultez nos conditions générales d'utilisation pour comprendre les règles qui régissent l'utilisation de notre site web et de nos services."
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Conditions Générales' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Section principale -->
        <section class="py-16 md:py-20">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="bg-white rounded-2xl shadow-lg p-6 md:p-10">
                    <!-- En-tête -->
                    <div class="mb-10 text-center">
                        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Conditions Générales d'Utilisation
                        </h1>
                        <p class="text-gray-600 text-lg">
                            Dernière mise à jour : 1er Janvier 2026
                        </p>
                    </div>

                    <!-- Contenu des CGU -->
                    <div class="prose prose-lg max-w-none">
                        <!-- Introduction -->
                        <div class="mb-10">
                            <p class="text-gray-700 leading-relaxed mb-6">
                                Les présentes conditions générales d'utilisation (ci-après dénommées « CGU ») ont pour
                                objet de définir les modalités de mise à disposition des services du site ESCEN
                                University (ci-après dénommé « le Site ») et les conditions d'utilisation des services
                                par l'Utilisateur.
                            </p>
                            <p class="text-gray-700 leading-relaxed">
                                Tout accès et/ou utilisation du Site suppose l'acceptation et le respect de l'ensemble
                                des termes des présentes conditions et leur acceptation inconditionnelle. Elles
                                constituent donc un contrat entre ESCEN University et l'Utilisateur.
                            </p>
                        </div>

                        <!-- Article 1 : Mentions légales -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 1 - Mentions légales
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    <strong>Éditeur du Site :</strong> ESCEN University
                                </p>
                                <p class="text-gray-700">
                                    <strong>Forme juridique :</strong> Établissement d'enseignement supérieur
                                </p>
                                <p class="text-gray-700">
                                    <strong>Siège social :</strong> Hountigomé, Rue en face Eglise Notre Dame du Liban,
                                    à 5 mn de l'aéroport de Lomé
                                </p>
                                <p class="text-gray-700">
                                    <strong>Téléphone :</strong> +228 98 01 27 27
                                </p>
                                <p class="text-gray-700">
                                    <strong>Email :</strong> hello@escen.university
                                </p>
                                <p class="text-gray-700">
                                    <strong>Directeur de la publication :</strong> Direction ESCEN University
                                </p>
                                <p class="text-gray-700">
                                    <strong>Hébergeur :</strong> [Nom de l'hébergeur]
                                </p>
                            </div>
                        </div>

                        <!-- Article 2 : Définitions -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 2 - Définitions
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    <strong>« Site »</strong> désigne le site accessible à l'adresse escen.university
                                    ainsi que l'ensemble de ses sous-domaines.
                                </p>
                                <p class="text-gray-700">
                                    <strong>« Éditeur »</strong> désigne ESCEN University, personne morale ou physique
                                    responsable de l'édition et du contenu du Site.
                                </p>
                                <p class="text-gray-700">
                                    <strong>« Utilisateur »</strong> désigne toute personne physique ou morale utilisant
                                    le Site ou l'un des services proposés sur le Site.
                                </p>
                                <p class="text-gray-700">
                                    <strong>« Contenu »</strong> désigne l'ensemble des éléments constituants les
                                    informations présentes sur le Site, notamment textes, images, vidéos.
                                </p>
                                <p class="text-gray-700">
                                    <strong>« Services »</strong> désigne l'ensemble des services mis à disposition des
                                    Utilisateurs sur le Site.
                                </p>
                            </div>
                        </div>

                        <!-- Article 3 : Objet -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 3 - Objet
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Les présentes CGU ont pour objet de définir les conditions dans lesquelles
                                    l'Utilisateur peut accéder et utiliser le Site.
                                </p>
                                <p class="text-gray-700">
                                    Le Site a pour objet de présenter les formations, services et activités d'ESCEN
                                    University, première école digitale en Afrique francophone, et de permettre aux
                                    visiteurs de s'informer sur nos offres de formation et de nous contacter.
                                </p>
                                <p class="text-gray-700">
                                    L'accès au Site est gratuit, sauf pour certains services spécifiques qui pourraient
                                    faire l'objet de conditions particulières.
                                </p>
                            </div>
                        </div>

                        <!-- Article 4 : Accès au site -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 4 - Accès au site
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Le Site est accessible gratuitement à tout Utilisateur disposant d'un accès à
                                    Internet. Tous les coûts afférents à l'accès au Site (matériel informatique,
                                    logiciels, connexion Internet, etc.) sont à la charge de l'Utilisateur.
                                </p>
                                <p class="text-gray-700">
                                    L'Éditeur met en œuvre les solutions techniques à sa disposition pour permettre
                                    l'accès au Site 24 heures sur 24, 7 jours sur 7. Il pourra toutefois à tout moment
                                    suspendre, limiter ou interrompre l'accès au Site pour procéder à des mises à jour,
                                    des modifications de son contenu ou pour toute autre action jugée nécessaire au bon
                                    fonctionnement du Site.
                                </p>
                                <p class="text-gray-700">
                                    L'Éditeur ne saurait être tenu responsable des difficultés de connexion dues à un
                                    défaut ou à une surcharge du réseau Internet.
                                </p>
                            </div>
                        </div>

                        <!-- Article 5 : Propriété intellectuelle -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 5 - Propriété intellectuelle
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    L'ensemble des éléments du Site (textes, graphismes, logos, images, vidéos, icônes,
                                    sons, logiciels, etc.) sont la propriété exclusive d'ESCEN University ou de ses
                                    partenaires et sont protégés par les lois en vigueur sur la propriété
                                    intellectuelle.
                                </p>
                                <p class="text-gray-700">
                                    Toute reproduction, représentation, modification, publication, adaptation de tout ou
                                    partie des éléments du Site, quel que soit le moyen ou le procédé utilisé, est
                                    interdite, sauf autorisation écrite préalable d'ESCEN University.
                                </p>
                                <p class="text-gray-700">
                                    Toute exploitation non autorisée du Site ou de l'un quelconque des éléments qu'il
                                    contient sera considérée comme constitutive d'une contrefaçon et poursuivie
                                    conformément aux dispositions des articles L.335-2 et suivants du Code de la
                                    propriété intellectuelle.
                                </p>
                                <p class="text-gray-700">
                                    Les marques et logos figurant sur le Site sont des marques déposées par ESCEN
                                    University ou ses partenaires. Toute reproduction, imitation ou utilisation, totale
                                    ou partielle, de ces marques est interdite sans autorisation préalable.
                                </p>
                            </div>
                        </div>

                        <!-- Article 6 : Données personnelles -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 6 - Données personnelles
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    L'Utilisateur est informé que la collecte et le traitement de ses données
                                    personnelles s'effectuent dans le respect de la vie privée conformément à la loi n°
                                    2019-19 du 20 décembre 2019 relative à la protection des données à caractère
                                    personnel au Togo et au Règlement Général sur la Protection des Données (RGPD).
                                </p>
                                <p class="text-gray-700">
                                    Les données collectées sur le Site sont nécessaires pour :
                                </p>
                                <ul class="list-disc pl-6 text-gray-700 space-y-2">
                                    <li>Répondre aux demandes d'information des Utilisateurs</li>
                                    <li>Gérer les inscriptions aux formations</li>
                                    <li>Envoyer des communications relatives à nos activités</li>
                                    <li>Améliorer nos services et l'expérience utilisateur</li>
                                </ul>
                                <p class="text-gray-700">
                                    L'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et
                                    d'opposition de ses données personnelles. Ce droit peut être exercé en contactant
                                    ESCEN University à l'adresse email suivante : hello@escen.university
                                </p>
                                <p class="text-gray-700">
                                    Pour plus d'informations sur le traitement de vos données personnelles, veuillez
                                    consulter notre <a href="/confidentialite"
                                        class="text-[#01b4d5] hover:underline">Politique de Confidentialité</a>.
                                </p>
                            </div>
                        </div>

                        <!-- Article 7 : Responsabilités -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 7 - Responsabilités
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    L'Éditeur s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à
                                    jour des informations diffusées sur le Site, dont il se réserve le droit de
                                    corriger, à tout moment et sans préavis, le contenu.
                                </p>
                                <p class="text-gray-700">
                                    L'Éditeur ne garantit pas l'exactitude, la précision, l'exhaustivité ou la
                                    pertinence des informations mises à disposition sur le Site.
                                </p>
                                <p class="text-gray-700">
                                    L'Utilisateur déclare connaître les caractéristiques et les limites d'Internet,
                                    notamment en ce qui concerne les performances techniques, les temps de réponse pour
                                    consulter, interroger ou transférer des informations, les risques d'interruption, et
                                    plus généralement, les risques inhérents à toute connexion et transmission sur
                                    Internet.
                                </p>
                                <p class="text-gray-700">
                                    L'Éditeur ne saurait être tenu responsable des dommages directs ou indirects causés
                                    au matériel de l'Utilisateur lors de l'accès au Site, et résultant soit de
                                    l'utilisation d'un matériel ne répondant pas aux spécifications techniques
                                    indiquées, soit de l'apparition d'un bug ou d'une incompatibilité.
                                </p>
                                <p class="text-gray-700">
                                    L'Utilisateur est responsable de l'utilisation qu'il fait du Site et de son contenu.
                                    Toute mise en ligne de contenu illicite peut donner lieu à des poursuites
                                    judiciaires.
                                </p>
                            </div>
                        </div>

                        <!-- Article 8 : Liens hypertextes -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 8 - Liens hypertextes
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Le Site peut contenir des liens hypertextes vers d'autres sites Internet. L'Éditeur
                                    ne dispose d'aucun moyen pour contrôler les sites en connexion avec son Site et
                                    n'assume aucune responsabilité quant à leur contenu.
                                </p>
                                <p class="text-gray-700">
                                    L'Utilisateur est informé que l'Éditeur n'autorise pas la mise en place de liens
                                    hypertextes vers le Site sans son autorisation écrite préalable. En tout état de
                                    cause, l'Éditeur se réserve la possibilité de supprimer à tout moment un lien
                                    hypertexte pointant vers le Site s'il estime que ce lien ne respecte pas sa politique
                                    éditoriale.
                                </p>
                            </div>
                        </div>

                        <!-- Article 9 : Cookies -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 9 - Cookies
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Le Site peut utiliser des « cookies » permettant de traiter des statistiques et des
                                    informations sur le trafic, de faciliter la navigation et d'améliorer le service
                                    pour le confort de l'Utilisateur.
                                </p>
                                <p class="text-gray-700">
                                    L'Utilisateur peut s'opposer à l'enregistrement de ces « cookies » en configurant
                                    son navigateur. Pour plus d'informations, consultez notre <a
                                        href="/politique-cookies" class="text-[#01b4d5] hover:underline">Politique en
                                        matière de Cookies</a>.
                                </p>
                            </div>
                        </div>

                        <!-- Article 10 : Évolution des CGU -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 10 - Évolution des conditions générales d'utilisation
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    L'Éditeur se réserve le droit de modifier à tout moment et sans préavis le contenu
                                    du Site ou les services qui y sont proposés, et/ou d'interrompre temporairement ou
                                    définitivement tout ou partie des services.
                                </p>
                                <p class="text-gray-700">
                                    L'Éditeur se réserve également le droit de modifier à tout moment les présentes CGU,
                                    notamment pour s'adapter aux évolutions législatives, réglementaires ou
                                    jurisprudentielles.
                                </p>
                                <p class="text-gray-700">
                                    Les nouvelles conditions générales d'utilisation seront, le cas échéant, portées à
                                    la connaissance des Utilisateurs par mise en ligne sur le Site. Elles seront
                                    réputées acceptées sans réserve par tout Utilisateur qui accède au Site postérieurement
                                    à leur mise en ligne.
                                </p>
                            </div>
                        </div>

                        <!-- Article 11 : Droit applicable et juridiction compétente -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 11 - Droit applicable et juridiction compétente
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Les présentes conditions générales d'utilisation sont régies par le droit togolais.
                                </p>
                                <p class="text-gray-700">
                                    En cas de litige relatif à l'interprétation et/ou à l'exécution des présentes
                                    conditions générales d'utilisation, les parties s'efforceront de régler le litige à
                                    l'amiable.
                                </p>
                                <p class="text-gray-700">
                                    À défaut de règlement amiable dans un délai de trente (30) jours à compter de la
                                    réception de la notification du litige, tout différend sera porté devant les
                                    tribunaux compétents de Lomé.
                                </p>
                            </div>
                        </div>

                        <!-- Article 12 : Contact -->
                        <div class="mb-10">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-[#01b4d5]">
                                Article 12 - Contact
                            </h2>
                            <div class="space-y-4">
                                <p class="text-gray-700">
                                    Pour toute question, information sur les produits présentés sur le Site, ou
                                    concernant le Site lui-même, l'Utilisateur peut laisser un message à l'adresse
                                    suivante : hello@escen.university
                                </p>
                                <p class="text-gray-700">
                                    Téléphone : +228 98 01 27 27
                                </p>
                                <p class="text-gray-700">
                                    Adresse : Hountigomé, Rue en face Eglise Notre Dame du Liban, à 5 mn de l'aéroport
                                    de Lomé
                                </p>
                            </div>
                        </div>

                        <!-- Signature -->
                        <div class="mt-12 pt-8 border-t border-gray-200">
                            <p class="text-gray-600 text-center italic">
                                Fait à Lomé, le 1er Janvier 2026
                            </p>
                            <p class="text-gray-800 font-semibold text-center mt-4">
                                Pour ESCEN University
                            </p>
                        </div>
                    </div>

                    <!-- Bouton d'impression -->
                   
                </div>
            </div>
        </section>

        <!-- Section d'information -->
        <section class="py-12 bg-white">
            <div class="container mx-auto px-4 max-w-4xl">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">Protection des données</h3>
                        <p class="text-gray-600 text-sm">Nous respectons votre vie privée et protégeons vos données</p>
                    </div>
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">Sécurité renforcée</h3>
                        <p class="text-gray-600 text-sm">Toutes nos communications sont sécurisées</p>
                    </div>
                    <div class="text-center">
                        <div
                            class="w-16 h-16 bg-[#01b4d5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 class="font-bold text-gray-900 mb-2">Questions ?</h3>
                        <p class="text-gray-600 text-sm">Contactez-nous pour toute interrogation</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Fonction pour imprimer la page
const printPage = () => {
    window.print()
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
    .bg-white:not(.prose),
    section.bg-white {
        display: none !important;
    }
    
    /* Assurer une bonne impression */
    .prose {
        max-width: 100% !important;
        font-size: 12pt;
        line-height: 1.5;
    }
    
    h1, h2, h3 {
        page-break-after: avoid;
    }
    
    p {
        page-break-inside: avoid;
    }
}
</style>