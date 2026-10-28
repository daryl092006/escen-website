<template>
    <div class="min-h-screen bg-gray-50">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb :title="blogStore.loading ? 'Chargement en cours...' : (article.title || 'Article introuvable')"
            :description="blogStore.loading ? 'Veuillez patienter' : article.excerpt" 
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Blog', href: '/blogs' },
                ...(article.title ? [{ label: article.title }] : [])
            ]" 
            :backgroundImage="article.image || '/valeurs/bg.jpg'" 
            overlay />

        <!-- Contenu Principal -->
        <main class="w-full px-3 sm:px-4 lg:px-6 py-6 lg:py-10">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Colonne de gauche : Contenu principal -->
                    <div class="lg:col-span-2">
                        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <!-- Image Hero — hauteur naturelle, pas de crop forcé -->
                            <div class="relative overflow-hidden bg-gray-100">
                                <img :src="article.image" 
                                     :alt="article.title"
                                     class="w-full h-auto max-h-[520px] object-contain">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                                
                                <!-- Badges alignés à droite -->
                                <div class="absolute top-4 right-4 flex flex-col items-end gap-2">
                                    <span v-if="article.featured" 
                                          class="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                                        <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                        En vedette
                                    </span>
                                </div>
                            </div>

                            <!-- En-tête Premium -->
                            <div class="p-6 lg:p-8">
                                <div class="mb-3">
                                    <!-- Titre principal -->
                                    <h2 class="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                                        {{ article.title }}
                                    </h2>
                                    
                                    <!-- Zone Métadonnées & Partage -->
                                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-gray-100 relative">
                                        
                                        <!-- Auteur & Infos (Gauche) -->
                                        <div class="flex flex-wrap items-center gap-4 sm:gap-6">
                                            <div class="flex items-center gap-3">
                                                <div class="w-12 h-12 bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm">
                                                    {{ article.author.charAt(0) }}
                                                </div>
                                                <div>
                                                    <h4 class="font-bold text-gray-900 text-base">{{ article.author }}</h4>
                                                    <div class="flex items-center gap-2 text-sm text-gray-500 mt-0.5">
                                                        <span class="flex items-center gap-1.5">
                                                            <svg class="w-4 h-4 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                            </svg>
                                                            <span>{{ article.is_event && article.start_date ? 'Du ' + article.start_date + (article.end_date ? ' au ' + article.end_date : '') : article.date }}</span>
                                                        </span>
                                                        <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                        <span class="flex items-center gap-1.5">
                                                            <svg class="w-4 h-4 text-[#01b4d5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                            </svg>
                                                            <span>{{ article.readTime }} de lecture</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Bouton Partage (Droite) -->
                                        <div class="relative share-menu">
                                            <button @click="openShareMenu = !openShareMenu"
                                                    class="share-button group inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl hover:border-[#01b4d5] hover:text-[#01b4d5] shadow-sm hover:shadow transition-all duration-300 text-sm font-semibold">
                                                <svg class="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                                                </svg>
                                                Partager
                                            </button>

                                            <!-- Menu de partage (popup) -->
                                            <div v-if="openShareMenu" 
                                                 class="absolute top-full mt-2 right-0 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 flex gap-1 animate-fade-in-down origin-top-right">
                                                <button @click="shareOnFacebook" class="p-2.5 bg-gray-50 text-[#1877F2] rounded-lg hover:bg-[#1877F2] hover:text-white transition-colors" title="Partager sur Facebook">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                                                </button>
                                                <button @click="shareOnTwitter" class="p-2.5 bg-gray-50 text-[#1DA1F2] rounded-lg hover:bg-[#1DA1F2] hover:text-white transition-colors" title="Partager sur Twitter">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                                </button>
                                                <button @click="shareOnLinkedIn" class="p-2.5 bg-gray-50 text-[#0A66C2] rounded-lg hover:bg-[#0A66C2] hover:text-white transition-colors" title="Partager sur LinkedIn">
                                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                                </button>
                                                <button @click="copyLink" class="p-2.5 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-800 hover:text-white transition-colors" title="Copier le lien">
                                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <!-- Tags en dessous -->
                                    <div v-if="article.tags && article.tags.length > 0" class="flex flex-wrap gap-2 mt-3">
                                        <span v-for="tag in article.tags" 
                                              :key="tag"
                                              class="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium rounded-md border border-gray-200 transition-colors cursor-default">
                                            #{{ tag }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <!-- Contenu de l'article -->
                            <div class="px-6 lg:px-8 pb-6 lg:pb-8 pt-4" v-if="article">
                                <div class="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed" v-html="article.content">
                                </div>
                            </div>
                        </div>

                        <!-- Section commentaires dans la colonne de gauche (cachée pour les événements) -->
                        <div class="mt-8" v-if="!article.is_event">
                            <div class="bg-white rounded-2xl shadow-md p-6 lg:p-8">
                                <!-- En-tête commentaires aligné à gauche -->
                                    <div class="mb-6">
                                        <h2 class="text-xl font-bold text-gray-900 mb-2">Commentaires ({{ article.comments.length }})</h2>
                                        
                                        <!-- Affichage de la moyenne globale -->
                                        <div v-if="averageRating > 0" class="flex items-center gap-2 mt-2 mb-4">
                                            <span class="text-3xl font-extrabold text-gray-900">{{ averageRating.toFixed(1) }}</span>
                                            <div class="flex gap-0.5">
                                                <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                </svg>
                                            </div>
                                            <span class="text-sm text-gray-500 font-medium">sur {{ ratedCommentsCount }} avis</span>
                                        </div>
                                        
                                        <p class="text-gray-600 text-sm">Partagez vos pensées et rejoignez la discussion</p>
                                    </div>

                                <!-- Formulaire pour ajouter un commentaire -->
                                <div class="mb-8 p-6 bg-gray-50 rounded-xl">
                                    <h3 class="font-semibold text-gray-900 mb-4">Laisser un commentaire</h3>
                                    
                                    <form @submit.prevent="submitComment" class="space-y-4">
                                        <!-- Nom et Email côte à côte -->
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label class="block text-sm font-medium text-gray-700 mb-1">Nom *</label>
                                                <input v-model="newComment.name"
                                                       type="text"
                                                       required
                                                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent"
                                                       placeholder="Votre nom">
                                            </div>
                                            <div>
                                                <label class="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                                <input v-model="newComment.email"
                                                       type="email"
                                                       required
                                                       class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent"
                                                       placeholder="votre@email.com">
                                            </div>
                                        </div>
                                        
                                        <!-- Rating -->
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Votre note</label>
                                            <div class="flex gap-1">
                                                <button type="button" v-for="i in 5" :key="i" @click="newComment.rating = i" class="focus:outline-none transition-transform hover:scale-110">
                                                    <svg class="w-8 h-8" :class="i <= newComment.rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <!-- Commentaire en dessous -->
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700 mb-1">Commentaire *</label>
                                            <textarea v-model="newComment.content"
                                                      required
                                                      rows="4"
                                                      class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#01b4d5] focus:border-transparent resize-none"
                                                      placeholder="Partagez vos pensées..."></textarea>
                                        </div>
                                        
                                        <!-- Checkbox à gauche, bouton à droite -->
                                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div class="flex items-center">
                                                <input v-model="newComment.saveInfo"
                                                       type="checkbox"
                                                       id="save-info"
                                                       class="w-4 h-4 text-[#01b4d5] border-gray-300 rounded focus:ring-[#01b4d5]">
                                                <label for="save-info" class="ml-2 text-sm text-gray-600">
                                                    Sauvegarder mes informations
                                                </label>
                                            </div>
                                            <button type="submit"
                                                    :disabled="submittingComment"
                                                    class="px-6 py-2 bg-[#01b4d5] text-white font-semibold rounded-lg hover:bg-[#0199b8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed md:w-auto w-full">
                                                <span v-if="submittingComment">Envoi en cours...</span>
                                                <span v-else>Publier le commentaire</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                <!-- Liste des commentaires -->
                                <div v-if="article.comments && article.comments.length > 0" class="space-y-6">
                                    <div v-for="comment in article.comments" 
                                         :key="comment.id" 
                                         class="bg-gray-50 rounded-xl p-5">
                                        <!-- En-tête du commentaire : Avatar à gauche, infos à droite -->
                                        <div class="flex items-start justify-between mb-4">
                                            <div class="flex items-center gap-3">
                                                <div class="w-10 h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-white font-bold">
                                                    {{ comment.author ? comment.author.charAt(0).toUpperCase() : 'A' }}
                                                </div>
                                                <div>
                                                    <div class="flex items-center gap-2">
                                                        <h4 class="font-semibold text-gray-900">{{ comment.author || 'Anonyme' }}</h4>
                                                        <!-- Stars -->
                                                        <div class="flex gap-0.5 ml-2">
                                                            <svg v-for="i in 5" :key="i" class="w-4 h-4" :class="i <= (comment.rating || 0) ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <p class="text-sm text-gray-500">{{ comment.date }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Contenu du commentaire aligné à gauche -->
                                        <p class="text-gray-700 ml-13">{{ comment.content }}</p>
                                    </div>
                                </div>
                                
                                <!-- Message si aucun commentaire -->
                                <div v-else class="text-center py-8 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                    <svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                    </svg>
                                    <p class="text-gray-500 font-medium">Soyez le premier à commenter !</p>
                                    <p class="text-sm text-gray-400 mt-1">Partagez votre avis sur cet article avec la communauté.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Colonne de droite : Articles similaires et autres infos -->
                    <div class="lg:col-span-1">
                        <div class="sticky top-24 space-y-6">
                            <!-- Articles similaires -->
                            <div class="bg-white rounded-xl shadow-md p-6">
                                <h3 class="text-lg font-bold text-gray-900 mb-4">Articles similaires</h3>
                                
                                <!-- Liste des articles similaires -->
                                <div v-if="relatedArticles && relatedArticles.length > 0" class="space-y-4">
                                    <article v-for="related in relatedArticles" 
                                             :key="related.id"
                                             @click="goToArticle(related.slug)"
                                             class="group cursor-pointer">
                                        <!-- Image à gauche, contenu à droite -->
                                        <div class="flex gap-3">
                                            <div class="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
                                                <img :src="related.image" 
                                                     :alt="related.title"
                                                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                                            </div>
                                            <div class="flex-1 min-w-0">
                                                <h4 class="font-semibold text-gray-900 text-sm group-hover:text-[#01b4d5] transition-colors line-clamp-2 mb-1">
                                                    {{ related.title }}
                                                </h4>
                                                <div class="flex items-center text-xs text-gray-500">
                                                    <span>{{ related.date }}</span>
                                                    <span class="mx-1">•</span>
                                                    <span>{{ related.readTime }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                                
                                <!-- Message si aucun article similaire -->
                                <div v-else class="text-center py-6 bg-gray-50 rounded-lg border border-dashed border-gray-200">
                                    <svg class="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z"/>
                                    </svg>
                                    <p class="text-sm text-gray-500 font-medium">Aucun article similaire</p>
                                </div>
                            </div>

                            <!-- Catégories populaires -->
                            

                            <!-- Newsletter -->
                            <div class="bg-gradient-to-br from-[#01b4d5] to-[#0056b3] rounded-xl shadow-md p-6 text-white">
                                <h3 class="text-lg font-bold mb-2">Restez informé</h3>
                                <p class="text-sm opacity-90 mb-4">Recevez nos derniers articles directement dans votre boîte mail</p>
                                <form @submit.prevent="subscribeNewsletter" class="space-y-3">
                                    <input v-model="newsletterEmail"
                                           type="email"
                                           required
                                           placeholder="Votre email"
                                           class="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white">
                                    <button type="submit"
                                            :disabled="subscribingNewsletter"
                                            class="w-full flex justify-center items-center px-4 py-2 bg-white text-[#01b4d5] font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                                        <svg v-if="subscribingNewsletter" class="animate-spin -ml-1 mr-2 h-4 w-4 text-[#01b4d5]" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span v-if="subscribingNewsletter">Abonnement...</span>
                                        <span v-else>S'abonner</span>
                                    </button>
                                </form>
                            </div>
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
import { useBlogStore } from '~/stores/blog'
import axios from 'axios'

import toastr from '~/utils/toast'
const toast = toastr

const route = useRoute()
const router = useRouter()
const blogStore = useBlogStore()
// ESCEN: public content in initial HTML; browser mount still revalidates publication.
const { error: publicContentError } = await useAsyncData(() => 'public-article-' + route.params.id, async () => {
  await blogStore.fetchArticleById(String(route.params.id))
  if (blogStore.error) throw createError({ statusCode: blogStore.notFound ? 404 : 503, statusMessage: 'Publication indisponible' })
  return blogStore.currentArticle
})
if (publicContentError.value) throw createError(publicContentError.value)

// État pour le menu de partage
const openShareMenu = ref(false)

// État pour le formulaire de commentaire
const newComment = ref({
    name: '',
    email: '',
    content: '',
    rating: 5,
    saveInfo: false
})
const submittingComment = ref(false)

// Newsletter
const newsletterEmail = ref('')
const subscribingNewsletter = ref(false)

// Catégories
const categories = ref([
    { id: 'digital', name: 'Transformation Digital', count: 12 },
    { id: 'innovation', name: 'Innovation', count: 8 },
    { id: 'education', name: 'Éducation', count: 15 },
    { id: 'career', name: 'Carrière', count: 10 },
    { id: 'event', name: 'Événements', count: 5 }
])

// Article principal depuis le backend
const article = computed(() => {
    const data = blogStore.currentArticle
    if (!data) return {
        title: "",
        author: "",
        tags: [],
        comments: []
    }
    
    return {
        ...data,
        comments: (data.comments || []).map(c => ({
            id: c.id,
            author: c.author,
            content: c.content,
            rating: c.rating,
            date: c.date || 'Récemment'
        })),
        is_event: data.is_event || false
    }
})

// Articles similaires (à implémenter depuis le store si nécessaire)
const relatedArticles = computed(() => {
    return blogStore.articles.filter(a => a.id !== article.value.id).slice(0, 3)
})

// Fonctions de partage
const shareOnFacebook = () => {
    const url = window.location.href
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
    openShareMenu.value = false
}

const shareOnTwitter = () => {
    const url = window.location.href
    const text = article.value.title
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
    openShareMenu.value = false
}

const shareOnLinkedIn = () => {
    const url = window.location.href
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
    openShareMenu.value = false
}

const copyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    toast.success('Lien copié dans le presse-papier !')
    openShareMenu.value = false
}

// Fonctions pour les commentaires
const submitComment = async () => {
    if (!newComment.value.name || !newComment.value.email || !newComment.value.content) {
        toast.warning('Veuillez remplir tous les champs obligatoires')
        return
    }

    submittingComment.value = true

    try {
        const identifier = route.params.slug || route.params.id
        await blogStore.addComment(identifier, {
            author_name: newComment.value.name,
            author_email: newComment.value.email,
            content: newComment.value.content,
            rating: newComment.value.rating
        })

        if (!article.value.comments) {
            article.value.comments = []
        }

        article.value.comments.push({
            id: 'temp-' + Date.now(),
            author: newComment.value.name,
            date: new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }),
            content: newComment.value.content,
            rating: newComment.value.rating
        })

        if (newComment.value.saveInfo) {
            localStorage.setItem('blog_user_info', JSON.stringify({
                name: newComment.value.name,
                email: newComment.value.email
            }))
        } else {
            localStorage.removeItem('blog_user_info')
        }

        newComment.value = {
            name: newComment.value.saveInfo ? newComment.value.name : '',
            email: newComment.value.saveInfo ? newComment.value.email : '',
            content: '',
            rating: 5,
            saveInfo: newComment.value.saveInfo
        }

        toast.success('Votre commentaire a été soumis et est en attente d\'approbation !')
    } catch (error) {
        console.error('Erreur:', error)
        toast.error('Une erreur est survenue. Veuillez réessayer.')
    } finally {
        submittingComment.value = false
    }
}

const goToArticle = (slug) => {
    router.push(`/blogs/${slug}`)
}

const subscribeNewsletter = async () => {
    if (!newsletterEmail.value) {
        toast.warning('Veuillez entrer votre email')
        return
    }
    
    subscribingNewsletter.value = true
    try {
        const response = await blogStore.subscribeNewsletter(newsletterEmail.value)
        toast.success(response.message || 'Merci pour votre inscription !')
        newsletterEmail.value = ''
    } catch (error) {
        console.error('Erreur newsletter:', error)
        toast.error(error.response?.data?.message || 'Une erreur est survenue.')
    } finally {
        subscribingNewsletter.value = false
    }
}

// Fermer le menu de partage en cliquant en dehors
onMounted(async () => {
    const identifier = route.params.slug || route.params.id
    await blogStore.fetchArticleById(identifier)
    // Au cas où relatedArticles nécessite les articles
    if (blogStore.articles.length === 0) {
        await blogStore.fetchArticles()
    }
    
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.share-button') && !e.target.closest('.share-menu')) {
            openShareMenu.value = false
        }
    })
    
    const savedUserInfo = localStorage.getItem('blog_user_info')
    if (savedUserInfo) {
        try {
            const parsedInfo = JSON.parse(savedUserInfo)
            newComment.value.name = parsedInfo.name || ''
            newComment.value.email = parsedInfo.email || ''
            newComment.value.saveInfo = true
        } catch (e) {
            console.error('Erreur de lecture des infos sauvegardées')
        }
    }

    window.scrollTo(0, 0)
})
</script>

<style scoped>
.prose {
    color: #374151;
}

.prose p {
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

/* Sticky sidebar */
.sticky {
    position: sticky;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .prose-lg {
        font-size: 1rem;
    }
}
</style>