import websiteArticleRoutes from './app/generated/public-article-routes.json';
import Aura from '@primevue/themes/aura';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: true,
  srcDir: 'app',
  hooks: {
    'pages:extend'(pages) {
      for (let index = pages.length - 1; index >= 0; index--) {
        const page = pages[index];
        if (page?.path === '/docs' || page?.path?.startsWith('/docs/')) {
          pages.splice(index, 1);
        }
      }
    },
  },
  nitro: {
    preset: "static",
    output: {
      publicDir: 'dist'
    },
    prerender: {
      failOnError: true,
      routes: websiteArticleRoutes,
    },
  },
  
  runtimeConfig: {
    public: {
      metaPixelId: process.env.META_PIXEL_ID || '',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      linkedInPixelId: process.env.LINKEDIN_PIXEL_ID || '9772722',
      googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID || ''
    }
  },
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "ESCEN - École Supérieure de Commerce et d'Économie Numérique",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "L'ESCEN forme les leaders de demain aux enjeux du commerce et de l'économie numérique.",
        },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/logo-escen.png" }],
    },
  },

  css: ["~/assets/css/main.css", "intl-tel-input/build/css/intlTelInput.css"],
  plugins: [{ src: "~/plugins/intl-tel-input.client.js", mode: "client" }],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@primevue/nuxt-module",
    "@nuxtjs/sitemap"
  ],

  site: {
    url: "https://escen.university",
    name: 'ESCEN University'
  },

  // ESCEN connected sitemap: public information only.
  sitemap: { urls: websiteArticleRoutes, exclude: ['/docs/**', '/candidat/**', '/connexion', '/inscription', '/preparation-inscription/**', '/verif/**'] },

  colorMode: {
    preference: 'light',
    fallback: 'light'
  },

  primevue: {
    components: {
      prefix: 'Prime',
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'none',
        }
      }
    }
  },

  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
    optimizeDeps: {
      include: ["intl-tel-input"],
    },
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["node"]
      }
    }
  }
});
