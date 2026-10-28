import { defineStore } from 'pinia'
import axios from 'axios';

export const useBlogStore = defineStore('blog', {
  state: () => ({
    articles: [],
    currentArticle: null,
    notFound: false,
    loading: false,
    error: null,
  }),

  actions: {
    async fetchArticles() {
      this.loading = true
      this.error = null
      
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get('/public/blogs')
        // En supposant que le backend renvoie directement le tableau d'articles
        this.articles = response.data.map((art: any) => ({
            ...art,
            author: 'ESCEN'
        }))
      } catch (err: any) {
        this.error = err.response?.data?.message || 'Erreur lors de la récupération des articles'
        console.error('Erreur fetchArticles:', err)
      } finally {
        this.loading = false
      }
    },

    async fetchArticleById(id: string) {
      this.notFound = false;
this.loading = true
      this.error = null
      
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get(`/public/blogs/${id}`)
        // En supposant que le backend renvoie directement l'article
        this.currentArticle = {
            ...response.data,
            author: 'ESCEN'
        }
      } catch (err: any) {
        this.currentArticle = null
        this.notFound = err.response?.status === 404
        this.error = err.response?.data?.message || 'Erreur lors de la récupération de l\'article'
        console.error('Erreur fetchArticleById:', err)
      } finally {
        this.loading = false
      }
    },

    async addComment(identifier: string, commentData: any) {
      const { $axios } = useNuxtApp()
      const response = await $axios.post(`/public/blogs/${identifier}/comments`, commentData)
      return response.data
    },

    async subscribeNewsletter(email: string) {
      const { $axios } = useNuxtApp()
      const response = await $axios.post(`/public/newsletter/subscribe`, { email })
      return response.data
    }
  }
})
