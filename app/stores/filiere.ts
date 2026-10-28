import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useFiliereStore = defineStore('filiere', {
  state: () => ({
    filieres: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchFilieresByNiveau(niveauId: string | number) {
      if (!niveauId) {
        this.filieres = []
        return []
      }
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get(`/public/filieres/liste?niveau_id=${niveauId}`)
        this.filieres = response.data.data || response.data
        return this.filieres
      } catch (error: any) {
        console.error('Erreur chargement filières:', error)
        this.error = error.response?.data?.message || 'Erreur lors du chargement des filières'
        throw error
      } finally {
        this.isLoading = false
      }
    }
  }
})
