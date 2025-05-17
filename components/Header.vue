<template>

    <section class="py-6 flex justify-between items-center max-w-[90%] mx-auto">

    <img src="public/logo.png" alt="">

    <div class="text-white font-semibold text-xl flex gap-4">
    <a href="#">home</a>
    <a href="#">Locations</a>
    <a href="contact us"> Contact us</a>
</div>

   <div>
    <button @click="navigateToLogin"  class="text-white bg-[#d1964e] px-6 py-2 rounded-full hover:cursor-pointer hover:bg-[#866a47]"> Log in</button>
   </div>
</section>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function navigateToLogin() {
  router.push('/login');
}
</script>