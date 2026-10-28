<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb :title="article.title" :subtitle="getCategoryName(article.category)"
            :description="article.excerpt" :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: article.title }
            ]" :backgroundImage="article.image" overlay />

        <!-- Contenu Principal -->
        <main class="container mx-auto px-4 sm:px-6 py-8 lg:py-12">
            <div class="max-w-4xl mx-auto">
                <div class="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
                    <!-- Image Hero de l'article -->
                    <div class="relative h-64 md:h-80 lg:h-96">
                        <img 
                            :src="article.image" 
                            :alt="article.title"
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        
                        <!-- Badge Catégorie -->
                        <div class="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
                            <span class="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#01b4d5] capitalize shadow-lg border border-white/20">
                                {{ getCategoryName(article.category) }}
                            </span>
                        </div>

                        <!-- Badge Featured -->
                        <div v-if="article.featured" class="absolute top-6 right-6 lg:top-8 lg:right-8">
                            <span class="px-4 py-2 bg-yellow-500 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2 border border-yellow-600">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                Article en vedette
                            </span>
                        </div>
                    </div>

                    <!-- En-tête de l'article -->
                    <div class="p-6 lg:p-8 border-b border-gray-100">
                        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                            <!-- Informations Auteur -->
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-full flex items-center justify-center text-white font-bold">
                                    {{ article.author.charAt(0) }}
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900">{{ article.author }}</h3>
                                    <p class="text-sm text-gray-600">Expert en {{ getExpertise(article.category) }}</p>
                                </div>
                            </div>

                            <!-- Métadonnées -->
                            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{{ article.readTime }} de lecture</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>{{ article.date }}</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                    </svg>
                                    <span>{{ article.wordCount }} mots</span>
                                </div>
                            </div>
                        </div>

                        <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                            {{ article.title }}
                        </h1>

                        <!-- Tags -->
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tag in article.tags" :key="tag" 
                                  class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
                                {{ tag }}
                            </span>
                        </div>
                    </div>

                    <!-- Contenu de l'article -->
                    <div class="p-6 lg:p-8">
                        <!-- Introduction -->
                        <div class="prose prose-lg max-w-none mb-8">
                            <p class="text-lg text-gray-700 leading-relaxed">
                                {{ article.fullContent.introduction }}
                            </p>
                        </div>

                        <!-- Sections principales -->
                        <div class="space-y-8">
                            <div v-for="section in article.fullContent.sections" :key="section.id" class="scroll-mt-20" :id="'section-' + section.id">
                                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span class="w-2 h-8 bg-[#01b4d5] rounded-full"></span>
                                    {{ section.title }}
                                </h2>
                                
                                <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                                    <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex" class="mb-4">
                                        {{ paragraph }}
                                    </p>
                                    
                                    <!-- Points clés -->
                                    <div v-if="section.keyPoints" class="bg-blue-50 border-l-4 border-[#01b4d5] p-6 rounded-r-lg my-6">
                                        <h3 class="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                            <svg class="w-5 h-5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                            </svg>
                                            Points clés
                                        </h3>
                                        <ul class="space-y-2">
                                            <li v-for="(point, pointIndex) in section.keyPoints" :key="pointIndex" 
                                                class="flex items-start gap-2">
                                                <svg class="w-4 h-4 text-[#01b4d5] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                                <span>{{ point }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Citation -->
                        <div v-if="article.fullContent.quote" class="my-10 p-8 bg-gradient-to-r from-[#01b4d5] to-[#0056b3] rounded-2xl text-white">
                            <svg class="w-10 h-10 mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p class="text-xl italic mb-2">{{ article.fullContent.quote.text }}</p>
                            <p class="font-semibold">— {{ article.fullContent.quote.author }}</p>
                        </div>

                        <!-- Conclusion -->
                        <div class="prose prose-lg max-w-none mt-10 pt-8 border-t border-gray-200">
                            <h3 class="text-2xl font-bold text-gray-900 mb-4">Conclusion</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                {{ article.fullContent.conclusion }}
                            </p>
                        </div>
                    </div>

                    <!-- Pied d'article -->
                    <div class="p-6 lg:p-8 bg-gray-50 border-t border-gray-200">
                        <!-- Partager l'article -->
                        <div class="mb-8">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">Partager cet article</h3>
                            <div class="flex gap-3">
                                <button v-for="social in socialShares" :key="social.name"
                                        @click="shareArticle(social.name)"
                                        class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-[#01b4d5] hover:text-[#01b4d5] transition-all">
                                    <component :is="social.icon" class="w-5 h-5" />
                                    <span class="hidden sm:inline">{{ social.label }}</span>
                                </button>
                            </div>
                        </div>

                        <!-- Auteur détaillé -->
                        <div class="bg-white p-6 rounded-xl border border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900 mb-4">À propos de l'auteur</h3>
                            <div class="flex flex-col md:flex-row gap-6">
                                <div class="flex-shrink-0">
                                    <div class="w-20 h-20 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                                        {{ article.author.charAt(0) }}
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <h4 class="text-xl font-bold text-gray-900 mb-2">{{ article.author }}</h4>
                                    <p class="text-gray-600 mb-3">{{ article.authorBio }}</p>
                                    <div class="flex gap-3">
                                        <span v-for="expertise in article.authorExpertise" :key="expertise"
                                              class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                            {{ expertise }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Articles similaires -->
                <div class="mt-12 lg:mt-16">
                    <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Articles similaires</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        <article v-for="related in relatedArticles" :key="related.id"
                                 @click="goToArticle(related.id)"
                                 class="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 cursor-pointer">
                            <div class="relative h-48 overflow-hidden">
                                <img :src="related.image" :alt="related.title" 
                                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                <div class="absolute top-3 left-3">
                                    <span class="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#01b4d5]">
                                        {{ getCategoryName(related.category) }}
                                    </span>
                                </div>
                            </div>
                            <div class="p-4 lg:p-6">
                                <h3 class="font-bold text-gray-900 mb-2 group-hover:text-[#01b4d5] transition-colors line-clamp-2">
                                    {{ related.title }}
                                </h3>
                                <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {{ related.excerpt }}
                                </p>
                                <div class="flex items-center justify-between text-xs text-gray-500">
                                    <span>{{ related.readTime }}</span>
                                    <span>{{ related.date }}</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>

                <!-- Commentaires (optionnel) -->
                <div class="mt-12 lg:mt-16">
                    <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Commentaires ({{ article.comments.length }})</h2>
                    <div class="space-y-6">
                        <div v-for="comment in article.comments" :key="comment.id" 
                             class="bg-white p-6 rounded-xl border border-gray-200">
                            <div class="flex items-center gap-3 mb-4">
                                <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
                                    {{ comment.author.charAt(0) }}
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-900">{{ comment.author }}</h4>
                                    <p class="text-sm text-gray-500">{{ comment.date }}</p>
                                </div>
                            </div>
                            <p class="text-gray-700">{{ comment.content }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Importer les icônes pour les réseaux sociaux
import { 
    FacebookIcon, 
    TwitterIcon, 
    LinkedinIcon, 
    LinkIcon, 
    MailIcon 
} from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()
const articleId = parseInt(route.params.id)

// Données sociales
const socialShares = [
    { name: 'facebook', label: 'Facebook', icon: FacebookIcon },
    { name: 'twitter', label: 'Twitter', icon: TwitterIcon },
    { name: 'linkedin', label: 'LinkedIn', icon: LinkedinIcon },
    { name: 'copy', label: 'Copier le lien', icon: LinkIcon },
    { name: 'email', label: 'Email', icon: MailIcon }
]

// Article principal avec contenu complet
const article = ref({
    id: 1,
    title: "Rencontre avec le Ministre de l'Enseignement Supérieur et de la Recherche",
    excerpt: "La délégation d'ESCEN reçue par le Ministre Kanka-Malik Natchaba pour discuter de l'avenir de l'enseignement supérieur numérique.",
    category: "event",
    author: "Dr. Sophie Martin",
    authorBio: "Directrice de la Recherche et de l'Innovation à ESCEN, experte en transformation digitale de l'éducation avec 15 ans d'expérience.",
    authorExpertise: ["Éducation numérique", "Innovation pédagogique", "Politique éducative"],
    date: "15 Nov 2024",
    readTime: "5 min",
    wordCount: 1200,
    featured: true,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Éducation", "Politique", "Rencontre officielle", "ESCEN"],
    fullContent: {
        introduction: "La délégation d'ESCEN, conduite par le Directeur Général Adjoint Jean-Rene Gangnito, a eu l'immense privilège d'être reçue par le Ministre de l'Enseignement Supérieur et de la Recherche, Kanka-Malik Natchaba. Cette rencontre historique marque un tournant majeur dans la reconnaissance de l'enseignement supérieur numérique au Togo.",
        sections: [
            {
                id: 1,
                title: "Le contexte de la rencontre",
                paragraphs: [
                    "Dans un contexte de transformation digitale accélérée, l'ESCEN s'est positionnée comme un acteur majeur de l'enseignement supérieur numérique en Afrique francophone. La rencontre avec le Ministre Natchaba s'inscrit dans une volonté partagée de moderniser l'écosystème éducatif togolais.",
                    "Le Ministre a particulièrement salué l'approche innovante d'ESCEN, combinant excellence académique, adaptabilité aux réalités africaines et ouverture internationale. Cette reconnaissance institutionnelle ouvre de nouvelles perspectives pour le développement des formations digitales au Togo."
                ],
                keyPoints: [
                    "Reconnaissance officielle de l'enseignement numérique",
                    "Alignement avec les politiques éducatives nationales",
                    "Opportunités de développement pour les étudiants togolais"
                ]
            },
            {
                id: 2,
                title: "Les discussions stratégiques",
                paragraphs: [
                    "Les échanges ont porté sur plusieurs axes stratégiques : l'intégration des compétences digitales dans les cursus traditionnels, la reconnaissance des diplômes en ligne, et le développement de partenariats public-privé pour faciliter l'accès aux formations numériques.",
                    "Le Ministre a exprimé son soutien à la création de programmes hybrides combinant présentiel et distanciel, une approche particulièrement adaptée au contexte togolais où l'accès aux infrastructures numériques est en pleine expansion."
                ],
                keyPoints: [
                    "Intégration des compétences digitales dans les cursus",
                    "Reconnaissance des diplômes en ligne",
                    "Développement de partenariats stratégiques"
                ]
            },
            {
                id: 3,
                title: "Les perspectives d'avenir",
                paragraphs: [
                    "Cette rencontre a posé les bases d'une collaboration renforcée entre ESCEN et le ministère. Plusieurs projets concrets ont été évoqués : la création d'un observatoire des métiers du numérique, le développement de programmes de recherche appliquée, et l'organisation de hackathons nationaux.",
                    "Le Ministre a également insisté sur l'importance de l'inclusion numérique, soulignant la nécessité de rendre les formations accessibles aux régions les plus éloignées. ESCEN s'est engagé à développer des solutions adaptées, notamment avec des contenus disponibles hors ligne."
                ]
            }
        ],
        quote: {
            text: "La transformation numérique de l'éducation n'est pas une option, c'est une nécessité pour préparer nos jeunes aux défis du 21e siècle.",
            author: "Kanka-Malik Natchaba, Ministre de l'Enseignement Supérieur et de la Recherche"
        },
        conclusion: "Cette rencontre historique marque une étape décisive dans la reconnaissance de l'enseignement supérieur numérique au Togo. Les engagements pris ouvrent la voie à une collaboration fructueuse entre ESCEN et les institutions nationales, avec pour objectif commun de former la nouvelle génération de leaders digitaux africains. L'avenir de l'éducation togolaise s'écrit aujourd'hui, et le numérique en sera indéniablement un pilier essentiel."
    },
    comments: [
        {
            id: 1,
            author: "Jean Koffi",
            date: "16 Nov 2024",
            content: "Excellent article ! Cette rencontre montre bien l'importance de moderniser notre système éducatif. Félicitations à toute l'équipe ESCEN !"
        },
        {
            id: 2,
            author: "Marie Akofa",
            date: "17 Nov 2024",
            content: "En tant qu'étudiante en digital marketing à ESCEN, je suis fière de voir notre école reconnue au plus haut niveau. Cela donne encore plus de valeur à notre diplôme !"
        }
    ]
})

// Articles similaires
const relatedArticles = ref([
    {
        id: 2,
        title: "Les compétences digitales indispensables en 2024",
        excerpt: "Analyse des compétences techniques et soft skills qui feront la différence sur le marché de l'emploi numérique cette année.",
        category: "career",
        date: "12 Nov 2024",
        readTime: "4 min",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "L'IA dans le marketing digital : tendances 2024",
        excerpt: "Comment l'intelligence artificielle révolutionne les stratégies marketing et améliore l'expérience client.",
        category: "digital",
        date: "3 Nov 2024",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "La transformation digitale des PME",
        excerpt: "Guide pratique pour les petites et moyennes entreprises pour réussir leur transformation numérique.",
        category: "digital",
        date: "18 Oct 2024",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
])

// Computed
const getCategoryName = (categoryId) => {
    const categories = {
        'digital': 'Transformation Digital',
        'innovation': 'Innovation',
        'education': 'Éducation',
        'career': 'Carrière',
        'event': 'Événement'
    }
    return categories[categoryId] || categoryId
}

const getExpertise = (category) => {
    const expertises = {
        'digital': 'Transformation Digital',
        'innovation': 'Innovation Technologique',
        'education': 'Pédagogie Numérique',
        'career': 'Développement de Carrière',
        'event': 'Événementiel Académique'
    }
    return expertises[category] || 'Sujets Numériques'
}

// Methods
const shareArticle = (platform) => {
    const url = window.location.href
    const title = article.value.title
    const text = article.value.excerpt

    switch(platform) {
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
            break
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
            break
        case 'linkedin':
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
            break
        case 'copy':
            navigator.clipboard.writeText(url)
            alert('Lien copié dans le presse-papier !')
            break
        case 'email':
            window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\nLire l'article : ${url}`)}`
            break
    }
}

const goToArticle = (id) => {
    router.push(`/article/${id}`)
}

// Lifecycle
onMounted(() => {
    // Charger l'article correspondant à l'ID
    // Dans une vraie application, vous feriez une requête API ici
    console.log('Chargement de l\'article ID:', articleId)
    
    // Scroll to top
    window.scrollTo(0, 0)
})
</script>

<style scoped>
.prose {
    color: #374151;
}

.prose p {
    margin-bottom: 1.5em;
    line-height: 1.7;
}

.prose-lg {
    font-size: 1.125rem;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.scroll-mt-20 {
    scroll-margin-top: 5rem;
}

/* Smooth transitions */
.group {
    transition: all 0.3s ease;
}

/* Custom scrollbar for better reading experience */
@media (min-width: 768px) {
    main {
        scroll-behavior: smooth;
    }
}

/* Animation pour les images des articles similaires */
.group:hover img {
    transform: scale(1.1);
    transition: transform 0.5s ease;
}
</style>