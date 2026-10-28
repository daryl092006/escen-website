<template>
  <footer class="bg-[#0a0e1a] text-white">

    <!-- ===== CORPS PRINCIPAL ===== -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

        <!-- ===== COLONNE 1 : Identité ===== -->
        <div class="sm:col-span-2 lg:col-span-4 flex flex-col h-full">
          <div class="space-y-6">
            <!-- Logo (ajustement de la marge) -->
            <NuxtLink to="/" class="inline-block">
              <div class="pb-2 inline-block -mt-4">
                <!-- Logo unique (Mobile & PC) avec marges négatives pour compenser l'espace vide -->
                <WebsiteLogo light context="footer" />
              </div>
            </NuxtLink>

            <!-- Nom complet -->
            <div>
              <p class="text-gray-300 text-sm leading-relaxed">
                L'ESCEN forme les leaders de demain aux enjeux de l'économie numérique.
                Une école d'excellence tournée vers le digital , l'innovation et l'employabilité.
              </p>
            </div>
          </div>

          <!-- Réseaux sociaux -->
          <div class="mt-6 lg:mt-auto pt-6">
            <p class="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-3">
              Suivez-nous
            </p>

            <div class="flex items-center gap-2">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                :aria-label="social.name"
                target="_blank"
                rel="noopener noreferrer"
                class="w-9 h-9 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center transition-all duration-300 group"
                :class="social.hoverClass"
              >
                <svg
                  class="w-4 h-4 text-gray-300 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path :d="social.path" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- ===== COLONNE 2 : Navigation ===== -->
        <div class="sm:col-span-1 lg:col-span-2">
          <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase mb-5 pb-2 border-b border-white/8">Navigation</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <NuxtLink :to="link.href"
                class="text-gray-300 hover:text-[#01b4d5] transition-colors duration-200 text-sm flex items-center gap-2 group">
                <svg class="w-3 h-3 text-[#01b4d5]/50 group-hover:text-[#01b4d5] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- ===== COLONNE 3 : Formations ===== -->
        <div class="sm:col-span-1 lg:col-span-2">
          <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase mb-5 pb-2 border-b border-white/8">Formations</h3>
          <ul class="space-y-3">
            <li v-for="f in formations" :key="f.name">
              <NuxtLink :to="f.href"
                class="text-gray-300 hover:text-[#01b4d5] transition-colors duration-200 text-sm flex items-center gap-2 group">
                <svg class="w-3 h-3 text-[#01b4d5]/50 group-hover:text-[#01b4d5] transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
                {{ f.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- ===== COLONNE 4 : Contact ===== -->
        <div class="sm:col-span-2 lg:col-span-4 flex flex-col h-full">
          <div>
            <h3 class="text-xs font-bold tracking-widest text-[#01b4d5] uppercase mb-5 pb-2 border-b border-white/8">Contact</h3>
            <div class="space-y-4">
              <a href="mailto:hello@escen.university"
                 class="flex items-start gap-3 group">
                <div class="w-8 h-8 rounded-lg bg-[#01b4d5]/10 border border-[#01b4d5]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] transition-all duration-200">
                  <svg class="w-3.5 h-3.5 text-[#01b4d5] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Email</p>
                  <p class="text-sm text-gray-200 group-hover:text-[#01b4d5] transition-colors">hello@escen.university</p>
                </div>
              </a>

              <a href="tel:+22898012727"
                 class="flex items-start gap-3 group">
                <div class="w-8 h-8 rounded-lg bg-[#01b4d5]/10 border border-[#01b4d5]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#01b4d5] transition-all duration-200">
                  <svg class="w-3.5 h-3.5 text-[#01b4d5] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Téléphone</p>
                  <p class="text-sm text-gray-200 group-hover:text-[#01b4d5] transition-colors">+228 98 01 27 27</p>
                </div>
              </a>

              <div class="flex items-start gap-3">
                <div class="w-8 h-8 rounded-lg bg-[#01b4d5]/10 border border-[#01b4d5]/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-3.5 h-3.5 text-[#01b4d5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-[10px] text-gray-500 uppercase tracking-wider mb-0.5">Adresse</p>
                  <p class="text-sm text-gray-200 leading-relaxed">Hountigomé, Lomé — Togo</p>
                </div>
              </div>

              <!-- Boutons d'action -->
              <div class="pt-4 flex flex-wrap items-center gap-3">
                <NuxtLink to="/contact"
                  class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#01b4d5] hover:bg-[#019fbf] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#01b4d5]/20">
                  Nous contacter
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </NuxtLink>

                <NuxtLink
                  to="https://www.whatsapp.com/channel/0029VaOuIP44o7qULjvzTe2K"
                  target="_blank"
                  class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#01b4d5] hover:bg-[#019fbf] text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-[#01b4d5]/20 whitespace-nowrap"
                >
                  S'abonner à la chaîne WhatsApp
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== BARRE INFÉRIEURE ===== -->
    <div class="border-t border-white/10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

        <!-- Copyright -->
        <div class="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <p class="text-gray-400 text-xs">© {{ new Date().getFullYear() }} ESCEN. Tous droits réservés.</p>
          <span class="hidden sm:block text-gray-600">·</span>
          <a href="https://neostart.technology" target="_blank" rel="noopener noreferrer"
             class="text-gray-400 hover:text-[#01b4d5] transition-colors text-xs">
            Développé par Neostart Technology
          </a>
        </div>

        <!-- Liens légaux -->
        <div class="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <NuxtLink v-for="legal in legalLinks" :key="legal.name" :to="legal.href"
            class="text-gray-400 hover:text-[#01b4d5] transition-colors text-xs">
            {{ legal.name }}
          </NuxtLink>
        </div>

      </div>
    </div>

  <NuxtLink to="/brochures" class="block px-6 py-4 underline">Brochures ESCEN</NuxtLink></footer>
</template>

<script setup>
const socialLinks = [
  { name: 'Facebook',  hoverClass: 'hover:bg-[#1877f2] hover:border-[#1877f2]', url: 'https://www.facebook.com/escenofficiel?mibextid=ZbWKwL', path: 'M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5a4 4 0 0 1 4.3-4.4c1 0 2 .1 2.2.1v2.6h-1.5c-1.2 0-1.5.8-1.5 1.5V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z' },
  { name: 'Instagram', hoverClass: 'hover:bg-[#E1306C] hover:border-[#E1306C]', url: 'https://www.instagram.com/escenofficiel/', path: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm6.5-2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 18.5 5z' },
  { name: 'LinkedIn',  hoverClass: 'hover:bg-[#0a66c2] hover:border-[#0a66c2]', url: 'https://www.linkedin.com/company/escenofficiel/', path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zm7 0h3.8v1.7h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.8V21h-4v-5.6c0-1.3 0-3-2-3s-2.3 1.4-2.3 2.8V21H10z' },
  { name: 'TikTok',    hoverClass: 'hover:bg-[#ff0050] hover:border-[#ff0050]', url: 'https://www.tiktok.com/@escen_university', path: 'M12 2h3a5 5 0 0 0 4 4v3c-1.5 0-3-.5-4-1.2V16a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V2z' },
  { name: 'WhatsApp',  hoverClass: 'hover:bg-[#25D366] hover:border-[#25D366]', url: 'https://api.whatsapp.com/send?phone=22898012727', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' },
]

const quickLinks = [
  { name: 'Accueil', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Nous contacter', href: '/contact' },
  { name: 'Espace étudiant', href: '/connexion' },
]

const formations = [
  { name: 'Licence Professionnelle', href: '/formations/licence-professionnelle' },
  { name: 'Master Professionnel',    href: '/formations/master-professionnel' },
  { name: 'Executive Education',     href: '/formations/executive-education' },
  // { name: 'Certificats',             href: '/formations/certificats' },
]

const legalLinks = [
  { name: 'Mentions légales',   href: '/mentions-legales' },
  { name: 'Confidentialité',    href: '/confidentialite' },
  { name: 'CGU',                href: '/cgu' },
  { name: 'Cookies',            href: '/politique-cookies' },
]

</script>
