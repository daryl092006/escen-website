<template>
    <div class="min-h-screen bg-gray-50 pb-20">
        <!-- Breadcrumb Hero Section -->
        <Breadcrumb title="Contact" subtitle="Échangeons ensemble"
            description="Une question, un projet ? Notre équipe est à votre écoute pour vous accompagner dans votre transformation digitale."
            :breadcrumb="[
                { label: 'Accueil', href: '/' },
                { label: 'Contact' }
            ]" backgroundImage="/valeurs/bg.jpg" />

        <!-- Section Contact Principale -->
        <section class="pt-16 lg:pt-24 pb-12 lg:pb-16 relative overflow-hidden">
            <!-- Background décoratif léger -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-[#01b4d5]/5 blur-3xl"></div>
            </div>

            <div class="container mx-auto px-4 max-w-7xl relative z-10">
                <!-- En-tête -->
                <div class="text-center mb-12 lg:mb-16">
                    <h2 class="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                        Discutons de votre<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#01b4d5] to-[#0095b0]"> projet</span>
                    </h2>
                    <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                        Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner.
                    </p>
                </div>

                <!-- Card scindée (Split Layout) -->
                <div class="bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row border border-gray-100">
                    
                    <!-- Colonne Gauche : Infos (Fond bleu profond) -->
                    <div class="lg:w-2/5 bg-gradient-to-br from-[#0a1a3f] via-[#16274e] to-[#0a1a3f] p-10 lg:p-12 xl:p-14 text-white relative overflow-hidden flex flex-col justify-between">
                        <!-- Décorations lumineuses -->
                        <div class="absolute top-0 right-0 w-64 h-64 bg-[#01b4d5]/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        <div class="absolute bottom-0 left-0 w-48 h-48 bg-[#01b4d5]/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

                        <div class="relative z-10">
                            <h3 class="text-3xl font-bold mb-2">Informations</h3>
                            <p class="text-[#01b4d5] mb-10 text-xs uppercase tracking-[0.2em] font-semibold">Contactez-nous en direct</p>

                            <div class="space-y-8">
                                <!-- Téléphone -->
                                <a href="tel:+22898012727" class="flex items-start gap-5 group">
                                    <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] group-hover:border-[#01b4d5] transition-all duration-300 group-hover:scale-110 shadow-lg">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400 mb-0.5">Téléphone</p>
                                        <p class="text-lg font-medium text-white group-hover:text-[#01b4d5] transition-colors">+228 98 01 27 27</p>
                                    </div>
                                </a>

                                <!-- Email -->
                                <a href="mailto:hello@escen.university" class="flex items-start gap-5 group">
                                    <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] group-hover:border-[#01b4d5] transition-all duration-300 group-hover:scale-110 shadow-lg">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400 mb-0.5">Email</p>
                                        <p class="text-lg font-medium text-white group-hover:text-[#01b4d5] transition-colors break-all">hello@escen.university</p>
                                    </div>
                                </a>

                                <!-- Adresse -->
                                <div class="flex items-start gap-5 group cursor-default">
                                    <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] group-hover:border-[#01b4d5] transition-all duration-300 group-hover:scale-110 shadow-lg">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400 mb-0.5">Adresse</p>
                                        <p class="text-base font-medium text-white leading-snug">Hountigomé, Rue en face Eglise Notre Dame du Liban, (Lomé-Togo)</p>
                                    </div>
                                </div>
                                
                                <!-- Horaires -->
                                <div class="flex items-start gap-5 group cursor-default">
                                    <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] group-hover:border-[#01b4d5] transition-all duration-300 group-hover:scale-110 shadow-lg">
                                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    </div>
                                    <div>
                                        <p class="text-sm text-gray-400 mb-0.5">Horaires</p>
                                        <p class="text-base font-medium text-white">Lun-Ven: 7h30 à 17h30</p>
                                        <!-- <p class="text-sm text-[#01b4d5] font-semibold mt-1">Sam: 9h-13h</p> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Réseaux sociaux -->
                        <div class="mt-12 pt-8 border-t border-white/10 relative z-10">
                            <p class="text-sm text-gray-400 mb-4">Rejoignez notre communauté</p>
                            <div class="flex gap-3">
                                <NuxtLink href="https://www.linkedin.com/company/escenofficiel/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#0a66c2] hover:border-[#0a66c2] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.6c0-1.3 0-3-2-3s-2.3 1.4-2.3 2.8V21H10z" /></svg>
                                </NuxtLink>
                                <NuxtLink to="https://www.instagram.com/escenofficiel/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-[#E1306C] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm6.5-2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 18.5 5z" /></svg>
                                </NuxtLink>
                                <NuxtLink to="https://www.facebook.com/escenofficiel?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#1877f2] hover:border-[#1877f2] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a4 4 0 0 1 4.3-4.4c1 0 2 .1 2.2.1v2.6h-1.5c-1.2 0-1.5.8-1.5 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z" /></svg>
                                </NuxtLink>
                                <NuxtLink href="https://api.whatsapp.com/send?phone=22898012727" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-[#25D366] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                                </NuxtLink>
                                <NuxtLink to="https://www.tiktok.com/@escen_university?_t=8eGTTPTZMgg&_r=1" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-[#ff0050] hover:border-[#ff0050] hover:-translate-y-1 transition-all duration-300 shadow-lg">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2h3a5 5 0 0 0 4 4v3c-1.5 0-3-.5-4-1.2V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2z" /></svg>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Colonne Droite : Formulaire (Fond blanc propre) -->
                    <div class="lg:w-3/5 p-10 lg:p-14 bg-white relative">
                        <h3 class="text-2xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h3>
                        
                        <form @submit.prevent="submitForm" class="space-y-6">
                            <!-- Ligne 1 -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="group">
                                    <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#01b4d5] transition-colors">Nom complet *</label>
                                    <input type="text" v-model="form.nom" required
                                        class="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5]/30 focus:border-[#01b4d5] focus:bg-white transition-all duration-300 shadow-sm"
                                        placeholder="Votre nom complet">
                                </div>
                                <div class="group">
                                    <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#01b4d5] transition-colors">Téléphone *</label>
                                    <div class="w-full">
                                        <input type="tel" ref="phoneInput" required
                                            class="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5]/30 focus:border-[#01b4d5] focus:bg-white transition-all duration-300 shadow-sm"
                                            placeholder="90 00 00 00">
                                    </div>
                                </div>
                            </div>

                            <!-- Ligne 2 -->
                            <div class="group">
                                <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#01b4d5] transition-colors">Email *</label>
                                <input type="email" v-model="form.email" required
                                    class="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5]/30 focus:border-[#01b4d5] focus:bg-white transition-all duration-300 shadow-sm"
                                    placeholder="votre@email.com">
                            </div>

                            <!-- Message -->
                            <div class="group">
                                <label class="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-[#01b4d5] transition-colors">Message *</label>
                                <textarea v-model="form.message" required rows="5"
                                    class="w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#01b4d5]/30 focus:border-[#01b4d5] focus:bg-white transition-all duration-300 resize-none shadow-sm"
                                    placeholder="Décrivez votre projet ou votre demande en détail..."></textarea>
                            </div>

                            <!-- Bouton -->
                            <button type="submit" :disabled="loading"
                                class="mt-4 w-full bg-[#01b4d5] text-white font-bold py-4 px-6 rounded-xl hover:bg-[#0095b0] hover:shadow-lg hover:shadow-[#01b4d5]/30 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group">
                                <span v-if="!loading" class="flex items-center justify-center gap-3">
                                    Envoyer le message
                                    <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                                <span v-else class="flex items-center justify-center gap-3">
                                    <svg class="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Envoi en cours...
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <!-- Section Carte (Intégrée dans une belle carte blanche) -->
        <section class="pt-12 lg:pt-16 pb-20">
            <div class="container mx-auto px-4 max-w-7xl">
                <div class="bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-xl shadow-gray-200/40 p-6 md:p-8 lg:p-10 border border-gray-100">
                    <div class="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between mb-8">
                        <div>
                            <h2 class="text-3xl font-bold text-gray-900 mb-2">Notre campus</h2>
                            <p class="text-gray-600">Venez nous rencontrer sur notre campus dédié à l'innovation digitale.</p>
                        </div>
                        <a href="https://maps.app.goo.gl/B9qYw1D3B5bN5S1R7" target="_blank" rel="noopener noreferrer" 
                           class="flex-shrink-0 px-6 py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-gray-100 hover:text-[#01b4d5] transition-colors inline-flex items-center gap-2 border border-gray-200 hover:border-[#01b4d5]/30">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Itinéraire
                        </a>
                    </div>
                    
                    <div class="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 relative group">
                        <div class="absolute inset-0 bg-[#01b4d5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126931.45134873572!2d1.1140994005716014!3d6.1832066557940095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023e36b2ec6d733%3A0x5000858675986a88!2sESCEN%20-%20%C3%89cole%20Sup%C3%A9rieure%20de%20Commerce%20et%20d&#39;%C3%89conomie%20Num%C3%A9rique!5e0!3m2!1sfr!2stg!4v1764450457999!5m2!1sfr!2stg"
                            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade" class="w-full filter grayscale-[20%] contrast-125"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import { useNuxtApp } from '#app'
import toastr from '~/utils/toast'

const { $intlTelInput, $axios } = useNuxtApp()
const phoneInput = ref(null)
let iti = null

// State du formulaire
const form = reactive({
    nom: '',
    email: '',
    tel: '',
    message: ''
})

const loading = ref(false)

onMounted(() => {
    if (phoneInput.value && $intlTelInput) {
        iti = $intlTelInput(phoneInput.value, {
            initialCountry: 'tg', // Togo par défaut
            separateDialCode: true,
            useFullscreenPopup: false,
            utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@25.15.0/build/js/utils.js'
        });

        const updatePhone = () => {
            if (iti) {
                form.tel = iti.getNumber();
            }
        };

        phoneInput.value.addEventListener('countrychange', updatePhone);
        phoneInput.value.addEventListener('input', updatePhone);
        phoneInput.value.addEventListener('change', updatePhone);
    }
});

onUnmounted(() => {
    if (iti) {
        iti.destroy();
    }
});

const submitForm = async () => {
    loading.value = true

    // S'assurer de récupérer la valeur finale du numéro de téléphone avant l'envoi
    if (iti) {
        form.tel = iti.getNumber()
        // Fallback absolu : si intl-tel-input retourne vide (par exemple numéro incomplet)
        // on va chercher manuellement la valeur tapée dans le champ HTML
        if (!form.tel && phoneInput.value && phoneInput.value.value) {
            const countryData = iti.getSelectedCountryData();
            const dialCode = countryData ? '+' + countryData.dialCode : '';
            form.tel = dialCode + ' ' + phoneInput.value.value;
        }
    } else if (phoneInput.value) {
        form.tel = phoneInput.value.value;
    }

    try {
        // Formatter les données pour le backend
        const payload = {
            nom: form.nom.trim(),
            email: form.email.trim(),
            tel: (form.tel || '').trim(),
            message: form.message.trim()
        };

        const response = await $axios.post('/public/contact', payload);
        
        if (response.data.success) {
            // Réinitialisation
            Object.keys(form).forEach(key => {
                form[key] = ''
            })
            toastr.success('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.')
        } else {
            toastr.error('Une erreur est survenue lors de l\'envoi du message.');
        }
    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        toastr.error('Erreur: Impossible de joindre le serveur. Veuillez vérifier vos informations.');
    } finally {
        loading.value = false
    }
}
</script>

<style>
.iti {
  width: 100%;
}
</style>
