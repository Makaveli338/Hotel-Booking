import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyAt0xRoYnJah3qKcPNF8d4XSiD-hxAi_ws",
  authDomain: "hotel-booking-9cfa5.firebaseapp.com",
  projectId: "hotel-booking-9cfa5",
  storageBucket: "hotel-booking-9cfa5.firebasestorage.app",
  messagingSenderId: "366802326001",
  appId: "1:366802326001:web:9b12cc29fa242efc013450"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  return {
    provide: {
      firebase: app,
      db,
      auth
    }
  };
});