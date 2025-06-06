
<template> 
    <section class=" ">

    
   <div class=" mt-[10%] border bg-[#F8F4EF] rounded-[10px] w-2/4  mx-auto text-sm font-medium flex items-center">
    <div class="bg-[url('public/bg.jpg')] w-[50%] h-130 rounded-l-[10px]" >
        <img class="p-3" src="public/logo.png" alt="">
    </div>

    <div class="grid items-center justify-center  gap-4 p-10">
    <div class=" w-full ">
      <h1 class="text-2xl">
  {{ isLogin ? 'Login with email' : 'Register with email' }}
</h1>
    </div>
    <form
  @submit.prevent="isLogin ? login() : register()"
  class="grid mx-auto"
>
  <label for="email">Enter your email:</label>
  <input
    class="border h-10 w-80 rounded-xl px-4"
    v-model="email"
    type="email"
    id="email"
    name="email"
    required
  />

  <label class="mt-2" for="password">Password:</label>
  <input
    class="border h-10 rounded-xl px-4"
    v-model="password"
    type="password"
    id="password"
    name="password"
    required
  />

  <!-- Username only for Register -->
  <label
    v-if="!isLogin"
    class="mt-2"
    for="username"
    >Username:</label
  >
  <input
    v-if="!isLogin"
    class="border h-10 w-80 rounded-xl px-4"
    v-model="username"
    type="text"
    id="username"
    name="username"
  />

  <input
    class="border mt-6 hover:bg-[#55432c] cursor-pointer rounded-lg w-4/5 mx-auto p-2"
    :value="isLogin ? 'Login' : 'Register'"
    type="submit"
  />

  <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>

  <p class="mt-4 text-center text-sm text-gray-600">
    <span v-if="!isLogin">
      Already have an account?
      <button
        @click="isLogin = true"
        type="button"
        class="text-[#d1964e] hover:underline"
      >
        Log in
      </button>
    </span>
    <span v-else>
      Don't have an account?
      <button
        @click="isLogin = false"
        type="button"
        class="text-[#d1964e] hover:underline"
      >
        Register
      </button>
    </span>
  </p>
</form>

</div>
  </div>
</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

// Declaring variables
const auth = getAuth();
const router = useRouter();
const username = ref('');
const email = ref('');
const password = ref('');
const error = ref('');
const db = getFirestore();
const isLogin = ref(false);

// Helper function to handle role-based redirection
async function handleRoleBasedRedirect(uid: string) {
  const role = await fetchUserRole(uid);
  if (role === 'admin') {
    router.replace('/admindashboard');
  } else {
    router.replace('/userdashboard');
  }
}

// Register function
async function register() {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Save user info to Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      username: username.value,
      role: 'user', // default role
    });

    // Redirect based on role
    await handleRoleBasedRedirect(user.uid);
  } catch (err: any) {
    error.value = err.message;
  }
}

// Login function
async function login() {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;

    // Redirect based on role
    await handleRoleBasedRedirect(user.uid);
  } catch (err: any) {
    error.value = err.message;
  }
}

// Fetch user role from Firestore
async function fetchUserRole(uid: string): Promise<string | null> {
  try {
    const userDocRef = doc(db, 'users', uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      return userData.role || null;
    } else {
      console.warn('User document does not exist.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user role:', error);
    return null;
  }
}
</script>