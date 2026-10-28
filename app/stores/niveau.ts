import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useNiveauStore = defineStore('niveau', {
  state: () => ({
    niveaux: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchNiveaux() {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get('/public/niveau/liste')
        this.niveaux = response.data.data || response.data
        return this.niveaux
      } catch (error: any) {
        console.error('Erreur chargement niveaux:', error)
        this.error = error.response?.data?.message || 'Erreur lors du chargement des niveaux'
        throw error
      } finally {
        this.isLoading = false
      }
    }
  }
})
