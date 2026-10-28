<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0c142b] via-[#101b3b] to-[#0a0f24] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background patterns -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#01b4d5]/10 blur-[120px]"></div>
      <div class="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#818cf8]/10 blur-[120px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px]"></div>
    </div>

    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Logo ESCEN Header -->
      <div class="flex flex-col items-center justify-center mb-10 text-center">
        <NuxtLink to="/">
          <WebsiteLogo context="header" />
        </NuxtLink>
        <span class="text-[#01b4d5] text-xs font-bold uppercase tracking-[0.25em]">Vérification Officielle des Cartes</span>
        <h1 class="text-2xl md:text-3xl font-extrabold text-white mt-2">Authentification Étudiant</h1>
      </div>

      <!-- State: Loading -->
      <div v-if="isLoading" class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-12 text-center shadow-2xl flex flex-col items-center justify-center min-h-[400px]">
        <div class="relative w-20 h-20 mb-6">
          <div class="absolute inset-0 rounded-full border-4 border-[#01b4d5]/20"></div>
          <div class="absolute inset-0 rounded-full border-4 border-t-[#01b4d5] animate-spin"></div>
        </div>
        <p class="text-gray-400 font-medium text-lg">Recherche de l'étudiant dans le registre officiel...</p>
      </div>

      <!-- State: Error / Student not found -->
      <div v-else-if="errorMsg || !studentData" class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 md:p-14 text-center shadow-2xl min-h-[400px] flex flex-col items-center justify-center">
        <div class="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 animate-pulse">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 class="text-2xl font-extrabold text-white mb-2">Carte d'Étudiant Invalide</h2>
        <p class="text-gray-400 max-w-md mx-auto mb-8">
          {{ errorMsg || "Le matricule fourni ne correspond à aucun étudiant actif ou enregistré dans nos bases de données scolaires." }}
        </p>
        <NuxtLink to="/" class="px-8 py-3.5 bg-gradient-to-r from-[#01b4d5] to-[#0095b0] text-white font-bold rounded-xl shadow-lg shadow-[#01b4d5]/20 hover:shadow-xl hover:shadow-[#01b4d5]/30 hover:-translate-y-0.5 transition-all duration-300">
          Retour à l'accueil
        </NuxtLink>
      </div>

      <!-- State: Success -->
      <div v-else class="space-y-6">
        <!-- Main Verification Header Card -->
        <div class="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div class="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8">
            <!-- Student Photo / Initial -->
            <div class="w-28 h-36 rounded-2xl bg-white/5 border border-white/10 overflow-hidden flex-shrink-0 flex items-center justify-center shadow-inner relative group">
              <img v-if="studentData.identite.photo_url" :src="studentData.identite.photo_url" class="w-full h-full object-cover" />
              <div v-else class="w-full h-full bg-gradient-to-br from-[#01b4d5]/20 to-[#818cf8]/20 flex items-center justify-center text-4xl font-black text-[#01b4d5]">
                {{ studentData.identite.nom.charAt(0) }}
              </div>
            </div>

            <!-- Basic details -->
            <div class="flex-grow text-center md:text-left space-y-4">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 class="text-2xl sm:text-3xl font-black text-white tracking-tight">{{ studentData.identite.nom_complet }}</h2>
                  <p class="text-[#01b4d5] font-mono text-sm font-bold tracking-wider mt-1">{{ studentData.identite.matricule }}</p>
                </div>
                <!-- Validation Badge -->
                <div class="flex items-center justify-center md:justify-start gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-5 py-2.5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/5">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Statut Valide
                </div>
              </div>

              <!-- General details grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 border-t border-white/10 text-left">
                <div>
                  <span class="text-xs text-gray-400 font-bold uppercase tracking-wider block">Filière / Niveau</span>
                  <span class="text-white font-semibold text-sm">{{ currentParcours?.filiere || 'N/A' }} ({{ currentParcours?.niveau || 'N/A' }})</span>
                </div>
                <div>
                  <span class="text-xs text-gray-400 font-bold uppercase tracking-wider block">Année Académique</span>
                  <span class="text-[#01b4d5] font-semibold text-sm">{{ currentParcours?.annee_scolaire || 'N/A' }}</span>
                </div>
                <div>
                  <span class="text-xs text-gray-400 font-bold uppercase tracking-wider block">Date & Lieu de Naissance</span>
                  <span class="text-white font-semibold text-sm">{{ studentData.identite.date_naissance || 'N/A' }} à {{ studentData.identite.lieu_naissance || 'N/A' }}</span>
                </div>
                <div>
                  <span class="text-xs text-gray-400 font-bold uppercase tracking-wider block">Nationalité</span>
                  <span class="text-white font-semibold text-sm">{{ studentData.identite.nationalite || 'N/A' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <div class="flex border-b border-white/10">
          <button @click="activeTab = 'finance'" :class="[activeTab === 'finance' ? 'border-[#01b4d5] text-[#01b4d5] font-bold' : 'border-transparent text-gray-400 hover:text-white']" class="flex-1 py-4 text-center border-b-2 text-sm uppercase tracking-wider font-semibold transition-all duration-300">
            Situation Financière
          </button>
          <button @click="activeTab = 'academic'" :class="[activeTab === 'academic' ? 'border-[#01b4d5] text-[#01b4d5] font-bold' : 'border-transparent text-gray-400 hover:text-white']" class="flex-1 py-4 text-center border-b-2 text-sm uppercase tracking-wider font-semibold transition-all duration-300">
            Parcours Académique
          </button>
        </div>

        <!-- TAB CONTENT: FINANCE -->
        <div v-if="activeTab === 'finance'" class="space-y-6">
          
          <!-- Financial stats grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Total Dû -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
              <span class="text-xs text-gray-400 font-bold uppercase tracking-wider">Scolarité Dûe</span>
              <span class="text-2xl font-black text-white mt-4">{{ formatCurrency(activeFinanceYear?.total_a_payer) }}</span>
              <div v-if="activeFinanceYear?.frais?.bourse" class="text-xs text-emerald-400 font-medium mt-1 bg-emerald-400/10 px-2.5 py-1 rounded-lg w-max">
                Bourse: {{ activeFinanceYear.frais.bourse.nom }} ({{ formatBourseValue(activeFinanceYear.frais.bourse) }})
              </div>
            </div>

            <!-- Total Payé -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
              <div class="flex items-center justify-between">
                <span class="text-xs text-gray-400 font-bold uppercase tracking-wider">Montant Payé</span>
                <span class="text-xs font-bold text-emerald-400">{{ activeFinanceYear?.progression }}%</span>
              </div>
              <span class="text-2xl font-black text-emerald-400 mt-4">{{ formatCurrency(activeFinanceYear?.total_paye) }}</span>
              <!-- Mini progress bar -->
              <div class="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-500" :style="{ width: `${activeFinanceYear?.progression || 0}%` }"></div>
              </div>
            </div>

            <!-- Reste à payer -->
            <div class="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
              <span class="text-xs text-gray-400 font-bold uppercase tracking-wider">Reste à Payer</span>
              <span class="text-2xl font-black mt-4" :class="[activeFinanceYear?.reste_a_payer > 0 ? 'text-orange-400' : 'text-emerald-400']">
                {{ formatCurrency(activeFinanceYear?.reste_a_payer) }}
              </span>
              <div class="text-xs font-bold mt-2 uppercase tracking-wider flex items-center gap-1.5" :class="[activeFinanceYear?.statut === 'solde' ? 'text-emerald-400' : 'text-orange-400']">
                <span class="w-1.5 h-1.5 rounded-full" :class="[activeFinanceYear?.statut === 'solde' ? 'bg-emerald-400' : 'bg-orange-400']"></span>
                {{ activeFinanceYear?.statut === 'solde' ? 'Scolarité Soldée' : 'Paiement en Cours' }}
              </div>
            </div>
          </div>

          <!-- Academic Year Selector for Finance if multiple years -->
          <div v-if="studentData.paiements_par_annee.length > 1" class="flex flex-wrap items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4">
            <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">Filtrer par année :</span>
            <button v-for="y in studentData.paiements_par_annee" :key="y.annee_scolaire_id" @click="selectedAnneeId = y.annee_scolaire_id" :class="[selectedAnneeId === y.annee_scolaire_id ? 'bg-[#01b4d5] text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10']" class="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300">
              {{ y.annee_scolaire }}
            </button>
          </div>

          <!-- Echéances / Tranches Table -->
          <div class="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-xl">
            <div class="p-6 border-b border-white/10 flex items-center justify-between">
              <h3 class="text-lg font-bold text-white">Échéancier de Paiement (Détails)</h3>
              <span class="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full font-bold uppercase tracking-wider">{{ activeFinanceYear?.annee_scolaire }}</span>
            </div>

            <!-- If no tranches/echeances -->
            <div v-if="!paymentItems || paymentItems.length === 0" class="p-12 text-center text-gray-400">
              Aucun échéancier de paiement disponible pour cette année scolaire.
            </div>

            <!-- Tranche list -->
            <div v-else class="divide-y divide-white/5">
              <div v-for="item in paymentItems" :key="item.id" class="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors">
                <div class="space-y-1">
                  <span class="text-sm font-bold text-white block">{{ item.libelle }}</span>
                  <span class="text-xs text-gray-400 block font-semibold">Date limite : {{ item.date_limite || 'Non définie' }}</span>
                </div>
                <div class="flex items-center gap-6 justify-between sm:justify-end">
                  <div class="text-right">
                    <span class="text-sm font-bold text-white block">{{ formatCurrency(item.montant) }}</span>
                    <span class="text-xs text-gray-400 block">Payé : {{ formatCurrency(item.montant_paye || item.paye || 0) }}</span>
                  </div>
                  <span :class="getStatusBadgeClass(item.statut)" class="px-3.5 py-1.5 rounded-xl text-xs font-extrabold uppercase tracking-wider">
                    {{ formatStatus(item.statut) }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Historique des paiements validés -->
          <div class="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-xl">
            <div class="p-6 border-b border-white/10">
              <h3 class="text-lg font-bold text-white">Reçus de Paiement Enregistrés</h3>
            </div>
            
            <div v-if="!activeFinanceYear?.paiements || activeFinanceYear.paiements.length === 0" class="p-12 text-center text-gray-400">
              Aucun paiement n'a encore été enregistré pour cette année.
            </div>

            <div v-else class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr class="bg-white/[0.02] border-b border-white/5 text-xs text-gray-400 font-bold uppercase tracking-wider">
                    <th class="py-4 px-6">Libellé</th>
                    <th class="py-4 px-6">Mode</th>
                    <th class="py-4 px-6">Référence</th>
                    <th class="py-4 px-6">Date</th>
                    <th class="py-4 px-6 text-right">Montant</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-sm text-gray-300">
                  <tr v-for="p in activeFinanceYear.paiements" :key="p.id" class="hover:bg-white/[0.01] transition-colors">
                    <td class="py-4 px-6 font-bold text-white">{{ p.libelle }}</td>
                    <td class="py-4 px-6 font-medium capitalize">{{ p.mode }}</td>
                    <td class="py-4 px-6 font-mono text-xs text-[#01b4d5]">{{ p.reference || 'N/A' }}</td>
                    <td class="py-4 px-6 text-xs text-gray-400">{{ p.date }}</td>
                    <td class="py-4 px-6 text-right font-black text-emerald-400">{{ formatCurrency(p.montant) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- TAB CONTENT: ACADEMIC -->
        <div v-if="activeTab === 'academic'" class="space-y-6">
          <div class="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden shadow-xl">
            <div class="p-6 border-b border-white/10">
              <h3 class="text-lg font-bold text-white">Cursus Académique de l'Étudiant</h3>
            </div>

            <div class="p-6">
              <!-- Timeline/Step design -->
              <div class="relative pl-8 border-l border-white/10 space-y-8 py-2">
                <div v-for="item in studentData.parcours_academique" :key="item.ordre" class="relative">
                  <!-- Timeline dot -->
                  <div :class="[item.est_actuel ? 'bg-[#01b4d5] ring-4 ring-[#01b4d5]/20' : 'bg-[#1a2238] border border-white/20']" class="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center">
                    <span v-if="item.est_actuel" class="w-2.5 h-2.5 rounded-full bg-white"></span>
                  </div>

                  <div class="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:border-[#01b4d5]/30 transition-all duration-300">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <span class="text-lg font-bold text-white">{{ item.filiere }}</span>
                      <span :class="[item.est_actuel ? 'bg-[#01b4d5]/15 text-[#01b4d5]' : 'bg-white/5 text-gray-400']" class="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider w-max">
                        {{ item.annee_scolaire }}
                      </span>
                    </div>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-3 pt-3 border-t border-white/5 text-gray-400">
                      <div>
                        <span class="font-bold text-gray-500 uppercase text-[10px] tracking-wider block">Niveau d'étude</span>
                        <span class="text-gray-200 font-semibold mt-0.5 block">{{ item.niveau }}</span>
                      </div>
                      <div>
                        <span class="font-bold text-gray-500 uppercase text-[10px] tracking-wider block">Groupe / Classe</span>
                        <span class="text-gray-200 font-semibold mt-0.5 block">{{ item.groupe }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useNuxtApp } from '#app'

const route = useRoute()
const { $axios } = useNuxtApp()

const isLoading = ref(true)
const studentData = ref(null)
const errorMsg = ref('')

const activeTab = ref('finance')
const selectedAnneeId = ref(null)

const currentParcours = computed(() => {
  if (!studentData.value?.parcours_academique) return null
  // Retourne le parcours actuel (est_actuel = true) ou le premier
  return studentData.value.parcours_academique.find(p => p.est_actuel) || studentData.value.parcours_academique[0]
})

const activeFinanceYear = computed(() => {
  if (!studentData.value?.paiements_par_annee) return null
  if (selectedAnneeId.value) {
    return studentData.value.paiements_par_annee.find(y => y.annee_scolaire_id === selectedAnneeId.value)
  }
  // Par défaut, retourner l'année actuelle ou la première
  return studentData.value.paiements_par_annee.find(y => y.est_actuelle) || studentData.value.paiements_par_annee[0]
})

const paymentItems = computed(() => {
  if (!activeFinanceYear.value?.frais) return []
  const frais = activeFinanceYear.value.frais
  if (frais.type === 'negocie') {
    return frais.echeances || []
  } else {
    return frais.tranches || []
  }
})

const formatCurrency = (val) => {
  if (val === undefined || val === null) return '0 FCFA'
  return new Intl.NumberFormat('fr-FR').format(val) + ' FCFA'
}

const formatBourseValue = (bourse) => {
  if (!bourse) return ''
  if (bourse.type === 'pourcentage') {
    return `-${bourse.valeur}%`
  }
  return `-${formatCurrency(bourse.valeur)}`
}

const getStatusBadgeClass = (status) => {
  const s = (status || '').toLowerCase()
  if (s === 'paye' || s === 'soldé') return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
  if (s === 'partiel') return 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
  if (s === 'en_retard' || s === 'retard') return 'bg-red-500/10 text-red-400 border border-red-500/20'
  return 'bg-white/5 text-gray-400 border border-white/10'
}

const formatStatus = (status) => {
  const s = (status || '').toLowerCase()
  if (s === 'paye') return 'Payé'
  if (s === 'partiel') return 'Partiel'
  if (s === 'en_retard') return 'En retard'
  if (s === 'en_attente') return 'En attente'
  return status || 'En attente'
}

const fetchStudentDetails = async () => {
  isLoading.value = true
  errorMsg.value = ''
  
  try {
    const matricule = route.params.matricule
    const response = await $axios.get(`/public/verif/${matricule}`)
    
    if (response.data?.success) {
      studentData.value = response.data.data
      
      // Sélectionner l'année scolaire par défaut pour l'affichage financier
      const activeYear = studentData.value.paiements_par_annee.find(y => y.est_actuelle)
      if (activeYear) {
        selectedAnneeId.value = activeYear.annee_scolaire_id
      } else if (studentData.value.paiements_par_annee.length > 0) {
        selectedAnneeId.value = studentData.value.paiements_par_annee[0].annee_scolaire_id
      }
    } else {
      errorMsg.value = "Étudiant introuvable ou carte non valide."
    }
  } catch (error) {
    console.error("Erreur de vérification:", error)
    if (error.response?.status === 404) {
      errorMsg.value = "Cette carte d'étudiant n'a pas pu être authentifiée dans nos registres officiels."
    } else {
      errorMsg.value = "Une erreur technique s'est produite lors de la validation. Veuillez réessayer ultérieurement."
    }
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchStudentDetails()
})
</script>

<style scoped>
/* Custom animations */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}
</style>
