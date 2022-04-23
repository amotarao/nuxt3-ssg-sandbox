import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
  baseURL: process.env.BASE_URL || '/',
  modules: ['@nuxtjs/tailwindcss'],
});
