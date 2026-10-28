import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useCandidatureStore = defineStore('candidature', {
  state: () => ({
    isLoading: false,
    error: null,
  }),
  actions: {
    async soumettreCandidature(formData: FormData) {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()

        const response = await $axios.post('/public/candidature/soumettre', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          }
        });

        return response.data
      } catch (error: any) {
        console.error('Erreur soumission candidature:', error)
        if (error.response?.data?.errors) {
            this.error = error.response.data.errors
        } else {
            this.error = error.response?.data?.message || 'Erreur lors de la soumission de la candidature'
        }
        throw error
      } finally {
        this.isLoading = false
      }
    },

    // ── Inscription en plusieurs étapes ────────────────────────────────────────
    // Le dossier est créé dès l'étape 1 (identité + coordonnées) puis complété par
    // des mises à jour successives, identifiées par le draft_token retourné à la
    // création (distinct du slug, dérivé du nom et donc devinable).

    // Reprise d'un dossier après un rechargement de page : renvoie null si le
    // jeton n'est plus valide (déjà finalisé, ou inexistant) plutôt que de jeter,
    // pour que l'appelant puisse simplement repartir d'un formulaire vide.
    async recupererBrouillon(draftToken: string) {
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.get(`/public/candidature/${draftToken}/brouillon`)
        return response.data || null
      } catch (error) {
        return null
      }
    },

    async creerEtape1(payload: Record<string, any>) {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.post('/public/candidature/etape1', payload)
        return response.data
      } catch (error: any) {
        this.error = error.response?.data?.errors || error.response?.data?.message || "Erreur lors de la création du dossier"
        throw error
      } finally {
        this.isLoading = false
      }
    },

    // Dossier déjà créé (le candidat est revenu en arrière puis a corrigé
    // quelque chose) : mise à jour, pas une nouvelle création.
    async mettreAJourEtape1(draftToken: string, payload: Record<string, any>) {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.patch(`/public/candidature/${draftToken}/etape1`, payload)
        return response.data
      } catch (error: any) {
        this.error = error.response?.data?.errors || error.response?.data?.message || "Erreur lors de la mise à jour du dossier"
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async mettreAJourEtape2Bac(draftToken: string, payload: Record<string, any>) {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.patch(`/public/candidature/${draftToken}/etape2-bac`, payload)
        return response.data
      } catch (error: any) {
        this.error = error.response?.data?.errors || error.response?.data?.message || "Erreur lors de l'enregistrement des informations du BAC"
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async soumettreEtape3Documents(draftToken: string, formData: FormData) {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.post(`/public/candidature/${draftToken}/etape3-documents`, formData, {
          headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
        })
        return response.data
      } catch (error: any) {
        this.error = error.response?.data?.errors || error.response?.data?.message || "Erreur lors de l'envoi des documents"
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async finaliserEtape4(draftToken: string, formData: FormData) {
      this.isLoading = true
      this.error = null
      try {
        const { $axios } = useNuxtApp()
        const response = await $axios.post(`/public/candidature/${draftToken}/etape4-finaliser`, formData, {
          headers: { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' }
        })
        return response.data
      } catch (error: any) {
        this.error = error.response?.data?.errors || error.response?.data?.message || "Erreur lors de la soumission finale"
        throw error
      } finally {
        this.isLoading = false
      }
    }
  }
})
