<template>

    <section class="py-6 flex justify-between items-center max-w-[90%] mx-auto">

    <img src="public/logo.png" alt="">

    <div class="text-white font-semibold text-xl flex gap-4">
      <router-link to="/" class="text-white hover:underline">Home</router-link>
      <router-link to="/UserDashboard" class="text-white hover:underline">Dashboard</router-link>
      <router-link to="#" class="text-white hover:underline">Contact Us</router-link>
    </div>   

   <div>
    <button @click="handleAuthAction"  class="text-white bg-[#d1964e] px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#866a47]"> 
      {{ user ? 'Log out' : 'Log in' }}
    </button>
   </div>
  </section>

   <div>
    <p v-if="user" class="text-white text-center font-semibold text-xl">Welcome, {{ username || 'Loading...'  }}</p>
   </div>

</template>

<script setup lang="ts">
import {  ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import type { User } from 'firebase/auth'; 
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const auth = getAuth();
const db = getFirestore();
const user = ref<User | null>(null);
const username = ref('');
const router = useRouter();


onAuthStateChanged(auth, async (currentUser) => {
  if (currentUser) {
    user.value = currentUser;

    // Query Firestore for user's document by uid
    const docRef = doc(db, 'users', currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      username.value = userData.username || '';
    }
  } else {
    user.value = null;
    username.value = '';
  }
});

function handleAuthAction() {
  if (user.value) {
    signOut(auth)
      .then(() => {
        user.value = null;
        router.push('/');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  } else {
    router.push('/login');
  }
}
</script>
