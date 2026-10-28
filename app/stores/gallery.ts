import { defineStore } from 'pinia'
import axios from 'axios'

interface Album {
  id: number
  slug: string
  title: string
  subtitle: string
  cover: string | null
  cover_url: string | null
  photoCount: number
  photos: unknown[]
  [key: string]: unknown
}

interface GalleryState {
  albums: Album[]
  currentAlbum: Album | null
  otherAlbums: Album[]
  loading: boolean
  error: string | null
}

export const useGalleryStore = defineStore('gallery', {
  state: (): GalleryState => ({
    albums: [],
    currentAlbum: null,
    otherAlbums: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAlbums() {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get('/public/galeries')
        if (response.data.success) {
          this.albums = response.data.data
        }
      } catch (err: unknown) {
        const e = err as { response?: { data?: { message?: string } } }
        this.error = e.response?.data?.message ?? 'Erreur lors de la récupération des galeries'
        console.error('Erreur fetchAlbums:', err)
      } finally {
        this.loading = false
      }
    },

    async fetchAlbumById(id: string) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`/public/galeries/${id}`)
        if (response.data.success) {
          this.currentAlbum = response.data.data.album ?? response.data.data
          this.otherAlbums = response.data.data.other_albums ?? []
        }
      } catch (err: unknown) {
        const e = err as { response?: { data?: { message?: string } } }
        this.error = e.response?.data?.message ?? 'Erreur lors de la récupération de l\'album'
        console.error('Erreur fetchAlbumById:', err)
      } finally {
        this.loading = false
      }
    },
  },
})
