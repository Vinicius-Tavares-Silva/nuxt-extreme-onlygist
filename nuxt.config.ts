// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-primevue',
    '@nuxtjs/supabase',
  ],

  css: ['primeicons/primeicons.css'],

  imports: {
    dirs: ['./composables/useMarkdown', './composables/useServices'],
  },

  supabase: {
    redirect: false
  },

  runtimeConfig: {
    public: {
      nodeEnv: process.env.NODE_ENV,
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      siteUrl: process.env.SITE_URL,
    },
  },

  googleFonts: {
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Inter: [300, 500, 800],
    },
  },

  primevue: {
    options: { unstyled: true },
    importPT: {
      as: 'lara',
      from: path.resolve(__dirname, './assets/presets/lara/'),
    }
  }

})
