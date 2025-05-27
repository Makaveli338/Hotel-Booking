import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr:false,
  plugins: ['~/plugins/firebase.js'],
  css: ['~/assets/css/main.css'],
  modules:[ '@pinia/nuxt'],
  vuefire: {
    
  },
  config: {
    apiKey: "AIzaSyAt0xRoYnJah3qKcPNF8d4XSiD-hxAi_ws",
  authDomain: "hotel-booking-9cfa5.firebaseapp.com",
  projectId: "hotel-booking-9cfa5",
  storageBucket: "hotel-booking-9cfa5.firebasestorage.app",
  messagingSenderId: "366802326001",
  appId: "1:366802326001:web:9b12cc29fa242efc013450"
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});